'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_xemays', [
      {
        name: 'Bán xe máy',
        
      },
      {
        name: 'Cho thuê xe máy',
        
      },
      {
        name: 'Dịch vụ xe máy',
        
      },
    
     

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
