import { data } from "../data/db";
import { Startups } from "../model/startups.model.js";

export function getStartups (req, res) {
    res.status(200).json(data.startups);
}
