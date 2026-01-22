
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X, Maximize2, MessageCircle } from 'lucide-react';
import { askAutomotiveExpert } from '../services/geminiService';
import { MOCK_VEHICLE, COLORS } from '../constants';
import { ChatMessage } from '../types';

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: `Bonjour ! Je suis l'expert NADO. Je connais parfaitement cette Porsche 911. Comment puis-je vous aider aujourd'hui ?` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true); 
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const answer = await askAutomotiveExpert(MOCK_VEHICLE, userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'assistant', content: answer }]);
    setIsTyping(false);
  };

  if (isMinimized) {
    return (
      <button 
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#1459DD] text-white rounded-full shadow-[0_20px_50px_rgba(20,89,221,0.4)] flex items-center justify-center hover:scale-110 transition-transform z-50 animate-bounce active:scale-95"
      >
        <MessageCircle size={32} />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FDD817] rounded-full border-2 border-white flex items-center justify-center">
           <span className="text-[10px] font-black text-slate-900">1</span>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[380px] max-h-[600px] h-[70vh] bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-slate-100 flex flex-col overflow-hidden z-50 transition-all duration-300 animate-in slide-in-from-bottom-10">
      <div className="bg-[#1459DD] p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
            <Bot size={28} />
          </div>
          <div className="text-left">
            <h3 className="font-black text-sm uppercase tracking-tight leading-none mb-1">Expert NADO IA</h3>
            <div className="flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
               <span className="text-[9px] opacity-70 uppercase tracking-widest font-black">En ligne</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMinimized(true)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-5 bg-slate-50/50 custom-scrollbar"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-4 rounded-3xl text-sm font-medium leading-relaxed ${
              m.role === 'user' 
                ? 'bg-[#1459DD] text-white rounded-tr-none shadow-lg shadow-blue-100' 
                : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-5 py-4 rounded-3xl rounded-tl-none shadow-sm border border-slate-100">
              <Loader2 className="animate-spin text-[#FDD817]" size={20} />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-100">
        <div className="flex gap-3">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez une question..."
            className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-[#1459DD]/20 outline-none font-medium text-slate-900 transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="w-12 h-12 bg-[#FDD817] text-slate-900 rounded-2xl flex items-center justify-center hover:bg-[#eec915] disabled:opacity-50 transition-all shadow-lg shadow-yellow-100 active:scale-95"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[9px] text-slate-400 text-center mt-5 font-black uppercase tracking-[0.2em] opacity-60">
          INTELLIGENCE NADO • SYSTÈME SÉCURISÉ
        </p>
      </div>
    </div>
  );
};

export default Assistant;
