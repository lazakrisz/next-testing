import {
  test,
  expect,
  http,
  HttpResponse,
  passthrough,
} from "next/experimental/testmode/playwright/msw";

test("should navigate to the about page", async ({ page, msw }) => {
  msw.use(
    http.post("http://my-db/form", () => {
      return HttpResponse.json({
        name: "John Doe",
      });
    })
  );

  await page.goto("/form");
  await page.fill("input[name='name']", "John Doe");
  await page.click("button[type='submit']");

  await expect(page.locator("p[data-testid='submission-name']")).toHaveText(
    "Name: John Doe"
  );
});
