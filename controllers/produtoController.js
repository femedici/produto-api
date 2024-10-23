const Produto = require('../models/produto');

// Criar um novo produto
exports.createProduto = async (req, res) => {
  const { descricao, preco, estoque, data } = req.body;
  try {
    const produto = await Produto.create({ descricao, preco, estoque, data });
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o produto.' });
  }
};

// Listar todos os produtos
exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os produtos.' });
  }
};

// Buscar um produto pelo ID
exports.getProdutoById = async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await Produto.findByPk(id);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o produto.' });
  }
};

// Atualizar um produto
exports.updateProduto = async (req, res) => {
  const { id } = req.params;
  const { descricao, preco, estoque, data } = req.body;
  try {
    const produto = await Produto.findByPk(id);
    if (produto) {
      await produto.update({ descricao, preco, estoque, data });
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o produto.' });
  }
};

// Deletar um produto
exports.deleteProduto = async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await Produto.findByPk(id);
    if (produto) {
      await produto.destroy();
      res.json({ message: 'Produto deletado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o produto.' });
  }
};
