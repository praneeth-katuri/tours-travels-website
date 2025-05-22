require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || "development",
  },
  db: {
    dbUri: process.env.DB_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  },
};

module.exports = config;
