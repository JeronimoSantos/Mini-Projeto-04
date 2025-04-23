import { Router } from "express";
import { getInovacoes } from "../controller/inovacoes.controller.js";

const inovacoes = Router();

// Rota 1 - Inovações Sustentáveis
app.get('/inovacoes', getInovacoes);

export default inovacoes;
