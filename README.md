
# 💊 Farmácia API - NestJS Backend

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
</p>

> 🎓 **Projeto de Conclusão - Bloco 02** | Bootcamp Java Full Stack [Generation Brasil](https://brazil.generation.org/)  
> *Desenvolvido durante minha transição de carreira da Segurança do Trabalho para o Desenvolvimento de Software.*

---

## 📋 Sobre o Projeto

API RESTful completa para gestão de e-commerce farmacêutico. Este projeto representa um salto técnico em relação aos anteriores, focando em **arquitetura enterprise**, validações robustas e automação.

**Evolução do aprendizado:** ➡️ Do projeto [Loja-de-Game](https://github.com/Duartetais/Loja-de-Game) para esta solução que implementa **DTOs, ValidationPipe, GitHub Actions e Git Flow profissional**.

---

## 🏗️ Arquitetura & Padrões

O projeto segue uma estrutura modular para facilitar a manutenção e escalabilidade:

```text
src/
├── categoria/
│   ├── dto/                # Data Transfer Objects (Validação de entrada)
│   ├── entities/           # Modelos TypeORM (Mapeamento do Banco)
│   ├── categoria.controller.ts
│   ├── categoria.service.ts
│   └── categoria.module.ts
├── produto/                # Estrutura similar à categoria
└── main.ts                 # Configuração do ValidationPipe Global
```

Destaques Técnicos:

    ✅ DTO Pattern: Separação clara entre a entrada de dados e a persistência.

    ✅ ValidationPipe: Validação automática com class-validator.

    ✅ Injeção de Dependência: Uso extensivo do motor do NestJS para desacoplamento.

⚡ Funcionalidades
💊 Categoria
Método	Endpoint	Descrição
GET	/categorias	Lista todas as categorias
GET	/categorias/:id	Busca categoria por ID
GET	/categorias/descricao/:descricao	Busca por termo (LIKE)
POST	/categorias	Cadastra nova categoria (com validação DTO)
PUT	/categorias	Atualiza categoria existente
DELETE	/categorias/:id	Remove categoria

🚀 Como Executar

    Clone o repositório:
    Bash

    git clone [https://github.com/Duartetais/projeto_bloco_02_farmacia.git](https://github.com/Duartetais/projeto_bloco_02_farmacia.git)

    Instale as dependências:
    Bash

    npm install

    Configure o banco de dados:
    Edite o arquivo src/app.module.ts ou configure seu arquivo .env com as credenciais do MySQL.

    Rode a aplicação:
    Bash

    npm run start:dev
    ```
🔄 Git Flow Utilizado

Neste projeto, apliquei o fluxo de trabalho profissional:

    Criação de feature/branches.

    Commits Semânticos (feat:, fix:, docs:).

    Abertura de Pull Requests para revisão antes do merge na branch principal.

## 🔗 **Conecte-se Comigo**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Duartetais)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Duartetais)
