import { data } from "../data/db.js";
import { Inovacoes } from "../model/inovacoes.model.js";

export function getInovacoes (req, res) {
    res.status(200).json(data.inovacoes);
}
