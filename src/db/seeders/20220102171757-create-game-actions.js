'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('gameactions', null, {});
    	await queryInterface.sequelize.query(
			`ALTER TABLE gameactions AUTO_INCREMENT = 1;`
		);

		const games_count = await queryInterface.sequelize.query(
			`SELECT COUNT(id) as count FROM games;`
		);
		const game_id = games_count[0][0].count;
	
		await queryInterface.bulkInsert('gameactions', [{
			type: 1,
			player: 1,
			game_id,
			game_piece: 1,
			is_move: true,
			is_attack: false,
			is_ability: false,
			current_position_x: 1,
			current_position_y: 1,
			new_postition_x: 1,
			new_position_y: 2,
			target_game_piece: null,
			target_game_piece_current_position_x: null,
			target_game_piece_current_position_y : null,
			target_game_piece_new_position_x: null,
			target_game_piece_new_position_y: null,
			target_game_piece_current_status: null,
			target_game_piece_new_status: null,
			target_game_piece_current_health: null,
			target_game_piece_new_health: null,
			is_target_game_piece_dead: false,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gameactions', null, {});
  }
};
