module.exports = function (sequelize, DataTypes) {
  let Book = sequelize.define("Book", {
    book_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_image_link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_page_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book_rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book_published_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }     
  });
  //Model associations here
  return Book;
};