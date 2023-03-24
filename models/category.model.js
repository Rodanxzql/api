const db = require("./db.js");

exports.getCategory = (result) => {
    db.query("SELECT * FROM category", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

exports.getCategoryById = (id, result) => {
    db.query("SELECT * FROM category WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

exports.insertCategory =  (data, result) => {
    db.query(`INSERT INTO category (cat_name, created_at) VALUES(?,now())`, [data.cat_name]
    ,(err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

exports.deleteCategoryById = (id, result) => {
    db.query("DELETE FROM category WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}