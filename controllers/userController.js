const db = require("../models");
const { Op } = require("sequelize");

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
      createdAt: new Date(),
      updatedAt: new Date()
    })
      .then(result => {
        res.json(result)
      })
      .catch(err => res.status(422).json(err));
  },
  getOtherUsers: function (req, res) {
    db.User.findAll({
      where: {
        id: {
          [Op.not]: req.params.userId
        }
      }
    })
      .then(result => {
        console.log("WE ARE HERE");
        console.log(result);
        res.json(result)
      })
      .catch(err => res.status(422).json(err));
  }
}