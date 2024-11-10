export const typeDefs = `
  type Message {
    message_id: String
    text: String!
    timestamp: String
  }

  type Query {
    message: [Message]
  }
`;
