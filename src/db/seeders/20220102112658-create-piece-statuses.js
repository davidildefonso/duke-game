'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
   	await queryInterface.bulkDelete('piecestatuses', null, {});
	await queryInterface.sequelize.query(
		`ALTER TABLE piecestatuses AUTO_INCREMENT = 1;`
	);

	await queryInterface.bulkInsert('piecestatuses', [{
			name: 'ALIVE',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'DEAD',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'SHIELDED',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'MOVING',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'ATTACKING',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'SELECTED',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
  },

  down: async (queryInterface, _Sequelize) => {
   	await queryInterface.bulkDelete('piecestatuses', null, {});
  }
};
