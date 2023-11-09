import pg from "pg";
import "dotenv/config";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://" + process.env.DB_USER + ":" + process.env.DB_USER + "@bubble.db.elephantsql.com/" + process.env.DB_USER,
    });

    global.connection = pool;

    return pool.connect();
}

export { connect };
