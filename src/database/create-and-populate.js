import sqlite3 from "sqlite3";
sqlite3.verbose();
import { dirname } from "path";
import { fileURLToPath } from "url";
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const TABELA_COMPRAS = `
CREATE TABLE IF NOT EXISTS "COMPRAS" (
    "ID_COMPRAS" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" VARCHAR (65),
    "DESCRICAO" VARCHAR (250),
    "PRECO" VARCHAR (20),
    "QUANTIDADE" INTEGER (6) 
);`;

const ADD_COMPRAS = `
INSERT INTO COMPRAS (ID_COMPRAS, NOME, DESCRICAO, PRECO, QUANTIDADE)
VALUES
    (1, 'Eugênio Oliveira', 'editora: Eleva, idioma: Português', 15.50, 10),
    (2, 'Pedro Olavo', 'editora: Globo, idioma: Português', 250.99, 5),
    (3, 'Paulo Costa', 'editora: Brasil, idioma: Português', 105.80, 8)`;

function criaTabelaCompras() {
    db.run(TABELA_COMPRAS, (error) => {
        if (error) console.log("Erro ao criar tabela de compras");
    })
}

function populaTabelaCompras() {
    db.run(ADD_COMPRAS, (error) => {
        if (error) console.log("Erro ao popular tabela de compras");
    })
}

db.serialize(() => {
    criaTabelaCompras();
    populaTabelaCompras();
});
