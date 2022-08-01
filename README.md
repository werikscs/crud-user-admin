# CRUD de usuário + permissão de administrador

Essa aplicação foi criada com o objetivo de exercitar conceitos de REST API, Node.js, Express e organização de um projeto. É desenvolvido um CRUD de usuário com regras de acesso para usuários que são administradores. Um array simulou o banco de dados.

É possívelr cria um usuário, fazer login, listar todos os usuários, listar os dados do usuário logado, atualizar os dados de um usuário e excluir os dados de um usuário. O usuário tem permissão apenas de editar e excluir seu próprio usuário. Um usuário com permissão de administrador pode editar e excluir qulquer usuário.

#

## **Funcionalidades**

**POST:** /users

- Criação de usuários.

**POST:** /login

- Gera um token JWT recebendo email e password no corpo da requisição como JSON.

**GET:** /users

- Lista todos os usuários

**GET:** /users/profile

- Retorna os dados do usuário logado (usuário a qual pertence o token que será necessário neste endpoint)

**PATCH:** /users/>uuid<

- Atualiza os dados de um usuário

**DELETE** /users/>uuid<

- Deleta usuários do banco

#

## **Tecnologias**

- Javascript
- Node.js

#

## **Bibliotecas**

- express
- bcryptjs
- jsonwebtoken
- uuid
