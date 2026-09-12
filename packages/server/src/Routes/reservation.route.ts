import express from 'express';
import { createReservation, removeReservation } from '../Controllers/reservation.controller';

const router = express.Router();

router.post('/create', createReservation);
router.delete('/:reservation_id', removeReservation);

export default router;
