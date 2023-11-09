import pg from "pg";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://qtxmbkhu:HI4genVOpysGWZi2I0TDi63tzzV9lnhf@bubble.db.elephantsql.com/qtxmbkhu",
    });

    global.connection = pool;

    return pool.connect();
}

export { connect };
