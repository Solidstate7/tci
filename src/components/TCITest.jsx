import { useState, useRef } from "react";

import { T, DIMS, INTERP, QS, ARCHETYPES, NORMS, TIERS, normCdf, tierIndex } from "./tciData";

// Tier band → which of the three written interpretations to surface.
// 0/1 (Very Low / Low) → low, 2 (Average) → balanced, 3/4 (High / Very High) → high.
function tierText(interp, t, tier) {
    const detail = tier <= 1 ? interp.detail.low : tier === 2 ? interp.detail.balanced : interp.detail.high;
    const short = tier <= 1 ? interp.low : tier === 2 ? t.balanced : interp.high;
    return { detail, short };
}

function ScoreBar({ dim, score, lang }) {
    const [expanded, setExpanded] = useState(false);
    const d = DIMS[dim];
    const interp = INTERP[dim][lang];
    const t = T[lang];
    const { detail, short } = tierText(interp, t, score.tier);
    const tierLabel = TIERS[score.tier][lang];

    return (
        <div style={{ marginBottom: 18, marginTop: 4, padding: "10px", borderRadius: "10px", background: expanded ? "#f9f8f6" : "transparent", transition: "background 0.2s" }} onClick={() => setExpanded(!expanded)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, cursor: "pointer" }}>
                <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 15, color: "#1a1a2e", display: "flex", alignItems: "center", gap: 6 }}>
                    {d[lang]}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: d.color + "18", color: d.color, textTransform: "uppercase", letterSpacing: 0.5 }}>{tierLabel}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#1a1a2e", fontWeight: 700 }}>T{score.t}</span>
                </span>
            </div>

            {/* Percentile profile: marker plotted against a shaded average band */}
            <div style={{ position: "relative", height: 14, background: "#e8e6e1", borderRadius: 7, cursor: "pointer" }}>
                <div style={{ position: "absolute", left: "30.85%", width: "38.3%", top: 0, bottom: 0, background: "#d6d1c7", borderRadius: 2 }} />
                <div style={{ position: "absolute", left: "50%", top: -1, bottom: -1, width: 1, background: "#b3ad9f" }} />
                <div style={{ position: "absolute", left: `${score.pct}%`, top: "50%", width: 14, height: 14, marginLeft: -7, marginTop: -7, borderRadius: "50%", background: d.color, border: "2px solid #fffefa", boxShadow: "0 1px 3px rgba(0,0,0,0.35)" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#bbb", fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>
                <span>0</span><span>50</span><span>100</span>
            </div>

            <div style={{ fontSize: 11, color: "#666", marginTop: 6, fontStyle: "italic" }}>
                <strong style={{ color: d.color, fontStyle: "normal" }}>{score.pct}{lang === "ko" ? "" : ""}<span style={{ fontSize: 9, fontWeight: 400 }}>{lang === "ko" ? "백분위" : "th %ile"}</span></strong> · {short}
                <span style={{ marginLeft: 4, fontSize: 10, color: "#aaa", textDecoration: "underline", cursor: "pointer" }}>{expanded ? t.hide : t.details}</span>
            </div>

            {expanded && (
                <div style={{ marginTop: 10, fontSize: 12, color: "#444", lineHeight: 1.5, background: "#fff", padding: "12px 14px", borderRadius: 8, border: "1px solid #eaeaea", fontStyle: "normal" }} onClick={(e) => e.stopPropagation()}>
                    <div style={{ fontSize: 10, color: "#999", fontFamily: "'JetBrains Mono', monospace", marginBottom: 8, display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <span>{t.tScoreLabel}: <strong style={{ color: "#1a1a2e" }}>{score.t}</strong></span>
                        <span>{t.percentileLabel}: <strong style={{ color: "#1a1a2e" }}>{score.pct}</strong></span>
                        <span>{t.rangeLabel}: <strong style={{ color: d.color }}>{TIERS[score.tier][lang]}</strong></span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 5 }}>{t.interpHeading}</div>
                    {detail}
                </div>
            )}
        </div>
    );
}

