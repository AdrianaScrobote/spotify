import axios from 'axios'
import createConfig from '../config';

export default async function postAuthorizeSpotify(): Promise<any> {

  try{
    const config = createConfig()
    
    const body = 'grant_type=client_credentials'

    const response = await axios.post(
      config.spotify.urlToken,
      body,
      {
        auth: {
          username: `${config.spotify.clientId}`,
          password: `${config.spotify.clientSecret}`
        },
      }
    )
    return response.data
  } catch(error: any) {
    throw error
  }
};
