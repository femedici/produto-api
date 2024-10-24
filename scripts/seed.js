require('dotenv').config(); // Carrega as variáveis do arquivo .env
const sequelize = require('./config/database'); // Ajuste o caminho para o seu arquivo de conexão
const Produto = require('./models/produto'); // Ajuste o caminho para o seu modelo de Produto

const produtos = [
  { descricao: 'Produto 1', preco: 10.00, estoque: 100, data: new Date() },
  { descricao: 'Produto 2', preco: 20.00, estoque: 200, data: new Date() },
  { descricao: 'Produto 3', preco: 30.00, estoque: 300, data: new Date() },
  { descricao: 'Produto 4', preco: 40.00, estoque: 400, data: new Date() },
  { descricao: 'Produto 5', preco: 50.00, estoque: 500, data: new Date() },
];

const seedDatabase = async () => {
  try {
    await sequelize.authenticate(); // Conecta ao banco de dados
    console.log('Conexão ao banco de dados realizada com sucesso.');

    // Sincroniza o modelo com o banco de dados (se necessário)
    await Produto.sync();

    // Cria os produtos no banco de dados
    for (const produto of produtos) {
      await Produto.create(produto);
      console.log(`Produto criado: ${produto.descricao}`);
    }

    console.log('Todos os produtos foram criados com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ou criar os produtos:', error);
  } finally {
    await sequelize.close(); // Fecha a conexão
  }
};

seedDatabase();
