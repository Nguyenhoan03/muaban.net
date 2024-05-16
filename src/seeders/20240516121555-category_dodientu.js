'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_dodientus', [
      {
        name: 'Điện thoại di động',
        
      },
      {
        name: 'Máy tính bảng',
        
      },
      {
        name: 'Máy vi tính, Laptop, Máy chủ',
        
      },
      {
        name: 'Máy ảnh, Máy quay',
        
      },
      {
        name: 'Tivi, Loa, Amply, Máy nghe nhạc',
        
      },
      {
        name: 'SIM, thẻ điện thoại',
        
      },
      {
        name: 'Linh kiện, phụ kiện',
        
      },
      {
        name: 'Đồ điện tử khác',
        
      },
      {
        name: 'Cho thuê đồ điện tử',
        
      },
      {
        name: 'Cần mua đồ điện tử',
        
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
