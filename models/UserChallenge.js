module.exports = function (sequelize, DataTypes) {
  let UserChallenge = sequelize.define("UserChallenge", {    
  });
  UserChallenge.associate = models => {
    models.UserChallenge.belongsTo(models.User, {as: "participant"});
    models.UserChallenge.belongsTo(models.Challenge);
  }
  return UserChallenge;
}