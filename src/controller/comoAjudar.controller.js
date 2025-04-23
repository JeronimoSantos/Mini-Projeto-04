import { data } from "../data/db.js";
import { ComoAjudar } from "../model/comoAjudar.model.js";

export function getComoAjudar (req, res) {
    res.status(200).json(data.comoAjudar);
}
