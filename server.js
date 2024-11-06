require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Importa o CORS
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do CORS
app.use(cors()); // Permite todas as origens

app.use(express.json());
app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
