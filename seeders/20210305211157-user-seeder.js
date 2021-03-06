'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        user_name: 'John Doe',
        user_email: "john.doe@email.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_name: 'Jane Doe',
        user_email: "jane.doe@email.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
