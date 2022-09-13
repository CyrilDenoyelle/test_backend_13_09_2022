const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const { DataTypes } = Sequelize;

  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password_hash: {
        type: DataTypes.STRING,
      },
    },
    {}
  );

  const Product = sequelize.define(
    "Product",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      label: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
      thumbnail_url: {
        type: DataTypes.STRING,
      },
      visible_public: {
        type: DataTypes.INTEGER,
      },
      visible_authenticated: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  );

  const Category = sequelize.define(
    "Category",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      index: {
        type: DataTypes.INTEGER,
      },
      label: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {}
  );

  return {
    User,
    Product,
    Category,
  };
};
