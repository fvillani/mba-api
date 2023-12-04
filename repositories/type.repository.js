import { connect } from "./db.js";

async function getTypeRepository(theme, type) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM city where theme = $1 and type = $2", [theme, type]);

        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default getTypeRepository;
