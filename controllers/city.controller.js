import getCityService from "../services/city.service.js";

async function getCityController(req, res, next) {
    try {
        res.send(await getCityService(req.params.theme, req.params.year));
    } catch (err) {
        next(err);
    }
}

export default getCityController;
