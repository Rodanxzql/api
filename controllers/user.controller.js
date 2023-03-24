const { getUsers, getUserById, deleteUserById }= require ("../models/user.model.js");


  // Get All Users
exports.showUsers = (req, res) => {
    getUsers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  }
  
  // Get Single User by ID
  exports.showUserById = (req, res) => {
      getUserById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  }
  
  
  // Delete User by ID
  exports.deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
  }