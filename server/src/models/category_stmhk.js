'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_stmhk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  category_stmhk.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category_stmhk',
  });
  return category_stmhk;
};