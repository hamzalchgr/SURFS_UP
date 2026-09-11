import type { Request, Response } from "express";
import { pool } from "../config/db";

export const getCamps = async (req: Request, res: Response) => {
   try {
      const result = await pool.query(
         `SELECT camp_id, start_date, end_date FROM camps ORDER BY start_date ASC`
      );

      const camps = result.rows;

      return res.status(200).json({
         success: true,
         camps
      })
   } catch (error) {
      console.error(error);
      return res.status(500).json({
         error: 'Internal server error...'
      })
   }
}

export const getTeam = async (req: Request, res: Response) => {
   try {
      const result = await pool.query(
         `SELECT * FROM team_members`
      );

      const team = result.rows;

      return res.status(200).json({
         success: true,
         team
      })
   } catch (error) {
      console.error(error);
      return res.status(500).json({
         error: 'Internal server error...'
      })
   }
}