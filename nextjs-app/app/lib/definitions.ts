export type Message = {
    "message_id": string,
    "text": string,
    "timestamp": string,
    "type"?:  'invoices' | 'customers' | 'pending' | 'collected';
  };