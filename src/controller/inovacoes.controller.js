// IMPORTANDO BANCO DE DADOS
import { data } from "../data/db.js";

// TRANSFORMANDO E EXPORTANDO DADOS EM JSON
export function getInovacoes (req, res) {
    res.status(200).json(data.inovacoes);
}
