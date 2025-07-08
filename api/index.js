import app from "../src/server.js"

export default function startVercel(req, res) {
    return app(req, res);
}
