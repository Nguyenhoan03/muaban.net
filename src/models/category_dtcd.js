'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_dtcd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category_dtcd.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category_dtcd',
  });
  return category_dtcd;
};