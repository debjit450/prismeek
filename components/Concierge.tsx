import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import { streamConciergeResponse } from '../services/aiService';
import { ChatMessage, MessageSender } from '../types';
import { GenerateContentResponse } from '@google/genai';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello. I am your digital assistant. How can I help you today?",
      sender: MessageSender.AI,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<{ role: string; parts: { text: string }[] }[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: MessageSender.USER,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
        const aiMsgId = (Date.now() + 1).toString();
        setMessages(prev => [...prev, {
            id: aiMsgId,
            text: "",
            sender: MessageSender.AI,
            timestamp: new Date(),
            isStreaming: true
        }]);

        const streamResult = await streamConciergeResponse(historyRef.current, userMsg.text);
        
        let accumulatedText = "";

        for await (const chunk of streamResult) {
            const c = chunk as GenerateContentResponse;
            const text = c.text || "";
            accumulatedText += text;
            
            setMessages(prev => prev.map(msg => 
                msg.id === aiMsgId ? { ...msg, text: accumulatedText } : msg
            ));
        }

        setMessages(prev => prev.map(msg => 
             msg.id === aiMsgId ? { ...msg, isStreaming: false } : msg
        ));

        historyRef.current.push(
            { role: 'user', parts: [{ text: userMsg.text }] },
            { role: 'model', parts: [{ text: accumulatedText }] }
        );

    } catch (error) {
        console.error(error);
        setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: "I'm having trouble connecting right now. Please try again or contact us on WhatsApp.",
            sender: MessageSender.AI,
            timestamp: new Date()
        }]);
    } finally {
        setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-p-ink dark:bg-p-cream text-p-cream dark:text-p-black rounded-full shadow-2xl hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600 dark:hover:bg-gradient-to-r dark:hover:from-violet-500 dark:hover:to-purple-600 transition-colors duration-500 border border-violet-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
      >
        <Sparkles size={20} className="animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[380px] h-[550px] bg-p-paper dark:bg-[#0F0F0F] border border-p-ink/10 dark:border-violet-500/20 shadow-2xl z-50 flex flex-col font-sans"
          >
            {/* Elegant Header */}
            <div className="p-5 border-b border-p-ink/5 dark:border-white/5 flex justify-between items-center bg-p-stone dark:bg-p-charcoal transition-colors">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                 <span className="font-serif text-p-ink dark:text-p-cream text-lg tracking-wide">Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-p-ink/30 dark:text-white/30 hover:text-p-ink dark:hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 scroll-smooth bg-grain bg-repeat opacity-95">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === MessageSender.USER ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 text-sm leading-relaxed font-light ${
                      msg.sender === MessageSender.USER
                        ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                        : 'text-p-ink/90 dark:text-p-cream/90 border-l border-violet-500/50 pl-4'
                    }`}
                  >
                   {msg.sender === MessageSender.AI && <span className="text-[10px] text-violet-400 uppercase tracking-widest block mb-1">Prismeek AI</span>}
                   {msg.text}
                   {msg.isStreaming && <span className="inline-block w-1 h-3 ml-2 bg-violet-500 animate-pulse"/>}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 bg-p-stone dark:bg-p-charcoal border-t border-p-ink/5 dark:border-white/5 transition-colors">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="w-full bg-transparent border-b border-p-ink/10 dark:border-white/10 py-3 pr-10 text-p-ink dark:text-p-cream placeholder:text-p-ink/30 dark:placeholder:text-white/10 focus:outline-none focus:border-violet-500 transition-colors text-sm font-light"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-0 text-violet-400 hover:text-p-ink dark:hover:text-white disabled:opacity-30 transition-colors"
                >
                  {isTyping ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Concierge;
