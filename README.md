## 📋 Challenge D3Set Back-end

Projeto solicitado no desafio, sistema onde dá para cadastrar, editar, excluir, listar pessoas!

## O que foi utilizado no projeto:

- Typescript
- Express
- Postgress
- Prisma
- Nodejs

### Regras de negócio:

- [x] Cadastrar pessoa
- [x] Deletar pessoa
- [x] Listar pessoas 
- [x] Listar pessoas por filtro (telefone)
- [x] Editar pessoa

### Link do repositório Client (Front-end)

🔗 [Front-end](https://github.com/jrsousadev/d3set-challenge-fullstack-web)

### Deploy

🔗 [Conhecer aplicação](https://challenge-d3set-api.herokuapp.com/)

### Iniciando o Projeto

**1-** Clone repository and install dependencies.
```sh
# install dependencies
> yarn
# or
> yarn install

# copy .env file
> cp .env.example .env

# start project
> yarn dev

# open in
http://localhost:9000/
```


### Generating the migration
```sh
> yarn prisma migration dev
```
