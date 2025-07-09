// IMPORTANDO O EXPRESS
import express from 'express';
import cors from 'cors';

// IMPORTANDO ROTAS DA API
import inovacoes from './routes/inovacoes.route.js';
import startups from './routes/startups.route.js';
import comoAjudar from './routes/comoAjudar.route.js';

// INICIALIZANDO APP
const app = express();

//
app.use(cors());

// DEFININDO MIDDLEWARES
app.use(express.json());

// DEFININDO ENDPOINTS BASE DAS ROTAS
app.use("/api", inovacoes);
app.use("/api", startups);
app.use("/api", comoAjudar);

app.get("/api", (req, res) => {
  res.send("API Raiz está funcionando!");
});

export default app;
