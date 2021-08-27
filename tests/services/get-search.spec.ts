import getSearch from '../../src/services/get-search'
import axios from 'axios'

jest.mock('../../src/config');

describe('Service get search - Units tests', () => {
    it('should return a valid object', async () => {      
        jest.spyOn(axios, 'get').mockResolvedValue({data: {
            artist: 'eminem'
        }})

        const result = await getSearch('artist', 'eminem')
        expect(result.artist).toEqual('eminem')
    })

    it('should return an error', async () => {       
        const error = new Error()
        jest.spyOn(axios, 'get').mockRejectedValue(error)
        await expect(getSearch('artist', 'eminem')).rejects.toThrowError(error);       
    })
})