const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/participant.db"
});

sequelize.sync({
  alter: true,
}).then(() => {
  console.log("All modules view syncronized successfully");
});

module.exports = sequelize;