//import { ServiceError } from '@pub-libs/civ-errors-lib';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from "express";

export default (getSearchRule: any) =>
  async (req: Request, res: Response, next: NextFunction) => {

    const { type } = req.query;
    const { search } = req.query;

    try {
      const searchData = await getSearchRule(type, search);
      if (!searchData) {
        res.status(StatusCodes.NO_CONTENT).send();
      } else {
        res.status(StatusCodes.OK).json(searchData);
      }
      next();
    } catch (error) {
      const errorMessage = `ERRO::: Na rota /spotify/search`;
      next(new Error(errorMessage));
    }
  };
