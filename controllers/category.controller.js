const { getCategory, getCategoryById, insertCategory, deleteCategoryById }= require ("../models/category.model");

exports.showCategory = (req, res) => {
    getCategory((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  }

  exports.showCategoryById = (req, res) => {
    getCategoryById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  }

  exports.createCategory = (req, res) => {
    const data = req.body;
    insertCategory(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

exports.deleteCategory = (req, res) => {
    const id = req.params.id;
    deleteCategoryById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  }