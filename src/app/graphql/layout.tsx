import { ApolloWrapper } from "@/apollo/wrapper";

export default function GraphQLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
