const db = require("../models"); 

module.exports = {
  checkUserStatus: function (req, res) {    
    db.User.findAll({
      where: {
        user_email: req.params.email
      }
    })
    .then(result => {      
      res.json(result);
    })
    .catch(err => {
      res.status(422).json(err);
    })
  }, 
  register: function (req, res) {
    db.User.create({
      user_name: req.body.nickname,
      user_email: req.body.email,
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(result => {
      res.json(result)
    })
    .catch(err => res.status(422).json(err));
  }, 
}