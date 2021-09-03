import { SearchResponse } from '../../src/business/models/Search'

const successResponse: SearchResponse = {
    artists: {
        href: "https://api.spotify.com/v1/search?query=the+weekend&type=artist&offset=0&limit=20",
        items: [
            {
                external_urls: {
                    spotify: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                },
                followers: {
                    href: null,
                    total: 35960544
                },
                genres: [
                    "canadian contemporary r&b",
                    "canadian pop",
                    "pop"
                ],
                href: "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
                id: "1Xyo4u8uXC1ZmMpatF05PJ",
                images: [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab6761610000e5eb94fbdb362091111a47db337d",
                        "width": 640
                    }
                ],
                name: "The Weeknd",
                popularity: 97,
                type: "artist",
                uri: "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
            }
        ],
        limit: 20,
        next: "https://api.spotify.com/v1/search?query=the+weekend&type=artist&offset=20&limit=20",
        offset: 0,
        previous: null,
        total: 1
    }
}

export default {
    successResponse
}