import getTypeRepository from "../repositories/type.repository.js";

async function getTypeService(paramTheme, paramType) {
    return await getTypeRepository(paramTheme, paramType);
}

export default getTypeService;
