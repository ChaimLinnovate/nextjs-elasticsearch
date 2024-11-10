export const elasticSearchSchema = {
  index: 'messages',
  body: {
    query: {
      match_all: {},
    },
    sort: [{ timestamp: { order: 'desc' } }],
    highlight: {
      fields: {
        text: {},
      },
    },
    size: 50,
  },
};
