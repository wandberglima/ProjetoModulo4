import Compras from "./schema/model-Compras.js";
import CompraDAO from "../DAO/CompraDAO.js";

class Vendas {
    constructor(db) {
        this.dao = new CompraDAO(db);
    }

    pegarTodasCompras = async () => {
        try {
            return await this.dao.pegarTodasCompras();
        } catch (error) {
            throw new Error(error.mensagem);
        }
    };

    filtrarCompra = async (id) => {
        try {
            return await this.dao.filtrarCompra(id);
        } catch (error) {
            return {
                mensagem: error.message,
                erro: true,
            };
        }
    };

    inserirCompra = async (compra) => {
        try {
            const novaCompra = new Compras(
                compra.nome,
                compra.descricao,
                compra.preco,
                compra.quantidade
            );
            return await this.dao.inserirCompra(novaCompra);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    deletarCompra = async (id) => {
        try {
            await this._verificarCompra(id);

            return await this.dao.deletarCompra(id);
        } catch (error) {
            return {
                mensagem: error.message,
                erro: true,
            };
        }
    };
    atualizarCompra = async (id, compra) => {
        try {
            await this._verificarCompra(id);
            const compraAtualizada = new Compras(
                compra.nome,
                compra.descricao,
                compra.preco,
                compra.quantidade
            );

            return await this.dao.atualizarCompra(id, compraAtualizada);
        } catch (error) {
            return {
                mensagem: error.message,
                erro: true,
            };
        }
    };

    _verificarCompra = async (id) => {
        try {
            const resposta = await this.dao.filtrarCompra(id);

            if (resposta.compra.length === 0) {
                throw new Error(`Compra de id ${id} não existe`);
            }
        } catch (error) {
            return {
                mensagem: error.message,
                erro: true,
            };
        }
    };
}

export default Vendas;