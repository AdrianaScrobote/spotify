//import { ServiceError } from '@pub-libs/civ-errors-lib';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from "express";

export default (postAuthorizeRule: any) =>
  async (req: Request, res: Response, next: NextFunction) => {

    try {
      const authorize = await postAuthorizeRule();
      if (!authorize) {
        res.status(StatusCodes.NO_CONTENT).send();
      } else {
        res.status(StatusCodes.OK).json(authorize);
      }
      next();
    } catch (error) {
      const errorMessage = `ERRO::: Na rota /spotify/authorize`;
      next(new Error(errorMessage));
    }
  };
