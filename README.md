# Produto API 
> Aplicação desenvolvida para a matéria de Desenvolvimento de Aplicativos

## Descrição
A aplicação apresenta uma implementação do backend com controles para um produto. O controle para o produto apresenta as seguintes operações:
    - Incerir um produto
    - Listar todos os produtos 
    - Listar um produto por identificador (id)
    - Alterar um produto por identificador (id)
    - Deletar um produto por identificador (id)

As tecnologias utilizadas nessa aplicação foram:
    - Node.js
    - Express
    - Postegree

## Índice
- Instalação
- Uso
- Licença
- Autore

## Instalação
  
 
Clone o repositório com o seguinte comando:

```bash
git clone https://github.com/femedici/produto-api.git
```

Na sequência, acesse o diretório do repositório clonado e instale as dependências do projeto, com o seguinte comando:

```bash
npm install
```

Na sequência é necessário criar um arquivo `.env`. O modelo pode ser encontrado no arquivo `.env.example` localizado na raiz do projeto.

Se você rodar o sistema em modo local (servidores backend e frontend na mesma máquina), apenas crie uma cópia do arquivo `.env.example` para `.env`

```bash
cp .env.example .env
```

Com o .env devidamente configurado, é necessário executar o comando para criar o modelo do banco de dados:

```bash
npx prisma migrate dev
```

Você será solicitado a dar um nome para a nova migration. Escolha um nome que lhe for conveniente, como por exemplo, `carona`.

Opcionalmente, podemos povoar o banco de dados com dados sintéticos:

```bash
npm run seed
```

Em seguida, use o seguinte comando para inicializar a aplicação. 

```bash
npm run start:dev
```

Os dados sintéticos do banco possuem seis usuários (numerados de 1 a 6) com a mesma senha para acesso ao sistema, no seguinte padrão:

`Nome: Usuário 1`
`Email: usuario1@gmail.com`
`RA: a0000001`
`Senha: Abcde1234.`

Para fazer login, escolha um usário utilize o email e a senha provida para acessar o sistema pelo frontend.

            ra: 'a0000001',
            password: 'Abcde1234.'


## Licença
O projeto utiliza a Licença de Software Livre MIT.

## Autor
  - Felipe Augusto Medici de Oliveira - felipeoliveira.2001@alunos.utfpr.edu.br
  - [@femedici](https://github.com/femedici) 