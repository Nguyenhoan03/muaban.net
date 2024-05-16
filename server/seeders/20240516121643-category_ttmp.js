'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_ttmps', [
      {
        name: 'Quần áo, trang phục',
        
      },
      {
        name: 'Giầy dép, túi xách',
        
      },
      {
        name: 'Mỹ phẩm, nước hoa',
        
      },
      {
        name: 'Trang sức, Phụ kiện',
        
      },
      {
        name: 'Cần mua thời trang',
        
      },
      {
        name: 'Cho thuê thời trang',
        
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
