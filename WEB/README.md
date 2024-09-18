# CRUD Backend API

## Descrição
Este projeto é a API backend para um sistema CRUD de gerenciamento de usuários. Desenvolvido em Node.js com Express e Prisma, a API permite criar, ler, atualizar e excluir usuários em um banco de dados MongoDB.

## Estrutura do Projeto

- **Backend**: Desenvolvido em Node.js com Express.
- **Banco de Dados**: MongoDB, acessado via Prisma.
- **Funcionalidades**: Endpoints RESTful para operações CRUD de usuários.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma
- MongoDB

## Instalação e Execução

1. **Clone o repositório**

   ```bash
   git clone <https://github.com/BrunoMoretz-Sohn/user-management.git>

2. **Navegue até o diretório do backend**

  cd caminho/para/o/backend

3. **Instale as dependências**

  npm install

4. **Configure as variáveis de ambiente**

  Crie um arquivo .env na raiz do projeto com o seguinte conteúdo: 
  DATABASE_URL=mongodb://localhost:27017/your_database_name

5. **Inicie o servidor**

  npm start

## Endpoints

- POST /users: Cria um novo usuário.
- GET /users: Lista todos os usuários.
- GET /users/
  : Obtém um usuário pelo ID.
- PUT /users/
  : Atualiza um usuário pelo ID.
- DELETE /users/
  : Deleta um usuário pelo ID.

```markdown

# CRUD Frontend

## Descrição
Este projeto é o frontend para um sistema CRUD de gerenciamento de usuários. Desenvolvido com React e Vite, o frontend inclui componentes para busca, cadastro e edição de usuários, e se integra com a API backend usando Axios.

## Estrutura do Projeto

- **Frontend**: Desenvolvido com React e Vite.
- **Integração com Backend**: Axios para comunicação com a API.
- **Funcionalidades**: Formulários para cadastro e edição, pesquisa e visualização de usuários.

## Tecnologias Utilizadas

- React
- Vite
- Axios
- ESLint

## Instalação e Execução

1. **Clone o repositório**

   ```bash
   git clone <https://github.com/BrunoMoretz-Sohn/user-management.git>

2. **Navegue até o diretório do frontend**

  cd caminho/para/o/frontend

3. **Instale as dependências**

  npm install

4. **Inicie o servidor de desenvolvimento**

  npm run dev

- O frontend estará disponível em http://localhost:3000.

## Funcionalidades

- Cadastro de Usuários: Formulário para adicionar novos usuários.
- Edição de Usuários: Formulário para editar informações de usuários existentes.
- Busca e Visualização: Interface para pesquisar e visualizar usuários.