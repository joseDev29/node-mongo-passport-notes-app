require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT,
  },
  db: {
    mongodb: {
      uri: process.env.MONGO_URI,
    },
  },
};
