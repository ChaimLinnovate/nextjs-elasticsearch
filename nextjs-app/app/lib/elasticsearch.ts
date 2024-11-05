import { Client } from '@elastic/elasticsearch'

export async function connectToElasticsearch():  Promise<Client> { 

    // const ESS_CLOUD_ID = process.env.ESS_CLOUD_ID
    const ESS_CLOUD_USERNAME = process.env.ESS_CLOUD_USERNAME
    const ESS_CLOUD_PASSWORD = process.env.ESS_CLOUD_PASSWORD

    if ( !ESS_CLOUD_USERNAME || !ESS_CLOUD_PASSWORD)
    {
        throw new Error('Missing ESS_CLOUD_USERNAME or ESS_CLOUD_PASSWORD')
    }

    return new Client({
        node: 'http://localhost:9200',
 
        auth: {
            username: ESS_CLOUD_USERNAME,
            password: ESS_CLOUD_PASSWORD,
        }
    })
}


