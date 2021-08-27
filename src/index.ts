import express, { json } from "express";
import router from './router';
import appConfig from './config';
import errorHandler from "./error-handler";

const app = express();

const config = appConfig();
app.locals.config = config;

app.use(router);
app.use(errorHandler)

export function start(port: number | string): Promise<void> {
  
  return new Promise<void>((resolve) => {
    app.listen(port, () => resolve());
  });
}