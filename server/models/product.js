'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: 'category_id' }); 
    }
  }
  Product.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    diachi: DataTypes.STRING,
    descripts: DataTypes.TEXT,
    nhatuyendung: DataTypes.STRING,
    loaihinhcv: DataTypes.STRING,
    luongtoithieu: DataTypes.STRING,
    kinhnghiem: DataTypes.STRING,
    tencty: DataTypes.STRING,
    hocvantoithieu: DataTypes.STRING,
    nganhnghe: DataTypes.STRING,
    hinhthuctraluong: DataTypes.STRING,
    luongtoida: DataTypes.STRING,
    gioitinh: DataTypes.STRING,
    dotuoi: DataTypes.STRING,
    category_id:DataTypes.INTEGER,
    category_child_id:DataTypes.INTEGER,
    loaidv:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};