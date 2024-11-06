const db = require('../config/database');

class Product {
  constructor(id, descricao, preco, estoque, data) {
    this.id = id;
    this.descricao = descricao;
    this.preco = preco;
    this.estoque = estoque;
    this.data = data;
  }

  static async findAll() {
    const result = await db.query('SELECT * FROM produtos');
    return result.rows;
  }

  static async findById(id) {
    const result = await db.query('SELECT * FROM produtos WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create({ descricao, preco, estoque, data }) {
    const result = await db.query(
      'INSERT INTO produtos (descricao, preco, estoque, data) VALUES ($1, $2, $3, $4) RETURNING *',
      [descricao, preco, estoque, data]
    );
    return result.rows[0];
  }

  static async update(id, { descricao, preco, estoque, data }) {
    const result = await db.query(
      'UPDATE produtos SET descricao = $1, preco = $2, estoque = $3, data = $4 WHERE id = $5 RETURNING *',
      [descricao, preco, estoque, data, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await db.query('DELETE FROM produtos WHERE id = $1', [id]);
  }
}

module.exports = Product;
