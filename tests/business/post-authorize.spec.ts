import postAuthorizeRule from "../../src/business/rules/post-authorize";
import * as postAuthorizeSpotify from "../../src/services/post-authorize-spotify";
import mocks from '../mocks/post-authorize'

describe('Post Authorize Rule', () => {

    it('should return a valid object', async () => {

        jest.spyOn(postAuthorizeSpotify, 'default').mockResolvedValue(mocks.successResponse)

        const result = await postAuthorizeRule()
        expect(result).toEqual(mocks.successResponse)
    })

    it('should return an error', async () => {
        const error = new Error()
        jest.spyOn(postAuthorizeSpotify, 'default').mockRejectedValue(error)
        await expect(postAuthorizeRule()).rejects.toThrowError(error)
    })
})

