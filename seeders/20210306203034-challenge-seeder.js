'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('challenges', [{
      challenge_name: "Book-a-thon",
      challenge_desc: "Read a lot of books",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge_name: "Sci-Fi",
      challenge_desc: "Read the classics",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
