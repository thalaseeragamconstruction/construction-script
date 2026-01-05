
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am your Apex AI Project Consultant. Ask me about construction costs, building materials, or how to start your project!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "I'm sorry, I couldn't process that." }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Sparkles size={16} />
            AI POWERED CONSULTANCY
          </div>
          <h2 className="text-4xl font-bold mb-4 font-display">Instant Project Estimator</h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind? Chat with our AI consultant to get a quick overview of costs, timelines, and technical requirements.
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl flex flex-col h-[600px]">
          {/* Chat area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg ${
                    msg.role === 'user' ? 'bg-orange-600' : 'bg-slate-700 border border-slate-600'
                  }`}>
                    {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-orange-600 text-white rounded-tr-none' 
                      : 'bg-slate-700/80 text-slate-200 border border-slate-600 rounded-tl-none'
                  }`}>
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 items-center text-slate-400 text-sm italic">
                  <div className="bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Loader2 size={20} className="animate-spin" />
                  </div>
                  Thinking...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          <form onSubmit={handleSend} className="p-4 bg-slate-800/80 border-t border-slate-700">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about costs, materials, or timelines..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600/50 text-slate-200 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white p-3 px-6 rounded-xl transition-colors flex items-center gap-2 font-bold shadow-lg shadow-orange-600/20"
              >
                <Send size={18} />
                <span className="hidden sm:inline">Ask</span>
              </button>
            </div>
            <p className="text-center text-slate-500 text-[10px] mt-2">
              *AI estimates are for preliminary planning and are subject to engineering review.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
