// IMPORTANDO O ROUTER PARA CRIAR ROTAS SEPARADAS
import { Router } from "express";

// IMPORTANDO FUNÇÃO DE CONTROLLER
import { getStartups } from "../controller/startups.controller.js";

// QUARDANDO ROUTES NA CONST INOVAÇÕES
const startups = Router();

// REQUISIÇÃO GET
startups.get('/startupsEcologicas', getStartups);

// EXPORTANDO PARA PODER SER REUTILIZAR EM OUTRA PARTE DA API
export default startups;
