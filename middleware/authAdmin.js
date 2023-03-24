// authMiddleware.js
const jwt = require ('jsonwebtoken');

const JWT_SECRET_ADMIN = 'secretkeyforadmin102@';

exports.authMiddleware = (req, res, next) => {
  // Lấy token từ header
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Bạn phải đăng nhập trước khi truy cập trang này' });
  }

  try {
    // Xác thực token và lấy thông tin user
    const decoded = jwt.verify(token, JWT_SECRET_ADMIN);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token không hợp lệ' });
  }
};

