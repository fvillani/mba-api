import { connect } from "./db.js";

async function getThemeRepository() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT theme FROM city group by theme");

        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default getThemeRepository;
