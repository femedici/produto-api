const client = require('../config/database');

// Produtos a serem adicionados
const produtos = [
  { descricao: 'Produto 1', preco: 10.00, estoque: 100, data: new Date() },
  { descricao: 'Produto 2', preco: 20.00, estoque: 200, data: new Date() },
  { descricao: 'Produto 3', preco: 30.00, estoque: 300, data: new Date() },
  { descricao: 'Produto 4', preco: 40.00, estoque: 400, data: new Date() },
  { descricao: 'Produto 5', preco: 50.00, estoque: 500, data: new Date() },
];

// Função para criar a tabela e inserir os produtos
const seedDatabase = async () => {
  try {
    // Criação da tabela 'produtos'
    await client.query(`
      CREATE TABLE IF NOT EXISTS produtos (
        id SERIAL PRIMARY KEY,
        descricao VARCHAR(255) NOT NULL,
        preco DECIMAL NOT NULL,
        estoque INTEGER NOT NULL,
        data TIMESTAMP WITH TIME ZONE
      );
    `);

    // Inserir os produtos
    for (const produto of produtos) {
      await client.query(
        'INSERT INTO produtos (descricao, preco, estoque, data) VALUES ($1, $2, $3, $4)',
        [produto.descricao, produto.preco, produto.estoque, produto.data]
      );
      console.log(`Produto ${produto.descricao} criado com sucesso.`);
    }

    console.log('Todos os produtos foram criados com sucesso.');
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  } finally {
    client.end(); // Encerrar a conexão com o banco de dados
  }
};

module.exports = seedDatabase;
