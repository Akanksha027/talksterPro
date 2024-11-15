const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Get the token from Authorization header
  if (!token) {
    return res.status(401).send('Access Denied');  // If no token, send Unauthorized error
  }

  jwt.verify(token, 'guptt_raaz', (err, user) => {
    if (err) {
        return res.status(403).send('Invalid Token');
    }
    req.user = user;
    next();
});


};
module.exports = authenticateToken;