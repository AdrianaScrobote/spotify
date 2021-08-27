import axios from 'axios'
import createConfig from '../config';

export default async function getArtistAlbums(id: string) {
  try{
    const config = createConfig();    
  
    let response = await axios.get(
        config.spotify.url + 'artists/' + id + '/albums',
        {params: {}, headers: {'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN_AUTH}`}}
      )

    return response.data
  }
  catch(error: any){
    throw error
  }
};
