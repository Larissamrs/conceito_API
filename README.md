## Introdução à API: GET

**Professora: Paula Allemand**

**Aluna: Larissa Maria**

## Desafio proposto
<p>Realizar uma API utilizando apenas o método GET de acordo com a demanda de negócio informada abaixo.</p>

## Regras

- Todas as rotas serão de consulta e leitura, logo, todas se referem ao método GET;
- Todas as rotas devem ter tratamentos de erros caso o cliente envie valores inválidos;
- Retornar todas os estados e suas cidades;
- Retornar todos os estados e siglas, sem as cidades;
- Pesquisa por sigla que retorne o nome do estado, sigla e suas cidades;
- Pesquisa por sigla que retorne somente as cidades do estado pesquisado;

As rotas das demandas de negócio:

### [GET] "/estados/todos"

Retorna lista completa de estados-cidades

### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica

O exercício para casa devera ser feito dentro da pasta servidor-para-casa. Lá você devera criar um novo servidor e configurar sua porta e criar essas duas rotas. 

```bash
		\--📂 On11-TodasEmTech-s7-API-GET
			|
			\--📂meu-primeiro-servidor
			|
			\--📂meu-primeiro-servidor
			|				
			**\--📂servidor-para-casa
			    |   server.js
			    📂---data
			    |       estados-cidades.json**
```


## Tecnologias utilizadas
- [VsCode](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download/)
- [Postman](https://www.postman.com/downloads/)

## Comandos utilizados

Para iniciar pela primeira vez um projeto com node.js

    npm init -y

Para instalar dependências com npm

    npm install express
    npm install nodemon

Para rodar o servidor

    npm start

Quando usamos o nodemon devemos modificar nossos scripts de start dentro do package.json

    "start": "nodemon server.js"

Para instalar dependências de um projeto com node.js que já foi iniciado

    npm install











