import { graphql, http, HttpResponse } from "msw";

const api = graphql.link("http://my-db/api/graphql");

export const handlers = [
  http.get("https://my.backend/book", () => {
    return HttpResponse.json({
      title: "Lord of the Rings",
      imageUrl: "/book-cover.jpg",
      description:
        "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    });
  }),
  http.get("/reviews", () => {
    return HttpResponse.json([
      {
        id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
        author: "John Maverick",
        text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
      },
    ]);
  }),

  // handlers from e2e tests
  http.post("http://my-db/form", () => {
    return HttpResponse.json({
      name: "John Doe",
    });
  }),

  api.mutation("CreateProduct", () => {
    return HttpResponse.json({
      data: {
        createProduct: { id: 1, name: "Product 2" },
      },
    });
  }),

  api.query("GetProducts", () => {
    return HttpResponse.json({
      data: {
        products: [{ id: 1, name: "Product 1" }],
      },
    });
  }),

  http.get("http://my-db/product/shoe", () => {
    return HttpResponse.json({
      title: "A shoe",
    });
  }),

  http.get("http://my-db/product/boot", () => {
    return HttpResponse.json({
      title: "A boot",
    });
  }),
];
