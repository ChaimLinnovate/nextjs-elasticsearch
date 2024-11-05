import { connectToElasticsearch } from './elasticsearch';

interface Message {
  timestamp: string;
  text: string;
  message_id: string;
  type?: 'invoices' | 'customers' | 'pending' | 'collected';
}

async function performSearch(query?: string) {
    const client = await connectToElasticsearch();

    const searchBody = {
        index: 'messages',
        body: {
            query: query
                ? { match: { text: query } }
                : { match_all: {} },
            sort: [{ timestamp: { order: 'desc' } }],
            highlight: {
                fields: {
                    text: {},
                },
            },
            size: 50,
        }
    };

    const { body } = await client.search(searchBody);

    const hits = body?.hits?.hits ?? [];
    return hits.map((hit: any) => hit._source as Message);
}

export async function fetchMessageData(query?: string): Promise<Message[]> {
    try {
        const messages = await performSearch(query);

        if (messages.length === 0) {
            return [];
        }

        console.log("Fetched Messages:", messages); // Debugging line can be conditional
        return messages;
    } catch (error) {
        console.error("Error fetching message data:", error);
        return [];
    }
}
