'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GamePieces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
	  owner: {
        type: Sequelize.INTEGER
      },
	  position_y: {
        type: Sequelize.INTEGER
      },
	  position_x: {
        type: Sequelize.INTEGER
      },
	  status: {
        type: Sequelize.STRING
      },
	  current_health: {
        type: Sequelize.INTEGER
      },
	  is_alive: {
	  	type: Sequelize.BOOLEAN
	  },
	  can_move: {
	  	type: Sequelize.BOOLEAN
	  },
	  can_attack: {
	  	type: Sequelize.BOOLEAN
	  },
	  can_use_abilities: {
	  	type: Sequelize.BOOLEAN
	  },
	  game_id:{
	  	type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GamePieces');
  }
};

