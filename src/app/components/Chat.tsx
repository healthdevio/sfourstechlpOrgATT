"use client";

import { useState } from 'react';
import { Client as TwilioChatClient } from 'twilio-chat';

export default function Chat() {
  const [client, setClient] = useState<TwilioChatClient | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const initializeChat = async () => {
    const token = await fetch('/api/chat/token').then(res => res.json());
    const chatClient = await TwilioChatClient.create(token);
    setClient(chatClient);

    chatClient.on('messageAdded', (msg) => {
      setMessages((prev) => [...prev, msg.body]);
    });

    const channel = await chatClient.getChannelByUniqueName('general');
    if (channel) {
      await channel.join();
    }
  };

  const sendMessage = async () => {
    if (client) {
      const channel = await client.getChannelByUniqueName('general');
      if (channel) {
        channel.sendMessage(message);
        setMessage('');
      }
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Chat</h2>
      <div className="mb-4">
        <button onClick={initializeChat} className="px-4 py-2 bg-blue-600 text-white rounded">
          Iniciar Chat
        </button>
      </div>
      <div className="mb-4">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 border rounded-l"
        />
        <button onClick={sendMessage} className="px-4 py-2 bg-blue-600 text-white rounded-r">
          Enviar
        </button>
      </div>
    </div>
  );
}
