'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
	await queryInterface.bulkDelete('boards', null, {});
	await queryInterface.sequelize.query(
			`ALTER TABLE boards AUTO_INCREMENT = 1;`
		);

	await queryInterface.bulkInsert('boards', [{
			name: 'classic',
			rows: 5,
			columns: 5,
			createdAt: new Date(),
			updatedAt: new Date()
	}], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('boards', null, {});
  }
};
