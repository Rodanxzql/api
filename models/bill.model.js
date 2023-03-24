const db = require("./db.js");



exports.getBill = (result) => {
    db.query("SELECT * FROM bill", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

exports.getBillById = (id, result) => {
    db.query("SELECT * FROM bill WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}


exports.insertBill =  (data, result) => {
    db.query(`INSERT INTO bill (client, diachi, Totalprice, item , created_at) VALUES(?,?,?,?,now())`, [
        data.Ten,
        data.Diachi,
        data.Total,
        data.data

    ],(err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

exports.updateBillById = ( id, result) => {
    db.query("UPDATE bill SET status = 1, updated_at = now() WHERE id = ?", [id],(err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

exports.deleteBillById = (id, result) => {
    db.query("DELETE FROM bill WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}