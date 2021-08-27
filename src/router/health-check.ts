import { Router, Request, Response } from 'express';

const healthCheckRouter = Router();
healthCheckRouter.get('/', async (req: Request, res: Response) => {

  const { port } = req.app.locals.config;
  res.send(`Application running at: ${port} `);
});

export default healthCheckRouter;
