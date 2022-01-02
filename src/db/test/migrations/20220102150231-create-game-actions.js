'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GameActions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
	  game_id:{
	  	type: Sequelize.INTEGER
	  },
      type: {
        type: Sequelize.INTEGER
      },
	  player: {
        type: Sequelize.INTEGER
      },
	  game_piece: {
        type: Sequelize.INTEGER
      },
	  is_move: {
        type: Sequelize.BOOLEAN
      },
	  is_attack: {
        type: Sequelize.BOOLEAN
      },
	  is_ability: {
        type: Sequelize.BOOLEAN
      },
	  current_position_x: {
        type: Sequelize.INTEGER
      },
	  current_position_y: {
        type: Sequelize.INTEGER
      },
	  new_postition_x: {
        type: Sequelize.INTEGER
      },
	  new_position_y: {
        type: Sequelize.INTEGER
      },
	  target_game_piece: {
        type: Sequelize.INTEGER
      },
	  target_game_piece_current_position_x: {
        type: Sequelize.INTEGER
      },
	  target_game_piece_current_position_y: {
        type: Sequelize.INTEGER
      },
	  target_game_piece_new_position_x: {
        type: Sequelize.INTEGER
      },
	  target_game_piece_new_position_y: {
        type: Sequelize.INTEGER
      },
	  target_game_piece_current_status: {
        type: Sequelize.STRING
      },
	  target_game_piece_new_status: {
        type: Sequelize.STRING
      },
	  target_game_piece_current_health: {
        type: Sequelize.INTEGER
      },
	  target_game_piece_new_health: {
        type: Sequelize.INTEGER
      },
	  is_target_game_piece_dead: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('GameActions');
  }
};
