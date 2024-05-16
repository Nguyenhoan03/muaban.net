'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      diachi: {
        type: Sequelize.STRING
      },
      descripts: {
        type: Sequelize.TEXT
      },
      nhatuyendung: {
        type: Sequelize.STRING
      },
      loaihinhcv: {
        type: Sequelize.STRING
      },
      luongtoithieu: {
        type: Sequelize.STRING
      },
      kinhnghiem: {
        type: Sequelize.STRING
      },
      tencty: {
        type: Sequelize.STRING
      },
      hocvantoithieu: {
        type: Sequelize.STRING
      },
      nganhnghe: {
        type: Sequelize.STRING
      },
      hinhthuctraluong: {
        type: Sequelize.STRING
      },
      luongtoida: {
        type: Sequelize.STRING
      },
      gioitinh: {
        type: Sequelize.STRING
      },
      dotuoi: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      category_child_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};