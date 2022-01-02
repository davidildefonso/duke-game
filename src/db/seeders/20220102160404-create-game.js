'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete('games', null, {});

		await queryInterface.sequelize.query(
			`ALTER TABLE games AUTO_INCREMENT = 1;`
		);
	
		await queryInterface.bulkInsert('games', [{
			status: 'CREATED',
			currentPlayerTurn: null,
			board: 1,
			winner: null,
			startTime: new Date(),
			finishTime: null,
			createdAt: new Date(),
			updatedAt: new Date()

		}], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('games', null, {});
  }
};

 