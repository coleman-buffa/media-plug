module.exports = function (sequelize, DataTypes) {
  let BookChallenge = sequelize.define("BookChallenge", {
  });

  BookChallenge.associate = models => {
    models.BookChallenge.belongsTo(models.Book);
    models.BookChallenge.belongsTo(models.Challenge);
  }
  return BookChallenge;
}