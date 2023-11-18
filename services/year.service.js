import getYearRepository from "../repositories/year.repository.js";

async function getYearService() {
    return await getYearRepository();
}

export default getYearService;
