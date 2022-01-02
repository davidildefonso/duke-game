'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
	await queryInterface.bulkDelete('gameactiontypes', null, {});
	await queryInterface.sequelize.query(
		`ALTER TABLE gameactiontypes AUTO_INCREMENT = 1;`
	);

	await queryInterface.bulkInsert('gameactiontypes', [{
			name: 'PLAYER_MOVE',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'PLAYER_ATTACK',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'PLAYER_ABILITY',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
  
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('gameactiontypes', null, {});
  }
};
