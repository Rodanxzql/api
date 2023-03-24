const express = require('express');
const router = express.Router();



const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});
const upload = multer({
  storage: storage,
  fileFilter: function(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
},
}).single('image');

//hóa đơn
const { showBill, showBillById, createBill, updateBill, deleteBill } = require ("../controllers/bill.controller.js");
//phân loại
const { showCategory, showCategoryById, createCategory, deleteCategory } = require ("../controllers/category.controller.js");



//sản phẩm
const { showProducts, showProductById, createProduct, updateProduct, deleteProduct, showProductByCatId } = require ("../controllers/product.controller.js");
//user
const { deleteUser, showUsers , showUserById } = require('../controllers/user.controller.js');



// Get All Product
router.get('/products', showProducts);
// Get Single Product
router.get('/products/:id', showProductById); 
// Get all Product by cat_id
router.get('/catproducts/:id', showProductByCatId); 
// Create New Product
router.post('/products',upload, createProduct);
// Update Product
router.put('/products/:id',upload, updateProduct); 
// Delete Product
router.delete('/products/:id', deleteProduct);



// Get All User
router.get('/users', showUsers);
// Get Single User
router.get('/users/:id', showUserById); 
// Delete User
router.delete('/users/:id', deleteUser);




// Get All Bill
router.get('/bills', showBill); 
// Get Single Bill
router.get('/bills/:id', showBillById);
// Create New Bill
router.post('/bills',upload, createBill);
// Update Bill
router.put('/bills/:id',upload, updateBill);
// Delete Bill
router.delete('/bills/:id', deleteBill);

// Get All Category
router.get('/category', showCategory); 
// Get Single Category
router.get('/category/:id', showCategoryById);
// Create New Category
router.post('/category',upload, createCategory);
// Delete Category
router.delete('/category/:id', deleteCategory);



module.exports = router;