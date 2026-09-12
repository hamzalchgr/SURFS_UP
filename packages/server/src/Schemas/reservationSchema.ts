import z from 'zod';

export const reservationSchema = z.object({
   name: z
      .string()
      .trim()
      .min(1, { message: 'Name is required.' })
      .max(50, { message: 'Name is too long...' }),

   email: z
      .string()
      .trim()
      .toLowerCase()
      .email({ message: 'Please enter a valid email.' }),

   camp_date: z.string().min(1, { message: 'Camp date is required.' }),

   room: z.enum(['Shared room', 'Private room', 'Couple package'], {
      message: 'Please select a valid room.',
   }),

   note: z
      .string()
      .trim()
      .max(1000, { message: 'Note is too long.' })
      .optional(),
});
