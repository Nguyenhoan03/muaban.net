'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_dodientu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category_dodientu.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category_dodientu',
  });
  return category_dodientu;
};