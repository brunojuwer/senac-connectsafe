# PROJETO INTEGRADOR: DESENVOLVIMENTO DE SISTEMAS ORIENTADO A DISPOSITIVOS MÓVEIS E BASEADOS NA WEB

## Integrantes do grupo

- Bruno Juwer
- George Victor Lira Gomes
- Jhonny Tsuyoshi de Aguiar Endo
- Marina Amaral
- Rafael Augusto Masson Fontes
- Rodrigo Ferreira Deges

<br />

## Prova de coneceito definida
- Cadastrar usuários tanto membros de famílias como cuidadores.
- Fazer login na aplicação.
- Usuário membro da família deve conseguir listar os cuidadores.
- Usuário membro da família deve conseguir solicitar por um cuidador.
- Usuário membro da família deve conseguir ver o status das solicitações que fez.
- Usuário cuidador deve conseguir listar, aceitar e recusar uma solicitação.
- Usuários devem conseguir fazer logoff da aplicação.
- Usuários devem conseguir editar as informações pessoais.


## ConnectSafe

Sistema web para conexão entre Famílias e Cuidadores, desenvolvido com AdonisJS, SQLite e autenticação integrada.

---

### :rocket: Tecnologias utilizadas

- Typescript
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

<br />

-------

Schema do banco de dados

<img width="759" height="449" alt="image" src="https://github.com/user-attachments/assets/e672bfd4-efa0-445c-bdde-776f2f2c573a" />

-------


TELAS DO PROJETO

- Tela de login
  
<img width="1592" height="1062" alt="Screenshot 2026-08-25 205235" src="https://github.com/user-attachments/assets/073233c4-9eeb-41cf-8284-646da1e5c397" />

-------

- Tela de login falha

<img width="1363" height="961" alt="Screenshot 2026-08-25 205254" src="https://github.com/user-attachments/assets/222fc24a-b450-421b-b73c-3977f51b02cc" />

-------

- Tela de registro

<img width="1422" height="979" alt="Screenshot 2026-08-25 205314" src="https://github.com/user-attachments/assets/ca84851d-db9e-4c98-8b4b-37f6b4c24511" />

-------

- Tela de registro falha
  
<img width="1308" height="1031" alt="Screenshot 2026-08-25 205328" src="https://github.com/user-attachments/assets/66e2d6c8-9a36-4ceb-a3b6-395c1ba57e71" />

-------

- Tela principal do familiar
  
<img width="2528" height="1214" alt="Screenshot 2026-08-25 205349" src="https://github.com/user-attachments/assets/4f360450-5c32-4fbb-a98e-2db79e38f55a" />

-------

- Tela de solicitações do familiar

<img width="2541" height="1233" alt="Screenshot 2026-08-25 205402" src="https://github.com/user-attachments/assets/e2df3ffe-5fe9-424a-a914-582c128c0e16" />

-------

- Tela edição do familiar

<img width="2553" height="1219" alt="Screenshot 2026-08-25 205420" src="https://github.com/user-attachments/assets/88b10ae9-65d5-43fc-a659-8c0085d48ce7" />

-------

- Tela principal do cuidador
  
<img width="2548" height="1157" alt="Screenshot 2026-08-25 205537" src="https://github.com/user-attachments/assets/62a036c9-449c-4227-b27c-d1107ea94461" />

-------

- Tela edição do cuidador
  
<img width="2538" height="1114" alt="Screenshot 2026-08-25 210253" src="https://github.com/user-attachments/assets/b250021d-0300-4efc-8a81-9353ce26104e" />

