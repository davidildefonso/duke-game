'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
		allowNull: false,
      },
	  board: {
        type: Sequelize.INTEGER,
		allowNull: true,
      },	
	  currentPlayerTurn:{
	  	type: Sequelize.STRING,
		allowNull: true,  
	  },
	  startTime:{
	  	allowNull: true,
        type: Sequelize.DATE
	  },
	  finishTime:{
	  	allowNull: true,
        type: Sequelize.DATE
	  },
	  winner: {
	  	type: Sequelize.INTEGER,
		allowNull: true
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
    await queryInterface.dropTable('Games');
  }
};