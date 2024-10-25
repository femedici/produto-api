// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

const { Client } = require('pg');

// Configuração usando variáveis de ambiente
const client = new Client({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conectado ao banco de dados 1');
  }
});

module.exports = client;
