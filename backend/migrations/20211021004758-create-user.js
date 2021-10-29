'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
          notNull:true,
          notEmpty:true,
        }
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
          notNull:true,
          notEmpty:true,
        }
      },
      poste: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
        validate:{
          notNull:true,
          notEmpty:true,
          isEmail:true,
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
          notNull:true,
          notEmpty:true,
        }
      },
      admin:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};