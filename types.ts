import React from 'react';

export enum MessageSender {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: MessageSender;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}