"use client";

import { useState } from "react";

const PILLARS = [
  {
    num: "01",
    badge: "Architecture produit",
    title: "Plateformes,\npas projets",
    desc: "Nos produits sont testés, documentés et maintenus en continu. Aucune dépendance à un projet sur mesure fragile — vous utilisez un logiciel éprouvé, mis à jour automatiquement.",
    accent: "#1857e8",
  },
  {
    num: "02",
    badge: "Intelligence native",
    title: "IA embarquée",
    desc: "L'intelligence artificielle est au cœur de chaque plateforme — pas un module optionnel. Chaque fonctionnalité est conçue pour tirer parti de l'IA dès le départ.",
    accent: "#8b5cf6",
  },
  {
    num: "03",
    badge: "Mesure & performance",
    title: "Résultats mesurables",
    desc: "Chaque déploiement inclut des indicateurs de performance et un suivi rigoureux. Vous savez exactement ce que vous obtenez — et vous pouvez le démontrer.",
    accent: "#0891b2",
  },
  {
    num: "04",
    badge: "Origine québécoise",
    title: "Développé au Québec",
    desc: "Une entreprise locale, des équipes accessibles, un accompagnement humain. Nous comprenons le cadre réglementaire québécois et les spécificités du marché canadien.",
    accent: "#10b981",
  },
];

const EASE = "600ms cubic-bezier(.22,1,.36,1)";

const COMPARE_ROWS = [
  { label: "Produit", civicai: "Plateforme logicielle", agence: "Projet sur mesure" },
  { label: "Maintenance", civicai: "Continue et incluse", agence: "Contrat séparé" },
  { label: "Mise à jour", civicai: "Automatique", agence: "Facturation additionnelle" },
  { label: "IA", civicai: "Intégrée nativement", agence: "Add-on optionnel" },
  { label: "Déploiement", civicai: "Jours ou semaines", agence: "Mois ou années" },
  { label: "ROI", civicai: "Mesurable et garanti", agence: "Variable" },
];

