const jwt = require ('jsonwebtoken');
const khachhang = require ('../models/UserModel.js');
exports.authMiddleware = async (req, res, next) => {
  try {
    // Lấy token từ tiêu đề yêu cầu
    const token = req.header('Authorization').replace('Bearer ', '');

    // Giải mã token và xác thực người dùng
    const decoded = jwt.verify(token, 'mysecretkey');
    console.log("decode: "+decoded.id)
    const user = await khachhang.findOne({ id: decoded.id, 'tokens.token': token });
    if (!user) {
      throw new Error();
    }

    // Lưu thông tin người dùng vào đối tượng req.user
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ error: 'error' });
  }
  };
  
  
  
  
  
  