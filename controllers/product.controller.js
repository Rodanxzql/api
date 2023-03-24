const { getProducts, getProductById, insertProduct, updateProductById, deleteProductById, getProductByCatId }= require ("../models/product.model.js");


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
exports.createProduct = async (req, res) => {
 try{ 
    var data = req.body;
    var image = req.file.filename
  
 const result = await insertProduct(data,image);
 return res.status(201).json(result);
}catch(e){
    return res.status(500).json({
        "message": "Internal Server Error"
    });
}
}

// Update Product
exports.updateProduct = async (req, res) => {
    try{
        var data  = req.body;
        var id    = req.params.id;
        var image = req.file.filename
        const result = await updateProductById(data,image, id);
        return res.status(201).json(result);
    }catch(e){
        return res.status(500).json({
            "message": "Internal Server Error"
        });
    }
  
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
// Get all Product by cat_id
exports.showProductByCatId = (req, res) => {
    getProductByCatId(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}