const Admin = require ("../models/adminModel.js");
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');

const JWT_SECRET_ADMIN = 'secretkeyforadmin102@';
const JWT_EXPIRES_IN_ADMIN = '7d';

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Tìm kiếm admin với email cung cấp
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      return res.status(400).json({ error: 'Tài khoản không đúng' });
    }

    // So sánh mật khẩu được cung cấp với mật khẩu đã được mã hóa
    const isMatch = (password == admin.password);
    if (isMatch == false) {
      return res.status(400).json({ error: 'mật khẩu không đúng' });
    }

    // Tạo token
    const token = jwt.sign({ adminId: admin.id }, JWT_SECRET_ADMIN, { expiresIn: JWT_EXPIRES_IN_ADMIN });

    // Trả về token và thông tin admin
    res.json({ admin, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Đăng nhập thất bại' });
  }
};
