'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pieces', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		default_move: {
			type: Sequelize.STRING,
			allowNull: false
		},
		move_min_step:{
			type: Sequelize.INTEGER,
			allowNull: false
		},
		move_max_step: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		move_direction:{
			type: Sequelize.STRING,
			allowNull: false
		},
		attack_name:{
			type: Sequelize.STRING,
			allowNull: false
		},
		attack_direction:{
			type: Sequelize.STRING,
			allowNull: false
		},
		attack_damage:{
			type: Sequelize.INTEGER,
			allowNull: false
		},
		min_attack_range:{
			type: Sequelize.INTEGER,
			allowNull: false
		},
		max_attack_range:{
			type: Sequelize.INTEGER,
			allowNull: false
		},
		default_health:{
			type: Sequelize.INTEGER,
			allowNull:false
		},
		current_health:{
			type: Sequelize.INTEGER,
			allowNull: true
		},
		default_status:{
			type: Sequelize.STRING,
			allowNull: false
		},
		current_status:{
			type: Sequelize.STRING,
			allowNull: false
		},
		is_alive:{
			type: Sequelize.BOOLEAN,
			allowNull: false
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
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Pieces');
  }
};