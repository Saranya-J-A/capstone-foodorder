const jwt = require('jsonwebtoken');

const authUser = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: 'User not authorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded || decoded.role !== 'user') return res.status(401).json({ message: 'User not authorized' });

    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token invalid' });
  }
};

module.exports = authUser;
