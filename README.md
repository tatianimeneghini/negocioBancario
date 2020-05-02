# Negócio Bancário

A aplicação de Negócio Bancário, realizado por Tatiani Meneghini da Silva.

## Estrutura
- back-end: 
    - [X] Servidor;
    - [X] Banco de dados;
    - [X] Regras de negócio;
    - [ ] Autenticação.
- front-end: 

### Primeiros passos
- Criar arquivo server.js (servidor);
- Criar pasta src > arquivo custom-express.js (inicializar o express);
- Criar o padrão de arquitetura de software (MVC): 
    > arquivo routes > route.js;
    > arquivo infra > database.js;
    > arquivo controllers > controller.js.
- Criar arquivo Dao (encapsula e realiza as operações, bem como separa as regras de negócio das regras de acesso a banco de dados) com as Regras de negócio para bank, user, agency, client e currentAccount na pasta infra;
- Conectar a Database com SQLite3 (banco de dados em SQLite3);
- Criar database com todos as tabelas de Bank, User, Agency, Client e Current Account.

### Instações
- `<npm init>`: inicializar package.json.
- `<npm install sqlite3 --save>`: banco de dados estruturados (SQL).
- `<npm install>`: instalar o pacote npm.
- `<npm install node>`: instala package-lock.json.
- `<npm install express>`: criar rotas e manipular dados input e output.
- `<npm install nodemon>`: atualiza automaticamente.
- `<npm install body-parser>`: permite que os usuários externos possam enviar informações para a aplicação node.js.
- `<npm install marko>`: biblioteca que permite criar o código mais próximo do HTML, utilizando apenas tags.
- `<npm install method-override>`: implementa requisições no método PUT de RESTful em express.

##### Bug do SQLite3
Excluir o package-lock.json e node_modules, instalar <npm install sqlite3 --save> e <npm install> novamente para debugar.

### Funcionamento
- Users: admin, client e agency;
- Funcionalidades: autenticar users (admin, bank, agency e client) e transação conta corrente.

#### Endpoints
GET
    - [X] Bancos/Banks;
    - [X] Usuários/Users;
    - [X] Agência/Agency;
    - [X] Clientes/Clients;
    - [X] Conta corrente/Current Account.
POST
    - [X] Bancos/Banks;
    - [X] Usuários/Users;
    - [X] Agência/Agency;
    - [X] Clientes/Clients;
    - [X] Conta corrente/Current Account.
DELETE
    - [X] Bancos/Banks;
    - [X] Usuários/Users;
    - [X] Agência/Agency;
    - [X] Clientes/Clients;
    - [X] Conta corrente/Current Account.