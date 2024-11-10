'use strict'

const { Client } = require('@elastic/elasticsearch')
import messageData from './seedData.json';

const client = new Client({
    node: 'http://localhost:9200',
    auth: { username: 'elastic', password: 'changeme' }
})

async function run () {
  // Create the 'tweets' index with mappings
  await client.indices.create({
    index: 'messages',
    operations: {
      mappings: {
        properties: {
          message_id: { type: 'integer' },
          text: { type: 'text' },
          timestamp: { type: 'date' }
        }
      }
    }
  }, { ignore: [400] })

  // Prepare dataset (translated from the original 'messageData')

  // Prepare the operations for bulk indexing
  const operations = messageData.flatMap(doc => [{ index: { _index: 'messages', _id: doc.message_id } }, doc])

  // Perform bulk indexing
  const bulkResponse = await client.bulk({
    refresh: true,
    body: operations  // Correctly pass 'operations' in the 'body' field
  })

  // Handle any errors in bulk indexing
  if (bulkResponse.errors) {
    const erroredDocuments = []
    bulkResponse.items.forEach((action, i) => {
      const operation = Object.keys(action)[0]
      if (action[operation].error) {
        erroredDocuments.push({
          status: action[operation].status,
          error: action[operation].error,
          operation: operations[i * 2],
          document: operations[i * 2 + 1]
        })
      }
    })
    console.log(erroredDocuments)
  }

  // Search for messages containing the word "שלום"
  const { body } = await client.search({
    index: 'messages',
    body: {
      query: {
        match: {
          text: 'שלום'
        }
      }
    }
  })

  console.log(body)

  // Count the total number of documents in the 'messages' index
  const count = await client.count({ index: 'messages' })
  console.log(`Document count: ${count.body.count}`)
}

run().catch(console.log)
