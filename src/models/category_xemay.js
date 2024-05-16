'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_xemay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category_xemay.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category_xemay',
  });
  return category_xemay;
};