import React from 'react';
import { Card } from '@/ui/Card';
import { Message } from '../lib/definitions';
import { MessagesList } from '@/ui/MessagesList';

const messagesDefault: Message[] = [
  { timestamp: "", text: "אין הודעות להצגה", message_id: '0', type: "collected" },
];


interface MessagesProps {
  messages: Message[];
}


const Messages: React.FC<MessagesProps> = ({ messages }) => {

  const messagesList = messages.length ? messages : messagesDefault;

  return (
    <MessagesList>
      {messagesList.map((message) => (
        <Card key={message.message_id}
          title={message.timestamp}
          value={message.text}
          type={message.type ?? "invoices"}
        />
      ))}
    </MessagesList>
  );
}

export default Messages;


