import { Client } from '@elastic/elasticsearch';

export const ElasticSearchClient = (config) => {
  const client = new Client({
    node: 'http://localhost:9200',
    auth: { username: 'elastic', password: 'changeme' },
  });

  return async (req, res) => {
    try {
      const result = await client.search(config);
      res.json(result.body);
    } catch (error) {
      console.error('Error during Elasticsearch query:', error);
      res.status(500).send('Internal Server Error');
    }
  };
};
