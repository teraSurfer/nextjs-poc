import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

interface ProductProps {}

const getProductsQuery = gql`
  query {
    products {
      id
      name
      price
    }
  }
`;

const Products = (props: ProductProps) => {
  const { loading, data, error } = useQuery(getProductsQuery);

  

  if (loading) return <div>loading...</div>;

  if (error) return <div>Sorry something went wrong</div>;

  return (
      <div style={{ height: "100%", width: "100%" }}>
        {data.products.map((product, index) => (
          <div key={index}>
            <p>product id: {product.id}</p>
            <p>product name: {product.name}</p>
            <p>product price: {product.price}</p>
          </div>
        ))}
      </div>
  );
};

export default Products;
