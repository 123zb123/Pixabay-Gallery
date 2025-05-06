import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { status } from 'http-status';
import imagesRoutes from './routers/images.router';

dotenv.config();

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '';

const app = express();

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res
        .status(status.OK)
        .send(`Welcome to the Image Processing API😍! (user from ${req.ip})`);
});

app.get('*', (req: Request, res: Response) => {
    res
        .status(status.NOT_FOUND)
        .send('API endpoint Not Found!');
});

app.use('/api/images', imagesRoutes);

export default app;