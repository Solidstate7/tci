export const T = {
    en: {
        title: "Temperament & Character", subtitle: "Cloninger's TCI Assessment", qOf: (c, t) => `Question ${c} of ${t}`, complete: (p) => `${p}% complete`, back: "← Back", skip: "Skip →", results: "See Results →", retake: "Retake Test", yourProfile: "Your TCI Profile", profileSub: "Temperament & Character", yourArchetype: "Your Archetype", temperament: "Temperament", tempDesc: "Heritable biases in automatic emotional responses", character: "Character", charDesc: "Developed through insight and learning over the lifespan", note: "Note:", noteText: "This is an informal self-assessment inspired by Cloninger's TCI model for educational purposes only. It is not a validated clinical instrument.", balanced: "Balanced between extremes", sd: "Strongly Disagree", d: "Disagree", n: "Neutral", a: "Agree", sa: "Strongly Agree",
    },
    ko: {
        title: "기질 및 성격 검사", subtitle: "클로닝거 TCI 자가평가", qOf: (c, t) => `${t}문항 중 ${c}번`, complete: (p) => `${p}% 완료`, back: "← 이전", skip: "건너뛰기 →", results: "결과 보기 →", retake: "다시 검사하기", yourProfile: "나의 TCI 프로필", profileSub: "기질 및 성격 검사 결과", yourArchetype: "당신의 아키타입 (원형)", temperament: "기질 (Temperament)", tempDesc: "자동적 정서 반응에 대한 유전적 경향성", character: "성격 (Character)", charDesc: "통찰과 학습을 통해 발달하는 자기개념", note: "참고:", noteText: "본 검사는 클로닝거의 TCI 모델에 기반한 비공식 자기평가이며 교육 목적으로만 제공됩니다.", balanced: "양극단 사이의 균형 상태", sd: "매우 그렇지 않다", d: "그렇지 않다", n: "보통이다", a: "그렇다", sa: "매우 그렇다",
    },
    de: {
        title: "Temperament & Charakter", subtitle: "Cloningers TCI-Bewertung", qOf: (c, t) => `Frage ${c} von ${t}`, complete: (p) => `${p}% abgeschlossen`, back: "← Zurück", skip: "Überspringen →", results: "Ergebnisse ansehen →", retake: "Test wiederholen", yourProfile: "Ihr TCI-Profil", profileSub: "Temperament & Charakter", yourArchetype: "Dein Archetyp", temperament: "Temperament", tempDesc: "Vererbbare Tendenzen in automatischen emotionalen Reaktionen", character: "Charakter", charDesc: "Entwickelt durch Einsicht und Lernen im Laufe des Lebens", note: "Hinweis:", noteText: "Dies ist eine informelle Selbsteinschätzung, die zu Bildungszwecken vom TCI-Modell Cloningers inspiriert wurde. Es handelt sich nicht um ein validiertes klinisches Instrument.", balanced: "Ausgewogen zwischen den Extremen", sd: "Stimme gar nicht zu", d: "Stimme nicht zu", n: "Neutral", a: "Stimme zu", sa: "Stimme völlig zu",
    }
};

export const DIMS = {
    NS: { en: "Novelty Seeking", ko: "자극 추구", de: "Neugierverhalten", color: "#E85D3A" },
    HA: { en: "Harm Avoidance", ko: "위험 회피", de: "Schadensvermeidung", color: "#3A7BD5" },
    RD: { en: "Reward Dependence", ko: "사회적 민감성", de: "Belohnungsabhängigkeit", color: "#2ECC71" },
    PS: { en: "Persistence", ko: "인내력", de: "Beharrlichkeit", color: "#F39C12" },
    SD: { en: "Self-Directedness", ko: "자율성", de: "Selbstlenkung", color: "#9B59B6" },
    CO: { en: "Cooperativeness", ko: "연대감", de: "Kooperationsbereitschaft", color: "#1ABC9C" },
    ST: { en: "Self-Transcendence", ko: "자기초월", de: "Selbsttranszendenz", color: "#E74C8B" },
};

export const ARCHETYPES = {
    NS: { low: { en: "Preserver", ko: "보존자", de: "Bewahrer" }, high: { en: "Explorer", ko: "탐험가", de: "Entdecker" } },
    HA: { low: { en: "Risk-taker", ko: "모험가", de: "Risikosucher" }, high: { en: "Guardian", ko: "수호자", de: "Wächter" } },
    RD: { low: { en: "Individualist", ko: "개인주의자", de: "Individualist" }, high: { en: "Empath", ko: "공감자", de: "Empath" } },
    PS: { low: { en: "Adapter", ko: "적응자", de: "Anpasser" }, high: { en: "Achiever", ko: "성취자", de: "Leistungsträger" } },
    SD: { low: { en: "Responder", ko: "반응자", de: "Reagierender" }, high: { en: "Director", ko: "주도자", de: "Lenker" } },
    CO: { low: { en: "Challenger", ko: "도전자", de: "Herausforderer" }, high: { en: "Harmonizer", ko: "조화자", de: "Harmonisierer" } },
    ST: { low: { en: "Realist", ko: "현실주의자", de: "Realist" }, high: { en: "Mystic", ko: "신비주의자", de: "Mystiker" } }
};

