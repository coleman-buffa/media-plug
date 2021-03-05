const db = require("../models");
const passport = 

module.exports = {
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