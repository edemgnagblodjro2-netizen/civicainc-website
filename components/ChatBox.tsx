"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const KNOWLEDGE: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["organisation", "s adresse", "type d organisation", "qui peut", "pour qui", "cible", "chambre de commerce", "chambre", "municipalit", "pme", "public", "institution", "association"],
    answer: "Nos plateformes s'adressent aux **chambres de commerce**, aux municipalités, aux **PME** et aux organisations publiques. Toute organisation ayant des enjeux de gouvernance IA, d'optimisation SaaS ou de services à la communauté peut bénéficier de nos solutions.",
  },
  {
    keywords: ["deploiement", "deployment", "comment ca marche", "comment fonctionne", "processus", "etape", "integration", "mettre en place", "commencer", "debuter", "demarrer"],
    answer: "Nous débutons par un **diagnostic de maturité IA**. Ensuite, un plan de déploiement adapté à votre contexte est proposé. Nos plateformes sont **modulaires** et déployées progressivement, sans perturber vos opérations.",
  },
  {
    keywords: ["microsoft", "365", "m365", "office", "teams", "sharepoint", "azure", "compatible"],
    answer: "Oui ! **NexHire EIP** est spécifiquement conçu pour l'écosystème Microsoft 365. **AgentHub Platform** inclut aussi des connecteurs multi-sources compatibles avec les environnements Microsoft.",
  },
  {
    keywords: ["quebec", "canada", "localisation", "base", "trois-rivieres", "trois rivieres", "local", "qc", "quebecois"],
    answer: "Oui, **CivicAI Inc.** est basée à **Trois-Rivières, Québec**. Nos équipes comprennent le cadre réglementaire québécois et les spécificités du marché local, tout en intervenant à l'échelle canadienne. 🍁",
  },
  {
    keywords: ["securite", "donnees", "confidentialite", "protection", "isole", "multi-tenant", "rgpd", "loi 25", "conformite"],
    answer: "Nos plateformes utilisent une **architecture multi-tenant** avec isolation complète des données entre les clients. Chaque déploiement est **conforme aux exigences** du secteur public québécois et à la Loi 25.",
  },
  {
    keywords: ["prix", "cout", "tarif", "combien", "abonnement", "frais", "budget", "gratuit", "essai"],
    answer: "Nos tarifs sont établis selon la taille de votre organisation et les modules choisis. [Contactez-nous](/fr/contact) pour recevoir une **proposition personnalisée** — c'est sans engagement.",
  },
  {
    keywords: ["agenthub", "agent hub", "gouvernance", "atlas", "diagnostic", "maturite", "tableau de bord", "observatoire"],
    answer: "**AgentHub Platform** est notre solution de gouvernance IA pour chambres de commerce et organisations. Elle inclut **ATLAS** (agent IA conversationnel), un diagnostic de maturité IA, et un observatoire analytique multi-sources en temps réel.",
  },
  {
    keywords: ["nexhire", "saas", "licences", "logiciels", "optimisation", "rh", "ressources humaines", "eip", "intelligence entreprise", "inventaire"],
    answer: "**NexHire EIP** est notre plateforme d'intelligence d'entreprise et de gouvernance SaaS. Elle détecte les redondances logicielles et optimise votre portefeuille Microsoft 365 pour **réduire vos coûts** jusqu'à ×9.9 ROI.",
  },
  {
    keywords: ["attentezero", "attente zero", "file d attente", "file attente", "service citoyen", "citoyens", "guichet", "en developpement"],
    answer: "**AttenteZéro** est notre plateforme de gestion intelligente des services aux citoyens. Elle est actuellement **en développement** et sera disponible prochainement. Vous pouvez vous inscrire sur notre liste d'attente via [le formulaire](/fr/contact).",
  },
  {
    keywords: ["demo", "demonstration", "essai", "tester", "voir en action", "rencontre", "planifier", "visite", "presentation"],
    answer: "Nous offrons des démonstrations **personnalisées et sans engagement**. [Planifier une démonstration →](/fr/contact) — Notre équipe vous contactera dans les 24 à 48 heures.",
  },
  {
    keywords: ["contact", "joindre", "email", "courriel", "telephone", "appel", "appeler", "ecrire", "message"],
    answer: "Vous pouvez nous joindre par courriel à **contact@nexhire.ca** ou via notre [formulaire de contact](/fr/contact). Notre équipe est basée à **Trois-Rivières, Québec** et répond dans les 24 à 48 h.",
  },
  {
    keywords: ["carriere", "emploi", "travail", "poste", "job", "rejoindre", "equipe", "recrute", "recrutement", "candidature"],
    answer: "Nous recrutons activement ! Postes ouverts : **Développeur·euse Full Stack**, **Architecte IA**, **Chargé·e de compte — Secteur public**. Envoyez votre CV à **contact@nexhire.ca** ou visitez [Carrières](/fr/carrieres).",
  },
  {
    keywords: ["civicai", "civic ai", "qui etes vous", "l entreprise", "fondateur", "histoire", "a propos", "societe", "inc"],
    answer: "**CivicAI Inc.** est un éditeur de logiciels IA **100% québécois**, basé à Trois-Rivières. Nous développons des plateformes d'IA responsable pour les chambres de commerce, les organisations publiques et les PME.",
  },
  {
    keywords: ["innovation", "projet", "roadmap", "futur", "prochainement", "a venir", "r&d", "recherche"],
    answer: "Nos projets actifs : **AgentHub Platform**, **NexHire EIP**, **AttenteZéro** (en développement), **Observatoire IA**, **Agent ATLAS**, **Parcours IA PME**. Visitez [Innovation](/fr/innovation) pour les détails.",
  },
  {
    keywords: ["ia", "intelligence artificielle", "machine learning", "llm", "gpt", "automatisation", "ai"],
    answer: "L'IA est au cœur de chaque plateforme CivicAI. **ATLAS** est notre agent IA conversationnel. Nous utilisons des modèles LLM pour le diagnostic, l'analyse et l'automatisation — avec **gouvernance et transparence**.",
  },
  {
    keywords: ["platformes", "plateformes", "solutions", "produits", "offre"],
    answer: "CivicAI propose **3 plateformes** : \n• **AgentHub Platform** — gouvernance IA & ATLAS \n• **NexHire EIP** — intelligence d'entreprise & SaaS \n• **AttenteZéro** — services citoyens intelligents \n\n[Voir toutes les plateformes →](/fr/plateformes)",
  },
  {
    keywords: ["delai", "temps", "duree", "combien de temps", "rapidement", "vite"],
    answer: "Nos déploiements se font en **30 à 90 jours** selon la complexité. Le diagnostic initial est complété en **5 à 10 jours ouvrables**. Nos plateformes sont conçues pour une intégration rapide sans perturber vos opérations.",
  },
  {
    keywords: ["support", "aide", "assistance", "formation", "accompagnement", "formation"],
    answer: "Oui ! Chaque déploiement inclut une **formation complète** pour vos équipes et un accompagnement continu. Notre équipe est disponible pour vous guider à chaque étape de la transformation.",
  },
];

