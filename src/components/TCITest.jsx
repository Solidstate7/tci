import { useState, useRef } from "react";

const T = {
    en: {
        title: "Temperament & Character",
        subtitle: "Cloninger's TCI Assessment",
        qOf: (c, t) => `Question ${c} of ${t}`,
        complete: (p) => `${p}% complete`,
        back: "← Back",
        skip: "Skip →",
        results: "See Results →",
        retake: "Retake Test",
        yourProfile: "Your TCI Profile",
        profileSub: "Temperament & Character",
        temperament: "Temperament",
        tempDesc: "Heritable biases in automatic emotional responses",
        character: "Character",
        charDesc: "Developed through insight and learning over the lifespan",
        note: "Note:",
        noteText: "This is an informal self-assessment inspired by Cloninger's TCI model for educational purposes only. It is not a validated clinical instrument. For a proper assessment, consult a licensed psychologist.",
        balanced: "Balanced between extremes",
        sd: "Strongly Disagree", d: "Disagree", n: "Neutral", a: "Agree", sa: "Strongly Agree",
    },
    ko: {
        title: "기질 및 성격 검사",
        subtitle: "클로닝거 TCI 자가평가",
        qOf: (c, t) => `${t}문항 중 ${c}번`,
        complete: (p) => `${p}% 완료`,
        back: "← 이전",
        skip: "건너뛰기 →",
        results: "결과 보기 →",
        retake: "다시 검사하기",
        yourProfile: "나의 TCI 프로필",
        profileSub: "기질 및 성격 검사 결과",
        temperament: "기질 (Temperament)",
        tempDesc: "자동적 정서 반응에 대한 유전적 경향성",
        character: "성격 (Character)",
        charDesc: "통찰과 학습을 통해 발달하는 자기개념",
        note: "참고:",
        noteText: "본 검사는 클로닝거의 TCI 모델에 기반한 비공식 자기평가이며 교육 목적으로만 제공됩니다. 공인된 임상 도구가 아니므로 정확한 평가를 위해서는 전문 심리상담사에게 문의하세요.",
        balanced: "양극단 사이의 균형 상태",
        sd: "매우 그렇지 않다", d: "그렇지 않다", n: "보통이다", a: "그렇다", sa: "매우 그렇다",
    }
};

const DIMS = {
    NS: { en: "Novelty Seeking", ko: "자극 추구", color: "#E85D3A" },
    HA: { en: "Harm Avoidance", ko: "위험 회피", color: "#3A7BD5" },
    RD: { en: "Reward Dependence", ko: "사회적 민감성", color: "#2ECC71" },
    PS: { en: "Persistence", ko: "인내력", color: "#F39C12" },
    SD: { en: "Self-Directedness", ko: "자율성", color: "#9B59B6" },
    CO: { en: "Cooperativeness", ko: "연대감", color: "#1ABC9C" },
    ST: { en: "Self-Transcendence", ko: "자기초월", color: "#E74C8B" },
};

