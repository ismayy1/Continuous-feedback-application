const sequelize = require("../sequelize");
const{DataTypes} = require("sequelize");

const Professor = sequelize.define("Professor", {
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [3, 10],
        msg: 'Name length must be between 3 and 10 characters!',
      }
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  birthYear: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1940,
    },
  },
  salary: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    }
  }
});

module.exports = Professor;