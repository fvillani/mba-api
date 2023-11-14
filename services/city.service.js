import getCityRepository from "../repositories/city.repository.js";

async function getCityService(theme, year) {
    return await getCityRepository(theme, year);
}

export default getCityService;
