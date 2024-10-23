const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:210371@localhost:5432/produtos', {
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão ao banco de dados realizada com sucesso.');
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
