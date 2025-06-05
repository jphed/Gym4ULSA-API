const { ApolloServer } = require('apollo-server');
const db = require('./database/db');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
