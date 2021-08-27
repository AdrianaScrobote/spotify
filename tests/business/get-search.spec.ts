import getSearchRule from "../../src/business/rules/get-search";
import * as getSearch from '../../src/services/get-search'
import mocks from "../mocks/get-search";


describe('Get Search Rule', () => {

    const type = 'artist'
    const search = 'the weeknd'
    
    it('should return an validation error - invalid type', async () => {
        const error = new Error()
        expect(getSearchRule('InvalidType', search)).rejects.toThrowError(error)  
    })

    it('should return an validation error - empty type', async () => {
        const error = new Error()
        expect(getSearchRule('', search)).rejects.toThrowError(error)  
    })

    it('should return an validation error - empty search', async () => {      
        const error = new Error()
        expect(getSearchRule(type, '')).rejects.toThrowError(error)
    })

    it('should return a valid object', async () => {  
        jest.spyOn(getSearch, 'default').mockResolvedValue(mocks.successResponse)

        let result = await getSearchRule(type, search)
        await expect(result).toEqual(mocks.successResponse)
    })

    it('should return an error', async () => {
        jest.spyOn(getSearch, 'default').mockRejectedValue(new Error())
        await expect(getSearchRule(type, search)).rejects.toThrow(new Error())
    })
})