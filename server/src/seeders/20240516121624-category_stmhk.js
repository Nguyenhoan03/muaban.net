'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_stmhks', [
      {
        name: 'Thú nuôi, cây cảnh',
        
      },
      {
        name: 'Nhạc cụ, sách, đồ dùng học tập',
        
      },
      {
        name: 'Đồ thể thao, Xe đạp, Đồ chơi',
        
      },
      {
        name: 'Mẹ & Bé',
        
      },
      {
        name: 'Thuốc, Sức khỏe',
        
      },
      {
        name: 'Nông sản, thực phẩm, đặc sản',
        
      },
      {
        name: 'Đồ trang trí, tranh, ảnh',
        
      },
      {
        name: 'Đồ cổ, sưu tập, hàng hiếm',
        
      },
      {
        name: 'Mặt hàng còn lại',
        
      },
      {
        name: 'Cần mua khác',
        
      },
      {
        name: 'Cho thuê khác',
        
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
