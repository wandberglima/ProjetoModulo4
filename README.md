# :construction: API - Projeto de módulo 4 - Resilia

Projeto de Módulo 4 do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/).

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Objetivo
Esse projeto tem como objetivo criar uma API RESTful de uma Livraria, onde será possível aplicar as operações CRUD na entidade `Compras`.

## Pré-Requisitos

* Node.js  v.16.14.0
* NPM v.8.3.1

## Pacotes utilizados no projeto de Modulo
* [Express](https://www.npmjs.com/package/express) v.4.17.3
* [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
* [SQLite](https://www.npmjs.com/package/sqlite3)  v.5.0.2

## Pacotes Que serão utilizados nas proximas branchs
* [jest](https://jestjs.io/docs/getting-started)
* [SuperTest](https://www.npmjs.com/package/supertest)
* [MySQL](https://www.npmjs.com/package/mysql#install)

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone https://github.com/wandbergdelima/ProjetoModulo4.git
```
Entrando na pasta:
```
cd ProjetoModulo4
```

Instalando os pacotes:
```
npm install
```
Iniciando o servidor:
```
npm start
```

---

## Rotas implementadas

### Compras

 * **GET /Compra**
 
    Schema da resposta
    
    ```
    {
        Compras: [
            {
                "id_Compra" : <Int>,
                "nome" : <String>,
                "descricao: <String>,
                "preco" : <String>,
                "quantidade" : <Int>
            }
        ],
        erro: <Boleano>

    }
    ```
* **Exemplo de busca geral**
    
    Schema da resposta
    ```
    {
        "compra": [
            {
                "ID_COMPRAS": 1,
                "NOME": "Eugênio Oliveira",
                "DESCRICAO": "editora: Eleva, idioma: Português",
                "PRECO": "15.5",
                "QUANTIDADE": 10
            },
            {
                "ID_COMPRAS": 2,
                "NOME": "Pedro Olavo",
                "DESCRICAO": "editora: Globo, idioma: Português",
                "PRECO": "250.99",
                "QUANTIDADE": 5
            },
            {
                "ID_COMPRAS": 3,
                "NOME": "Wandberg de Lima Faria",
                "DESCRICAO": "agora vai",
                "PRECO": "105.8",
                "QUANTIDADE": 8
            },
            {
                "ID_COMPRAS": 5,
                "NOME": "thiago no back",
                "DESCRICAO": "avua foguete",
                "PRECO": "150.00",
                "QUANTIDADE": 2
            },
            {
                "ID_COMPRAS": 6,
                "NOME": "wandberg de lima faria",
                "DESCRICAO": "avua foguete",
                "PRECO": "1000.00",
                "QUANTIDADE": 10
            }
        ],
        "erro": false
    }
    ```

 * **POST /Compra**

    Schema da requisição
    ```
    {
        "nome" : <String>,
        "descricao: <String>,
        "preco" : <String>,
        "quantidade" : <Int>
    }
    ```

    Schema da resposta
    ```
    {   
        msg: <String>
        Compras: {
            "nome" : <String>,
            "descricao: <String>,
            "preco" : <String>,
            "quantidade" : <Int>
        },
        erro: <Boleano>
    }
    ```

* **Exemplo de inserção**
    
    Schema da resposta
        
        Não é necessario acrescentar o id,
        pois o mesmo é acrescentado automaticamente.
    ```
    {
        "nome": "wandberg de lima faria",
        "descricao": "avua foguete rsrs",
        "preco": "1000.00",
        "quantidade": "10"
    }
    ```

 * **PUT /compra/id/{id}**

    Schema da requisição
    ```
    {
        "nome" : <String>,
        "descricao: <String>,
        "preco" : <String>,
        "quantidade" : <Int>
    }
    ```

    Schema da resposta
    ```
    {   
        msg: <String>
        Compras: {
            "nome" : <String>,
            "descricao: <String>,
            "preco" : <String>,
            "quantidade" : <Int>
        },
        erro: <Boleano>
    }
    ```

* **Exemplo para edição**
    
    Schema da resposta para "/compra/id/3"
        
        É necessario acrescentar o id na requisição, 
        para dar referencia em qual cadastro será editado.
    ```
    {
			"nome": "Wandberg de Lima Faria",
			"descricao": "agora vai",
			"preco": "105.8",
			"quantidade": 8
    }
    ```

 * **DELETE /compra/id/{id}**

    Schema da resposta
    ```
    {   
        msg: <String>
        erro: <Boleano>
    }
    ```
    
* **Exemplo para Deleção**

    Schema da resposta para "/compra/id/4"
    
        É necessario acrescentar o id na requisição,
        para dar referencia em qual cadastro será deletado.
    ```
    {
        "compra": "Compra de id 4 deletado.",
        "erro": false
    }
    ```
## Sobre as branches
Com o objetivo de desenvolver novas correções e inovações nesse projeto, o histórico da evolução do projeto e fácil acesso, será através de atualizações feitas em cada branch criada neste repositório.

## :construction: Os testes automaticos:

Ainda estão em desenvolvimento, mas para rodar-los futuramente,
precisara utilizar o framework `Jest` e o [`Supertest`](https://jestjs.io/pt-BR/docs/testing-frameworks#expressjs)
para rodar o teste, terá de utilizar o comando abaixo:

```
npm test
```
