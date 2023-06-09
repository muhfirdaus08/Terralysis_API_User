const jwt = require('jsonwebtoken');
const configJWT = require('../config/jwt.js');

const checkAuthorization = (req, res, next) => {
  const token = req.headers.authorization;
  if (token && token.startsWith('Bearer ')) {
    const authToken = token.substring(7); // Mengambil token setelah 'Bearer '
    try {
      const decoded = jwt.verify(authToken, configJWT.jwtSecret);
      //   req.user = decoded;
      req.userId = decoded.userId;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = checkAuthorization;
