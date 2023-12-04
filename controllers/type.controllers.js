import getTypeService from "../services/type.service.js";

async function getTypeController(req, res, next) {
    try {
        res.send(await getTypeService((req.params.theme, req.params.type)));
    } catch (err) {
        next(err);
    }
}

export default getTypeController;
