import express from 'express';
import type { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import campRouter from './Routes/camp.route.ts';


dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/api', campRouter)

app.listen(PORT, () => {
   console.log('Running ...')
})