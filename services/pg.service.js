import getPGRepository from "../repositories/pg.repository.js";

async function getPGService() {
    return await getPGRepository();
}

export default getPGService;
