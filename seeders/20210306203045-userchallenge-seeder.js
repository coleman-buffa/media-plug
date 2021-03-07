'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('userchallenges', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      participantId: 1,
      ChallengeId: 1
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      participantId: 1,
      ChallengeId: 2
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
