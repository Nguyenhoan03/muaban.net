'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        namecategory: 'Bất động sản',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Việc làm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Ô tô',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Xe máy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Dịch vụ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đồ điện tử',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Điện máy, Đồ gia dụng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Sở thích, Mặt hàng khác',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Thời trang, Mỹ phẩm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namecategory: 'Đối tác, Cộng đồng',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
