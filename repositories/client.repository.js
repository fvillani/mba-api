import { connect } from "./db.js";

async function getClientsRepository() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM teste");
        console.log("res.rows", res.rows);
        return { ...res.rows, env: process.env.DB_HOST };
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default getClientsRepository;
