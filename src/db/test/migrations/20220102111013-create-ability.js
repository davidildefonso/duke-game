'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Abilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
	  piece_name:{
	  	type: Sequelize.STRING
	  },
	  type:{
	  	type: Sequelize.STRING
	  },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(6)
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(6)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Abilities');
  }
};