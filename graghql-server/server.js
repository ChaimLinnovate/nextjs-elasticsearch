import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { ElasticSearchClient } from './src/elasticsearch.js';  // import your Elasticsearch client
import { elasticSearchSchema } from './src/schema/elasticSearchSchema.js';  // import the schema
import { typeDefs } from './src/graphql/typeDefs.js';  // import GraphQL type definitions
import { resolvers } from './src/graphql/resolvers.js';  // import GraphQL resolvers
const app = express();

// GraphQL schema created using typeDefs and resolvers
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Configure Apollo Server
const server = new ApolloServer({
  schema,
  playground: true,
});

// Start Apollo Server asynchronously
const startServer = async () => {
  await server.start();  // Ensure the server is started before applying middleware
  
  // Apply Apollo Server middleware to Express app
  server.applyMiddleware({ app });

  // Listen on the configured port
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Express server listening on port :${PORT}${server.graphqlPath}`);
  });
};

// Use BodyParser middleware for JSON requests
app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method');
  next();
});

// Define the `/search` route to handle Elasticsearch requests
app.get('/search', ElasticSearchClient(elasticSearchSchema));

// Start the server
startServer();