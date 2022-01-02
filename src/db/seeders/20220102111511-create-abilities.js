'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
	await queryInterface.bulkDelete('abilities', null, {});
	await queryInterface.sequelize.query(
		`ALTER TABLE abilities AUTO_INCREMENT = 1;`
	);
	await queryInterface.bulkInsert('abilities', [{
			name: 'HEAL',
			piece_name: "DUKE",
			type: "REACTIVE",
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'CHANGE_POSITION',
			piece_name: "DUKE",
			type: "REACTIVE",
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'SHIELD',
			piece_name: "DUKE",
			type: "REACTIVE",
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('abilities', null, {});
  }
};
