// const product = require("../models/product.model.js");
const { getProducts, getProductById, insertProduct, updateProductById, deleteProductById }= require ("../models/product.model.js");
// exports.findAll = (req, res) => {   
//     product.getAll((err, data) => {
//       if (err)
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving product."
//         });
//       else res.send(data);
//     });
//   };


  // Get All Products
exports.showProducts = (req, res) => {
  getProducts((err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}

// Get Single Product 
exports.showProductById = (req, res) => {
  getProductById(req.params.id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}

// Create New Product
exports.createProduct = (req, res) => {
  const data = req.body;
  insertProduct(data, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}

// Update Product
exports.updateProduct = (req, res) => {
  const data  = req.body;
  const id    = req.params.id;
  updateProductById(data, id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}

// Delete Product
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  deleteProductById(id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}