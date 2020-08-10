import { ApolloServer, gql } from 'apollo-server-micro';

const products = [
  {
    id: '1',
    name: 'waterbottle',
    price: '$20000'
  },
  {
    id: '2',
    name: 'Banana',
    price: '$1'
  },
  {
    id: '3',
    name: 'Monitor',
    price: '$200'
  },
  {
    id: '4',
    name: 'Laptop',
    price: '$1400'
  }
];

const typeDefs = gql`
 type Product {
   id: ID
   name: String
   price: String
 }

 type Query {
   products: [Product]
 }

 input ProductInput {
  id: ID
  name: String
  price: String
 }

 type Mutation {
   addToProducts(product: ProductInput): [Product]
   removeFromProducts(id: ID): [Product]
 }
`;

const resolvers = {
  Query: {
    products: () => products
  },
  Mutation: {
    addToProducts: (root, args) => {
      products.push(args.product);
      return products;
    },
    removeFromProducts: (root, args) => {
      let indexToRemove = null;
      products.forEach((product, index) => {
        console.log(product, args.id);
        if (product.id === args.id) {
          indexToRemove = index;
        }
      });
      if (indexToRemove === null) {
        throw new Error('No such product!');
      }
      products.splice(indexToRemove, 1);
      return products;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;