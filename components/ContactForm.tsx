"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ labels }: {
  labels: {
    name: string;
    org: string;
    email: string;
    message: string;
    submit: string;
  };
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      _subject: "Nouvelle demande de démonstration — CivicAI",
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/contact@nexhire.ca", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 gap-6">
        {/* Checkmark icon */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(16,185,129,0.1)", border: "2px solid rgba(16,185,129,0.3)" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h3
            className="text-xl font-bold text-slate-900 mb-2"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Message envoyé !
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Votre demande a bien été reçue. Notre équipe vous répondra dans les 24 à 48 heures.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
          {labels.name} *
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
          placeholder="Marie Tremblay"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
          {labels.org} *
        </label>
        <input
          type="text"
          name="organization"
          required
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
          placeholder="Chambre de Commerce de Trois-Rivières"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
          {labels.email} *
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
          placeholder="marie@organisation.ca"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
          {labels.message}
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all resize-none"
          placeholder="Décrivez votre organisation et ce que vous cherchez à accomplir…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          Une erreur est survenue. Veuillez réessayer ou écrire directement à{" "}
          <a href="mailto:contact@nexhire.ca" className="underline font-medium">
            contact@nexhire.ca
          </a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full disabled:opacity-60 text-white font-semibold text-sm py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
        style={{ background: "#7c3aed" }}
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Envoi en cours…
          </>
        ) : labels.submit}
      </button>
    </form>
  );
}
