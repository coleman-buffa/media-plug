const { Op } = require("sequelize");
const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		db.Challenge.findAll()
			.then(dbChallenge => {
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
		console.log("Thats where we at");
		console.log(req.body);
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
	},
	//Explore page; get unsubscribed challenges by user
	unsubbedChallengesByUser: function (req, res) {
		db.UserChallenge.findAll({
			where: {
				participantId: req.params.id
			},
		})
			.then(dbChallenge => {
				//map through result and get array of challenge ids
				let tempArray = [];
				dbChallenge.map(chal => {
					tempArray.push(chal.dataValues.ChallengeId);
				})
				db.Challenge.findAll({
					where: {
						[Op.not]: [{ id: tempArray }]
					}
				})
					.then(dbChallenge => {
						res.json(dbChallenge)
					})
					.catch(err => res.status(422).json(err));
			})
	},
	subscribeToChallenge: function (req, res) {
		db.UserChallenge.create({
			participantId: req.params.userId,
			ChallengeId: req.params.challengeId,
			createdAt: new Date(),
			updatedAt: new Date()
		})
			.then(dbUserChallenge => {
				res.json(dbUserChallenge)
			})
			.catch(err => res.status(422).json(err));
	}
};