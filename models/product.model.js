const db = require("./db.js");

// // constructor
// const Product = function(product) {
//   this.name_product = product.name_product;
//   this.price = product.price;
//   this.avatar = product.avatar;
// };

// Product.getAll = (result) => {
//     let query = "SELECT * FROM product";
//     sql.query(query, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
//       console.log("product: ", res);
//       result(null, res);
//     });
//   };

//   module.exports = Product;  

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
exports.insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
exports.updateProductById = (data, id, result) => {
    db.query("UPDATE product SET name_product = ?, price = ? WHERE id = ?", [data.name_product, data.price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
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