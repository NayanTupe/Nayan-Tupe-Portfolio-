"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Code2, ExternalLink, Mail, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { profile, profileLinks, projects, skills } from "@/lib/portfolio-data";

const quickQuestions = [
  "Who are you?",
  "Show your projects.",
  "Show your resume.",
  "What technologies do you use?",
  "Open GitHub.",
  "Contact Nayan.",
];

function answerFor(input: string) {
  const text = input.toLowerCase();
  if (text.includes("project")) return `Nayan has ${projects.length} resume projects. Start with RetailIQ, TradingMLModel and KKC Spices for ML, API, dashboard and deployment proof.`;
  if (text.includes("resume")) return "Opening the resume. It covers Data Science, Machine Learning, Python, FastAPI, React/Vite dashboards, projects and certificates.";
  if (text.includes("technolog") || text.includes("skill")) return `Resume technologies: ${skills.slice(0, 12).map((skill) => skill.name).join(", ")} and deployment tools like Render, Vercel, Git and GitHub.`;
  if (text.includes("github")) return "Opening GitHub repositories so you can inspect the work directly.";
  if (text.includes("contact")) return `You can contact Nayan at ${profile.email}. I can also take you to the contact form.`;
  if (text.includes("hello")) {
    window.dispatchEvent(new CustomEvent("portfolio:hello"));
    return "Hello. A tiny hidden motion system just woke up for you.";
  }
  if (text.includes("who")) return `${profile.name} is focused on ${profile.role}. Target roles: ${profile.targetRoles}.`;
  return "I can show projects, open the resume, explain technologies, open GitHub or take you to contact.";
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ by: "assistant", text: "Nayan OS assistant ready. Ask for projects, resume, technologies or contact." }]);
  const actions = useMemo(
    () => ({
      "Show your projects.": () => (window.location.hash = "projects"),
      "Show your resume.": () => window.open(profileLinks.resume, "_blank"),
      "Open GitHub.": () => window.open(profileLinks.github, "_blank"),
      "Contact Nayan.": () => (window.location.hash = "contact"),
    }),
    [],
  );

  useEffect(() => {
    const logoSecret = () => {
      setOpen(true);
      setMessages((items) => [...items, { by: "assistant", text: "Logo diagnostic: craft mode is active. Good eye." }]);
    };
    window.addEventListener("portfolio:logo-secret", logoSecret);
    return () => window.removeEventListener("portfolio:logo-secret", logoSecret);
  }, []);

  const send = (value = input) => {
    const clean = value.trim();
    if (!clean) return;
    setMessages((items) => [...items, { by: "user", text: clean }, { by: "assistant", text: answerFor(clean) }]);
    setInput("");
    const action = actions[clean as keyof typeof actions];
    if (action) window.setTimeout(action, 250);
  };

  return (
    <div className="assistant-shell">
      <AnimatePresence>
        {open && (
          <motion.div className="assistant-panel" initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: 0.98 }}>
            <header>
              <span><Bot size={17} /> Nayan Assistant</span>
              <button onClick={() => setOpen(false)} aria-label="Close assistant"><X size={16} /></button>
            </header>
            <div className="assistant-messages">
              {messages.map((message, index) => <p className={message.by} key={`${message.text}-${index}`}>{message.text}</p>)}
            </div>
            <div className="quick-grid">
              {quickQuestions.map((question) => (
                <button key={question} onClick={() => send(question)}>
                  {question}
                  {question.includes("Open") || question.includes("resume") ? <ExternalLink size={13} /> : null}
                </button>
              ))}
            </div>
            <form onSubmit={(event) => { event.preventDefault(); send(); }}>
              <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask Nayan OS..." aria-label="Ask assistant" />
              <button aria-label="Send assistant message"><Send size={15} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button className="assistant-toggle magnetic" onClick={() => setOpen((value) => !value)} aria-label="Open AI assistant">
        {open ? <MessageCircle size={20} /> : <Sparkles size={20} />}
        <span />
      </button>
      <a className="assistant-github" href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="Open GitHub">
        <Code2 size={18} />
      </a>
      <a className="assistant-mail" href={`mailto:${profile.email}`} aria-label="Email Nayan">
        <Mail size={18} />
      </a>
    </div>
  );
}
