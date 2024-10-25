const express = require('express');
const seedDatabase = require('./scripts/seed'); 
const produtoRoutes = require('./produto'); 

const app = express();
app.use(express.json());
app.use('/', produtoRoutes); 

const startApp = async () => {
  try {
    await seedDatabase(); 
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  } catch (error) {
    console.error('Erro ao iniciar o aplicativo:', error);
  }
};

startApp();
