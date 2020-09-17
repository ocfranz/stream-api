import "dotenv/config";

const config = {
  MONGO_URI: process.env.MONGO_URI,
  SECRET: process.env.SECRET,
};

export default config;
