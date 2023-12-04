import getTypeService from "../services/type.service.js";

async function getTypeController(req, res, next) {
    try {
        console.log("req.body", req.body);
        res.send(await getTypeService(req.body.paramTheme, req.body.paramType));
    } catch (err) {
        next(err);
    }
}

export default getTypeController;
