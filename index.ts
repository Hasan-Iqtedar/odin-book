import express, { Express, Request, Response } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express Typescript");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running\n");
});
