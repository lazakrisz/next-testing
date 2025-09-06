import {
  test,
  expect,
  http,
  HttpResponse,
  passthrough,
} from "next/experimental/testmode/playwright/msw";

test.use({
  mswHandlers: [
    [
      http.get("http://my-db/product/shoe", () => {
        return HttpResponse.json({
          title: "A shoe",
        });
      }),
      // allow all non-mocked routes to pass through
      http.all("*", ({ request }) => {
        console.log(`Not mocking ${request.url.toString()}`);

        return passthrough();
      }),
    ],
    { scope: "test" }, // or 'worker'
  ],
});

test("/product/shoe", async ({ page, msw }) => {
  msw.use(
    http.get("http://my-db/product/boot", () => {
      return HttpResponse.json({
        title: "A boot",
      });
    })
  );

  await page.goto("/product/boot");

  await expect(page.locator("body")).toHaveText(/Boot/);
});
