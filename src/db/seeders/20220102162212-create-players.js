'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete('players', null, {});
		await queryInterface.sequelize.query(
			`ALTER TABLE players AUTO_INCREMENT = 1;`
		);

		const games_count = await queryInterface.sequelize.query(
			`SELECT COUNT(id) as count FROM games;`
		);

		const game_id = games_count[0][0].count;
		
		await queryInterface.bulkInsert('players', [{
			  	name: "david",
				state: "active",
				type: "user",
				game_id,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			  	name: "duke_bot",
				state: "active",
				type: "ai",
				game_id,
				createdAt: new Date(),
				updatedAt: new Date()
		}], {});
  },

  down: async (queryInterface, _Sequelize) => {
  	await queryInterface.bulkDelete('players', null, {});
  }
};