export const INTERP = {
    NS: {
        en: { 
            low: "Reflective, deliberate, stoic, frugal, orderly", 
            high: "Exploratory, impulsive, extravagant, quick-tempered, excitable",
            detail: {
                low: "From a clinical perspective, individuals scoring low in Novelty Seeking generally display heightened dopaminergic stability. They demonstrate strong behavioral inhibition in the face of novel stimuli, preferring systematic, structured, and predictable environments. Such individuals are deeply reflective, unhurried, and highly resistant to acting on impulse.",
                high: "Clinically, high Novelty Seeking is associated with lower basal dopaminergic activity, prompting frequent exploratory behavior to achieve stimulation. Such individuals are highly responsive to novel environments, often acting impulsively and seeking immediate exhilaration or reward.",
                balanced: "A balanced Novelty Seeking score indicates an optimal modulation of dopaminergic responses. The individual can explore and adapt to novel stimuli with enthusiasm when appropriate, yet is capable of invoking necessary behavioral inhibition to maintain structured routines when required."
            }
        },
        ko: { 
            low: "신중하고, 절제하며, 질서를 중시하는 편", 
            high: "탐색적이고, 충동적이며, 쉽게 흥분하는 편",
            detail: {
                low: "임상적 관점에서 자극 추구가 낮은 개인은 일반적으로 도파민 시스템의 높은 안정성을 보입니다. 체계적이고 구조화된 환경을 선호하며 성향상 매우 신중하고 충동적인 행동에 강한 저항력을 보입니다.",
                high: "자극 추구 성향이 높은 경우 탐색 행동과 즉각적인 보상을 추구하는 뇌의 기저 활동 패턴을 가집니다. 새로운 환경에 빠르게 반응하며 충동적으로 짜릿함을 찾는 경향이 있습니다.",
                balanced: "균형 잡힌 자극 추구 점수는 자극에 대한 도파민 반응이 매우 적절히 조절되고 있음을 의미합니다."
            }
        },
        de: {
            low: "Reflektierend, bedächtig, stoisch, sparsam, ordentlich",
            high: "Forschend, impulsiv, extravagant, aufbrausend, erregbar",
            detail: {
                low: "Aus klinischer Sicht weisen Personen mit einem niedrigen Wert für Neugierverhalten in der Regel eine erhöhte dopaminerge Stabilität auf. Sie bevorzugen systematische, strukturierte und vorhersehbare Umgebungen und sind sehr resistent gegenüber impulsivem Handeln. Dies zeigt klinische Anzeichen für Starrheit oder mangelnde Spontanität auf.",
                high: "Klinisch ist ein hohes Neugierverhalten mit einer geringeren basalen dopaminergen Aktivität verbunden, was zu häufigem Erkundungsverhalten führt, um Stimulation zu erreichen. Sie reagieren stark auf neue Umgebungen und handeln oft impulsiv. Solche Profile können auf Ablenkbarkeit oder Anfälligkeit für Süchte hinweisen.",
                balanced: "Ein ausgewogener Wert zeigt eine optimale Modulation der dopaminergen Reaktionen. Das Individuum kann angemessen mit Neuheiten umgehen und bei Bedarf Verhaltenshemmung einsetzen, um Routinen aufrechtzuerhalten."
            }
        }
    },
    HA: {
        en: { 
            low: "Optimistic, bold, confident, outgoing, energetic", 
            high: "Cautious, tense, fearful, inhibited, easily fatigued",
            detail: {
                low: "Clinically, low Harm Avoidance implies a reduced sensitivity in the brain's serotonergic punishment system. These individuals exhibit pronounced boldness, unflagging optimism, and a stark lack of anticipatory anxiety even in genuinely risky paradigms.",
                high: "High Harm Avoidance is characterized by an overactive behavioral inhibition system, closely tied to serotonergic function. The individual is hypersensitive to aversive stimuli and strongly disposed toward anticipatory anxiety.",
                balanced: "A balanced Harm Avoidance score reflects a well-regulated serotonergic system. The individual demonstrates appropriate fear conditioning—capable of foreseeing realistic negative outcomes and acting cautiously, without allowing anticipatory anxiety to paralyze their decision-making or drain their energy."
            }
        },
        ko: { 
            low: "낙관적이고, 대담하며, 에너지가 넘치는 편", 
            high: "조심스럽고, 긴장이 많으며, 쉽게 지치는 편",
            detail: {
                low: "임상적으로 위험 회피가 낮은 개인은 뇌의 처벌 예측 시스템의 민감도가 낮습니다. 낯선 상황에서도 불안을 거의 느끼지 않으며 강력한 대담성과 낙관주의를 보입니다.",
                high: "위험 회피가 높은 개인은 혐오 자극에 매우 민감하며 행동 억제 시스템이 과활성화되어 있습니다. 예기불안이 높고 잠재적인 위험을 비관적으로 예측합니다.",
                balanced: "균형 잡힌 위험 회피 점수는 상황을 현실적으로 평가하는 안정적인 방어 기제를 보여줍니다."
            }
        },
        de: {
            low: "Reflektierend, bedächtig, stoisch, sparsam, ordentlich",
            high: "Forschend, impulsiv, extravagant, aufbrausend, erregbar",
            detail: {
                low: "Aus klinischer Sicht weisen Personen mit einem niedrigen Wert für Neugierverhalten in der Regel eine erhöhte dopaminerge Stabilität auf. Sie bevorzugen systematische, strukturierte und vorhersehbare Umgebungen und sind sehr resistent gegenüber impulsivem Handeln. Dies zeigt klinische Anzeichen für Starrheit oder mangelnde Spontanität auf.",
                high: "Klinisch ist ein hohes Neugierverhalten mit einer geringeren basalen dopaminergen Aktivität verbunden, was zu häufigem Erkundungsverhalten führt, um Stimulation zu erreichen. Sie reagieren stark auf neue Umgebungen und handeln oft impulsiv. Solche Profile können auf Ablenkbarkeit oder Anfälligkeit für Süchte hinweisen.",
                balanced: "Ein ausgewogener Wert zeigt eine optimale Modulation der dopaminergen Reaktionen. Das Individuum kann angemessen mit Neuheiten umgehen und bei Bedarf Verhaltenshemmung einsetzen, um Routinen aufrechtzuerhalten."
            }
        }
    },
    RD: {
        en: { 
            low: "Independent, detached, cool, practical, self-contained", 
            high: "Sentimental, warm, attached, dependent, open",
            detail: {
                low: "Low Reward Dependence reflects a clinical profile of pronounced emotional detachment and autonomy from social reinforcement, generally associated with noradrenergic baseline variations.",
                high: "Clinically, high Reward Dependence indicates a hypersensitivity to social cues and emotional reinforcement. These individuals are extremely attached, empathetic, and uniquely skilled at interpreting and responding.",
                balanced: "A balanced Reward Dependence score presents an individual who values and nurtures deep emotional connections but retains functional autonomy."
            }
        },
        ko: { 
            low: "독립적이고, 냉정하며, 실용적인 편", 
            high: "정이 많고, 따뜻하며, 타인에게 의존하는 편",
            detail: {
                low: "낮은 사회적 민감성은 사회적 보상이나 타인의 인정에 대한 의존도가 매우 낮음을 의미합니다. 극도로 실용적인 결정을 내리지만 임상적으로 회피적 애착을 보일 수 있습니다.",
                high: "사회적 신호와 타인의 정서적 보상에 매우 민감하게 반응합니다. 타인과 깊은 애착을 형성하지만 의존성 성격 특성을 보일 위험도 있습니다.",
                balanced: "타인과의 깊은 정서적 연결을 가치 있게 여기면서도 스스로의 정서적 자율성을 잃지 않음을 의미합니다."
            }
        },
        de: {
            low: "Reflektierend, bedächtig, stoisch, sparsam, ordentlich",
            high: "Forschend, impulsiv, extravagant, aufbrausend, erregbar",
            detail: {
                low: "Aus klinischer Sicht weisen Personen mit einem niedrigen Wert für Neugierverhalten in der Regel eine erhöhte dopaminerge Stabilität auf. Sie bevorzugen systematische, strukturierte und vorhersehbare Umgebungen und sind sehr resistent gegenüber impulsivem Handeln. Dies zeigt klinische Anzeichen für Starrheit oder mangelnde Spontanität auf.",
                high: "Klinisch ist ein hohes Neugierverhalten mit einer geringeren basalen dopaminergen Aktivität verbunden, was zu häufigem Erkundungsverhalten führt, um Stimulation zu erreichen. Sie reagieren stark auf neue Umgebungen und handeln oft impulsiv. Solche Profile können auf Ablenkbarkeit oder Anfälligkeit für Süchte hinweisen.",
                balanced: "Ein ausgewogener Wert zeigt eine optimale Modulation der dopaminergen Reaktionen. Das Individuum kann angemessen mit Neuheiten umgehen und bei Bedarf Verhaltenshemmung einsetzen, um Routinen aufrechtzuerhalten."
            }
        }
    },
    PS: {
        en: { 
            low: "Pragmatic, yielding, flexible, gives up easily", 
            high: "Determined, ambitious, overachieving, perseverant",
            detail: {
                low: "A clinically low Persistence score indicates a highly malleable threshold for frustration. Such individuals adapt rapidly by yielding to resistance rather than exhausting resources.",
                high: "High Persistence denotes robust resilience in the face of intermittent reinforcement. The individual possesses a profound capacity to sustain protracted effort despite fatigue, frustration, or lack of immediate reward.",
                balanced: "An optimally balanced Persistence score illustrates the ability to sustain goal-directed behavior when the outcome justifies the effort, coupled with the critical clinical insight required to abandon futile endeavors and adapt flexibly to changing circumstances."
            }
        },
        ko: { 
            low: "유연하고 쉽게 포기하는 편", 
            high: "결단력 있고, 야심차며, 끈기 있는 편",
            detail: {
                low: "좌절에 대한 역치가 낮으며 강한 저항 상황에서 빠르게 포기하고 노선을 수정합니다. 이는 높은 유연성이지만 목표 집중 저하로 나타날 수 있습니다.",
                high: "불확실한 보상에도 불구하고 노력을 지속하는 강력한 회복탄력성을 의미합니다. 병리적으로는 완벽주의적 끈기를 보일 수 있습니다.",
                balanced: "필요한 일에는 끈기 있게 매달리지만 한계에 부딪히거나 상황이 변하면 고집을 꺾고 유연하게 경로를 수정할 수 있습니다."
            }
        },
        de: {
            low: "Reflektierend, bedächtig, stoisch, sparsam, ordentlich",
            high: "Forschend, impulsiv, extravagant, aufbrausend, erregbar",
            detail: {
                low: "Aus klinischer Sicht weisen Personen mit einem niedrigen Wert für Neugierverhalten in der Regel eine erhöhte dopaminerge Stabilität auf. Sie bevorzugen systematische, strukturierte und vorhersehbare Umgebungen und sind sehr resistent gegenüber impulsivem Handeln. Dies zeigt klinische Anzeichen für Starrheit oder mangelnde Spontanität auf.",
                high: "Klinisch ist ein hohes Neugierverhalten mit einer geringeren basalen dopaminergen Aktivität verbunden, was zu häufigem Erkundungsverhalten führt, um Stimulation zu erreichen. Sie reagieren stark auf neue Umgebungen und handeln oft impulsiv. Solche Profile können auf Ablenkbarkeit oder Anfälligkeit für Süchte hinweisen.",
                balanced: "Ein ausgewogener Wert zeigt eine optimale Modulation der dopaminergen Reaktionen. Das Individuum kann angemessen mit Neuheiten umgehen und bei Bedarf Verhaltenshemmung einsetzen, um Routinen aufrechtzuerhalten."
            }
        }
    },
    SD: {
        en: { 
            low: "Blaming, aimless, reactive, fragile, unreliable", 
            high: "Purposeful, responsible, resourceful, self-accepting, effective",
            detail: {
                low: "Low Self-Directedness is a core clinical marker for personality pathology and overall emotional fragility. It represents an external locus of control, where the ego struggles with integration.",
                high: "High Self-Directedness is a prime indicator of robust psychological maturity and ego-syntonic integration. Clinically, it reflects a strong internal locus of control.",
                balanced: "A balanced score in Self-Directedness suggests generally adequate coping mechanisms and a functional ego presence."
            }
        },
        ko: { 
            low: "목표가 불분명하고, 반응적이며, 자기 수용이 낮은 편", 
            high: "목적의식이 뚜렷하고, 책임감 있으며, 자기 수용이 높은 편",
            detail: {
                low: "자율성이 낮은 것은 임상적으로 성격적 취약성을 시사하며, 자신의 삶에 대한 통제 소재를 외부에 두고 충동 조절의 어려움을 겪습니다.",
                high: "강한 내적 통제감을 가지며 행동과 선택에 완전히 책임을 집니다. 건강한 자기 수용 능력이 있어 높은 상태의 회복탄력성을 보입니다.",
                balanced: "일반적으로 기능적인 자아를 지니고 적절한 목적 지향성을 보입니다."
            }
        },
        de: {
            low: "Reflektierend, bedächtig, stoisch, sparsam, ordentlich",
            high: "Forschend, impulsiv, extravagant, aufbrausend, erregbar",
            detail: {
                low: "Aus klinischer Sicht weisen Personen mit einem niedrigen Wert für Neugierverhalten in der Regel eine erhöhte dopaminerge Stabilität auf. Sie bevorzugen systematische, strukturierte und vorhersehbare Umgebungen und sind sehr resistent gegenüber impulsivem Handeln. Dies zeigt klinische Anzeichen für Starrheit oder mangelnde Spontanität auf.",
                high: "Klinisch ist ein hohes Neugierverhalten mit einer geringeren basalen dopaminergen Aktivität verbunden, was zu häufigem Erkundungsverhalten führt, um Stimulation zu erreichen. Sie reagieren stark auf neue Umgebungen und handeln oft impulsiv. Solche Profile können auf Ablenkbarkeit oder Anfälligkeit für Süchte hinweisen.",
                balanced: "Ein ausgewogener Wert zeigt eine optimale Modulation der dopaminergen Reaktionen. Das Individuum kann angemessen mit Neuheiten umgehen und bei Bedarf Verhaltenshemmung einsetzen, um Routinen aufrechtzuerhalten."
            }
        }
    },
    CO: {
        en: { 
            low: "Intolerant, critical, revengeful, manipulative, self-centered", 
            high: "Empathic, tolerant, compassionate, principled, helpful",
            detail: {
                low: "Clinically, significantly low Cooperativeness is often linked with antagonistic, narcissistic, or antisocial personality traits.",
                high: "High Cooperativeness signifies mature social integration and profound pro-social emotional schemas.",
                balanced: "A balanced Cooperativeness score demonstrates a healthy psychosocial equilibrium."
            }
        },
        ko: { 
            low: "비판적이고, 이기적이며, 타인에 대한 관용이 적은 편", 
            high: "공감적이고, 관대하며, 원칙적으로 타인을 돕는 편",
            detail: {
                low: "임상적으로 연대감이 현저히 낮을 경우 적대적 성격 특성과 연관될 수 있으며, 인간관계를 거래적으로 인식합니다.",
                high: "성숙한 사회적 통합과 긍정적인 친사회적 자아 도식을 의미하며 헌신적인 이타성을 보입니다.",
                balanced: "공감하고 사회적 협력을 이끌어 낼 수 있으면서도 안전한 개인의 경계를 유지합니다."
            }
        },
        de: {
            low: "Reflektierend, bedächtig, stoisch, sparsam, ordentlich",
            high: "Forschend, impulsiv, extravagant, aufbrausend, erregbar",
            detail: {
                low: "Aus klinischer Sicht weisen Personen mit einem niedrigen Wert für Neugierverhalten in der Regel eine erhöhte dopaminerge Stabilität auf. Sie bevorzugen systematische, strukturierte und vorhersehbare Umgebungen und sind sehr resistent gegenüber impulsivem Handeln. Dies zeigt klinische Anzeichen für Starrheit oder mangelnde Spontanität auf.",
                high: "Klinisch ist ein hohes Neugierverhalten mit einer geringeren basalen dopaminergen Aktivität verbunden, was zu häufigem Erkundungsverhalten führt, um Stimulation zu erreichen. Sie reagieren stark auf neue Umgebungen und handeln oft impulsiv. Solche Profile können auf Ablenkbarkeit oder Anfälligkeit für Süchte hinweisen.",
                balanced: "Ein ausgewogener Wert zeigt eine optimale Modulation der dopaminergen Reaktionen. Das Individuum kann angemessen mit Neuheiten umgehen und bei Bedarf Verhaltenshemmung einsetzen, um Routinen aufrechtzuerhalten."
            }
        }
    },
    ST: {
        en: { 
            low: "Materialistic, possessive, practical, objective", 
            high: "Spiritual, idealistic, self-forgetful, transpersonal, connected",
            detail: {
                low: "Clinically low Self-Transcendence indicates a hyper-rational, distinctly materialistic, and concrete cognitive framework.",
                high: "High Self-Transcendence is fundamentally associated with a deep spiritual orientation and a transpersonal cognitive paradigm.",
                balanced: "A balanced Self-Transcendence score represents optimal existential integration."
            }
        },
        ko: { 
            low: "현실적이고, 객관적이며, 물질적인 편", 
            high: "영적이고, 이상주의적이며, 초월적 연결감이 강한 편",
            detail: {
                low: "임상적으로 극도로 실리적 방어체계 내에서 작동하므로, 실존적 한계나 영적 고뇌를 거의 느끼지 않습니다.",
                high: "우주나 인류와의 초격리적 인지 방식을 뜻하며, 종종 영적 헌신과 높은 실존적 고뇌를 가집니다.",
                balanced: "이상주의와 현실성 모두에서 삶의 의미를 균형 있게 찾습니다."
            }
        },
        de: {
            low: "Reflektierend, bedächtig, stoisch, sparsam, ordentlich",
            high: "Forschend, impulsiv, extravagant, aufbrausend, erregbar",
            detail: {
                low: "Aus klinischer Sicht weisen Personen mit einem niedrigen Wert für Neugierverhalten in der Regel eine erhöhte dopaminerge Stabilität auf. Sie bevorzugen systematische, strukturierte und vorhersehbare Umgebungen und sind sehr resistent gegenüber impulsivem Handeln. Dies zeigt klinische Anzeichen für Starrheit oder mangelnde Spontanität auf.",
                high: "Klinisch ist ein hohes Neugierverhalten mit einer geringeren basalen dopaminergen Aktivität verbunden, was zu häufigem Erkundungsverhalten führt, um Stimulation zu erreichen. Sie reagieren stark auf neue Umgebungen und handeln oft impulsiv. Solche Profile können auf Ablenkbarkeit oder Anfälligkeit für Süchte hinweisen.",
                balanced: "Ein ausgewogener Wert zeigt eine optimale Modulation der dopaminergen Reaktionen. Das Individuum kann angemessen mit Neuheiten umgehen und bei Bedarf Verhaltenshemmung einsetzen, um Routinen aufrechtzuerhalten."
            }
        }
    },
};

