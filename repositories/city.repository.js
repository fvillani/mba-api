import { connect } from "./db.js";

async function getCityRepository(theme, year) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM city where theme = $1 and year = $2", [theme, year]);

        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default getCityRepository;
