'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => { 
	await queryInterface.bulkDelete('pieces', null, {});
	await queryInterface.sequelize.query(
		`ALTER TABLE pieces AUTO_INCREMENT = 1;`
	);
	
	await queryInterface.bulkInsert('pieces', [{
		name: 'ARCHER',
		default_move: "step",
		move_min_step: 1,
		move_max_step: 1,
		move_direction: "ALL",
		attack_name : "ARROW",
		attack_damage: 1,
		attack_direction: "DIAGONAL",
		min_attack_range: 1,
		max_attack_range: -1,
		default_health: 1,
		current_health: 1,
		default_status: "ALIVE",
		current_status: "ALIVE",
		is_alive: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: 'CATAPULT',
		default_move: "step",
		move_min_step: 1,
		move_max_step: 1,
		move_direction: "ALL",
		attack_name : "CANON",	
		attack_damage: 1,
		attack_direction: "STRAIGHT",	
		min_attack_range: 1,
		max_attack_range: -1,
		default_health: 5,
		current_health: 5,
		default_status: "ALIVE",
		current_status: "ALIVE",
		is_alive: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	},{
		name: 'KNIGHT',
		default_move: "jump-L",
		move_min_step: 2,
		move_max_step: 2,
		move_direction: "L",
		attack_name : "SWORD",
		attack_damage: 1,
		attack_direction: "L",	
		min_attack_range: 2,
		max_attack_range: 2,
		default_health: 3,
		current_health: 3,
		default_status: "ALIVE",
		current_status: "ALIVE",
		is_alive: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	},{
		name: 'GLADIATOR',
		default_move: "step",
		move_min_step: 1,
		move_max_step: 2,
		move_direction: "ALL",
		attack_name : "SWORD",
		attack_damage: 1,
		attack_direction: "ALL",
		min_attack_range: 1,
		max_attack_range: 2,
		default_health: 2,
		current_health: 2,
		default_status: "ALIVE",
		current_status: "ALIVE",
		is_alive: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	},{
		name: 'DUKE',
		default_move: "step",
		move_min_step: 1,
		move_max_step: 1,
		move_direction: "ALL",
		attack_name : "SWORD",
		attack_damage: 1,
		attack_direction: "ALL",
		min_attack_range: 1,
		max_attack_range: -1,
		default_health: 1,
		current_health: 1,
		default_status: "ALIVE",
		current_status: "ALIVE",
		is_alive: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	}], {});
  
  },

  down: async (queryInterface, _Sequelize) => {
  	await queryInterface.bulkDelete('pieces', null, {});
  }
};
