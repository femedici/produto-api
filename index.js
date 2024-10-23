const express = require('express');
const app = express();
const produtoRoutes = require('./routes/routes');
const sequelize = require('./config/database');

// Middleware para permitir JSON
app.use(express.json());

// Usar as rotas de produto
app.use('/api', produtoRoutes);

// Sincronizar com o banco de dados e iniciar o servidor
sequelize.sync()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
  });
