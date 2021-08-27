import { ArtistAlbumsResponse } from '../../src/business/models/ArtistAlbums'

const successResponse: ArtistAlbumsResponse = {
    items: [
        {
            artists: [
                {
                    id: '1Xyo4u8uXC1ZmMpatF05PJ',
                    type: 'artist'
                }
            ],
            type: 'album'
        }
    ]
}

export default {
    successResponse
}