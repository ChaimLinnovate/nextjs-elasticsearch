import { connectToElasticsearch } from "./elasticsearch";


export async function fetchMessageData(query?: string) {

    const client = await connectToElasticsearch()

    if (!client) {
        throw new Error('Failed to connect to Elasticsearch.');
    }

const selcte = query ? { text: query } : {};


    const { body } = await client.search({
        index: 'messages',
        body: {
            query: {
               
                match: {
                    text: query,
                },
    
            },
            sort: [
                { timestamp: { order: 'desc' } }
            ],
            highlight: {
                fields: {
                    text: {},
                },
            },
            size: 10
        }
    })

    console.log("🚀 ~ file: data.ts:fetchMessageData ~ body ", body);


    const hits = body?.hits?.hits;
    if (!hits || hits.length === 0) {
        return [];
    }
    const sources = hits.map((hit: any) => hit._source);


    console.log("🚀 ~ file: data.ts:fetchMessageData ~ body ", sources)

    return sources;

}