const loadConfig = (configSchema: any, data: any) => {
    const { error, value: envVars } = configSchema.validate(data, { abortEarly: false });
    if (error) {
      throw new Error(`Environment's variable validation error: ${error.message}`);
    }
  
    return {
      env: envVars.NODE_ENV,
      port: envVars.PORT,
      application: {
        name: envVars.APPLICATION_NAME,
        version: envVars.APPLICATION_VERSION,
      },
      spotify: {
        url: envVars.SPOTIFY_URL,
        urlToken: envVars.SPOTIFY_URL_TOKEN,
        clientId: envVars.SPOTIFY_CLIENT_ID,
        clientSecret: envVars.SPOTIFY_CLIENT_SECRET,
        tokenAuth: envVars.SPOTIFY_TOKEN_AUTH
      }
    };
  };
  
  export default loadConfig;
  