const { DataTypes } = require('sequelize');
const conection = require('../db/conection');

const tarefas = conection.define('tarefas', {
  task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  done: {
    type: DataTypes.BOOLEAN
  }
})

module.exports = tarefas;