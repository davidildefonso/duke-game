'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameActions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GameActions.init({
    type: DataTypes.INTEGER,
	player: DataTypes.INTEGER,
	game_id: DataTypes.INTEGER,
	game_piece: DataTypes.INTEGER,
	is_move: DataTypes.BOOLEAN,
	is_attack: DataTypes.BOOLEAN,
	is_ability: DataTypes.BOOLEAN,
	current_position_x: DataTypes.INTEGER,
	current_position_y: DataTypes.INTEGER,
	new_postition_x: DataTypes.INTEGER,
	new_position_y: DataTypes.INTEGER,
	target_game_piece: DataTypes.INTEGER,
	target_game_piece_current_position_x: DataTypes.INTEGER,
	target_game_piece_current_position_y : DataTypes.INTEGER,
	target_game_piece_new_position_x: DataTypes.INTEGER,
	target_game_piece_new_position_y: DataTypes.INTEGER,
	target_game_piece_current_status: DataTypes.STRING,
	target_game_piece_new_status: DataTypes.STRING,
	target_game_piece_current_health: DataTypes.INTEGER,
	target_game_piece_new_health: DataTypes.INTEGER,
	is_target_game_piece_dead: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GameActions',
  });
  return GameActions;
};