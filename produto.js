// produto.js
require('dotenv').config();
const express = require('express');
const { Client } = require('pg');

const router = express.Router(); // Usar o roteador do Express

// Configuração do cliente PostgreSQL usando variáveis de ambiente
const client = new Client({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Conectar ao banco de dados
client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

// Rota para criar um novo produto
router.post('/produto', async (req, res) => {
  const { descricao, preco, estoque, data } = req.body;
  try {
    const result = await client.query(
      'INSERT INTO produtos (descricao, preco, estoque, data) VALUES ($1, $2, $3, $4) RETURNING *',
      [descricao, preco, estoque, data]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o produto.' });
  }
});

// Rota para listar todos os produtos
router.get('/produtos', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM produtos');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os produtos.' });
  }
});

// Rota para buscar um produto pelo ID
router.get('/produto/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query('SELECT * FROM produtos WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o produto.' });
  }
});

// Rota para atualizar um produto
router.put('/produto/:id', async (req, res) => {
  const { id } = req.params;
  const { descricao, preco, estoque, data } = req.body;
  try {
    const result = await client.query(
      'UPDATE produtos SET descricao = $1, preco = $2, estoque = $3, data = $4 WHERE id = $5 RETURNING *',
      [descricao, preco, estoque, data, id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o produto.' });
  }
});

// Rota para deletar um produto
router.delete('/produto/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query('DELETE FROM produtos WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length > 0) {
      res.json({ message: 'Produto deletado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o produto.' });
  }
});

module.exports = router; // Exporta as rotas
