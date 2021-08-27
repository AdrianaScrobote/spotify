import postAuthorizeSpotify from "../../services/post-authorize-spotify";

const updateTokenAuthSpotify = (token: string): void => {
  process.env.SPOTIFY_TOKEN_AUTH = token
}

export default async function postAuthorizeRule() {
  try {
    let authorize = await postAuthorizeSpotify();
    
    if(authorize && authorize.access_token){
      updateTokenAuthSpotify(authorize.access_token)
    }

    return authorize
  } catch (error) {
    throw error;
  }
}