const SUGGESTIONS = [
  "Qui peut utiliser vos plateformes ?",
  "Qu'est-ce qu'AgentHub ?",
  "Comment demander une démo ?",
  "Êtes-vous basés au Québec ?",
];

const WELCOME = "Bonjour ! Je suis **ATLAS**, l'assistant IA de CivicAI. 👋\n\nJe peux répondre à vos questions sur nos plateformes, tarifs, déploiements ou carrières. Comment puis-je vous aider ?";

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['']/g, " ");
}

function findAnswer(input: string): string {
  const n = normalize(input);
  let best = { score: 0, answer: "" };
  for (const entry of KNOWLEDGE) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (n.includes(normalize(kw))) score += 2;
      else {
        const words = normalize(kw).split(" ");
        if (words.length > 1 && words.every((w) => n.includes(w))) score += 1;
      }
    }
    if (score > best.score) best = { score, answer: entry.answer };
  }
  if (best.score > 0) return best.answer;
  return "Je n'ai pas trouvé de réponse précise. 😊 [Contactez notre équipe →](/fr/contact) ou consultez notre [FAQ](/fr/pourquoi) — nous répondons dans les 24 à 48 heures.";
}

function BotText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const lines = text.split("\n");
  lines.forEach((line, li) => {
    if (li > 0) parts.push(<br key={`br-${li}`} />);
    const regex = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(line)) !== null) {
      if (m.index > last) parts.push(line.slice(last, m.index));
      if (m[1]) parts.push(<strong key={`b-${li}-${m.index}`}>{m[1]}</strong>);
      else if (m[2] && m[3])
        parts.push(<a key={`a-${li}-${m.index}`} href={m[3]} className="underline font-semibold hover:opacity-80">{m[2]}</a>);
      last = regex.lastIndex;
    }
    if (last < line.length) parts.push(line.slice(last));
  });
  return <>{parts}</>;
}

