import { Router } from 'express';
import healthCheckRouter from './health-check';
import spotifyRouter from './spotify';

export default Router().use(healthCheckRouter).use(spotifyRouter);