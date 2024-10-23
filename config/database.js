const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('meu_banco', 'meu_usuario', 'minha_senha', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
