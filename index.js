const express = require('express');
const seedDatabase = require('./scripts/seed'); // O script para popular o banco
const produtoRoutes = require('./produto'); // Importa as rotas do produto

const app = express();
app.use(express.json());
app.use('/', produtoRoutes); // Usa as rotas de produtos com o prefixo /produtos

// Iniciar o servidor e popular o banco de dados
const startApp = async () => {
  try {
    await seedDatabase(); // Executa o seed ao iniciar
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  } catch (error) {
    console.error('Erro ao iniciar o aplicativo:', error);
  }
};

startApp();
