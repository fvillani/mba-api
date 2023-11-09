import getClientsRepository from "../repositories/client.repository.js";

async function getClientsService() {
    return await getClientsRepository();
}

export default getClientsService;
