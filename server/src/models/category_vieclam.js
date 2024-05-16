'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_vieclam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category_vieclam.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category_vieclam',
  });
  return category_vieclam;
};