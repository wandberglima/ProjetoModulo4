import express from "express";
import compraController from "./controller/compra-controller.js";
import database from './database/sqlite-db.js'

const app = express()
app.use(express.json())
compraController(app, database)

export default app
