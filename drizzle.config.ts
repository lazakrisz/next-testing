import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://user:password@localhost:5432/next-testing",
  },
});
