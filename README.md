<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="100"/>
  <img src="https://raw.githubusercontent.com/Kong/insomnia/develop/packages/insomnia-ui/assets/icon.png" width="100"/>
</p>

<h1 align="center">💊 Projeto Farmácia - NestJS</h1>

---

## 📌 Descrição

API desenvolvida com NestJS para gerenciamento de categorias de um sistema de e-commerce de farmácia.

---

## 🚀 Funcionalidades

- CRUD completo de Categoria (Create, Read, Update, Delete)
- Busca por ID
- Busca por descrição (ILIKE)
- Integração com banco de dados MySQL
- Validação com DTO (class-validator)
- Tratamento de erros com NotFoundException
- Uso de variáveis de ambiente (.env)

---

## 🔗 Endpoints da API

### 📍 Listar todas as categorias

GET /categorias


---

### 📍 Buscar categoria por ID

GET /categorias/:id


---

### 📍 Buscar por descrição

GET /categorias/descricao/:descricao


---

### 📍 Criar categoria

POST /categorias


Exemplo de requisição:
```json
{
  "descricao": "Medicamentos"
}

📍 Atualizar categoria

PUT /categorias/:id

Exemplo de requisição:

{
  "descricao": "Higiene"
}

📍 Deletar categoria

DELETE /categorias/:id


🛠 Tecnologias utilizadas

NestJS
TypeORM
MySQL
Insomnia
Class Validator
Node.js


⚙️ Como executar o projeto

1. Instalar dependências
npm install
2. Rodar o projeto
npm run start:dev
🔐 Configuração do ambiente (.env)

Crie um arquivo .env na raiz do projeto:

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=****** 
DB_NAME=farmacia


🧪 Testes da API

Os testes foram realizados utilizando o Insomnia, validando todos os endpoints:

GET
POST
PUT
DELETE

📦 Estrutura do Projeto

Controller: gerenciamento das rotas
Service: regras de negócio
DTO: validação de dados
Entity: estrutura da tabela no banco


👩‍💻 Desenvolvedora

Taís Duarte