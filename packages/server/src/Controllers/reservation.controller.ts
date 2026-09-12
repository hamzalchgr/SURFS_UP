import type { Request, Response } from "express";
import { idSchema, reservationSchema } from "../Schemas/reservationSchema";
import { pool } from "../config/db";

export const createReservation = async (req: Request, res: Response) => {
   const validationResult = reservationSchema.safeParse(req.body);

   if (!validationResult.success) {
      return res.status(400).json({
         success: false,
         error: validationResult.error.flatten().fieldErrors,
      });
   }

   const { name, email, camp_date, room, note } = validationResult.data;

   const client = await pool.connect();

   try {
      await client.query('BEGIN');

      const campResult = await client.query(
         `
            SELECT 
               camp_id, 
               start_date, 
               end_date 
            FROM camps
            WHERE start_date = $1
         `,
         [camp_date]
      );

      if (campResult.rowCount === 0) {
         await client.query('ROLLBACK');

         return res.status(404).json({
            success: false,
            error: 'No camp available for this date.',
         });
      }

      const camp = campResult.rows[0];

      const roomResult = await client.query(
         `
            SELECT 
               room_id, 
               camp_id, 
               room_type, 
               price_eur, 
               total_slots, 
               booked_slots 
            FROM camp_rooms 
            WHERE camp_id = $1 
               AND room_type = $2
            FOR UPDATE
         `,
         [camp.camp_id, room]
      );

      if (roomResult.rowCount === 0) {
         await client.query('ROLLBACK');

         return res.status(404).json({
            success: false,
            error: 'The selected room is not available for this camp.',
         });
      }

      const selectedRoom = roomResult.rows[0];

      if (selectedRoom.booked_slots >= selectedRoom.total_slots) {
         await client.query('ROLLBACK');

         return res.status(409).json({
            success: false,
            error: 'The selected room is fully booked.',
         });
      }

      const camperResult = await client.query(
         `
            SELECT camper_id, name, email FROM campers WHERE email = $1
         `,
         [email]
      );

      let camperID: number;

      if (camperResult.rowCount === 0) {
         const newCamper = await client.query(
            `
               INSERT INTO campers (name, email) VALUES ($1, $2)
               ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name
               RETURNING camper_id
            `,
            [name, email]
         );

         camperID = newCamper.rows[0].camper_id;
      } else {
         camperID = camperResult.rows[0].camper_id;
      }

      const newReservation = await client.query(
         `
            INSERT INTO reservations (
               room_id, camper_id, status, amount_due, note
            ) 
            VALUES (
               $1, $2, 'Pending', $3, $4
            ) RETURNING reservation_id, status, amount_due, created_at
         `,
         [selectedRoom.room_id, camperID, selectedRoom.price_eur, note ?? null]
      );

      await client.query(
         `
            UPDATE camp_rooms 
            SET booked_slots = booked_slots + 1
            WHERE room_id = $1
         `, [selectedRoom.room_id]
      );

      await client.query('COMMIT');

      return res.status(201).json({
         success: true,
         message: 'Reservation created successfully.',
         reservation: newReservation.rows[0]
      })


   } catch (error) {
      await client.query('ROLLBACK');

      console.error('Reservation error: ', error);

      return res.status(500).json({
         success: false,
         error: 'Failed to create reservation.',
      });
   } finally {
      client.release();
   }
}

export const removeReservation = async (req: Request, res: Response) => {
   const validationResult = idSchema.safeParse(req.params);

   if (!validationResult.success) {
      return res.status(400).json({
         success: false,
         error: validationResult.error.flatten().fieldErrors
      })
   }

   const { reservation_id } = validationResult.data;

   try {

      const deleteResult = await pool.query(`
            DELETE FROM reservations
            WHERE reservation_id = $1 RETURNING *
         `, [reservation_id]);

      if (deleteResult.rowCount === 0) {
         return res.status(404).json({
            success: false,
            error: 'cant find this reservation'
         })
      }
      
      return res.status(200).json({
         success: true,
         message: 'Reservation removed successfully.'
      })
   } catch (error) {
      console.error(error);
      return res.status(500).json({
         success: false,
         error: 'Internal server error ...'
      })
   }
}