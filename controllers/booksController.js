const { Op } = require("sequelize");
const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		db.Book.findAll()
			.then(dbBook => {
				res.json(dbBook)
			})
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Book.findById(req.params.id)
			.then(dbBook => res.json(dbBook))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		console.log(req.body);
		db.Book.create(req.body)
			.then(dbBook => res.json(dbBook))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbBook => res.json(dbBook))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Book.findById({ _id: req.params.id })
			.then(dbBook => dbBook.remove())
			.then(dbBook => res.json(dbBook))
			.catch(err => res.status(422).json(err));
	},
	booksByUser: function (req, res) {
		db.UserBook.findAll({
			where: {
				userId: req.params.id
			},
			include: {
				model: db.Book
			}
		})
			.then(dbBook => {
				res.json(dbBook);
			})
	},
	// Explore page; get books user has not read
	unreadBooksByUser: function (req, res) {
		console.log(req.params.id);
		db.UserBook.findAll({
			where: {
				UserId:
				{
					[Op.not]: req.params.id
				},
			},
			include: {
				model: db.Book
			}
		})
			.then(dbBook => {
				console.log(dbBook);
				res.json(dbBook);
			})
	},
};