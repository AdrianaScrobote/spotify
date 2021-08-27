/* eslint-disable no-console */
import * as dotenv from 'dotenv';
dotenv.config(); //verificar
import * as server from './src';

const port = process.env.PORT ?? 3333;

server.start(port).then(() => console.log(`Server up at port ${port}`));

process.on('uncaughtException', (err) => {
  console.error('uncaughtException >>>> ', err);
});

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection >>>> ', err);
});
