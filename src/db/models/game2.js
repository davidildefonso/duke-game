'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Game.init({
    status: DataTypes.STRING,
	currentPlayerTurn:  {
		type: DataTypes.STRING,
		allowNull: true
	},
	board:   {
		type: DataTypes.INTEGER,
		allowNull: true
	},
	startTime: DataTypes.DATE(6),
	finishTime: DataTypes.DATE(6),
	winner:  {
		type: DataTypes.INTEGER,
		allowNull: true
	},
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
