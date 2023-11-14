import { connect } from "./db.js";

async function getPGRepository() {
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

export default getPGRepository;
