import { Router } from "express";

const comoAjudar = Router();

// Rota 3 - Como Ajudar
app.get('/como-ajudar', (req, res) => {
    res.json(comoAjudar);
});

export default comoAjudar;