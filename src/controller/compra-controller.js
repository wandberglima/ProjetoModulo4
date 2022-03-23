import CompraDAO from "../DAO/CompraDAO.js";
import Vendas from "../model/compras.js";

const compraLivraria = (app, bd) => {
    const compra = new Vendas(bd);
    
    app.get("/compra", async (req, res) => {
        try {
            const resposta = await compra.pegarTodasCompras();
            res.status(200).json({
                compra: resposta,
                erro: false,
            });
        } catch (error) {
            res.status(400).json({
                mensagem: error.message,
                erro: true,
            });
        }
    });

    app.get("/compra/id/:id", async (req, res) => {
        const id = req.params.id;

        res.json(await compra.filtrarCompra(id));
    });

    app.post("/compra", async (req, res) => {
        const body = req.body;
        try {
            const resposta = await compra.inserirCompra(body);
            res.status(201).json({
                mensagem: resposta,
                erro: false,
            });
        } catch (error) {
            res.status(400).json({
                mensagem: error.message,
                erro: true,
            });
        }
    });

    app.delete("/compra/id/:id", async (req, res) => {
        const id = req.params.id;

        res.json(await compra.deletarCompra(id));
    });

    app.put("/compra/id/:id", async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const resposta = await compra.atualizarCompra(id, body);

        res.json(resposta);
    });
};

export default compraLivraria;