import getThemeService from "../services/theme.service.js";

async function getThemeController(req, res, next) {
    try {
        res.send(await getThemeService());
    } catch (err) {
        next(err);
    }
}

export default getThemeController;
