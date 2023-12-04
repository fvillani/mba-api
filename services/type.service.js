import getTypeRepository from "../repositories/type.repository.js";

async function getTypeService(theme, type) {
    return await getTypeRepository(theme, type);
}

export default getTypeService;
