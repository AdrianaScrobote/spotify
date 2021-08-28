import getArtist from "../../src/router/spotify/get-artist";
import generateExpressMock from "../doubles/spys/express-spy";
import mocks from '../mocks/get-artist'

async function testMiddleware(ruleResponse: any){
    const {req, res, next} = generateExpressMock({
        headers: {},
        params: { id: '12345' },
    })

    let err;
    const getArtistMiddleware = getArtist(() => ruleResponse)
    
    try{
        await getArtistMiddleware(req, res, next);
    } catch(error){
        err = error;
    }
    
    expect(err).toBeUndefined();
    const nextResponse = next.mock.results.pop()?.value;
    return nextResponse;
}

const { successResponse } = mocks;

describe('test description', () => {
    it('should successfully return with 200 if request is OK', async () => {
        const { body, status, err } = await testMiddleware(Promise.resolve(successResponse))
        
        expect(err).toBeUndefined();
        expect(body).toBeDefined();
        expect(status).toBe(200);
    })

    it('should successfully return with 204 if artist does not exist', async () => {
        const { body, status, err } = await testMiddleware(Promise.resolve())
        
        expect(err).toBeTruthy();
        expect(body).toBeUndefined();
        expect(status).toBe(204);
    })

    it('should fails if the rule rejects an error', async () => {
        const errorMessage = 'Test error message';
        const { err } = await testMiddleware(Promise.reject(new Error(errorMessage)));
    
        expect(err).toBeDefined();
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('ERRO::: Na rota /spotify/artist');
    });
    
})