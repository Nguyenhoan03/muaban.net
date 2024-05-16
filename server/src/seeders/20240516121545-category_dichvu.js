'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category_dichvus', [
      {
        name: 'Xây dụng, Nội thất, Phong thủy',
        
      },
      {
        name: 'Điện, Điện tử ,Điện lạnh',
        
      },
      {
        name: 'Nước, Vệ sinh,Cầu cống',
        
      },
      {
        name: 'Vận chuyển, dọn nhà, văn phòng',
        
      },
      {
        name: 'In ấn, dịch thuật',
        
      },
      {
        name: 'Tổ chức sự kiện',
        
      },
      {
        name: 'Tư vấn thuế, tài chính',
        
      },
      {
        name: 'Thẩm mỹ, Y tế',
        
      },
      {
        name: 'Thiết kế Web, phần mềm',
        
      },
      {
        name: 'Du lịch, Khách sạn, Vé',
        
      },
      {
        name: 'Cầm đồ',
        
      },
      {
        name: 'Tư vấn luật, thủ tục',
        
      },
      {
        name: 'Dịch vụ khác',
        
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