let msgId = 0;

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: msgId++, from: "bot", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [showBadge, setShowBadge] = useState(true);
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setShowBadge(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: msgId++, from: "user", text: text.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setShowSuggestions(false);
    setTyping(true);
    setTimeout(() => {
      const answer = findAnswer(text);
      setTyping(false);
      setMessages((m) => [...m, { id: msgId++, from: "bot", text: answer }]);
    }, 600 + Math.random() * 400);
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <>
      {/* ── Floating toggle button ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {!open && (
          <div
            className="text-xs font-semibold text-white px-3 py-1.5 rounded-full shadow-lg pointer-events-none"
            style={{ background: "rgba(124,58,237,0.92)", backdropFilter: "blur(8px)" }}
          >
            Discutez avec ATLAS
          </div>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          style={{ background: open ? "#5b21b6" : "#7c3aed" }}
          aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
          {showBadge && !open && (
            <span
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold text-white flex items-center justify-center"
              style={{ background: "#ef4444" }}
            >
              1
            </span>
          )}
        </button>
      </div>

      {/* ── Chat panel ── */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden"
          style={{
            width: "clamp(320px, 90vw, 380px)",
            height: "clamp(420px, 60vh, 520px)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #0a1730 0%, #3b0764 100%)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(124,58,237,0.35)", border: "1.5px solid rgba(167,139,250,0.4)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-none">ATLAS</p>
              <p className="text-white/50 text-xs mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                Assistant CivicAI
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/40 hover:text-white transition-colors p-1"
              aria-label="Fermer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ background: "#f8fafc" }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "text-white rounded-br-sm"
                      : "text-slate-700 rounded-bl-sm"
                  }`}
                  style={
                    msg.from === "user"
                      ? { background: "#7c3aed" }
                      : { background: "white", border: "1px solid #e2e8f0" }
                  }
                >
                  {msg.from === "bot" ? <BotText text={msg.text} /> : msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1"
                  style={{ background: "white", border: "1px solid #e2e8f0" }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full bg-slate-300"
                      style={{ animation: `bounce 1.2s ease ${i * 0.2}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {showSuggestions && messages.length <= 1 && (
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-xs text-slate-400 font-medium px-1">Questions fréquentes :</p>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-left text-xs font-medium px-3.5 py-2 rounded-xl border transition-all hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50"
                    style={{ background: "white", borderColor: "#e2e8f0", color: "#475569" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
            style={{ background: "white", borderTop: "1px solid #e2e8f0" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Posez votre question…"
              className="flex-1 text-sm text-slate-700 placeholder:text-slate-300 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
              style={{ "--tw-ring-color": "#7c3aed40" } as React.CSSProperties}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:opacity-90 active:scale-95 disabled:opacity-30 flex-shrink-0"
              style={{ background: "#7c3aed" }}
              aria-label="Envoyer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
