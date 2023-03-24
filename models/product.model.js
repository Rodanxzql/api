const db = require("./db.js");



exports.getProducts = (result) => {
    db.query("SELECT * FROM product", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

exports.getProductById = (id, result) => {
    db.query("SELECT * FROM product WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
exports.insertProduct =  (data,image, result) => {
    db.query(`INSERT INTO product (name_product, price, qty, cat_id, image) VALUES(?,?,?,?,?)`, [
        data.name_product,
        data.price,
        data.qty,
        data.cat_id,
        image

    ]);   
}
 
// Update Product to Database
exports.updateProductById = (data,image, id, result) => {
    db.query("UPDATE product SET name_product = ?, price = ?, qty=?, cat_id = ?, image = ? WHERE id = ?", [
        data.name_product, 
        data.price, 
        data.qty,
        data.cat_id, 
        image, id
    ]);   
}
 
// Delete Product to Database
exports.deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

//get product by cat_id
exports.getProductByCatId = (id, result) => {
     db.query("SELECT * FROM product WHERE cat_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  

