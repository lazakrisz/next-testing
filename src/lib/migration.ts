import { execSync } from "node:child_process";
import { pushSchema } from "drizzle-kit/api";
import { db } from "@/db";
import * as schema from "@/db/schema";
let isMigrationsRun = false;
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { createRequire } from "node:module";
/**
 * Run migrations against the in memory database using drizzle-kit commands.
 * There is an ongoing issue with drizzle-kit and ESM, here:
 * https://github.com/drizzle-team/drizzle-orm/issues/2853#issuecomment-2641032934
 */
export async function runMigrations() {
  if (isMigrationsRun) return;

  const require = createRequire(import.meta.url);
  const { pushSchema } =
    require("drizzle-kit/api") as typeof import("drizzle-kit/api");

  const { apply } = await pushSchema(schema, db);
  await apply();

  // await migrate(db, { migrationsFolder: "./src/db/migrations" });
  isMigrationsRun = true;
}
