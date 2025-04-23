import { Router } from "express";
import { getStartups } from "../controller/startups.controller.js";

const startups = Router();

// Rota 2 - Startups Sustentáveis
app.get('/startups', getStartups);

export default startups;
