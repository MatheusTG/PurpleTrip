import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { env } from "../env/index.js";
import * as schema from "./db/schema.js";

const { Pool } = pg;
const pool = new Pool({ connectionString: env.DATABASE_URL });

const db = drizzle(pool, { schema });

pool.on("error", error => {
  console.log("Unexpected error on db client:", error.message);
});

export default db;
