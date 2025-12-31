const { DataTypes } = require('sequelize');
const conection = require('../DataBase/conection');

const tasks = conection.define('tasks', {
  task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports = tasks;