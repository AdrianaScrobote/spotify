import errorHandler from "../src/error-handler";
import { Request, Response } from 'express';
import { RequestSpy, ResponseSpy } from './doubles/spys/express-spy';

describe('Test error handler', () => {

    const makeSut = () => {
        const request = (new RequestSpy() as unknown) as Request;
        const response = (new ResponseSpy() as unknown) as Response;
        const next = jest.fn();
        const router = 'qualquerRota'
    
        return {
          router,
          request,
          response,
          next,
        };
    }

    it('should create error', async() => {
        const { request, response, next, router } = makeSut();
        const result = await errorHandler('error qualquer', request, response, next)
        expect(result).toBeUndefined()
    })
})