import joi from 'joi';
import { name, version } from '../../package.json';

export default joi
  .object({
    NODE_ENV: joi.string().lowercase().valid('local', 'test', 'development', 'production').required(),
    PORT: joi.string().required(),
    APPLICATION_NAME: joi.string().default(name),
    APPLICATION_VERSION: joi.string().default(version),
    SPOTIFY_URL: joi.string().required(),
    SPOTIFY_URL_TOKEN: joi.string().required(),
    SPOTIFY_CLIENT_ID: joi.string().required(),
    SPOTIFY_CLIENT_SECRET: joi.string().required(),
    SPOTIFY_TOKEN_AUTH: joi.string().required()
  })
  .unknown()
  .required();
