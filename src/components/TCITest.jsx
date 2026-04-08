import { useState, useRef } from "react";

import { T, DIMS, INTERP, QS } from "./tciData";

function ScoreBar({ dim, pct, lang }) {
    const [expanded, setExpanded] = useState(false);
    const d = DIMS[dim];
    const interp = INTERP[dim][lang];
    const t = T[lang];
    const detailedText = pct < 40 ? interp.detail.low : pct > 60 ? interp.detail.high : interp.detail.balanced;
    const shortText = pct < 40 ? interp.low : pct > 60 ? interp.high : t.balanced;
    
    return (
        <div style={{ marginBottom: 18, marginTop: 4, padding: "10px", borderRadius: "10px", background: expanded ? "#f9f8f6" : "transparent", transition: "background 0.2s" }} onClick={() => setExpanded(!expanded)}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, cursor: "pointer" }}>
                <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 15, color: "#1a1a2e", display: "flex", alignItems: "center", gap: 6 }}>
                    {d[lang]}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: d.color, fontWeight: 700 }}>{Math.round(pct)}%</span>
            </div>
            <div style={{ height: 10, background: "#e8e6e1", borderRadius: 5, overflow: "hidden", cursor: "pointer" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg, ${d.color}cc, ${d.color})`, borderRadius: 5, transition: "width 1s cubic-bezier(.22,1,.36,1)" }} />
            </div>
            <div style={{ fontSize: 11, color: "#666", marginTop: 6, fontStyle: "italic" }}>
                {shortText} 
                <span style={{ marginLeft: 4, fontSize: 10, color: "#aaa", textDecoration: "underline", cursor: "pointer" }}>{expanded ? (lang === "ko" ? "접기" : "Hide") : (lang === "ko" ? "자세히 보기" : "Details")}</span>
            </div>
            {expanded && (
                <div style={{ marginTop: 10, fontSize: 12, color: "#444", lineHeight: 1.5, background: "#fff", padding: "12px 14px", borderRadius: 8, border: "1px solid #eaeaea", fontStyle: "normal" }} onClick={(e) => e.stopPropagation()}>
                    {detailedText}
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

    function computeScores() {
        const sums = {}, counts = {};
        Object.keys(DIMS).forEach(d => { sums[d] = 0; counts[d] = 0; });
        Object.entries(answers).forEach(([i, v]) => {
            const q = QS[+i];
            sums[q.dim] += q.rev ? (6 - v) : v;
            counts[q.dim]++;
        });
        const pcts = {};
        Object.keys(DIMS).forEach(d => { pcts[d] = counts[d] > 0 ? ((sums[d] / (counts[d] * 5)) * 100) : 50; });
        return pcts;
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
            ) : (
                <div style={{ maxWidth: 540, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 28 }}>
                        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, margin: 0 }}>{t.yourProfile}</h1>
                        <p style={{ fontSize: 12, color: "#888", marginTop: 6, textTransform: "uppercase", letterSpacing: 2 }}>{t.profileSub}</p>
                    </div>

                    <div style={{ background: "#fffefa", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 24px rgba(0,0,0,0.06)", border: "1px solid #e5e0d8", marginBottom: 20 }}>
                        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, margin: "0 0 6px", color: "#555" }}>{t.temperament}</h2>
                        <p style={{ fontSize: 11, color: "#999", margin: "0 0 18px" }}>{t.tempDesc}</p>
                        {["NS", "HA", "RD", "PS"].map(d => <ScoreBar key={d} dim={d} pct={computeScores()[d]} lang={lang} />)}
                    </div>

                    <div style={{ background: "#fffefa", borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 24px rgba(0,0,0,0.06)", border: "1px solid #e5e0d8", marginBottom: 20 }}>
                        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, margin: "0 0 6px", color: "#555" }}>{t.character}</h2>
                        <p style={{ fontSize: 11, color: "#999", margin: "0 0 18px" }}>{t.charDesc}</p>
                        {["SD", "CO", "ST"].map(d => <ScoreBar key={d} dim={d} pct={computeScores()[d]} lang={lang} />)}
                    </div>

                    <div style={{ background: "#fffefa", borderRadius: 16, padding: "20px 24px", boxShadow: "0 2px 24px rgba(0,0,0,0.06)", border: "1px solid #e5e0d8", fontSize: 11, color: "#999", lineHeight: 1.6 }}>
                        <strong style={{ color: "#888" }}>{t.note}</strong> {t.noteText}
                    </div>

                    <div style={{ textAlign: "center", marginTop: 20 }}>
                        <button onClick={() => { setDone(false); setCurrent(0); setAnswers({}); }}
                            style={{ padding: "10px 28px", borderRadius: 8, border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 13, color: "#555" }}
                        >{t.retake}</button>
                    </div>
                </div>
            )}
        </div>
    );
}
