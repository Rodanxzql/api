const express = require ("express");
const {
    register,
    login,
    logout,
    checkLogin,
    deleteKhachHang,
    getAllCustomer,
    capnhatKhachHang,
    getTuser
} = require ("../controllers/UserController.js");

const router = express.Router();

router.post('/users/register', register);
router.post('/users/login', login);
router.get('/users/logout', logout);
router.get('/users/cart',checkLogin);
router.get('/users/custumer',getAllCustomer);
router.delete('/users/custumer/:id',deleteKhachHang);
router.patch('/users/custumer/:id', capnhatKhachHang);




router.get('/users/all',getTuser);
module.exports = router;