import React from 'react';

import { Card } from '@/ui/Card';
import { Message } from '../lib/definitions';

const messagesDefault: Message[] = [
  {timestamp: "", text: "אין הודעות להצגה", message_id: '0', type: "collected"},
];

export default async function Messages({ messages  }: { messages: Message[]  }) {

  const messagesList =  messages.length > 0 ? messages : messagesDefault;

  return (
    <>
      {messagesList.map((message) => (
        <Card key={message.message_id}
          title={message.timestamp}
          value={message.text}
          type={message.type ?? "invoices"}
        />
      ))}
    </>
  );
}

