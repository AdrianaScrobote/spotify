import getSearch from "../../src/router/spotify/get-search";
import generateExpressMock from "../doubles/spys/express-spy";
import mocks from '../mocks/get-search';

const { successResponse } = mocks;

describe('test description', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const makeSut = () => {

        const {req, res, next} = generateExpressMock({
            headers: {},
            query: { type: 'artist', search: 'eminem' },
        })
        const sut = getSearch;
    
        return {
          sut,
          req,
          res,
          next,
        };
    };

    it('should successfully return with 200 if request is OK', async () => {
        const { sut, req, res, next } = makeSut();
    
        const getSearchRule = () => successResponse;

        await sut(getSearchRule)(req, res, next); 
        
        expect(res.statusCode).toBe(200);
        expect(res).toHaveProperty('body');
    });

    it('should successfully return with 204 if search does not exist', async () => {
        const { sut, req, res, next } = makeSut();
    
        const getSearchRule = () => {};
    
        await sut(getSearchRule)(req, res, next); 
        
        expect(res.statusCode).toBe(204);
        expect(res).not.toHaveProperty('body');
    });


    it('should fails if the rule rejects an error', async () => {

        const { sut, req, res, next } = makeSut();
    
        const getSearchRule = () => {throw "error"};
        
        await sut(getSearchRule)(req, res, next); 
        
        const nextResponse = next.mock.results.pop()?.value;

        expect(nextResponse.err).toBeDefined();
        expect(nextResponse.err).toBeInstanceOf(Error);
        expect(nextResponse.err.message).toBe('ERRO::: Na rota /spotify/search');
    });
})