import { connect } from "./db.js";

async function getYearRepository() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT year FROM city group by year order by year desc");

        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default getYearRepository;
