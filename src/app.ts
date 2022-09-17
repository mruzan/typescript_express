import express, {Express, Request, Response } from 'express';
const dotenv = require("dotenv");

import router from './routes/index';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api/', router);

app.get("/", (req: Request, res: Response) => {
   res.send("Express + TypeScript Track Project");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

