'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_dmdgds', [
      {
        name: 'Đồ điện máy',
        
      },
      {
        name: 'Đồ nhà bếp',
        
      },
      {
        name: 'Nội thất, ngoại thất',
        
      },
      {
        name: 'Đồ dùng gia đình',
        
      },
      {
        name: 'Đồ dùng văn phòng',
        
      },
      {
        name: 'Cho thuê điện máy',
        
      },
      {
        name: 'Cần mua điện máy',
        
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