export default function WhyCivicAIEditor() {
  const [active, setActive] = useState(0);
  const pillar = PILLARS[active];

  return (
    <section style={{ background: "#060e1f", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: "52px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: "#1857e8",
              background: "rgba(24,87,232,0.1)",
              border: "1px solid rgba(24,87,232,0.2)",
              padding: "4px 14px",
              borderRadius: "100px",
              marginBottom: "18px",
            }}
          >
            Un éditeur de logiciels
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              fontFamily: "var(--font-poppins), sans-serif",
              maxWidth: "560px",
            }}
          >
            Un éditeur,{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>pas une agence.</span>
          </h2>
          <p
            style={{
              marginTop: "16px",
              fontSize: "15px",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            CivicAI conçoit, développe et maintient ses propres plateformes logicielles. Nos clients
            obtiennent un produit éprouvé, pas un projet sur mesure fragile.
          </p>
        </div>

        {/* Desktop: expanding panels */}
        <div className="hidden lg:flex" style={{ gap: "10px", height: "380px" }}>
          {PILLARS.map((p, i) => {
            const isActive = i === active;
            return (
              <div
                key={p.num}
                onClick={() => !isActive && setActive(i)}
                style={{
                  position: "relative",
                  flex: "1 1 0",
                  maxWidth: isActive ? "660px" : "78px",
                  minWidth: "66px",
                  overflow: "hidden",
                  borderRadius: "22px",
                  cursor: isActive ? "default" : "pointer",
                  background: isActive ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                  border: isActive
                    ? `1px solid ${p.accent}50`
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isActive
                    ? `0 0 0 1px ${p.accent}20, 0 32px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)`
                    : "none",
                  transition: `max-width ${EASE}, border-color ${EASE}, box-shadow ${EASE}, background ${EASE}`,
                }}
              >
                {/* Left accent line */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "36px",
                    bottom: "36px",
                    width: "3px",
                    background: p.accent,
                    borderRadius: "0 3px 3px 0",
                    opacity: isActive ? 1 : 0,
                    transition: `opacity ${EASE}`,
                  }}
                />

                {/* Decorative number */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "20px",
                    fontSize: "112px",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: p.accent,
                    opacity: 0.07,
                    fontFamily: "var(--font-poppins), sans-serif",
                    userSelect: "none" as const,
                    pointerEvents: "none" as const,
                  }}
                >
                  {p.num}
                </div>

                {/* Active content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: "40px 40px 36px 44px",
                    display: "flex",
                    flexDirection: "column" as const,
                    opacity: isActive ? 1 : 0,
                    transition: isActive ? "opacity 380ms 240ms" : "opacity 100ms 0ms",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: p.accent,
                        boxShadow: `0 0 10px ${p.accent}`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: p.accent,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "32px",
                      fontWeight: 800,
                      color: "white",
                      lineHeight: 1.1,
                      marginBottom: "16px",
                      fontFamily: "var(--font-poppins), sans-serif",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {p.title}
                  </h3>

                  <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(255,255,255,0.52)", maxWidth: "360px" }}>
                    {p.desc}
                  </p>

                  {/* Bottom nav */}
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      {PILLARS.map((_, j) => (
                        <button
                          key={j}
                          onClick={(e) => { e.stopPropagation(); setActive(j); }}
                          style={{
                            width: j === active ? "22px" : "6px",
                            height: "6px",
                            borderRadius: "3px",
                            background: j === active ? p.accent : "rgba(255,255,255,0.18)",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            transition: `width ${EASE}, background ${EASE}`,
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); setActive(Math.max(0, active - 1)); }}
                        disabled={active === 0}
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.12)",
                          background: "rgba(255,255,255,0.05)",
                          color: active === 0 ? "rgba(255,255,255,0.2)" : "white",
                          cursor: active === 0 ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        aria-label="Précédent"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setActive(Math.min(PILLARS.length - 1, active + 1)); }}
                        disabled={active === PILLARS.length - 1}
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "50%",
                          border: "none",
                          background: active === PILLARS.length - 1 ? "rgba(255,255,255,0.06)" : p.accent,
                          color: active === PILLARS.length - 1 ? "rgba(255,255,255,0.2)" : "white",
                          cursor: active === PILLARS.length - 1 ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: `background ${EASE}`,
                        }}
                        aria-label="Suivant"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mini content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column" as const,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "14px",
                    opacity: isActive ? 0 : 1,
                    transition: isActive ? "opacity 100ms 0ms" : "opacity 280ms 200ms",
                    pointerEvents: isActive ? "none" : "auto",
                  }}
                >
                  <div style={{ width: "3px", height: "28px", background: p.accent, borderRadius: "2px", opacity: 0.65 }} />
                  <span style={{ fontSize: "11px", fontWeight: 800, color: p.accent, letterSpacing: "0.1em" }}>
                    {p.num}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.4)",
                      writingMode: "vertical-rl" as const,
                      textOrientation: "mixed" as const,
                      transform: "rotate(180deg)",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.title.replace("\n", " ")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical accordion */}
        <div className="lg:hidden" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {PILLARS.map((p, i) => {
            const isActive = i === active;
            return (
              <div
                key={p.num}
                onClick={() => setActive(i)}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: isActive ? `1px solid ${p.accent}44` : "1px solid rgba(255,255,255,0.07)",
                  background: isActive ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                  transition: "border-color 400ms, background 400ms",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "18px 22px" }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: p.accent, flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", fontWeight: 700, color: p.accent, flexShrink: 0, letterSpacing: "0.08em" }}>
                    {p.num}
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "white", flex: 1, fontFamily: "var(--font-poppins), sans-serif" }}>
                    {p.title.replace("\n", " ")}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "20px",
                      transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 300ms cubic-bezier(.22,1,.36,1)",
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </div>
                <div style={{ maxHeight: isActive ? "200px" : "0", overflow: "hidden", transition: "max-height 500ms cubic-bezier(.22,1,.36,1)" }}>
                  <p style={{ fontSize: "14px", lineHeight: 1.75, color: "rgba(255,255,255,0.52)", padding: "16px 22px 22px 43px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div
          style={{
            marginTop: "64px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "22px",
            padding: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.07)" }} />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "rgba(255,255,255,0.25)",
                whiteSpace: "nowrap",
              }}
            >
              CivicAI vs Agence traditionnelle
            </span>
            <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.07)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1.5fr", gap: "10px", marginBottom: "12px", padding: "0 4px" }}>
            <div />
            <div style={{ textAlign: "center", fontSize: "11px", fontWeight: 700, color: "#1857e8", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              CivicAI Inc.
            </div>
            <div style={{ textAlign: "center", fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              Agence
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {COMPARE_ROWS.map((row) => (
              <div
                key={row.label}
                style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1.5fr", gap: "10px", alignItems: "center" }}
              >
                <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>
                  {row.label}
                </span>
                <div
                  style={{
                    background: "rgba(24,87,232,0.15)",
                    border: "1px solid rgba(24,87,232,0.25)",
                    color: "#6fa3ff",
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "8px 14px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  {row.civicai}
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.25)",
                    fontSize: "12px",
                    padding: "8px 14px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  {row.agence}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
