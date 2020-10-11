'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('tb_hospital_clinica', {
      cd_hospital_clinica: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nr_cnpj: {
        type: Sequelize.INTEGER,
        allowNull: false
      },/*
      ds_endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nr_inscricao_estadual: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nm_hospital_clinica: {
        type: Sequelize.STRING,
        allowNull: false
      },*/
      nr_telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.dropTable('tb_hospital_clinica');
  }
};
