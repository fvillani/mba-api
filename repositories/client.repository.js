import { connect } from "./db.js";

async function getClientsRepository() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM teste");

        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default getClientsRepository;
