import { ElasticSearchClient } from '../elasticsearch.js';  // Import the client
import { elasticSearchSchema } from '../schema/elasticSearchSchema.js';  // Import the Elasticsearch query schema

// Resolver for fetching messages
export const messageResolver = {
  Query: {
    message: () => new Promise((resolve, reject) => {
      ElasticSearchClient(elasticSearchSchema)().then(r => {
        let _source = r['hits']['hits'];
        _source.map((item, i) => _source[i] = item._source);  // Extract the _source part of each result

        resolve(_source);  // Return the extracted messages
      }).catch(error => reject(error));  // Handle any errors
    }),
  },
};
