const { DataTypes } = require('sequelize');
const conection = require('../DataBase/conection');

const task = conection.define(task, {
  task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    
  }
})