import { Router } from "express";
import { getStartups } from "../controller/startups.controller.js";

const startups = Router();

// Rota 2 - Startups Sustentáveis
startups.get('/startups', getStartups);

export default startups;
