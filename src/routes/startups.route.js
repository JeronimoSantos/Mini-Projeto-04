import { Router } from "express";

const startups = Router();

// Rota 2 - Startups Sustentáveis
app.get('/startups', (req, res) => {
    res.json(startups);
});

export default startups;