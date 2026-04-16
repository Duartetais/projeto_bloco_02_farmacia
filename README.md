<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="100"/>
  <img src="https://seeklogo.com/images/I/insomnia-logo-649A7E4E0E-seeklogo.com.png" width="100"/>
</p>

<h1 align="center">💊 Projeto Farmácia - NestJS</h1>

---

## 📌 Descrição
API desenvolvida com **NestJS** para gerenciamento de categorias de um e-commerce de farmácia.

---

## 🚀 Funcionalidades
- ✔ CRUD completo de Categoria
- ✔ Busca por descrição (ILike)
- ✔ Integração com banco de dados

---

## 🔗 Endpoints

📍 Listar todas as categorias

GET /categorias

📍 Buscar por ID

GET /categorias/:id

📍 Buscar por descrição

GET /categorias/descricao/:descricao

📍 Criar categoria

POST /categorias

Exemplo:
{
  "descricao": "Medicamentos"
}
📍 Atualizar categoria

PUT /categorias

📍 Deletar categoria

DELETE /categorias/:id

🛠 Tecnologias Utilizadas
NestJS
MySQL
Insomnia
TypeORM
🧪 Testes

Testes realizados utilizando o Insomnia para validação dos endpoints.

👩‍💻 Desenvolvedora

Taís Duarte