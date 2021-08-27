import postAuthorizeSpotify from '../../src/services/post-authorize-spotify'
import axios from 'axios'

jest.mock('../../src/config');

describe('Service post authorize spotify', () => {

    jest.spyOn(axios, 'post').mockResolvedValue({
        data: {
            access_token: 'token',
            token_type: "Bearer",
            expires_in: 3600
        }
    })

    it('should return a valid object', async () => {
        const result = await postAuthorizeSpotify()
        expect(result).toMatchObject({token_type: 'Bearer'})
        expect(result).toHaveProperty('access_token')
        expect(result).toHaveProperty('expires_in') 
    })

    it('should return an error', async () => {       
        const error = new Error()
        jest.spyOn(axios, 'post').mockRejectedValue(error)
        await expect(postAuthorizeSpotify()).rejects.toThrowError(error);       
    })
})