'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_otos', [
      {
        name: 'Bán ô tô',
        
      },
      {
        name: 'Cho thuê',
        
      },
      {
        name: 'Dịch vụ',
        
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
