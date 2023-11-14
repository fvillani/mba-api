import getPGService from "../services/pg.service.js";

async function getPGController(req, res, next) {
    try {
        res.send(await getPGService());
    } catch (err) {
        next(err);
    }
}

export default getPGController;
