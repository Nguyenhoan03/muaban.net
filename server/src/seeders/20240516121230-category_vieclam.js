'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_vieclams', [
      {
        name: 'Tuyển nhân viên',
        category_id:2,
      },
      {
        name: 'Tìm việc làm',
      },
      {
        name: 'Dịch vụ lao động',
      },
      {
        name: 'Tuyển sinh, Du học, Đào tạo',
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
