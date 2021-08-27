import getArtistAlbumsRule from "../../src/business/rules/get-artist-albums";
import * as getArtistAlbums from "../../src/services/get-artist-albums";
import mocks from "../mocks/get-artist-albums";

describe('Rule get artist albums', () => {

    const id = '1Xyo4u8uXC1ZmMpatF05PJ'

    it('should return a error validation', async () => {
        
        let error = new Error('Informe o parâmetro id') // o ideal é não usar strings para comparar
        await expect(getArtistAlbumsRule(' ')).rejects.toThrowError(error)
    })

    it('should return an artist albums with success', async () => {

        jest.spyOn(getArtistAlbums, 'default').mockResolvedValue(mocks.successResponse)

        let result = await getArtistAlbumsRule(id)
        expect(result).toEqual(mocks.successResponse)
    })

    it('should return an error invalid artist', async () => {

        let error = new Error()

        jest.spyOn(getArtistAlbums, 'default').mockRejectedValue(error)
        await expect(getArtistAlbumsRule(id)).rejects.toThrowError(error)
    })
})