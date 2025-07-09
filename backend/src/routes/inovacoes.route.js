// IMPORTANDO O ROUTER PARA CRIAR ROTAS SEPARADAS
import { Router } from "express";

// IMPORTANDO FUNÇÃO DE CONTROLLER
import { getInovacoes } from "../controller/inovacoes.controller.js";

// QUARDANDO ROUTES NA CONST INOVAÇÕES
const inovacoes = Router();

// REQUISIÇÃO GET
inovacoes.get('/inovacoesSustentaveis', getInovacoes);

// EXPORTANDO PARA PODER SER REUTILIZAR EM OUTRA PARTE DA API
export default inovacoes;
