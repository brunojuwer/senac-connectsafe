# PROJETO INTEGRADOR: DESENVOLVIMENTO DE SISTEMAS ORIENTADO A DISPOSITIVOS MÓVEIS E BASEADOS NA WEB

## Integrantes do grupo

- Bruno Juwer
- George Victor Lira Gomes
- Jhonny Tsuyoshi de Aguiar Endo
- Marina Amaral
- Rafael Augusto Masson Fontes
- Rodrigo Ferreira Deges

<br />

## ConnectSafe

Sistema web para conexão entre Famílias e Cuidadores, desenvolvido com AdonisJS, SQLite e autenticação integrada.

---

### :rocket: Tecnologias utilizadas

- Node.js
- AdonisJS
- Lucid ORM
- SQLite
- Edge (Template Engine do Frontend) 

---

### :package: Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- Node.js (versão 20+ recomendada)
- npm

Comandos para rodar a aplicação

- Depois de clonar o repositório é necessário acessar a pasta raiz do projeto para que os comandos abaixo funcionem Ex:
````bash
cd senac-connectsafe
````

- Instalar as dependências da aplicação
````bash
npm install
````

- Criar o arquivo .env a partir do .env.example (LINUX)
````bash
cp .env.example .env
````

- Criar o arquivo .env a partir do .env.example (WINDOWS)
````bash
copy .env.example .env
````

- Conteúdo do arquivo .env
````bash
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=gaQB4gAclOfclYvT5hJQhNXom6HrHI-A
NODE_ENV=development
SESSION_DRIVER=cookie
````

- No diretório raiz criar a pasta tmp (LINUX)
````bash
mkdir tmp
````

- No diretório raiz criar a pasta tmp (WINDOWS)
````bash
md tmp
````


- Criar as tabelas do banco de dados
````bash
node ace migration:run
````

- Rodar o servidor
````bash
npm run dev
````


