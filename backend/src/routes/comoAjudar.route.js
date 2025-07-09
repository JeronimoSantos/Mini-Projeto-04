// IMPORTANDO O ROUTER PARA CRIAR ROTAS SEPARADAS
import { Router } from "express";

// IMPORTANDO FUNÇÃO DE CONTROLLER
import { getComoAjudar } from "../controller/comoAjudar.controller.js";

// QUARDANDO ROUTES NA CONST COMO AJUDAR
const comoAjudar = Router();

// REQUISIÇÃO GET
comoAjudar.get('/apoio', getComoAjudar);

// EXPORTANDO PARA PODER SER REUTILIZAR EM OUTRA PARTE DA API
export default comoAjudar;
