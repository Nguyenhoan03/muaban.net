'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('category_bdss', [
      {
        name: 'Bán nhà đất',
      },
      {
        name: 'Cho thuê',
      },
      {
        name: 'Sang nhượng',
      },
      {
        name: 'Dịch vụ',
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
