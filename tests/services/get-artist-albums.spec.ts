import axios from 'axios'
import getArtistAlbums from '../../src/services/get-artist-albums'

jest.mock('../../src/config');

describe('Service get artist album - Units tests', () => {

    const id = '1Xyo4u8uXC1ZmMpatF05PJ'

    jest.spyOn(axios, 'get').mockResolvedValue({
        data: {
            items: [
                {
                    album_type: 'album',
                    artists: [
                        {
                            id: id
                        }
                    ]
                } 
            ]
        }
    })

    it('should return a valid object', async () => {
        const result = await getArtistAlbums(id)
        expect(result.items[0].album_type).toEqual('album')
        expect(result.items[0].artists[0].id).toEqual(id)
    })

    it('should return an error', async () => {       
        const error = new Error()
        jest.spyOn(axios, 'get').mockRejectedValue(error)
        await expect(getArtistAlbums(id)).rejects.toThrowError(error);       
    })
})