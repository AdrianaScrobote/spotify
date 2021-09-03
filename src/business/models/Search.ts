import Image from "./image";

export interface SearchResponse {
    artists: {
        href: string
        items: [
            {
                external_urls: {
                    spotify: string
                }
                followers: {
                    href: string | null,
                    total: number
                }
                genres: string[],
                href: string,
                id: string,
                images: Image[],
                name: string,
                popularity: number,
                type: string,
                uri: string
            }
        ]
        limit: number,
        next: string,
        offset: number,
        previous: number | null,
        total: number
    }
}