const { Sequelize } = require("sequelize");
const applyModels = require("./models");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./DATABASE.sqlite",
  define: {
    timestamps: false,
  },
});

const models = applyModels(sequelize);

module.exports = { models };
