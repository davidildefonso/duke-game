'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
   		await queryInterface.bulkDelete('gamepieces', null, {});
		await queryInterface.sequelize.query(
			`ALTER TABLE gamepieces AUTO_INCREMENT = 1;`
		);

		const games_count = await queryInterface.sequelize.query(
			`SELECT COUNT(id) as count FROM games;`
		);
		const game_id = games_count[0][0].count;
		
		await queryInterface.bulkInsert('gamepieces', [{
				name: "ARCHER",
			  	game_id,
				owner: 1,
				position_y: 1,
				position_x: 1,
				status: "ALIVE",
				current_health: 1,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: false,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
				name: "ARCHER",
			 	game_id,
				owner: 2,
				position_y: 5,
				position_x: 1,
				status: "ALIVE",
				current_health: 1,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: false,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
				name: "KNIGHT",
			 	game_id,
				owner: 1,
				position_y: 1,
				position_x: 2,
				status: "ALIVE",
				current_health: 3,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: false,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
				name: "KNIGHT",
			 	game_id,
				owner: 2,
				position_y: 5,
				position_x: 2,
				status: "ALIVE",
				current_health: 3,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: false,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
				name: "CATAPULT",
			 	game_id,
				owner: 1,
				position_y: 1,
				position_x: 4,
				status: "ALIVE",
				current_health: 5,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: false,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
				name: "CATAPULT",
			 	game_id,
				owner: 2,
				position_y: 5,
				position_x: 4,
				status: "ALIVE",
				current_health: 5,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: false,
				createdAt: new Date(),
				updatedAt: new Date()
		}
		,
		{
				name: "GLADIATOR",
			 	game_id,
				owner: 1,
				position_y: 1,
				position_x: 5,
				status: "ALIVE",
				current_health: 2,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: false,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
				name: "GLADIATOR",
			 	game_id,
				owner: 2,
				position_y: 5,
				position_x: 5,
				status: "ALIVE",
				current_health: 2,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: false,
				createdAt: new Date(),
				updatedAt: new Date()
		}
		,
		{
				name: "DUKE",
			 	game_id,
				owner: 1,
				position_y: 1,
				position_x: 3,
				status: "ALIVE",
				current_health: 1,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: true,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
				name: "DUKE",
			 	game_id,
				owner: 2,
				position_y: 5,
				position_x: 3,
				status: "ALIVE",
				current_health: 1,
				is_alive: true,
				can_move: true,
				can_attack: true,
				can_use_abilities: true,
				createdAt: new Date(),
				updatedAt: new Date()
		}], {});
  },

  down: async (queryInterface, _Sequelize) => {
 		await queryInterface.bulkDelete('gamepieces', null, {});
  }
};

