const db = require("../models"); 

module.exports = {
  checkUserStatus: function (req, res) {    
    console.log(req.params.email);
    db.User.findAll({
      where: {
        user_email: req.params.email
      }
    })
    .then(result => {
      console.log("here is the q response:" , result);
      result.data ? res.json(true) : res.json(false);
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    })
  }, 
  register: function (req, res) {
    db.User.create({
      user_name: "John Doe",
      user_email: "john.doe@email.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(res => {
      res.json(res)
    })
    .catch(err => res.status(422).json(err));
  }, 
}