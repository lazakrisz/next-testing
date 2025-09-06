import {
  test,
  expect,
  http,
  HttpResponse,
  passthrough,
  graphql,
} from "next/experimental/testmode/playwright/msw";

const api = graphql.link("http://my-db/api/graphql");

test("should navigate to the graphql page", async ({ page, msw }) => {
  msw.use(
    api.query("GetProducts", () => {
      return HttpResponse.json({
        data: {
          products: [{ id: 1, name: "Product 1" }],
        },
      });
    })
  );

  await page.goto("/graphql");

  await expect(page.locator("ul li")).toHaveText(/Product 1/);
});

test("should navigate to the graphql mutation page and submit a mutation", async ({
  page,
  msw,
}) => {
  msw.use(
    api.mutation("CreateProduct", () => {
      return HttpResponse.json({
        data: {
          createProduct: { id: 1, name: "Product 2" },
        },
      });
    })
  );

  await page.goto("/graphql/mutation");

  await page.fill("input[name='name']", "Product 2");
  await page.click("button[type='submit']");

  await expect(page.locator("p[data-testid='new-product']")).toHaveText(
    /New product: Product 2/
  );
});
