import axios from 'axios'
import getArtist from '../../src/services/get-artist' 

jest.mock('../../src/config');

describe('Service get artist - Units tests', () => {

    const id = '1Xyo4u8uXC1ZmMpatF05PJ'

    jest.spyOn(axios, 'get').mockResolvedValue({data: {
        id: id,
        type: 'artist'
    }})

    it('should return a valid object', async () => {
        const result = await getArtist(id)
        expect(result).toHaveProperty('id')
        expect(result.type).toEqual('artist')
    })

    it('should return an error', async () => {       
        const error = new Error()
        jest.spyOn(axios, 'get').mockRejectedValue(error)
        await expect(getArtist(id)).rejects.toThrowError(error);       
    })
})