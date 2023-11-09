import getClientsService from "../services/client.service.js";

async function getClientsController(req, res, next) {
    try {
        res.send(await getClientsService());
    } catch (err) {
        next(err);
    }
}

export default getClientsController;
