import { Sequelize, DataTypes } from 'sequelize';
import config from '../config/config';
import dotenv from 'dotenv';
dotenv.config();

const dialect = process.env.NODE_ENV === 'test' ? config.test.dialect : config.development.dialect;

const sequelize = new Sequelize(`${dialect}::memory:`);

const Piece = sequelize.define('Piece', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  default_move: {
    type: DataTypes.STRING,
    allowNull: false
  },
  move_min_step:{
	type: DataTypes.INTEGER,
	allowNull: false
  },
  move_max_step: {
	type: DataTypes.INTEGER,
	allowNull: false
  },
  attack_name:{
	type: DataTypes.STRING,
	allowNull: false
  },
  min_attack_range:{
	type: DataTypes.INTEGER,
	allowNull: false
  },
  max_attack_range:{
	type: DataTypes.INTEGER,
	allowNull: false
  },
  default_health:{
	type: DataTypes.INTEGER,
	allowNull:false
  },
  current_health:{
	type: DataTypes.INTEGER,
	allowNull: true
  },
  default_status:{
	type: DataTypes.STRING,
	allowNull: false
  },
  current_status:{
	type: DataTypes.STRING,
	allowNull: false
  },
  is_alive:{
	type: DataTypes.BOOLEAN,
	allowNull: false
  }
}, {
 	timestamps: true
});

// `sequelize.define` also returns the model
console.log(Piece === sequelize.models.Piece); // true