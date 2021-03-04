module.exports = function (sequelize, DataTypes) {
  let Challenge = sequelize.define("Challenge", {
    challenge_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    challenge_desc: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  //Model associations here
  return Challenge;

};