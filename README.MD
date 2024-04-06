# Formulário de Cadastro com API e Banco de Dados

Este projeto consiste em uma aplicação simples para cadastro de usuários através de um formulário web, onde os dados inseridos são enviados para uma API e armazenados em um banco de dados MySQL.

## Funcionalidades

- **Formulário de Cadastro:** Página HTML contendo um formulário com campos para nome e email.
- **Validação de Email:** Verificação do formato de email antes do envio dos dados para a API.
- **API em Node.js:** Utilização do framework Express.js para criar uma API que recebe os dados do formulário.
- **Banco de Dados MySQL:** Armazenamento dos dados de usuários em uma tabela do banco de dados.

## Tecnologias Utilizadas

- **Frontend:** HTML, JavaScript (Fetch API)
- **Backend:** Node.js, Express.js
- **Banco de Dados:** MySQL

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- Node.js: [Download Node.js](https://nodejs.org/)
- MySQL Server: [Download MySQL](https://www.mysql.com/)

## Instalação e Execução

1. **Configuração do Banco de Dados:**
   - Crie um banco de dados MySQL e uma tabela chamada `usuarios` com os campos `id` (INT, auto incrementado, primary key), `nome` (VARCHAR) e `email` (VARCHAR).
   - Configure as credenciais do banco de dados (usuário, senha, nome do banco) no arquivo `server.js`.

2. **Configuração da API:**
   - Abra o terminal na pasta do projeto e execute o comando `npm install` para instalar as dependências.
   - Inicie a API utilizando o comando `node server.js`. O servidor irá rodar na porta 3000 por padrão.

3. **Execução da Aplicação Frontend:**
   - Abra o arquivo `index.html` em um navegador web.

4. **Testando a Aplicação:**
   - Preencha o formulário com um nome e um email válido e clique em "Enviar".
   - Verifique se os dados foram corretamente inseridos na tabela `usuarios` do banco de dados.

![Sem título](https://github.com/MatheusZyzz/Estagio/assets/95886821/c158a1bd-c9c6-4726-9895-60ed169a823f)

![dois](https://github.com/MatheusZyzz/Estagio/assets/95886821/3b2a6247-1920-4dc8-bd47-af75b64dd0f3)


## Estrutura do Projeto
```
  projeto/
  │
  ├── index.html # Página HTML do formulário 
  ├── script.js # Script JavaScript para interação com a API
  └── server.js # Código da API em Node.js
```

## Melhorias Futuras

Este projeto é um exemplo básico para demonstrar o fluxo de envio de dados de um formulário para uma API e banco de dados. Algumas melhorias que podem ser implementadas incluem:

- Adição de mais campos ao formulário.
- Implementação de autenticação e autorização na API.
- Adição de validações mais robustas nos campos do formulário.
- Utilização de um ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados.

## Contribuindo

Contribuições são bem-vindas! Para sugestões, melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.


