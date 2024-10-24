const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para criar um novo produto
router.post('/produtos', produtoController.createProduto);

// Rota para listar todos os produtos
router.get('/produtos', produtoController.getAllProdutos);

// Rota para buscar um produto pelo ID
router.get('/produtos/:id', produtoController.getProdutoById);

// Rota para atualizar um produto pelo ID
router.put('/produtos/:id', produtoController.updateProduto);

// Rota para deletar um produto pelo ID
router.delete('/produtos/:id', produtoController.deleteProduto);

module.exports = router;
