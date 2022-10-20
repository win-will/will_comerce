const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;


// references: {
//   model: 'product',
//   key: 'id',
// },
// onUpdate: 'CASCADE',
// onDelete: 'CASCADE',
// references: {
//   model: 'tag',
//   key: 'id',
// },
// onUpdate: 'CASCADE',
// onDelete: 'CASCADE',
