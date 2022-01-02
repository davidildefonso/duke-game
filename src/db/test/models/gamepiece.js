'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GamePiece extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GamePiece.init({
    name: DataTypes.STRING,
	game_id: DataTypes.INTEGER,
	owner: DataTypes.INTEGER,
	position_y: DataTypes.INTEGER,
	position_x: DataTypes.INTEGER,
	status: DataTypes.STRING,
	current_health: DataTypes.INTEGER,
	is_alive: DataTypes.BOOLEAN,
	can_move: DataTypes.BOOLEAN,
	can_attack: DataTypes.BOOLEAN,
	can_use_abilities: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GamePiece',
  });
  return GamePiece;
};