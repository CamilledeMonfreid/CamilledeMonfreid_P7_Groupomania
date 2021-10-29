'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Post }) {
      // define association here
      this.hasMany(Post, { foreignKey: 'userId' })
    }
  };
  User.init({
    nom: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:true,
      }
    }, 
    prenom: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:true,
      }
    }, 
    poste: {
      type: DataTypes.STRING,
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        notNull:true,
        notEmpty:true,
        isEmail:true,
      }
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:true,
        notEmpty:true,
      }
    },
    admin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};