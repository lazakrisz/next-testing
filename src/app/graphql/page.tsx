import { getClient } from "@/apollo/client";
import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
    }
  }
`;

export default async function GraphQLPage() {
  // Ideally this would be a typed document node.
  const { data } = await getClient().query<any>({ query: GET_PRODUCTS });

  return (
    <div>
      <h1>GraphQL Page</h1>

      <ul>
        {data?.products?.map((product: any) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
