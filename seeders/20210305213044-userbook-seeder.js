'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('userbooks', [
      {
        read_status: false,
        UserId: 1,
        BookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        read_status: true,
        UserId: 1,
        BookId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        read_status: false,
        UserId: 2,
        BookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        read_status: false,
        UserId: 2,
        BookId: 4,
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
