require('dotenv').config({ path: '../.env' });

const configJWT = {
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = configJWT;
