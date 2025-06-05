const { ApolloServer } = require('apollo-server');
const db = require('./database/db');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// Importa la función getUserFromToken desde tus resolvers
const { getUserFromToken } = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    const user = getUserFromToken(token);
    return { db, user };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
