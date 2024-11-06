# Produto API 
> Aplicação desenvolvida para a matéria de Desenvolvimento de Aplicativos

## Pré-requisitos
- [NodeJS](https://nodejs.org/en)
- [Postgree SQL](https://www.postgresql.org/download/)
  
## Descrição
A aplicação apresenta uma implementação do backend com controles para um produto. O controle para o produto apresenta as seguintes operações:
- Incerir um produto
-  Listar todos os produtos 
- Listar um produto por identificador (id)
-  Alterar um produto por identificador (id)
-  Deletar um produto por identificador (id)

As tecnologias utilizadas nessa aplicação foram: **Node.js - Express - Postegree**

## Índice
- Instalação
- Uso
- Licença
- Autor

## Instalação
  
### **Configuração do ambiente**

Clone o repositório com o seguinte comando:

```bash
git clone https://github.com/femedici/produto-api.git
```

Na sequência, acesse o diretório do repositório clonado e instale as dependências do projeto, com o seguinte comando:

```bash
npm install
npm i express
```

Na sequência é necessário criar um arquivo `.env`. O modelo pode ser encontrado no arquivo `.env.example` localizado na raiz do projeto.

Se você rodar o sistema em modo local (servidores backend e frontend na mesma máquina), apenas crie uma cópia do arquivo `.env.example` para `.env`

**Importante!** Altere as informações no arquivo  `.env` com as configurações do seu ambiente de banco de dados **Postgree**

### **Configuração Postgree**

É necessário para o funcionamento da aplicação, a criação de uma Database nomeada preferencialmente 'produtos' (caso nao opte por esse nome, pode ser alterado no .env). 
Junto com a configuração do login e senha de acesso ao postgree, que são referenciados novamente no arquivo  `.env` 


## Uso da aplicação

Após a configuração correta do ambiente, use o seguinte comando para inicializar a aplicação:

```bash
npm start
```

Após a inicialização,, a aplicação junto da sua inicialização, cria 5 produtos e popula o **banco de dados** referenciado no arquivo  `.env`.

Então, a API estará disponível localmente na porta 3000, e você poderá interagir com os produtos através dos seguintes endpoints:

*É possivel utilizar os endpoints com uma interface grafica como o **Postman!***

```bash
GET - Retorna todos os produtos

http://localhost:3000/produtos 

GET - Retorna o produto pelo ID

http://localhost:3000/produto/:id

DELETE - Deleta um produto por meio do ID

http://localhost:3000/produtos/:id
```

Para criar um novo produto com os dados fornecidos no corpo da requisição. 

```bash
POST - Cria 

http://localhost:3000/produto
```
**Corpo da requisição `(JSON)`**

```json
{
  "descricao": "Nome do Produto",
  "preco": 100.00,
  "estoque": 10,
  "data": 10/10/2010:00:00:00
}
```

Para alterar um produto, basta passar o seu ID e junto no corpo da requisição, os dados alterados. 

```bash
PUT - Altera as informações de um produto pelo ID

http://localhost:3000/produto/:id
```
**Corpo da requisição `(JSON)`**

```json
{
  "descricao": "Nome do Produto NOVO!",
  "preco": 200.00,
  "estoque": 20,
  "data": 10/10/2010:00:00:00
}
```

## Licença
O projeto utiliza a Licença de Software Livre MIT.

## Autor
  - Felipe Augusto Medici de Oliveira - felipeoliveira.2001@alunos.utfpr.edu.br
  - [@femedici](https://github.com/femedici) 
