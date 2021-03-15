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
      allowNull: false,
      defaultValue: "Description not found"
    },
    book_image_link: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://via.placeholder.com/150"
    },
    book_genre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "NA"
    },
    book_page_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    book_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    book_published_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "1900-01-01",
      validate: {
        isDate:true
      }
    }     
  });
  //Model associations here
  return Book;
};