import { Router } from "express";
import { getComoAjudar } from "../controller/comoAjudar.controller.js";

const comoAjudar = Router();

// Rota 3 - Como Ajudar
comoAjudar.get('/comoAjudar', getComoAjudar);

export default comoAjudar;
