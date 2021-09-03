import { ArtistResponse } from "../../src/business/models/Artist";

const successResponse: ArtistResponse = {
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
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb94fbdb362091111a47db337d",
            width: 640
        },
        {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517494fbdb362091111a47db337d",
            width: 320
        },
        {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17894fbdb362091111a47db337d",
            width: 160
        }
    ],
    name: "The Weeknd",
    popularity: 97,
    type: "artist",
    uri: "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
}

export default {
    successResponse
}