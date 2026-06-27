"use client";

import { useState } from "react";

const STEPS = [
  {
    num: "01",
    title: "Découvrir",
    desc: "Diagnostic de maturité IA et analyse complète de l'organisation. Nous cartographions vos processus, outils et équipes pour établir un indice de maturité précis.",
    accent: "#1857e8",
  },
  {
    num: "02",
    title: "Analyser",
    desc: "Identification des opportunités et des zones d'amélioration prioritaires. Rapport détaillé avec recommandations classées par impact et faisabilité.",
    accent: "#6366f1",
  },
  {
    num: "03",
    title: "Automatiser",
    desc: "Déploiement des outils IA adaptés aux processus et aux équipes. Intégration progressive, formation incluse, sans rupture opérationnelle.",
    accent: "#8b5cf6",
  },
  {
    num: "04",
    title: "Mesurer",
    desc: "Suivi des indicateurs de performance et calcul du retour sur investissement. Tableau de bord de gouvernance mis à jour en temps réel.",
    accent: "#0891b2",
  },
  {
    num: "05",
    title: "Transformer",
    desc: "Ancrage durable de l'IA dans la culture et les opérations de l'organisation. L'intelligence artificielle devient un avantage compétitif structurel.",
    accent: "#10b981",
  },
];

const EASE = "600ms cubic-bezier(.22,1,.36,1)";

export default function Approach() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

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
            Notre approche
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
            Un processus structuré,{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>
              de l'évaluation initiale à l'ancrage durable.
            </span>
          </h2>
        </div>

        {/* ── Desktop: expanding panels ── */}
        <div className="hidden lg:flex" style={{ gap: "10px", height: "400px" }}>
          {STEPS.map((s, i) => {
            const isActive = i === active;
            return (
              <div
                key={s.num}
                onClick={() => !isActive && setActive(i)}
                style={{
                  position: "relative",
                  flex: "1 1 0",
                  maxWidth: isActive ? "660px" : "78px",
                  minWidth: "66px",
                  overflow: "hidden",
                  borderRadius: "22px",
                  cursor: isActive ? "default" : "pointer",
                  background: isActive
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.03)",
                  border: isActive
                    ? `1px solid ${s.accent}50`
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isActive
                    ? `0 0 0 1px ${s.accent}20, 0 32px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)`
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
                    background: s.accent,
                    borderRadius: "0 3px 3px 0",
                    opacity: isActive ? 1 : 0,
                    transition: `opacity ${EASE}`,
                  }}
                />

                {/* Decorative large number */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "20px",
                    fontSize: "112px",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: s.accent,
                    opacity: 0.07,
                    fontFamily: "var(--font-poppins), sans-serif",
                    userSelect: "none" as const,
                    pointerEvents: "none" as const,
                    transition: `opacity ${EASE}`,
                  }}
                >
                  {s.num}
                </div>

                {/* ── Active content ── */}
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
                  {/* Step badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
                    <div
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: s.accent,
                        boxShadow: `0 0 10px ${s.accent}`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: s.accent,
                      }}
                    >
                      Étape {s.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "38px",
                      fontWeight: 800,
                      color: "white",
                      lineHeight: 1.05,
                      marginBottom: "18px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.52)",
                      maxWidth: "360px",
                    }}
                  >
                    {s.desc}
                  </p>

                  {/* Bottom controls */}
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Progress dots */}
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      {STEPS.map((_, j) => (
                        <button
                          key={j}
                          onClick={(e) => { e.stopPropagation(); setActive(j); }}
                          style={{
                            width: j === active ? "22px" : "6px",
                            height: "6px",
                            borderRadius: "3px",
                            background: j === active ? s.accent : "rgba(255,255,255,0.18)",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            transition: `width ${EASE}, background ${EASE}`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Prev / Next arrows */}
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
                          transition: "opacity 200ms",
                        }}
                        aria-label="Précédent"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setActive(Math.min(STEPS.length - 1, active + 1)); }}
                        disabled={active === STEPS.length - 1}
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "50%",
                          border: "none",
                          background: active === STEPS.length - 1 ? "rgba(255,255,255,0.06)" : s.accent,
                          color: active === STEPS.length - 1 ? "rgba(255,255,255,0.2)" : "white",
                          cursor: active === STEPS.length - 1 ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: `background ${EASE}`,
                        }}
                        aria-label="Suivant"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* ── Mini content (vertical) ── */}
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
                  <div style={{ width: "3px", height: "28px", background: s.accent, borderRadius: "2px", opacity: 0.65 }} />
                  <span style={{ fontSize: "11px", fontWeight: 800, color: s.accent, letterSpacing: "0.1em" }}>
                    {s.num}
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
                    {s.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile: vertical accordion ── */}
        <div className="lg:hidden" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {STEPS.map((s, i) => {
            const isActive = i === active;
            return (
              <div
                key={s.num}
                onClick={() => setActive(i)}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: isActive ? `1px solid ${s.accent}44` : "1px solid rgba(255,255,255,0.07)",
                  background: isActive ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                  transition: `border-color 400ms, background 400ms`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "18px 22px" }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: s.accent, flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", fontWeight: 700, color: s.accent, flexShrink: 0, letterSpacing: "0.08em" }}>
                    {s.num}
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "white", flex: 1, fontFamily: "var(--font-poppins), sans-serif" }}>
                    {s.title}
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
                <div
                  style={{
                    maxHeight: isActive ? "200px" : "0",
                    overflow: "hidden",
                    transition: `max-height 500ms cubic-bezier(.22,1,.36,1)`,
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.52)",
                      padding: "0 22px 22px 43px",
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                      paddingTop: "16px",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
