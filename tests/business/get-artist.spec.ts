import getArtistRule from "../../src/business/rules/get-artist";
import * as getArtist from "../../src/services/get-artist";
import mocks from '../mocks/get-artist'

describe('Rule get artist', () => {

    const id = '1Xyo4u8uXC1ZmMpatF05PJ'

    it('should return a error validation', async () => {
        
        let error = new Error('Informe o parâmetro id') // o ideal é não usar strings para comparar
        await expect(getArtistRule(' ')).rejects.toThrowError(error)
    })

    it('should return an artist with success', async () => {

        jest.spyOn(getArtist, 'default').mockResolvedValue(mocks.successResponse)

        let result = await getArtistRule(id)
        expect(result).toEqual(mocks.successResponse)
    })

    it('should return an error invalid artist', async () => {

        let error = new Error()

        jest.spyOn(getArtist, 'default').mockRejectedValue(error)
        await expect(getArtistRule(id)).rejects.toThrowError(error)
    })
})

