import { Router } from "express";
import { getComoAjudar } from "../controller/comoAjudar.controller.js";

const comoAjudar = Router();

// Rota 3 - Como Ajudar
app.get('/como-ajudar', getComoAjudar);

export default comoAjudar;
