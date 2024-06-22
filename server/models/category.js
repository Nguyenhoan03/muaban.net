'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: 'category_child_id', as: 'ChildProducts' });
      Category.hasMany(models.Product, { foreignKey: 'category_id', as: 'ParentProducts' });
    }
    
  }

  Category.init({
    namecategory: DataTypes.STRING,
    parent_category: DataTypes.INTEGER,
    image: DataTypes.STRING,
    // subcategory_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
  });

  return Category;
};
