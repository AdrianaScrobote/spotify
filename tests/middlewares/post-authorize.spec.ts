import postAuthorize from "../../src/router/spotify/post-authorize";
import generateExpressMock from "../doubles/spys/express-spy";
import mocks from '../mocks/post-authorize';

const { successResponse } = mocks;

describe('test description', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const makeSut = () => {

        const {req, res, next} = generateExpressMock({})
        const sut = postAuthorize;
    
        return {
          sut,
          req,
          res,
          next,
        };
    };

    it('should successfully return with 200 if request is OK', async () => {
        const { sut, req, res, next } = makeSut();
    
        const postAuthorizeRule = () => successResponse;

        await sut(postAuthorizeRule)(req, res, next); 
        
        expect(res.statusCode).toBe(200);
        expect(res).toHaveProperty('body');
    });

    it('should successfully return with 204 if authorize does not exist', async () => {
        const { sut, req, res, next } = makeSut();
    
        const postAuthorizeRule = () => {};
    
        await sut(postAuthorizeRule)(req, res, next); 
        
        expect(res.statusCode).toBe(204);
        expect(res).not.toHaveProperty('body');
    });


    it('should fails if the rule rejects an error', async () => {

        const { sut, req, res, next } = makeSut();
    
        const postAuthorizeRule = () => {throw "error"};
        
        await sut(postAuthorizeRule)(req, res, next); 
        
        const nextResponse = next.mock.results.pop()?.value;

        expect(nextResponse.err).toBeDefined();
        expect(nextResponse.err).toBeInstanceOf(Error);
        expect(nextResponse.err.message).toBe('ERRO::: Na rota /spotify/authorize');
    });
})