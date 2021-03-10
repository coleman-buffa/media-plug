module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  });

  //Model associations here

  return User;
}