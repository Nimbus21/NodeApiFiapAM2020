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
      codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'cd_hospital_clinica'
      },
      cnpj: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'nr_cnpj'
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
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nr_telefone'
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
