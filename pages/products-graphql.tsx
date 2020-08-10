import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import Products from '../components/products';


const ProductsHome = ({data}) => {
  const client = new ApolloClient({
    uri: "/api/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App</h1>
        <Products />
      </div>
    </ApolloProvider>
  );
}

export default ProductsHome;