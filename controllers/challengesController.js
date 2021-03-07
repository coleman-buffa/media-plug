const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		db.Challenge.findAll()
			.then(dbChallenge => {
        console.log(dbChallenge);
				res.json(dbChallenge)
			})
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Challenge.findById(req.params.id)
			.then(dbChallenge => res.json(dbChallenge))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Challenge.create(req.body)
			.then(dbChallenge => res.json(dbChallenge))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Challenge.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbChallenge => res.json(dbChallenge))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Challenge.findById({ _id: req.params.id })
			.then(dbChallenge => dbChallenge.remove())
			.then(dbChallenge => res.json(dbChallenge))
			.catch(err => res.status(422).json(err));
	},
  challengesByUser: function (req, res) {
    db.UserChallenge.findAll({
      where: {
        participantId: req.params.id
      },
      include: {
          model: db.Challenge
      }
    })
    .then(dbChallenge => {
      res.json(dbChallenge);
    })
  }
};