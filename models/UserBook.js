module.exports = function (sequelize, DataTypes) {
  let UserBook = sequelize.define("UserBook", {
  });

  UserBook.associate = models => {
    models.UserBook.belongsTo(models.User);
    models.UserBook.belongsTo(models.Book);
  }
  return UserBook;
}