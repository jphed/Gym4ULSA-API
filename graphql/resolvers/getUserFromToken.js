const jwt = require('jsonwebtoken');
const SECRET = 'tu_clave_secreta';

function getUserFromToken(token) {
  if (!token) return null;
  try {
    return jwt.verify(token.replace("Bearer ", ""), SECRET);
  } catch {
    return null;
  }
}

module.exports = getUserFromToken;