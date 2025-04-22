//
import express from 'express';

//
import inovacoes from './routes/inovacoes.route.js';
import startups from './routes/startups.route.js';
import comoAjudar from './routes/comoAjudar.route.js';

//
const app = express();

//
const PORT = 3000;

//
app.use(express.json());

//
app.use("/inovacoes", inovacoes);
app.use("/startups", startups);
app.use("/comoAjudar", comoAjudar);

//
app.listen(PORT, () => {
    console.log(`API de Ecotecnologias rodando em http://localhost:${PORT}`);
});
