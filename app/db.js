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
console.log("models", models);

module.exports = { models };
