import router from '../src/router';
import { Request, Response } from 'express';
import { RequestSpy, ResponseSpy } from './doubles/spys/express-spy';

jest.mock('express', () => {
  const requestHandlerMock = () => {};
  requestHandlerMock.get = jest.fn();
  requestHandlerMock.post = jest.fn();
  requestHandlerMock.put = jest.fn();
  requestHandlerMock.use = jest.fn().mockReturnValue(requestHandlerMock);

  return {
    Router: () => requestHandlerMock,
  };
});

describe('Routes unit smoke test', () => {
  const makeSut = () => {
    const request = (new RequestSpy() as unknown) as Request;
    const response = (new ResponseSpy() as unknown) as Response;
    const next = jest.fn();

    return {
      router,
      request,
      response,
      next,
    };
  };

  it('should create routes', async () => {
    const { request, response, next, router } = makeSut();

    const result = router(request, response, next);    
    expect(result).toBeUndefined();
  });
});
