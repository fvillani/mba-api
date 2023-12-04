import { connect } from "./db.js";

async function getTypeRepository(paramTheme, paramType) {
    const conn = await connect();
    try {
        console.log("paramTheme", paramTheme);
        console.log("paramType", paramType);
        const res = await conn.query("SELECT * FROM city where theme = $1 and type = $2", [paramTheme, paramType]);

        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default getTypeRepository;
