import express from 'express'
import { getCamps, getTeam } from '../Controllers/camp.controller';

const router = express.Router();

router.get('/camps', getCamps);

router.get('/team', getTeam);

export default router;