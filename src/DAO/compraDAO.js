class CompraDAO {
    constructor(db) {
        this.db = db
    }

    pegarTodasCompras = () => {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM COMPRAS", (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    filtrarCompra = (id) => {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM COMPRAS WHERE ID_COMPRAS = ?", id, (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        compra: rows,
                        erro: false,
                    });
                }
            });
        });
    };

    inserirCompra = (novaCompra) => {
        return new Promise((resolve, reject) => {
            this.db.run(
                "INSERT INTO COMPRAS (NOME, DESCRICAO, PRECO, QUANTIDADE)VALUES (?, ?, ?, ?)",
                novaCompra.nome,
                novaCompra.descricao,
                novaCompra.preco,
                novaCompra.quantidade,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(`compra ${novaCompra.nome} inserida.`);
                    }
                }
            );
        });
    };

    deletarCompra = (id) => {
        return new Promise((resolve, reject) => {
            this.db.run("DELETE FROM COMPRAS WHERE ID_COMPRAS = ?", id, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        compra: `Compra de id ${id} deletado.`,
                        erro: false,
                    });
                }
            });
        });
    };

    atualizarCompra = (id, compra) => {
        return new Promise((resolve, reject) => {
            this.db.run(
                "UPDATE COMPRAS SET NOME = ?, DESCRICAO = ?, PRECO = ?, QUANTIDADE = ? WHERE ID_COMPRAS = ?",
                compra.nome,
                compra.descricao,
                compra.preco,
                compra.quantidade,
                id,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({
                            mensagem: `Compra de id ${id} atualizado.`,
                            compra: compra,
                            erro: false,
                        });
                    }
                }
            );
        });
    };
}

export default CompraDAO;