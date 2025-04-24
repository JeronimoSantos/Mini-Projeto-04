// IMPORTANDO O EXPRESS
import express from 'express';

// IMPORTANDO ROTAS DA API
import inovacoes from './routes/inovacoes.route.js';
import startups from './routes/startups.route.js';
import comoAjudar from './routes/comoAjudar.route.js';

// INICIALIZANDO APP
const app = express();

// DEFININDO PORTA NO SERVIDOR IRÁ RODAR
const PORT = 3000;

// DEFININDO MIDDLEWARES
app.use(express.json());

// DEFININDO ENDPOINTS BASE DAS ROTAS
app.use("/inovacoes", inovacoes);
app.use("/startups", startups);
app.use("/comoAjudar", comoAjudar);

// INICIALIZANDO API
app.listen(PORT, () => {
    console.log(`API de Ecotecnologias rodando em http://localhost:${PORT}`);
});
