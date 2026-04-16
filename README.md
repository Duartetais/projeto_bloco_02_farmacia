<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="100"/>
  <img src="https://raw.githubusercontent.com/Kong/insomnia/develop/packages/insomnia-ui/assets/icon.png" width="100"/>
</p>

# 💊 Farmácia - Projeto Final Bloco 02

Repositório destinado ao desenvolvimento de um sistema de Comércio Eletrônico para uma Farmácia, utilizando o framework **NestJS**. Este projeto faz parte do processo avaliativo da Generation Brasil.

## 🚀 Tecnologias e Ferramentas
* **Ambiente:** Fedora Linux 🐧
* **Linguagem:** TypeScript
* **Framework:** NestJS
* **ORM:** TypeORM
* **Banco de Dados:** MySQL
* **Ferramentas:** VS Code, Insomnia, MySQL Workbench
* **CI/CD:** GitHub Actions (Build Automation)

## 🛠️ Funcionalidades: Recurso Categoria
O projeto implementa o CRUD completo para a entidade **Categoria**, atendendo aos 6 métodos obrigatórios:

1.  **Listar todas as categorias:** `GET /categorias`
2.  **Consultar por ID:** `GET /categorias/:id`
3.  **Consultar por Descrição:** `GET /categorias/descricao/:descricao` (Busca com operador LIKE)
4.  **Cadastrar nova categoria:** `POST /categorias` (Com validações via DTO)
5.  **Atualizar categoria existente:** `PUT /categorias`
6.  **Deletar categoria:** `DELETE /categorias/:id`

## ⚙️ Diferenciais do Projeto
* **ValidationPipe:** Configurado globalmente para garantir que as requisições sigam as regras de negócio.
* **DTO (Data Transfer Object):** Implementado para segurança e validação dos dados de entrada.
* **Configuração em Linux:** Ambiente de desenvolvimento totalmente configurado e otimizado no Fedora.

## 📦 Como executar a aplicação
1. Clone este repositório:
   ```bash
   git clone [https://github.com/Duartetais/projeto_bloco_02_farmacia.git](https://github.com/Duartetais/projeto_bloco_02_farmacia.git)
2. Instale as dependências:   cd projeto_bloco_02_farmacia
   npm install
3. Configure as credenciais do seu MySQL no arquivo src/app.module.ts.
4. Inicie o servidor:
      npm run start:dev

## 🏁 Como subir alterações (Git Flow)

Para atualizar o repositório após edições:
Bash

git add .
git commit -m "docs: melhorando documentação do README"
git push origin 02_CRUD_Categoria_novo
  