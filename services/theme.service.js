import getThemeRepository from "../repositories/theme.repository.js";

async function getThemeService() {
    return await getThemeRepository();
}

export default getThemeService;
