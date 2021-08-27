//import { ServiceError } from '@pub-libs/civ-errors-lib';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from "express";

export default (getArtistAlbumsRule: any) =>
  async (req: Request, res: Response, next: NextFunction) => {

    try {
      const { id } = req.params;

      const artistData = await getArtistAlbumsRule(id);
      if (!artistData) {
        res.status(StatusCodes.NO_CONTENT).send();
      } else {
        res.status(StatusCodes.OK).json(artistData);
      }

      console.log('res', res);
      
      next();
    } catch (error) {
      const errorMessage = `ERRO::: Na rota /spotify/artist-albums`;
      next(new Error(errorMessage));
    }
  };