const INTERP = {
    NS: {
        en: { 
            low: "Reflective, deliberate, stoic, frugal, orderly", 
            high: "Exploratory, impulsive, extravagant, quick-tempered, excitable",
            detail: {
                low: "From a clinical perspective, individuals scoring low in Novelty Seeking generally display heightened dopaminergic stability. They demonstrate strong behavioral inhibition in the face of novel stimuli, preferring systematic, structured, and predictable environments. Such individuals are deeply reflective, unhurried, and highly resistant to acting on impulse. While this provides excellent long-term frugality and stoic temperance, it may also manifest clinically as rigidity, resistance to necessary change, or an overly regimented approach to life that struggles with spontaneity.",
                high: "Clinically, high Novelty Seeking is associated with lower basal dopaminergic activity, prompting frequent exploratory behavior to achieve stimulation. Such individuals are highly responsive to novel environments, often acting impulsively and seeking immediate exhilaration or reward. This trait provides a dynamic, enthusiastic, and socially engaging personality. However, extreme levels may correlate with clinical presentations of distractibility, financial extravagance, quick-tempered outbursts, and a vulnerability to substance or behavioral addictions due to an impaired capacity for behavioral inhibition.",
                balanced: "A balanced Novelty Seeking score indicates an optimal modulation of dopaminergic responses. The individual can explore and adapt to novel stimuli with enthusiasm when appropriate, yet is capable of invoking necessary behavioral inhibition to maintain structured routines when required."
            }
        },
        ko: { 
            low: "신중하고, 절제하며, 질서를 중시하는 편", 
            high: "탐색적이고, 충동적이며, 쉽게 흥분하는 편",
            detail: {
                low: "임상적 관점에서 자극 추구(Novelty Seeking)가 낮은 개인은 일반적으로 도파민 시스템의 높은 안정성을 보입니다. 이들은 새로운 자극에 대한 행동 억제력이 강하며, 체계적이고 구조화된 환경을 선호합니다. 성향상 매우 신중하고 충동적인 행동에 강한 저항력을 보입니다. 이는 장기적인 안정성과 절제력 측면에서는 우수하나, 임상적으로는 심리적 경직성, 변화에 대한 저항, 또는 자발성이 부족한 강박적 일상으로 나타날 수 있습니다.",
                high: "자극 추구 성향이 높은 경우, 보다 잦은 탐색 행동과 즉각적인 보상을 추구하는 뇌의 기저 활동 패턴을 가집니다. 새로운 환경에 빠르게 반응하며, 충동적으로 짜릿함을 찾는 경향이 있습니다. 이는 매우 역동적이고 열정적인 성격으로 발현되지만, 극단적인 경우 임상적으로 산만함, 무절제한 소비, 잦은 분노 표출, 그리고 행동 억제 저하로 인한 중독 취약성으로 이어질 수 있습니다.",
                balanced: "균형 잡힌 자극 추구 점수는 자극에 대한 도파민 반응이 매우 적절히 조절되고 있음을 의미합니다. 상황에 맞춰 새로운 자극을 수용하고 즐길 수 있으면서도, 필요할 때는 충분한 행동 억제력을 발휘하여 안정적인 루트를 유지할 수 있습니다."
            }
        },
    },
    HA: {
        en: { 
            low: "Optimistic, bold, confident, outgoing, energetic", 
            high: "Cautious, tense, fearful, inhibited, easily fatigued",
            detail: {
                low: "Clinically, low Harm Avoidance implies a reduced sensitivity in the brain's serotonergic punishment system. These individuals exhibit pronounced boldness, unflagging optimism, and a stark lack of anticipatory anxiety even in genuinely risky paradigms. While this equips them with vast energy and rapid recovery from stress, pathologically low levels may indicate an alarming lack of appropriate fear conditioning, leading to reckless endangerment, poor risk mitigation, and a failure to anticipate negative consequences.",
                high: "High Harm Avoidance is characterized by an overactive behavioral inhibition system, closely tied to serotonergic function. The individual is hypersensitive to aversive stimuli and strongly disposed toward anticipatory anxiety, pessimistic forecasting, and rapid fatiguability due to chronic muscular and psychological tension. Clinically, this is heavily correlated with anxiety disorders, phobias, and avoidant personality traits, as the subject perpetually withdraws from unfamiliar or potentially threatening situations to preserve homeostasis.",
                balanced: "A balanced Harm Avoidance score reflects a well-regulated serotonergic system. The individual demonstrates appropriate fear conditioning—capable of foreseeing realistic negative outcomes and acting cautiously, without allowing anticipatory anxiety to paralyze their decision-making or drain their energy."
            }
        },
        ko: { 
            low: "낙관적이고, 대담하며, 에너지가 넘치는 편", 
            high: "조심스럽고, 긴장이 많으며, 쉽게 지치는 편",
            detail: {
                low: "임상적으로 위험 회피(Harm Avoidance)가 낮은 개인은 뇌의 처벌 예측 시스템(세로토닌 관련)의 민감도가 낮습니다. 이들은 낯선 상황에서도 불안을 거의 느끼지 않으며 강력한 대담성과 낙관주의를 보입니다. 스트레스 상황에서 회피하지 않고 에너지를 유지하는 장점이 있으나, 병리적으로 낮을 경우 적절한 두려움 학습이 결여되어 무모한 위험 감수나 부정적 결과에 대한 대비 부족으로 이어질 수 있습니다.",
                high: "위험 회피가 높은 개인은 혐오 자극에 매우 민감하며, 행동 억제 시스템이 과활성화되어 있습니다. 예기불안이 높고, 잠재적인 위험을 비관적으로 예측하며, 만성적인 신체적·심리적 긴장으로 인해 쉽게 피로해집니다. 임상적으로 이는 불안 장애, 공포증, 또는 회피적 성격 특성과 밀접한 관련이 있으며, 안전장치가 확보되지 않은 상황을 극도로 꺼리게 됩니다.",
                balanced: "균형 잡힌 위험 회피 점수는 상황을 현실적으로 평가하는 안정적인 방어 기제를 보여줍니다. 잠재적 위험에 대비하고 조심스럽게 접근하면서도, 불필요한 예기불안에 압도되지 않고 적절히 대응할 수 있는 건강한 심리 상태를 뜻합니다."
            }
        },
    },
    RD: {
        en: { 
            low: "Independent, detached, cool, practical, self-contained", 
            high: "Sentimental, warm, attached, dependent, open",
            detail: {
                low: "Low Reward Dependence reflects a clinical profile of pronounced emotional detachment and autonomy from social reinforcement, generally associated with noradrenergic baseline variations. These individuals do not rely on interpersonal approval or emotional warmth to inform their decision-making, preferring staunch pragmatism. While highly independent, extreme low scoring borders on clinical schizoid or dismissive-avoidant traits, marked by an inability to form deep emotional attachments or demonstrate affective empathy.",
                high: "Clinically, high Reward Dependence indicates a hypersensitivity to social cues and emotional reinforcement. These individuals are extremely attached, empathetic, and uniquely skilled at interpreting and responding to the affective states of others. However, in elevated pathological forms, this trait leads to intense vulnerability to social rejection, desperate people-pleasing behaviors, abandonment anxiety, and clinical codependency, as the individual's self-worth is inextricably linked to external validation.",
                balanced: "A balanced Reward Dependence score presents an individual who values and nurtures deep emotional connections but retains functional autonomy. They can process sympathetic social cues effectively without allowing their sense of validity to be entirely dictated by the approval or presence of others."
            }
        },
        ko: { 
            low: "독립적이고, 냉정하며, 실용적인 편", 
            high: "정이 많고, 따뜻하며, 타인에게 의존하는 편",
            detail: {
                low: "낮은 사회적 민감성(Reward Dependence)은 사회적 보상이나 타인의 인정에 대한 의존도가 매우 낮음을 의미하며, 이는 노르에피네프린 시스템의 자율성과 관련이 깊습니다. 정서적으로 분리되어 있고 극도로 실용적인 결정을 내리지만, 지나치게 낮을 경우 임상적으로 분열성 성향이나 회피적 애착을 보일 수 있으며, 깊은 정서적 교감을 형성하거나 정서적 공감을 나누는 데 상당한 어려움을 겪을 수 있습니다.",
                high: "사회적 민감성이 높은 경우, 사회적 신호와 타인의 정서적 보상에 매우 민감하게 반응합니다. 공감 능력이 뛰어나고 타인과 깊은 애착을 형성하지만, 임상적으로 이 수치가 지나치게 높으면 타인의 거절에 극도로 취약해지며, 유기 불안(버림받는 것에 대한 두려움)과 의존성 성격 특성을 보일 위험이 큽니다. 자신의 가치를 타인의 승인에서 찾으려 하는 경향이 짙어집니다.",
                balanced: "균형 잡힌 사회적 민감성은 타인과의 깊은 정서적 연결을 가치 있게 여기면서도 스스로의 정서적 자율성을 잃지 않음을 의미합니다. 주변 사람들에게 공감하고 협력할 수 있지만, 타인의 인정 여부에 자신의 본질적 가치가 흔들리지 않는 건강한 상태입니다."
            }
        },
    },
    PS: {
        en: { 
            low: "Pragmatic, yielding, flexible, gives up easily", 
            high: "Determined, ambitious, overachieving, perseverant",
            detail: {
                low: "A clinically low Persistence score indicates a highly malleable threshold for frustration. Such individuals adapt rapidly by yielding to resistance rather than exhausting resources. Clinically, this extreme flexibility can masquerade as lethargy, distractibility, or an inability to sustain attention on long-term goals without immediate environmental rewards. It may co-occur with traits of acute underachievement relative to latent cognitive capability.",
                high: "High Persistence denotes robust resilience in the face of intermittent reinforcement. The individual possesses a profound capacity to sustain protracted effort despite fatigue, frustration, or lack of immediate reward. Pathologically, this manifests as extreme perfectionism, obsessive-compulsive persistence, and workaholism. The clinical danger lies in an inability to pivot or abandon sunk costs, driving the individual to the point of severe physiological and psychological exhaustion.",
                balanced: "An optimally balanced Persistence score illustrates the ability to sustain goal-directed behavior when the outcome justifies the effort, coupled with the critical clinical insight required to abandon futile endeavors and adapt flexibly to changing circumstances."
            }
        },
        ko: { 
            low: "유연하고 쉽게 포기하는 편", 
            high: "결단력 있고, 야심차며, 끈기 있는 편",
            detail: {
                low: "인내력(Persistence)이 임상적으로 낮은 개인은 좌절에 대한 역치가 낮으며, 강한 저항 상황에서 빠르게 포기하고 노선을 수정합니다. 이러한 극단적인 유연성은 즉각적인 보상이 주어지지 않는 장기적 목표에서 집중력을 잃게 만들며, 임상적으로 무기력증이나 본인의 실제 잠재력보다 현저히 낮은 성취를 이루는 원인이 될 수 있습니다.",
                high: "높은 인내력은 간헐적이거나 불확실한 보상에도 불구하고 노력을 지속하는 강력한 회복탄력성을 의미합니다. 피로와 좌절 속에서도 목표를 향해 나아갑니다. 그러나 이 수치가 병리적으로 높으면 완벽주의, 강박적인 몰두, 번아웃을 무시하는 워커홀릭 성향으로 나타나며, 성공 가능성이 없는 일에도 집착하다가 심리적/신체적 탈진을 겪게 될 위험이 큽니다.",
                balanced: "균형 잡힌 인내력은 목표 달성을 위한 노력의 양을 합리적으로 조절하는 상태입니다. 필요한 일에는 끈기 있게 매달리지만, 한계에 부딪히거나 상황이 변하면 고집을 꺾고 유연하게 경로를 수정할 수 있는 임상적 판단력을 보유하고 있습니다."
            }
        },
    },
    SD: {
        en: { 
            low: "Blaming, aimless, reactive, fragile, unreliable", 
            high: "Purposeful, responsible, resourceful, self-accepting, effective",
            detail: {
                low: "Low Self-Directedness is a core clinical marker for personality pathology and overall emotional fragility. It represents an external locus of control, where the ego struggles with integration. Individuals present as highly reactive, possessing a fragmented sense of identity, poor impulse control, and an inability to accept self-flaws. They frequently externalize blame, feel victimized by life, and demonstrate a profound deficit in setting and pursuing long-term autonomous goals.",
                high: "High Self-Directedness is a prime indicator of robust psychological maturity and ego-syntonic integration. Clinically, it reflects a strong internal locus of control. These individuals exhibit exceptional executive functioning, taking conscious responsibility for their behavior, effectively regulating negative emotions, and possessing a highly coherent and self-accepting self-concept unthreatened by temporary failures.",
                balanced: "A balanced score in Self-Directedness suggests generally adequate coping mechanisms and a functional ego presence. While the individual is largely responsible and goal-oriented, acute stressors may occasionally cause temporary regression into defensive externalizing or transient disruptions in self-esteem."
            }
        },
        ko: { 
            low: "목표가 불분명하고, 반응적이며, 자기 수용이 낮은 편", 
            high: "목적의식이 뚜렷하고, 책임감 있으며, 자기 수용이 높은 편",
            detail: {
                low: "자율성(Self-Directedness)이 낮은 것은 임상적으로 성격적 취약성과 자아 통합의 어려움을 시사하는 핵심 지표입니다. 개인은 자신의 삶에 대한 통제 소재를 외부에 두고, 파편화된 자아 정체성과 충동 조절의 어려움을 자주 겪습니다. 자신의 실수를 쉽게 인정하지 못하고 환경을 탓하며, 주도적인 장기 목표 설정이나 성취에 심각한 결함을 보일 수 있습니다.",
                high: "높은 자율성은 매우 건강한 심리적 성숙도와 강력한 자아 통합을 나타냅니다. 임상적으로 강한 내적 통제감을 가지며, 뛰어난 실행 기능을 바탕으로 자신의 행동과 선택에 완전히 책임을 집니다. 건강한 자기 수용 능력이 있어 일시적인 실패에 자아 개념이 위협받지 않으며, 부정적 감정을 능숙하게 조절하는 높은 회복탄력성을 보입니다.",
                balanced: "균형 잡힌 자율성은 전반적으로 정상적인 자아 기능과 대처 기제를 가지고 있음을 시사합니다. 대체로 통제감이 있고 목표 지향적으로 행동하나, 심각한 스트레스 상황에서는 때때로 외부 방어 기제를 사용하거나 일시적인 자존감의 변동을 경험할 수 있습니다."
            }
        },
    },
    CO: {
        en: { 
            low: "Intolerant, critical, revengeful, manipulative, self-centered", 
            high: "Empathic, tolerant, compassionate, principled, helpful",
            detail: {
                low: "Clinically, significantly low Cooperativeness is often linked with antagonistic, narcissistic, or antisocial personality traits. The individual demonstrates severe deficits in cognitive and affective empathy, viewing interpersonal relationships as transactional or competitive. They tend to be highly intolerant, manipulative, and defensive, largely unable to engage in pro-social behavior without clear secondary gain. Trust in others is generally replaced by hyper-vigilant cynicism.",
                high: "High Cooperativeness signifies mature social integration and profound pro-social emotional schemas. The individual displays deep affective empathy, a robust capacity for forgiveness, and operates from principled ethical frameworks. Clinically, this acts as a powerful buffer against interpersonal distress. However, if paired with pathologically high Reward Dependence, hyper-cooperativeness can lead to severe boundary deficits and self-sacrificing behaviors that undermine the individual's own welfare.",
                balanced: "A balanced Cooperativeness score demonstrates a healthy psychosocial equilibrium. The individual is capable of genuine empathy and targeted pro-social action, yet maintains clinically secure personal boundaries, avoiding the extremes of cynical hostility and chronic self-effacement."
            }
        },
        ko: { 
            low: "비판적이고, 이기적이며, 타인에 대한 관용이 적은 편", 
            high: "공감적이고, 관대하며, 원칙적으로 타인을 돕는 편",
            detail: {
                low: "임상적으로 연대감(Cooperativeness)이 현저히 낮을 경우 적대적, 나르시시즘적, 또는 반사회적 성격 특성과 연관될 수 있습니다. 대인관계에서 인지적/정서적 공감 능력이 심각하게 결여되어 있으며, 인간관계를 거래적이고 경쟁적으로 인식합니다. 매우 비판적이고 방어적이며, 분명한 개인적 이득이 없는 한 친사회적 협력을 끌어내기 어렵습니다.",
                high: "높은 연대감은 성숙한 사회적 통합과 긍정적인 친사회적 자아 도식을 의미합니다. 깊은 공감 능력과 타인에 대한 놀라운 포용력을 가지며, 확고한 윤리적 원칙에 따라 이타적으로 행동합니다. 임상적으로 이는 대인관계 갈등에 대한 강력한 심리적 완충제 역할을 하나, 경계 설정에 실패할 경우 과도한 자기희생으로 인해 개인의 행복이 손상될 우려도 존재합니다.",
                balanced: "균형 잡힌 연대감은 매우 건강한 심리사회적 평형 상태를 뜻합니다. 타인에게 진정으로 공감하고 사회적 협력을 이끌어 낼 수 있으면서도, 임상적으로 안전한 개인의 경계를 유지하며 이기적이거나 지나치게 희생적인 극단으로 치우치지 않습니다."
            }
        },
    },
    ST: {
        en: { 
            low: "Materialistic, possessive, practical, objective", 
            high: "Spiritual, idealistic, self-forgetful, transpersonal, connected",
            detail: {
                low: "Clinically low Self-Transcendence indicates a hyper-rational, distinctly materialistic, and concrete cognitive framework. The psyche operates exclusively within empirical bounds. While protecting against psychosis or magical thinking, this extreme objectivity often results in existential sterility, an inability to process loss or mortality effectively, and a reduced capacity for experiences of awe or expanded consciousness.",
                high: "High Self-Transcendence is fundamentally associated with a deep spiritual orientation and a transpersonal cognitive paradigm, where the individual feels intricately bound to the cosmos or humanity at large. This promotes profound existential contentment, self-forgetfulness, and the capacity to endure suffering with philosophical grace. However, extreme pathological levels may correlate with schizotypal traits, dissociative tendencies, clinical magical thinking, and a profound detachment from necessary grounded realities.",
                balanced: "A balanced Self-Transcendence score represents optimal existential integration. The individual respects concrete, materialistic realities and logic, but retains the psychological elasticity to experience awe, engage in spiritual inquiry, and find systemic meaning in life events beyond the purely empirical."
            }
        },
        ko: { 
            low: "현실적이고, 객관적이며, 물질적인 편", 
            high: "영적이고, 이상주의적이며, 초월적 연결감이 강한 편",
            detail: {
                low: "임상적으로 자기초월(Self-Transcendence)이 심각하게 낮은 개인은 초현실주의를 완전 배제하며, 지나치게 인지적이고 극도로 물질적인(가시적인) 방어 체계를 가집니다. 심리 시스템이 철저히 경험주의적 경계선 내에서만 작동하므로 망상으로부터는 안전하나, 실존적 공허함에 취약하며 상실이나 죽음과 같은 실존적 스트레스를 처리하는 데 큰 어려움을 겪을 수 있습니다.",
                high: "높은 자기초월은 자아의 경계를 우주나 인류 전체와 같은 넓은 차원으로 확장시키는 초격리적 인지 방식을 뜻합니다. 높은 실존적 만족감과 이타적 헌신, 그리고 고난을 철학적으로 견뎌내는 성숙한 수용력을 제공합니다. 그러나 이 수치가 병리적으로 극단적일 경우 현실 도피, 기묘한 사고(Magical Thinking), 해리 증상 및 분열형 성격 특성 등 현실 감각의 심각한 결여를 동반할 수 있습니다.",
                balanced: "균형 잡힌 자기초월 점수는 최적의 실존적 통합 상태를 보여줍니다. 지극히 현실적이고 논리적인 사고방식을 존중하고 이에 기반하여 살아가면서도, 삶의 철학적 의미를 성찰하고 경이로움을 경험하는 데 필요한 심리적 융통성을 유지합니다."
            }
        },
    },
};

