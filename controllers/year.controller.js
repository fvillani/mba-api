import getYearService from "../services/year.service.js";

async function getYearController(req, res, next) {
    try {
        res.send(await getYearService());
    } catch (err) {
        next(err);
    }
}

export default getYearController;
