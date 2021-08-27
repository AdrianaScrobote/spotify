/* eslint-disable max-classes-per-file */
import { Request, Response } from 'express';

type JsonObject = { [key: string]: string };

export class ResponseSpy {
  statusCode?: number;

  body?: any;

  public locals = {
    logger: {
      info: jest.fn(),
      error: jest.fn(),
      createContext: jest.fn(),
    },
  };

  status(statusCode: number) {
    this.statusCode = statusCode;
    return this;
  }

  json(body: any) {
    this.body = body;
    return this;
  }
}
export class RequestSpy {
  id?: string;

  headers: { [key: string]: string };

  params: { [key: string]: string };

  query: { [key: string]: string };

  public app = {
    locals: {
      config: {
        application: {
          name: '',
          version: '',
        },
      },
    },
  };

  constructor(headers: JsonObject = {}, params: JsonObject = {}, query: JsonObject = {}) {
    this.headers = headers;
    this.params = params;
    this.query = query;
  }

  get(name: string): string | undefined {
    return this.headers[name];
  }
}

type MockGenerateOptions = {
  headers?: JsonObject;
  params?: JsonObject;
  locals?: JsonObject;
  query?: JsonObject;
};

export default function generateExpressMock({ headers, params, locals, query }: MockGenerateOptions) {
  const req = new RequestSpy(headers, params, query);

  const res = new ResponseSpy();
  res.locals = { ...res.locals, ...locals };

  const next = jest.fn((nextErr: any) => {
    return {
      body: res.body,
      status: res.statusCode,
      err: nextErr,
    };
  });

  return {
    next,
    res: (res as unknown) as Response,
    req: (req as unknown) as Request,
  };
}
