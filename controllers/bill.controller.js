const { getBill, getBillById, insertBill, updateBillById, deleteBillById }= require ("../models/bill.model.js");

exports.showBill = (req, res) => {
    getBill((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  }

  exports.showBillById = (req, res) => {
    getBillById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  }

exports.createBill = (req, res) => {
    const data = req.body;
    insertBill(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
exports.updateBill = (req, res) => {
    const id    = req.params.id;
    updateBillById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

exports.deleteBill = (req, res) => {
    const id = req.params.id;
    deleteBillById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  }