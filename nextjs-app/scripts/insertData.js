'use strict'

const { Client } = require('@elastic/elasticsearch')
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
  const messageData = [
    {
      message_id: 1,
      text: "שלום, זו הודעה ראשונה",
      timestamp: "2024-10-01T12:00:00Z"
    },
    {
      message_id: 2,
      text: "הודעה שנייה עם תוכן מעניין",
      timestamp: "2024-10-02T14:30:00Z"
    },
    {
      message_id: 3,
      text: "הודעה שלישית עם מידע נוסף",
      timestamp: "2024-10-03T09:15:00Z"
    },
    {
      message_id: 4,
      text: "הודעה רביעית בנושא חשוב",
      timestamp: "2024-10-04T16:45:00Z"
    },
    {
      message_id: 5,
      text: "הודעה חמישית עם תוכן מעניין לורם יפסום",
      timestamp: "2024-10-05T11:20:00Z"
    }
  ]

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
