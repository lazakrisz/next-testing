"use server";

import { getClient } from "@/apollo/client";
import { gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!) {
    createProduct(name: $name) {
      id
      name
    }
  }
`;

export async function submitMutation(prevState: unknown, formData: FormData) {
  const name = formData.get("name");

  // Send to API
  await getClient().mutate({ mutation: CREATE_PRODUCT, variables: { name } });

  return { name };
}
