'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_dtcds', [
      {
        name: 'Tìm đối tác',
        
      },
      {
        name: 'Bố cáo thành lập, giải thể',
        
      },
      {
        name: 'Thông báo, nhắn tin',
        
      },
      {
        name: 'Kết bạn, câu lạc bộ',
        
      },
      {
        name: 'Khác',
        
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
