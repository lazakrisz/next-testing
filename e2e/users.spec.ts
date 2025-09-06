import test, { expect } from "@playwright/test";
import { reset, seed } from "drizzle-seed";
import * as schema from "@/db/schema";
import { pushSchema } from "drizzle-kit/api";
import { db } from "@/db";

const SEED = 12345;

test.beforeAll(async () => {
  const { apply } = await pushSchema(schema, db);
  await apply();
});

test.beforeEach(async () => {
  await seed(db, schema, { seed: SEED });
});

test.afterEach(() => {
  reset(db, schema);
});

test.describe("Users Page", () => {
  test("should render the users page with seeded users.", async ({ page }) => {
    await page.goto("/users");

    await expect(page.locator("h1")).toHaveText("Users");

    await expect(page.locator("li")).toHaveCount(10);
  });
});
