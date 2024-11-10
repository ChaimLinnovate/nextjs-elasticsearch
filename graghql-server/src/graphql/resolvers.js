import { messageResolver } from '../resolvers/messageResolver.js';  // Import the message resolver

// Combine resolvers, you can add more resolvers here if needed
export const resolvers = {
  ...messageResolver,  // Spread the message resolver to integrate it
};