export default function TCITest() {
    const [lang, setLang] = useState("ko");
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [done, setDone] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);
    const lock = useRef(false);

    const t = T[lang];
    const total = QS.length;
    const progress = (Object.keys(answers).length / total) * 100;
    const opts = [
        { label: t.sd, value: 1 }, { label: t.d, value: 2 },
        { label: t.n, value: 3 }, { label: t.a, value: 4 }, { label: t.sa, value: 5 },
    ];

    function transition(action) {
        if (lock.current) return;
        lock.current = true;
        setFadeIn(false);
        setTimeout(() => {
            action();
            setFadeIn(true);
            lock.current = false;
        }, 200);
    }

    function answer(val) {
        transition(() => {
            setAnswers(a => ({ ...a, [current]: val }));
            if (current < total - 1) setCurrent(c => c + 1);
        });
    }

    // Raw scores → z-score against reference norms → T-score, percentile, band.
    function computeScores() {
        const sums = {}, counts = {};
        Object.keys(DIMS).forEach(d => { sums[d] = 0; counts[d] = 0; });
        Object.entries(answers).forEach(([i, v]) => {
            const item = QS[+i];
            sums[item.dim] += item.rev ? (6 - v) : v;
            counts[item.dim]++;
        });
        const out = {};
        Object.keys(DIMS).forEach(d => {
            const mean = counts[d] > 0 ? sums[d] / counts[d] : NORMS[d].mu;
            const z = (mean - NORMS[d].mu) / NORMS[d].sd;
            const tScore = Math.min(85, Math.max(15, Math.round(50 + 10 * z)));
            const pct = Math.min(99, Math.max(1, Math.round(normCdf(z) * 100)));
            out[d] = { mean, z, t: tScore, pct, tier: tierIndex(z), n: counts[d] };
        });
        return out;
    }

    // Simple response-validity check: near-zero variance across answers suggests
    // straight-lining / invariant responding, which clinical reports flag.
    function responseValidity() {
        const vals = Object.values(answers);
        const n = vals.length;
        const m = vals.reduce((a, b) => a + b, 0) / (n || 1);
        const variance = vals.reduce((a, b) => a + (b - m) ** 2, 0) / (n || 1);
        return { n, sd: Math.sqrt(variance), ok: Math.sqrt(variance) >= 0.5 };
    }

    const allAnswered = Object.keys(answers).length === total;
    const q = QS[current];

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(170deg, #f7f5f0 0%, #ece9e0 50%, #e2ddd3 100%)",
            fontFamily: lang === "ko" ? "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif" : "'DM Sans', 'Helvetica Neue', sans-serif",
            color: "#1a1a2e",
            padding: "20px 16px",
            boxSizing: "border-box"
        }}>
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&family=JetBrains+Mono:wght@500;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />

            <div style={{ maxWidth: 540, margin: "0 auto 12px", display: "flex", justifyContent: "flex-end" }}>
                <button onClick={() => setLang(l => l === "en" ? "ko" : l === "ko" ? "de" : "en")} style={{
                    padding: "5px 14px", borderRadius: 20, border: "1px solid #ccc", background: "#fffefa",
                    cursor: "pointer", fontSize: 12, fontWeight: 600, color: "#666", letterSpacing: 0.5
                }}>
                    {lang === "en" ? "한국어" : lang === "ko" ? "Deutsch" : "English"}
                </button>
            </div>

            {!done ? (
                <div style={{ maxWidth: 540, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 32 }}>
                        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, margin: 0, letterSpacing: -0.5 }}>{t.title}</h1>
                        <p style={{ fontSize: 12, color: "#888", margin: "6px 0 0", textTransform: "uppercase", letterSpacing: 2 }}>{t.subtitle}</p>
                    </div>

                    <div style={{ marginBottom: 28 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#999", marginBottom: 4 }}>
                            <span>{t.qOf(current + 1, total)}</span>
                            <span>{t.complete(Math.round(progress))}</span>
                        </div>
                        <div style={{ height: 4, background: "#d5d0c7", borderRadius: 2, overflow: "hidden" }}>
                            <div style={{ width: `${progress}%`, height: "100%", background: "linear-gradient(90deg, #E85D3A, #9B59B6)", borderRadius: 2, transition: "width 0.4s ease" }} />
                        </div>
                    </div>

                    <div style={{
                        background: "#fffefa", borderRadius: 16, padding: "32px 24px",
                        boxShadow: "0 2px 24px rgba(0,0,0,0.06)", border: "1px solid #e5e0d8",
                        opacity: fadeIn ? 1 : 0, transition: "opacity 0.2s ease",
                        minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "space-between"
                    }}>
                        <div>
                            <div style={{
                                display: "inline-block", background: DIMS[q.dim].color + "18", color: DIMS[q.dim].color,
                                fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20,
                                textTransform: "uppercase", letterSpacing: 1, marginBottom: 16
                            }}>
                                {DIMS[q.dim][lang]}
                            </div>
                            <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0, fontWeight: 400 }}>{q[lang]}</p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 24 }}>
                            {opts.map(opt => {
                                const selected = answers[current] === opt.value;
                                return (
                                    <button key={opt.value} onClick={() => answer(opt.value)} style={{
                                        padding: "12px 16px", border: selected ? `2px solid ${DIMS[q.dim].color}` : "1.5px solid #ddd",
                                        borderRadius: 10, background: selected ? DIMS[q.dim].color + "10" : "#fff",
                                        cursor: "pointer", fontSize: 14, fontWeight: selected ? 600 : 400,
                                        color: selected ? DIMS[q.dim].color : "#444", transition: "all 0.15s ease", textAlign: "left"
                                    }}>
                                        {opt.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                        <button
                            onClick={() => { if (current > 0) transition(() => setCurrent(c => c - 1)); }}
                            disabled={current === 0}
                            style={{
                                padding: "8px 20px", borderRadius: 8, border: "1px solid #ccc", background: "#fff",
                                cursor: current === 0 ? "default" : "pointer", opacity: current === 0 ? 0.3 : 1, fontSize: 13, color: "#555"
                            }}
                        >{t.back}</button>
                        {allAnswered && (
                            <button onClick={() => setDone(true)} style={{
                                padding: "10px 28px", borderRadius: 8, border: "none",
                                background: "linear-gradient(135deg, #E85D3A, #9B59B6)", color: "#fff",
                                cursor: "pointer", fontSize: 14, fontWeight: 700, letterSpacing: 0.5
                            }}>{t.results}</button>
                        )}
                        {!allAnswered && current < total - 1 && answers[current] !== undefined && (
                            <button onClick={() => transition(() => setCurrent(c => c + 1))}
                                style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 13, color: "#555" }}
                            >{t.skip}</button>
                        )}
                    </div>
                </div>
            ) : (() => {
                const scores = computeScores();
                const validity = responseValidity();
                const today = new Date().toLocaleDateString(lang === "ko" ? "ko-KR" : lang === "de" ? "de-DE" : "en-US", { year: "numeric", month: "long", day: "numeric" });
                const cardStyle = { background: "#fffefa", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 24px rgba(0,0,0,0.06)", border: "1px solid #e5e0d8", marginBottom: 20 };
                return (
                <div style={{ maxWidth: 540, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 8 }}>
                        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, margin: 0 }}>{t.reportTitle}</h1>
                        <p style={{ fontSize: 12, color: "#888", marginTop: 6, textTransform: "uppercase", letterSpacing: 2 }}>{t.profileSub}</p>
                        <p style={{ fontSize: 10.5, color: "#aaa", marginTop: 8, fontFamily: "'JetBrains Mono', monospace" }}>{t.assessmentDate}: {today}</p>
                    </div>
                    <p style={{ textAlign: "center", fontSize: 11, color: "#999", fontStyle: "italic", margin: "0 0 24px" }}>{t.basedOn}</p>

                    {/* Profile summary table */}
                    <div style={cardStyle}>
                        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, margin: "0 0 14px", color: "#555" }}>{t.summaryTitle}</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto 88px", gap: "0 12px", alignItems: "center", fontSize: 10, color: "#aaa", textTransform: "uppercase", letterSpacing: 0.5, fontFamily: "'JetBrains Mono', monospace", paddingBottom: 6, borderBottom: "1px solid #eceae4" }}>
                            <span>{t.thDimension}</span>
                            <span style={{ textAlign: "right" }}>{t.thScore}</span>
                            <span style={{ textAlign: "right" }}>{t.thPercentile}</span>
                            <span style={{ textAlign: "right" }}>{t.thRange}</span>
                        </div>
                        {Object.keys(DIMS).map(dim => {
                            const s = scores[dim];
                            return (
                                <div key={dim} style={{ display: "grid", gridTemplateColumns: "1fr auto auto 88px", gap: "0 12px", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #f3f1ec", fontSize: 13 }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: 7, minWidth: 0 }}>
                                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: DIMS[dim].color, flexShrink: 0 }} />
                                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{DIMS[dim][lang]}</span>
                                    </span>
                                    <span style={{ textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{s.t}</span>
                                    <span style={{ textAlign: "right", fontFamily: "'JetBrains Mono', monospace", color: "#888" }}>{s.pct}</span>
                                    <span style={{ textAlign: "right", fontSize: 11, fontWeight: 700, color: DIMS[dim].color }}>{TIERS[s.tier][lang]}</span>
                                </div>
                            );
                        })}
                        <p style={{ fontSize: 9.5, color: "#bbb", margin: "10px 0 0", fontFamily: "'JetBrains Mono', monospace" }}>{t.avgBandLegend}</p>
                    </div>

                    {/* Archetypes */}
                    <div style={cardStyle}>
                        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, margin: "0 0 16px", color: "#555", textAlign: "center" }}>{t.yourArchetype}</h2>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                            {Object.keys(DIMS).map(dim => {
                                const type = scores[dim].t >= 50 ? "high" : "low";
                                const archetype = ARCHETYPES[dim][type][lang];
                                return (
                                    <div key={dim} style={{ padding: "6px 12px", borderRadius: 20, background: DIMS[dim].color + "15", color: DIMS[dim].color, fontSize: 12, fontWeight: 700, border: `1px solid ${DIMS[dim].color}30` }}>
                                        {archetype}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Temperament */}
                    <div style={cardStyle}>
                        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, margin: "0 0 6px", color: "#555" }}>{t.temperament}</h2>
                        <p style={{ fontSize: 11, color: "#999", margin: "0 0 18px" }}>{t.tempDesc}</p>
                        {["NS", "HA", "RD", "PS"].map(d => <ScoreBar key={d} dim={d} score={scores[d]} lang={lang} />)}
                    </div>

                    {/* Character */}
                    <div style={cardStyle}>
                        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, margin: "0 0 6px", color: "#555" }}>{t.character}</h2>
                        <p style={{ fontSize: 11, color: "#999", margin: "0 0 18px" }}>{t.charDesc}</p>
                        {["SD", "CO", "ST"].map(d => <ScoreBar key={d} dim={d} score={scores[d]} lang={lang} />)}
                    </div>

                    {/* Response validity */}
                    <div style={cardStyle}>
                        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 16, margin: "0 0 12px", color: "#555" }}>{t.validityTitle}</h2>
                        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2ECC71" }} />
                                {t.itemsDone(validity.n, total)}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ width: 7, height: 7, borderRadius: "50%", background: validity.ok ? "#2ECC71" : "#E85D3A" }} />
                                {validity.ok ? t.validValid : t.validFlag}
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div style={{ background: "#fffefa", borderRadius: 16, padding: "20px 24px", boxShadow: "0 2px 24px rgba(0,0,0,0.06)", border: "1px solid #e5e0d8", fontSize: 11, color: "#999", lineHeight: 1.6 }}>
                        <strong style={{ color: "#888" }}>{t.note}</strong> {t.noteText}
                    </div>

                    <div style={{ textAlign: "center", marginTop: 20 }}>
                        <button onClick={() => { setDone(false); setCurrent(0); setAnswers({}); }}
                            style={{ padding: "10px 28px", borderRadius: 8, border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 13, color: "#555" }}
                        >{t.retake}</button>
                    </div>
                </div>
                );
            })()}
        </div>
    );
}
