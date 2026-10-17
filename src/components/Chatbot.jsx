import { useState, useRef, useEffect } from 'react';
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Chatbot name: "Arya" — common across India, Europe, US
const BOT_NAME = 'Arya';

const QUICK_REPLIES = [
  'Get a freight quote',
  'Track my shipment',
  'QC Platform info',
  'Contact an office',
];

const BOT_RESPONSES = {
  default: `Hi! I'm ${BOT_NAME}, your Indolog assistant. I can help you with freight quotes, shipment tracking, QC platform queries, or connecting you to the right office. What do you need?`,
  quote: `Sure! For a freight quote, please visit our **[Contact page](/contact)** or WhatsApp us at **+91-9266896322**. You can also call our New Delhi office at **+91 11-45028662**. We respond within 4 business hours!`,
  track: `To track your shipment, please share your **AWB or B/L number** via WhatsApp at **+91-9266896322** or use the **[Track Shipment](https://track.fresatechnologies.com/ords/r/fresaportal1/fresaonlinetracking/tracking5060?p5060_tracking_key=282812857869380186081738286578788375454)** portal. We'll reply within 1 hour.`,
  qc: `Indolog operates a **12,000 sq ft QC facility** in New Delhi — India's most advanced pre-shipment inspection platform with zero factory influence. Learn more on our **[QC Platform page](/qc-platform)**.`,
  office: `We have offices in:\n• **New Delhi** (HQ) — +91-9266896322\n• Mumbai · Chennai · Kolkata · Hyderabad · Bangalore · Ahmedabad · Coimbatore\n\nSee all offices on our **[Offices page](/offices)**.`,
  fallback: `I'm not sure about that specifically — let me connect you to the team! Please reach us at **nikhil@indologindia.com** or WhatsApp **+91-9266896322** and we'll sort it out quickly.`,
};

function getResponse(msg) {
  const m = msg.toLowerCase();
  if (m.includes('quote') || m.includes('rate') || m.includes('price') || m.includes('freight')) return BOT_RESPONSES.quote;
  if (m.includes('track') || m.includes('shipment') || m.includes('awb') || m.includes('status')) return BOT_RESPONSES.track;
  if (m.includes('qc') || m.includes('quality') || m.includes('inspection')) return BOT_RESPONSES.qc;
  if (m.includes('office') || m.includes('contact') || m.includes('address') || m.includes('phone')) return BOT_RESPONSES.office;
  return BOT_RESPONSES.fallback;
}

function MessageBubble({ msg }) {
  // Render **bold** and [link](url) in bot messages
  const renderText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\n)/g);
    return parts.map((part, i) => {
      if (part === '\n') return <br key={i} />;
      const boldMatch = part.match(/^\*\*(.+)\*\*$/);
      if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>;
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) return <a key={i} href={linkMatch[2]} className="underline text-gold hover:text-gold-light" target={linkMatch[2].startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">{linkMatch[1]}</a>;
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-2 ${msg.from === 'user' ? 'flex-row-reverse' : ''}`}
    >
      {msg.from === 'bot' && (
        <div className="w-7 h-7 bg-navy rounded-full flex items-center justify-center shrink-0 mt-1">
          <FaRobot className="text-gold text-[10px]" />
        </div>
      )}
      <div
        className={`max-w-[78%] px-3.5 py-2.5 text-[13px] leading-[1.65] rounded-sm ${
          msg.from === 'user'
            ? 'bg-navy text-white ml-auto'
            : 'bg-[#f0f1f5] text-[#1a1a2e]'
        }`}
      >
        {msg.from === 'bot' ? renderText(msg.text) : msg.text}
      </div>
    </motion.div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: BOT_RESPONSES.default, id: 0 },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [open, messages]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { from: 'user', text: text.trim(), id: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const response = getResponse(text);
      setMessages((prev) => [...prev, { from: 'bot', text: response, id: Date.now() + 1 }]);
      setTyping(false);
    }, 900 + Math.random() * 400);
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 left-6 z-[900] flex flex-col items-start gap-2">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Open Arya chatbot"
          className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(11,29,58,0.35)] hover:bg-gold hover:text-black transition-all duration-300 relative"
        >
          {open ? <FaTimes size={18} /> : <FaCommentDots size={20} />}
          {!open && unread > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-black text-[10px] font-black rounded-full flex items-center justify-center">
              {unread}
            </span>
          )}
        </button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-6 z-[901] w-[340px] sm:w-[380px] bg-white border border-border shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden rounded-sm"
            style={{ maxHeight: 520 }}
          >
            {/* Header */}
            <div className="bg-navy px-5 py-4 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center shrink-0">
                <FaRobot className="text-black text-[14px]" />
              </div>
              <div>
                <div className="text-white font-bold text-[14px] tracking-wide">{BOT_NAME}</div>
                <div className="text-white/50 text-[11px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Indolog Assistant · Online
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="ml-auto text-white/50 hover:text-white transition-colors">
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-3">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}
              {typing && (
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <FaRobot className="text-gold text-[10px]" />
                  </div>
                  <div className="bg-[#f0f1f5] px-4 py-2.5 rounded-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    className="text-[11px] border border-border text-text-mid hover:border-navy hover:text-navy px-3 py-1.5 transition-colors rounded-sm"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border px-4 py-3 flex gap-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                placeholder="Type your question..."
                className="flex-1 text-[13px] bg-[#f5f6f8] border border-border px-3.5 py-2.5 outline-none focus:border-navy transition-colors rounded-sm"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="w-10 h-10 bg-gold text-black flex items-center justify-center hover:bg-gold-light disabled:opacity-40 transition-colors shrink-0"
              >
                <FaPaperPlane className="text-[12px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
