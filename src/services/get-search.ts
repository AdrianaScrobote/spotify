import axios from 'axios'
import createConfig from '../config';

export default function getSearch(type: String, search: String): any {
  const config = createConfig();    

  let params = {'type': type, 'q': search}
  
  return axios
    .get(
      config.spotify.url + 'search',
      {params: params, headers: {'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN_AUTH}`}}
    )
    .then((response: any) => {
          return response.data
    })
    .catch((error: any) => {
      throw error
    })
};
