'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('tasks', { 
        id: {
          type: Sequelize.INTEGER ,
          primaryKey: true,
          autoIncrement: true,
          allowNoull: false,
        },

        Title: Sequelize.STRING,
        Description: Sequelize.STRING,
        Done: Sequelize.BOOLEAN,
        Deleted: Sequelize.BOOLEAN,
        Adulto: Sequelize.INTEGER,
        CreatedAt: Sequelize.DATE,
        UpdatedAt: Sequelize.DATE,       
      
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tasks');
    }
};