const QS = [
    { en: "I often try new things just for fun or thrills, even if most people think it's a waste of time.", ko: "대부분의 사람들이 시간 낭비라고 생각하더라도, 나는 재미나 스릴을 위해 새로운 것을 자주 시도한다.", dim: "NS", rev: false },
    { en: "I usually feel tense and worried in unfamiliar situations, even when others feel there is little to worry about.", ko: "다른 사람들은 별로 걱정하지 않는 낯선 상황에서도 나는 보통 긴장하고 걱정한다.", dim: "HA", rev: false },
    { en: "I often feel that I'm the victim of circumstances.", ko: "나는 종종 상황의 희생양이라고 느낀다.", dim: "SD", rev: true },
    { en: "I usually feel confident that everything will go well, even in situations that worry most people.", ko: "대부분의 사람들이 걱정하는 상황에서도 나는 보통 모든 것이 잘 될 거라고 확신한다.", dim: "HA", rev: true },
    { en: "I often do things based on how I feel at the moment without thinking about how they were done in the past.", ko: "나는 과거에 어떻게 했는지 생각하지 않고 그 순간의 느낌대로 행동할 때가 많다.", dim: "NS", rev: false },
    { en: "I usually enjoy being mean to anyone who has been mean to me.", ko: "나에게 못되게 군 사람에게 나도 못되게 구는 것이 보통 즐겁다.", dim: "CO", rev: true },
    { en: "I usually demand very good practical reasons before I'm willing to change my old ways of doing things.", ko: "나는 기존 방식을 바꾸기 전에 매우 확실한 실질적 이유를 요구하는 편이다.", dim: "NS", rev: true },
    { en: "I sometimes feel so connected to nature that everything seems to be part of one living organism.", ko: "때때로 자연과 깊이 연결되어 모든 것이 하나의 살아 있는 유기체처럼 느껴질 때가 있다.", dim: "ST", rev: false },
    { en: "I am often moved deeply by a fine speech or poetry.", ko: "좋은 연설이나 시에 깊이 감동받는 경우가 많다.", dim: "RD", rev: false },
    { en: "I usually stay calm and secure in situations that most people would find physically dangerous.", ko: "대부분의 사람들이 신체적으로 위험하다고 느끼는 상황에서도 나는 보통 침착하고 안정감을 느낀다.", dim: "HA", rev: true },
    { en: "I often push myself to the point of exhaustion or try to do more than I really can.", ko: "나는 종종 탈진할 때까지 자신을 밀어붙이거나 실제 능력 이상을 하려고 한다.", dim: "PS", rev: false },
    { en: "I usually like to stay cool and detached from other people.", ko: "나는 보통 다른 사람들과 거리를 두고 냉정하게 지내는 것을 좋아한다.", dim: "RD", rev: true },
    { en: "I like to discuss my experiences and feelings openly with friends instead of keeping them to myself.", ko: "나는 경험과 감정을 혼자 간직하기보다 친구들과 솔직하게 이야기하는 것을 좋아한다.", dim: "RD", rev: false },
    { en: "I have less energy and get tired more quickly than most people.", ko: "나는 대부분의 사람들보다 에너지가 적고 더 빨리 피곤해진다.", dim: "HA", rev: false },
    { en: "I often feel a strong spiritual or emotional connection with all the people around me.", ko: "주변 사람들과 강한 영적 또는 감정적 연결을 느끼는 경우가 많다.", dim: "ST", rev: false },
    { en: "I usually try to get what I want for myself because it's not possible to satisfy everyone.", ko: "모든 사람을 만족시킬 수 없기 때문에 보통 내가 원하는 것을 얻으려고 한다.", dim: "CO", rev: true },
    { en: "I feel I have a sense of purpose and meaning in my life.", ko: "내 삶에 목적과 의미가 있다고 느낀다.", dim: "SD", rev: false },
    { en: "I prefer to spend money rather than save it.", ko: "나는 돈을 저축하기보다 쓰는 것을 더 좋아한다.", dim: "NS", rev: false },
    { en: "I often have to stop what I'm doing because I start worrying that something might go wrong.", ko: "무언가 잘못될까 봐 걱정이 시작되어 하던 일을 멈춰야 할 때가 많다.", dim: "HA", rev: false },
    { en: "I like to help find solutions to problems so that everyone comes out ahead.", ko: "모두가 이득을 볼 수 있도록 문제 해결책을 찾는 것을 좋아한다.", dim: "CO", rev: false },
    { en: "I often feel powerless and want someone else to solve my problems.", ko: "종종 무력감을 느끼고 다른 사람이 내 문제를 해결해 주길 바란다.", dim: "SD", rev: true },
    { en: "I am more of a perfectionist than most people.", ko: "나는 대부분의 사람들보다 완벽주의적인 편이다.", dim: "PS", rev: false },
    { en: "I like old 'tried and true' ways of doing things much better than trying 'new and improved' ways.", ko: "'검증된 기존 방식'을 '새롭고 개선된 방식'보다 훨씬 더 좋아한다.", dim: "NS", rev: true },
    { en: "I sometimes feel a spiritual connection with other people that I cannot explain in words.", ko: "때때로 말로 설명할 수 없는 영적 연결을 다른 사람들과 느낄 때가 있다.", dim: "ST", rev: false },
    { en: "I am not very sympathetic and don't understand why some things make other people so emotional.", ko: "나는 그다지 동정적이지 않고 어떤 일이 왜 다른 사람들을 그렇게 감정적으로 만드는지 이해하지 못한다.", dim: "RD", rev: true },
    { en: "My actions are determined mainly by influences outside my control.", ko: "내 행동은 주로 내가 통제할 수 없는 외부 영향에 의해 결정된다.", dim: "SD", rev: true },
    { en: "I usually think about all the facts in detail before I make a decision.", ko: "결정을 내리기 전에 보통 모든 사실을 세부적으로 생각한다.", dim: "NS", rev: true },
    { en: "I often feel tense and worried in unfamiliar situations even when others feel everything is fine.", ko: "다른 사람들은 괜찮다고 느끼는 낯선 상황에서도 나는 종종 긴장하고 걱정한다.", dim: "HA", rev: false },
    { en: "If something works it doesn't bother me how or why it works.", ko: "무언가가 작동하면 어떻게, 왜 작동하는지는 신경 쓰지 않는다.", dim: "ST", rev: true },
    { en: "I generally don't like people who have different views from me.", ko: "나와 다른 견해를 가진 사람들을 일반적으로 좋아하지 않는다.", dim: "CO", rev: true },
    { en: "I have many bad habits that I wish I could break.", ko: "고치고 싶은 나쁜 습관이 많다.", dim: "SD", rev: true },
    { en: "I often give up a job if it takes much longer than I expected.", ko: "예상보다 훨씬 오래 걸리면 일을 포기하는 경우가 많다.", dim: "PS", rev: true },
    { en: "I would do almost anything legal to become rich and famous even if I lost the trust of many old friends.", ko: "오랜 친구들의 신뢰를 잃더라도 부와 명성을 얻기 위해 합법적인 거의 모든 일을 할 것이다.", dim: "CO", rev: true },
    { en: "I am much more reserved and controlled than most people.", ko: "나는 대부분의 사람들보다 훨씬 더 내성적이고 절제력이 있다.", dim: "NS", rev: true },
    { en: "I frequently have to use careful self-control to keep out of trouble.", ko: "문제를 피하기 위해 신중한 자기 통제를 자주 사용해야 한다.", dim: "HA", rev: false },
    { en: "I nearly always stay relaxed and carefree even when nearly everyone else is fearful.", ko: "거의 모든 사람이 두려워할 때도 나는 거의 항상 편안하고 태평하다.", dim: "HA", rev: true },
    { en: "I don't care very much whether other people like me or the way I do things.", ko: "다른 사람들이 나를 좋아하든 내 방식을 좋아하든 별로 신경 쓰지 않는다.", dim: "RD", rev: true },
    { en: "I usually feel much more confident and energetic than most people even after minor illnesses or stress.", ko: "가벼운 질병이나 스트레스 후에도 대부분의 사람들보다 훨씬 자신감 있고 활력이 넘친다.", dim: "SD", rev: false },
    { en: "I usually try to imagine myself in other people's place so I can really understand them.", ko: "다른 사람들을 진정으로 이해하기 위해 보통 그들의 입장에서 상상해 보려고 한다.", dim: "CO", rev: false },
    { en: "If I'm feeling upset I usually feel better in a familiar environment.", ko: "기분이 안 좋을 때 익숙한 환경에 있으면 보통 기분이 나아진다.", dim: "HA", rev: false },
    { en: "I frequently feel empty when I'm alone, even for a few hours.", ko: "몇 시간이라도 혼자 있으면 공허함을 자주 느낀다.", dim: "RD", rev: false },
    { en: "I have had personal experiences in which I felt in contact with a divine and wonderful spiritual power.", ko: "신성하고 경이로운 영적 힘과 접촉했다고 느낀 개인적 경험이 있다.", dim: "ST", rev: false },
    { en: "I often consider another person's feelings as much as my own.", ko: "다른 사람의 감정을 내 감정만큼 자주 고려한다.", dim: "CO", rev: false },
    { en: "I usually feel tense and worried when I have to do something new and unfamiliar.", ko: "새롭고 낯선 일을 해야 할 때 보통 긴장하고 걱정된다.", dim: "HA", rev: false },
    { en: "I recover more slowly than most people from minor illnesses or stress.", ko: "가벼운 질병이나 스트레스에서 대부분의 사람들보다 더 느리게 회복한다.", dim: "HA", rev: false },
    { en: "My behavior is strongly guided by certain goals that I have set for my life.", ko: "내 행동은 내가 설정한 특정 삶의 목표에 의해 강하게 인도된다.", dim: "SD", rev: false },
    { en: "I am usually so determined that I continue to work long after other people have given up.", ko: "다른 사람들이 포기한 후에도 계속 일할 만큼 보통 결단력이 있다.", dim: "PS", rev: false },
    { en: "I enjoy getting revenge on people who hurt me.", ko: "나를 아프게 한 사람들에게 복수하는 것이 즐겁다.", dim: "CO", rev: true },
    { en: "I rarely feel free to choose what I want to do.", ko: "내가 원하는 것을 자유롭게 선택할 수 있다고 느끼는 경우가 드물다.", dim: "SD", rev: true },
    { en: "I am usually able to overcome difficulties and challenges without hesitation.", ko: "어려움과 도전을 주저 없이 극복할 수 있는 편이다.", dim: "SD", rev: false },
    { en: "I generally trust other people more than people trust me.", ko: "일반적으로 사람들이 나를 신뢰하는 것보다 내가 다른 사람들을 더 신뢰한다.", dim: "CO", rev: false },
    { en: "I am satisfied with my present accomplishments.", ko: "현재의 성취에 만족한다.", dim: "SD", rev: false },
    { en: "I often react so strongly to unexpected news that I say or do things I regret.", ko: "예상치 못한 소식에 너무 강하게 반응하여 후회할 말이나 행동을 할 때가 많다.", dim: "NS", rev: false },
    { en: "I do not think it is smart to help weak people who cannot help themselves.", ko: "스스로를 도울 수 없는 약한 사람들을 돕는 것이 현명하다고 생각하지 않는다.", dim: "CO", rev: true },
    { en: "I sometimes feel that my life is being directed by a spiritual force greater than any human being.", ko: "때때로 내 삶이 어떤 인간보다 위대한 영적 힘에 의해 인도되고 있다고 느낀다.", dim: "ST", rev: false },
    { en: "Even when most people feel it's not important, I insist on things being done in a strict and orderly way.", ko: "대부분의 사람들이 중요하지 않다고 느끼더라도 일이 엄격하고 질서 있게 진행되어야 한다고 고집한다.", dim: "PS", rev: false },
    { en: "I tend to be very modest and downplay my achievements.", ko: "나는 매우 겸손한 편이며 내 성취를 축소하는 경향이 있다.", dim: "RD", rev: false },
    { en: "I experience deep fulfillment and peace of mind through spiritual practices or reflections.", ko: "영적 수행이나 성찰을 통해 깊은 충만감과 마음의 평화를 경험한다.", dim: "ST", rev: false },
    { en: "I feel strongly driven to accomplish something meaningful.", ko: "의미 있는 것을 성취하려는 강한 동기를 느낀다.", dim: "PS", rev: false },
    { en: "I prefer spending time with people who share my values and beliefs.", ko: "나와 같은 가치관과 신념을 가진 사람들과 시간을 보내는 것을 선호한다.", dim: "CO", rev: true },
    { en: "I often wish I were stronger than everyone else.", ko: "다른 모든 사람보다 더 강해지기를 종종 바란다.", dim: "CO", rev: true },
    { en: "I have had moments of great joy in which I suddenly had a clear, deep feeling of oneness with all that exists.", ko: "존재하는 모든 것과의 합일감을 갑자기 분명하고 깊게 느낀 큰 기쁨의 순간을 경험한 적이 있다.", dim: "ST", rev: false },
    { en: "I think things usually work out for the best no matter what happens.", ko: "무슨 일이 일어나도 결국은 최선의 결과가 나온다고 생각한다.", dim: "SD", rev: false },
    { en: "I often find it hard to change my way of doing things even when a different approach would be better.", ko: "다른 접근 방식이 더 나을 때에도 내 방식을 바꾸기 어려울 때가 많다.", dim: "PS", rev: false },
];

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
