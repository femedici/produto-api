const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Usar as rotas de produtos
app.use('/api', produtoRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
