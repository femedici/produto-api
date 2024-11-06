const Product = require('../models/Product');

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar produtos', error });
    }
  }

  static async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar produto', error });
    }
  }

  static async createProduct(req, res) {
    try {
      const { descricao, preco, estoque, data } = req.body;
      const newProduct = await Product.create({ descricao, preco, estoque, data });
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar produto', error });
    }
  }

  static async updateProduct(req, res) {
    try {
      const { descricao, preco, estoque, data } = req.body;
      const updatedProduct = await Product.update(req.params.id, { descricao, preco, estoque, data });
      if (updatedProduct) {
        res.json(updatedProduct);
      } else {
        res.status(404).json({ message: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar produto', error });
    }
  }

  static async deleteProduct(req, res) {
    try {
      await Product.delete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir produto', error });
    }
  }
}

module.exports = ProductController;
