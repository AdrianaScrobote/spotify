//import { ServiceError } from '@pub-libs/civ-errors-lib';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from "express";

export default (getArtistRule: any) =>
  async (req: Request, res: Response, next: NextFunction) => {

    try {
      const { id } = req.params;

      const artistData = await getArtistRule(id);
      if (!artistData) {
        res.status(StatusCodes.NO_CONTENT).send();
      } else {
        res.status(StatusCodes.OK).json(artistData);
      }
      
      next();
    } catch (error) {
      const errorMessage = `ERRO::: Na rota /spotify/artist`;
      next(new Error(errorMessage));
    }
  };
