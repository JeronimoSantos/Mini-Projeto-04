import { Router } from "express";

const inovacoes = Router();

// Rota 1 - Inovações Sustentáveis
app.get('/inovacoes', (req, res) => {
    res.json(inovacoes);
});

export default inovacoes;