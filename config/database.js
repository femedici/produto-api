const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carrega as variáveis do arquivo .env

// Configurar a URL de conexão ao PostgreSQL usando variáveis de ambiente
const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
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
