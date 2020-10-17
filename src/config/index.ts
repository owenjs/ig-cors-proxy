import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {

  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,

  teamworkAPI: {
    key: process.env.TW_API_KEY,
    sub: process.env.TW_SUB_DOMAIN
  },

  hubspotAPI: {
    key: process.env.HS_API_KEY
  }
  
};
