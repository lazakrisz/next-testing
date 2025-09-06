import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { newDb } from "pg-mem";

// Memory pool fails, due to missing pg_roles in pg-mem
// I've also encountered issues with pglite

// type MemPool = ReturnType<
//   ReturnType<typeof newDb>["adapters"]["createPg"]
// >["Pool"];

// let PoolToUse: Pool | MemPool;

// if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
//   const { Pool } = newDb().adapters.createPg();
//   PoolToUse = new Pool();
// } else {
//   PoolToUse = new Pool({
//     connectionString: "postgresql://localhost:5432/next-testing",
//   });
// }

export const db = drizzle("postgresql://user:password@localhost:5432/next-testing");