export const QS = [
    { en: "I often try new things just for fun or thrills, even if most people think it's a waste of time.", ko: "대부분의 사람들이 시간 낭비라고 생각하더라도, 나는 재미나 스릴을 위해 새로운 것을 자주 시도한다.", de: "Ich probiere oft neue Dinge nur zum Spaß oder für den Nervenkitzel aus.", dim: "NS", rev: false },
    { en: "I usually feel tense and worried in unfamiliar situations, even when others feel there is little to worry about.", ko: "다른 사람들은 별로 걱정하지 않는 낯선 상황에서도 나는 보통 긴장하고 걱정한다.", de: "In ungewohnten Situationen bin ich meist angespannt und besorgt.", dim: "HA", rev: false },
    { en: "I often feel that I'm the victim of circumstances.", ko: "나는 종종 상황의 희생양이라고 느낀다.", de: "Ich habe oft das Gefühl, ein Opfer der Umstände zu sein.", dim: "SD", rev: true },
    { en: "I usually feel confident that everything will go well, even in situations that worry most people.", ko: "대부분의 사람들이 걱정하는 상황에서도 나는 보통 모든 것이 잘 될 거라고 확신한다.", de: "Ich bin meist zuversichtlich, dass alles gut gehen wird, selbst in angespannten Situationen.", dim: "HA", rev: true },
    { en: "I often do things based on how I feel at the moment without thinking about how they were done in the past.", ko: "나는 과거에 어떻게 했는지 생각하지 않고 그 순간의 느낌대로 행동할 때가 많다.", de: "Ich handle oft spontan nach Gefühl, ohne groß nachzudenken.", dim: "NS", rev: false },
    { en: "I usually enjoy being mean to anyone who has been mean to me.", ko: "나에게 못되게 군 사람에게 나도 못되게 구는 것이 보통 즐겁다.", de: "Ich genieße es oft, gemein zu Leuten zu sein, die gemein zu mir waren.", dim: "CO", rev: true },
    { en: "I usually demand very good practical reasons before I'm willing to change my old ways of doing things.", ko: "나는 기존 방식을 바꾸기 전에 매우 확실한 실질적 이유를 요구하는 편이다.", de: "Ich ändere meine alten Gewohnheiten nur, wenn es dafür sehr gute praktische Gründe gibt.", dim: "NS", rev: true },
    { en: "I sometimes feel so connected to nature that everything seems to be part of one living organism.", ko: "때때로 자연과 깊이 연결되어 모든 것이 하나의 살아 있는 유기체처럼 느껴질 때가 있다.", de: "Ich fühle mich oft so mit der Natur verbunden, dass alles wie ein einziger Organismus wirkt.", dim: "ST", rev: false },
    { en: "I am often moved deeply by a fine speech or poetry.", ko: "좋은 연설이나 시에 깊이 감동받는 경우가 많다.", de: "Eine gute Rede oder Poesie kann mich oft tief berühren.", dim: "RD", rev: false },
    { en: "I usually stay calm and secure in situations that most people would find physically dangerous.", ko: "대부분의 사람들이 신체적으로 위험하다고 느끼는 상황에서도 나는 보통 침착하고 안정감을 느낀다.", de: "Ich bleibe meist ruhig, wenn andere Angst um ihre körperliche Unversehrtheit haben.", dim: "HA", rev: true },
    { en: "I often push myself to the point of exhaustion or try to do more than I really can.", ko: "나는 종종 탈진할 때까지 자신을 밀어붙이거나 실제 능력 이상을 하려고 한다.", de: "Ich pushe mich oft bis zur totalen Erschöpfung.", dim: "PS", rev: false },
    { en: "I usually like to stay cool and detached from other people.", ko: "나는 보통 다른 사람들과 거리를 두고 냉정하게 지내는 것을 좋아한다.", de: "Ich bleibe meist lieber kühl und distanziert von anderen.", dim: "RD", rev: true },
    { en: "I like to discuss my experiences and feelings openly with friends instead of keeping them to myself.", ko: "나는 경험과 감정을 혼자 간직하기보다 친구들과 솔직하게 이야기하는 것을 좋아한다.", de: "Ich diskutiere meine Erfahrungen sehr offen mit Freunden.", dim: "RD", rev: false },
    { en: "I have less energy and get tired more quickly than most people.", ko: "나는 대부분의 사람들보다 에너지가 적고 더 빨리 피곤해진다.", de: "Ich habe generell weniger Energie und bin schneller müde als andere.", dim: "HA", rev: false },
    { en: "I often feel a strong spiritual or emotional connection with all the people around me.", ko: "주변 사람들과 강한 영적 또는 감정적 연결을 느끼는 경우가 많다.", de: "Ich spüre oft eine tiefe spirituelle Verbindung zu allen Menschen um mich herum.", dim: "ST", rev: false },
    { en: "I usually try to get what I want for myself because it's not possible to satisfy everyone.", ko: "모든 사람을 만족시킬 수 없기 때문에 보통 내가 원하는 것을 얻으려고 한다.", de: "Ich versuche primär das zu bekommen, was ich will, da es unmöglich ist, alle zufriedenzustellen.", dim: "CO", rev: true },
    { en: "I feel I have a sense of purpose and meaning in my life.", ko: "내 삶에 목적과 의미가 있다고 느낀다.", de: "Ich bin sicher, dass mein Leben Sinn und Zweck hat.", dim: "SD", rev: false },
    { en: "I prefer to spend money rather than save it.", ko: "나는 돈을 저축하기보다 쓰는 것을 더 좋아한다.", de: "Ich gebe Geld lieber aus, als es zu sparen.", dim: "NS", rev: false },
    { en: "I often have to stop what I'm doing because I start worrying that something might go wrong.", ko: "무언가 잘못될까 봐 걱정이 시작되어 하던 일을 멈춰야 할 때가 많다.", de: "Oft unterbreche ich meine Arbeit, um mir Sorgen über potenzielle Fehler zu machen.", dim: "HA", rev: false },
    { en: "I like to help find solutions to problems so that everyone comes out ahead.", ko: "모두가 이득을 볼 수 있도록 문제 해결책을 찾는 것을 좋아한다.", de: "Ich liebe es, Problemlösungen zu finden, von denen alle Beteiligten profitieren.", dim: "CO", rev: false },
    { en: "I often feel powerless and want someone else to solve my problems.", ko: "종종 무력감을 느끼고 다른 사람이 내 문제를 해결해 주길 바란다.", de: "Ich fühle mich manchmal machtlos und erwarte, dass andere meine Probleme lösen.", dim: "SD", rev: true },
    { en: "I am more of a perfectionist than most people.", ko: "나는 대부분의 사람들보다 완벽주의적인 편이다.", de: "Ich bin bei weitem perfektionistischer als die meisten Menschen.", dim: "PS", rev: false },
    { en: "I like old 'tried and true' ways of doing things much better than trying 'new and improved' ways.", ko: "'검증된 기존 방식'을 '새롭고 개선된 방식'보다 훨씬 더 좋아한다.", de: "Mir gefallen traditionelle bewährte Wege weitaus besser als Experimente.", dim: "NS", rev: true },
    { en: "I sometimes feel a spiritual connection with other people that I cannot explain in words.", ko: "때때로 말로 설명할 수 없는 영적 연결을 다른 사람들과 느낄 때가 있다.", de: "Gelegentlich fühle ich eine wortlose, fast spirituelle Verbindung zu anderen.", dim: "ST", rev: false },
    { en: "I am not very sympathetic and don't understand why some things make other people so emotional.", ko: "나는 그다지 동정적이지 않고 어떤 일이 왜 다른 사람들을 그렇게 감정적으로 만드는지 이해하지 못한다.", de: "Ich bin wenig mitfühlend und verstehe oft die Launen anderer nicht.", dim: "RD", rev: true },
    { en: "My actions are determined mainly by influences outside my control.", ko: "내 행동은 주로 내가 통제할 수 없는 외부 영향에 의해 결정된다.", de: "Meine Handlungen unterliegen eher dem Schicksal als meiner eigenen Kontrolle.", dim: "SD", rev: true },
    { en: "I usually think about all the facts in detail before I make a decision.", ko: "결정을 내리기 전에 보통 모든 사실을 세부적으로 생각한다.", de: "Vor Entscheidungen analysiere ich im Vornherein in der Regel alle Fakten detailliert.", dim: "NS", rev: true },
    { en: "I often feel tense and worried in unfamiliar situations even when others feel everything is fine.", ko: "다른 사람들은 괜찮다고 느끼는 낯선 상황에서도 나는 종종 긴장하고 걱정한다.", de: "In sehr unbekannten Umgebungen verkrampfe ich schnell aus Angst.", dim: "HA", rev: false },
    { en: "If something works it doesn't bother me how or why it works.", ko: "무언가가 작동하면 어떻게, 왜 작동하는지는 신경 쓰지 않는다.", de: "Wenn etwas funktioniert, stört es mich nicht, die Details der Mechanik nicht zu kennen.", dim: "ST", rev: true },
    { en: "I generally don't like people who have different views from me.", ko: "나와 다른 견해를 가진 사람들을 일반적으로 좋아하지 않는다.", de: "Im Prinzip toleriere ich Leute mit extremen und fremden Ideologien eher selten.", dim: "CO", rev: true },
    { en: "I have many bad habits that I wish I could break.", ko: "고치고 싶은 나쁜 습관이 많다.", de: "Ich habe sehr viele schlechte Angewohnheiten, die ich gerne brechen würde.", dim: "SD", rev: true },
    { en: "I often give up a job if it takes much longer than I expected.", ko: "예상보다 훨씬 오래 걸리면 일을 포기하는 경우가 많다.", de: "Dauert ein Projekt zu lange, gebe ich es meist schnell auf.", dim: "PS", rev: true },
    { en: "I would do almost anything legal to become rich and famous even if I lost the trust of many old friends.", ko: "오랜 친구들의 신뢰를 잃더라도 부와 명성을 얻기 위해 합법적인 거의 모든 일을 할 것이다.", de: "Für extremen Reichtum und Ruhm würde ich sogar Freundschaften opfern.", dim: "CO", rev: true },
    { en: "I am much more reserved and controlled than most people.", ko: "나는 대부분의 사람들보다 훨씬 더 내성적이고 절제력이 있다.", de: "Ich wirke auf Fremde extrem reserviert und selbstbeherrscht.", dim: "NS", rev: true },
    { en: "I frequently have to use careful self-control to keep out of trouble.", ko: "문제를 피하기 위해 신중한 자기 통제를 자주 사용해야 한다.", de: "Ich nutze oft gewaltige Selbstkontrolle, um Stress und Probleme zu meiden.", dim: "HA", rev: false },
    { en: "I nearly always stay relaxed and carefree even when nearly everyone else is fearful.", ko: "거의 모든 사람이 두려워할 때도 나는 거의 항상 편안하고 태평하다.", de: "Auch in Massenpaniken oder gruseligen Momenten bleibe ich völlig entspannt.", dim: "HA", rev: true },
    { en: "I don't care very much whether other people like me or the way I do things.", ko: "다른 사람들이 나를 좋아하든 내 방식을 좋아하든 별로 신경 쓰지 않는다.", de: "Es ist mir absolut egal, ob andere meine Art als sympathisch betrachten.", dim: "RD", rev: true },
    { en: "I usually feel much more confident and energetic than most people even after minor illnesses or stress.", ko: "가벼운 질병이나 스트레스 후에도 대부분의 사람들보다 훨씬 자신감 있고 활력이 넘친다.", de: "Stress schüttelt mich leicht ab - ich stehe immer selbstbewusst da.", dim: "SD", rev: false },
    { en: "I usually try to imagine myself in other people's place so I can really understand them.", ko: "다른 사람들을 진정으로 이해하기 위해 보통 그들의 입장에서 상상해 보려고 한다.", de: "Ich schlüpfe aktiv in die Rollen anderer, um tiefgreifendes Mitgefühl zu erregen.", dim: "CO", rev: false },
    { en: "If I'm feeling upset I usually feel better in a familiar environment.", ko: "기분이 안 좋을 때 익숙한 환경에 있으면 보통 기분이 나아진다.", de: "Wenn ich aufgebracht bin, heile ich primär in meiner heimischen Routine.", dim: "HA", rev: false },
    { en: "I frequently feel empty when I'm alone, even for a few hours.", ko: "몇 시간이라도 혼자 있으면 공허함을 자주 느낀다.", de: "Einsamkeit für Stunden lässt mich furchtbar wertlos und leer fühlen.", dim: "RD", rev: false },
    { en: "I have had personal experiences in which I felt in contact with a divine and wonderful spiritual power.", ko: "신성하고 경이로운 영적 힘과 접촉했다고 느낀 개인적 경험이 있다.", de: "Ich stand zweifellose spirituelle Verbundenheit einer höheren Macht durch.", dim: "ST", rev: false },
    { en: "I often consider another person's feelings as much as my own.", ko: "다른 사람의 감정을 내 감정만큼 자주 고려한다.", de: "Die Schmerzen der Gesellschaft schätze ich exakt so hoch wie meine eigenen.", dim: "CO", rev: false },
    { en: "I usually feel tense and worried when I have to do something new and unfamiliar.", ko: "새롭고 낯선 일을 해야 할 때 보통 긴장하고 걱정된다.", de: "Jedes neue Hindernis baut in mir sofort Panik und Sorge auf.", dim: "HA", rev: false },
    { en: "I recover more slowly than most people from minor illnesses or stress.", ko: "가벼운 질병이나 스트레스에서 대부분의 사람들보다 더 느리게 회복한다.", de: "Kleine Stresstage laugen mich tagelang extrem stark aus.", dim: "HA", rev: false },
    { en: "My behavior is strongly guided by certain goals that I have set for my life.", ko: "내 행동은 내가 설정한 특정 삶의 목표에 의해 강하게 인도된다.", de: "Gewissenhafte Ziele regieren meinen Lebensablauf.", dim: "SD", rev: false },
    { en: "I am usually so determined that I continue to work long after other people have given up.", ko: "다른 사람들이 포기한 후에도 계속 일할 만큼 보통 결단력이 있다.", de: "Meine Ausdauer und Konzentration lassen alles hinter mir verschwinden.", dim: "PS", rev: false },
    { en: "I enjoy getting revenge on people who hurt me.", ko: "나를 아프게 한 사람들에게 복수하는 것이 즐겁다.", de: "Hass und Rache an Gegnern gibt mir stets Befriedigung.", dim: "CO", rev: true },
    { en: "I rarely feel free to choose what I want to do.", ko: "내가 원하는 것을 자유롭게 선택할 수 있다고 느끼는 경우가 드물다.", de: "Persönliche Freiheit und Kontrolle stehen bei mir so gut wie nie zur Wahl.", dim: "SD", rev: true },
    { en: "I am usually able to overcome difficulties and challenges without hesitation.", ko: "어려움과 도전을 주저 없이 극복할 수 있는 편이다.", de: "Schwierigkeiten stemme ich mit Leichtigkeit komplett ohne Zögern weg.", dim: "SD", rev: false },
    { en: "I generally trust other people more than people trust me.", ko: "일반적으로 사람들이 나를 신뢰하는 것보다 내가 다른 사람들을 더 신뢰한다.", de: "Andere hintergehen mich rascher, als ich der Gesellschaft Vertrauen schenke.", dim: "CO", rev: false },
    { en: "I am satisfied with my present accomplishments.", ko: "현재의 성취에 만족한다.", de: "In mir brennt eine tiefe Befriedigung mit meiner bisherigen Historie auf Erden.", dim: "SD", rev: false },
    { en: "I often react so strongly to unexpected news that I say or do things I regret.", ko: "예상치 못한 소식에 너무 강하게 반응하여 후회할 말이나 행동을 할 때가 많다.", de: "Neuigkeiten verleiten mich gelegentlich zu Handlungen von heftigem Missgeschick.", dim: "NS", rev: false },
    { en: "I do not think it is smart to help weak people who cannot help themselves.", ko: "스스로를 도울 수 없는 약한 사람들을 돕는 것이 현명하다고 생각하지 않는다.", de: "Schwächlingen zu helfen, betrachte ich biologisch betrachtet als enorme Dummheit.", dim: "CO", rev: true },
    { en: "I sometimes feel that my life is being directed by a spiritual force greater than any human being.", ko: "때때로 내 삶이 어떤 인간보다 위대한 영적 힘에 의해 인도되고 있다고 느낀다.", de: "Die spirituellen Pfade leiten mich weit intensiver als menschliche Einflüsse.", dim: "ST", rev: false },
    { en: "Even when most people feel it's not important, I insist on things being done in a strict and orderly way.", ko: "대부분의 사람들이 중요하지 않다고 느끼더라도 일이 엄격하고 질서 있게 진행되어야 한다고 고집한다.", de: "Perfektion erfordert Regeln, egal ob andere dies für Unheil erachten.", dim: "PS", rev: false },
    { en: "I tend to be very modest and downplay my achievements.", ko: "나는 매우 겸손한 편이며 내 성취를 축소하는 경향이 있다.", de: "Ich neige dazu, sehr bescheiden zu sein und meine Leistungen herunterzuspielen.", dim: "RD", rev: false },
    { en: "I experience deep fulfillment and peace of mind through spiritual practices or reflections.", ko: "영적 수행이나 성찰을 통해 깊은 충만감과 마음의 평화를 경험한다.", de: "Durch spirituelle Praktiken oder tiefe Reflexion erfahre ich Erfüllung und inneren Frieden.", dim: "ST", rev: false },
    { en: "I feel strongly driven to accomplish something meaningful.", ko: "의미 있는 것을 성취하려는 강한 동기를 느낀다.", de: "Ich fühle mich stark angetrieben, etwas Bedeutungsvolles zu erreichen.", dim: "PS", rev: false },
    { en: "I prefer spending time with people who share my values and beliefs.", ko: "나와 같은 가치관과 신념을 가진 사람들과 시간을 보내는 것을 선호한다.", de: "Ich verbringe lieber Zeit mit Menschen, die meine Werte und Überzeugungen teilen.", dim: "CO", rev: true },
    { en: "I often wish I were stronger than everyone else.", ko: "다른 모든 사람보다 더 강해지기를 종종 바란다.", de: "Ich wünsche mir oft, stärker als alle anderen zu sein.", dim: "CO", rev: true },
    { en: "I have had moments of great joy in which I suddenly had a clear, deep feeling of oneness with all that exists.", ko: "존재하는 모든 것과의 합일감을 갑자기 분명하고 깊게 느낀 큰 기쁨의 순간을 경험한 적이 있다.", de: "Ich hatte Momente großer Freude, in denen ich plötzlich ein klares, tiefes Gefühl der Einheit mit allem Existierenden hatte.", dim: "ST", rev: false },
    { en: "I think things usually work out for the best no matter what happens.", ko: "무슨 일이 일어나도 결국은 최선의 결과가 나온다고 생각한다.", de: "Ich denke, dass am Ende meistens alles zum Besten führt, egal was passiert.", dim: "SD", rev: false },
    { en: "I often find it hard to change my way of doing things even when a different approach would be better.", ko: "다른 접근 방식이 더 나을 때에도 내 방식을 바꾸기 어려울 때가 많다.", de: "Es fällt mir oft schwer, meine Vorgehensweise zu ändern, selbst wenn ein anderer Ansatz besser wäre.", dim: "PS", rev: false }
];
