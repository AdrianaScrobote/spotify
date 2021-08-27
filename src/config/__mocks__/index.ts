const config = () => ({
    env: 'development',
    port: 3333,
    application: {
      name: 'envVars.APPLICATION_NAME',
      version: 'envVars.APPLICATION_VERSION',
    },
    spotify: {
      url: 'envVars.SPOTIFY_URL',
      urlToken: 'envVars.SPOTIFY_URL_TOKEN',
      clientId: 'envVars.SPOTIFY_CLIENT_ID',
      clientSecret: 'envVars.SPOTIFY_CLIENT_SECRET',
      tokenAuth: 'envVars.SPOTIFY_TOKEN_AUTH'
    }
  });
  
  export default config;
  