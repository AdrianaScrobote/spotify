import { AuthorizeResponse } from "../../src/business/models/Authorize";

const successResponse: AuthorizeResponse = {
    access_token: 'exemploToken',
    token_type: 'Bearer',
    expires_in: '3600'
}

export default {
    successResponse
}