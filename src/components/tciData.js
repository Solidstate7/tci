export const T = {
    en: {
        title: "Temperament & Character", subtitle: "Cloninger's TCI Assessment", qOf: (c, t) => `Question ${c} of ${t}`, complete: (p) => `${p}% complete`, back: "← Back", skip: "Skip →", results: "See Results →", retake: "Retake Test", yourProfile: "Your TCI Profile", profileSub: "Temperament & Character", yourArchetype: "Your Archetype", temperament: "Temperament", tempDesc: "Heritable biases in automatic emotional responses", character: "Character", charDesc: "Developed through insight and learning over the lifespan", note: "Note:", noteText: "This is an informal self-assessment inspired by Cloninger's TCI model for educational purposes only. It is not a validated clinical instrument.", balanced: "Balanced between extremes", sd: "Strongly Disagree", d: "Disagree", n: "Neutral", a: "Agree", sa: "Strongly Agree",
    },
    ko: {
        title: "기질 및 성격 검사", subtitle: "클로닝거 TCI 자가평가", qOf: (c, t) => `${t}문항 중 ${c}번`, complete: (p) => `${p}% 완료`, back: "← 이전", skip: "건너뛰기 →", results: "결과 보기 →", retake: "다시 검사하기", yourProfile: "나의 TCI 프로필", profileSub: "기질 및 성격 검사 결과", yourArchetype: "당신의 아키타입 (원형)", temperament: "기질 (Temperament)", tempDesc: "자동적 정서 반응에 대한 유전적 경향성", character: "성격 (Character)", charDesc: "통찰과 학습을 통해 발달하는 자기개념", note: "참고:", noteText: "본 검사는 클로닝거의 TCI 모델에 기반한 비공식 자기평가이며 교육 목적으로만 제공됩니다.", balanced: "양극단 사이의 균형 상태", sd: "매우 그렇지 않다", d: "그렇지 않다", n: "보통이다", a: "그렇다", sa: "매우 그렇다",
    },
    tr: {
        title: "Mizaç ve Karakter", subtitle: "Cloninger'in TCI Değerlendirmesi", qOf: (c, t) => `Soru ${c} / ${t}`, complete: (p) => `%${p} tamamlandı`, back: "← Geri", skip: "Geç →", results: "Sonuçları Gör →", retake: "Testi Tekrar Çöz", yourProfile: "TCI Profiliniz", profileSub: "Mizaç ve Karakter", yourArchetype: "Arketipiniz", temperament: "Mizaç", tempDesc: "Otomatik duygusal tepkilerde kalıtsal eğilimler", character: "Karakter", charDesc: "Yaşam boyu içgörü ve öğrenme yoluyla gelişir", note: "Not:", noteText: "Bu, yalnızca eğitim amaçlı Cloninger'in TCI modelinden esinlenilmiş gayri resmi bir öz değerlendirmedir. Geçerliliği olan klinik bir araç değildir.", balanced: "Aşırılıklar arasında dengeli", sd: "Kesinlikle Katılmıyorum", d: "Katılmıyorum", n: "Tarafsız", a: "Katılıyorum", sa: "Kesinlikle Katılıyorum",
    }
};

export const DIMS = {
    NS: { en: "Novelty Seeking", ko: "자극 추구", tr: "Yenilik Arayışı", color: "#E85D3A" },
    HA: { en: "Harm Avoidance", ko: "위험 회피", tr: "Zarardan Kaçınma", color: "#3A7BD5" },
    RD: { en: "Reward Dependence", ko: "사회적 민감성", tr: "Ödüle Bağımlılık", color: "#2ECC71" },
    PS: { en: "Persistence", ko: "인내력", tr: "Sebat Etme", color: "#F39C12" },
    SD: { en: "Self-Directedness", ko: "자율성", tr: "Kendi Kendini Yönetme", color: "#9B59B6" },
    CO: { en: "Cooperativeness", ko: "연대감", tr: "İşbirliği", color: "#1ABC9C" },
    ST: { en: "Self-Transcendence", ko: "자기초월", tr: "Kendini Aşma", color: "#E74C8B" },
};

export const ARCHETYPES = {
    NS: { low: { en: "Preserver", ko: "보존자", tr: "Koruyucu" }, high: { en: "Explorer", ko: "탐험가", tr: "Kaşif" } },
    HA: { low: { en: "Risk-taker", ko: "모험가", tr: "Risk Alan" }, high: { en: "Guardian", ko: "수호자", tr: "Muhafız" } },
    RD: { low: { en: "Individualist", ko: "개인주의자", tr: "Bireyci" }, high: { en: "Empath", ko: "공감자", tr: "Empat" } },
    PS: { low: { en: "Adapter", ko: "적응자", tr: "Uyumlu" }, high: { en: "Achiever", ko: "성취자", tr: "Başaran" } },
    SD: { low: { en: "Responder", ko: "반응자", tr: "Tepkisel" }, high: { en: "Director", ko: "주도자", tr: "Yönlendirici" } },
    CO: { low: { en: "Challenger", ko: "도전자", tr: "Meydan Okuyan" }, high: { en: "Harmonizer", ko: "조화자", tr: "Uzlaştırıcı" } },
    ST: { low: { en: "Realist", ko: "현실주의자", tr: "Gerçekçi" }, high: { en: "Mystic", ko: "신비주의자", tr: "Mistik" } }
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
        tr: {
            low: "Düşünceli, temkinli, metanetli, tutumlu, düzenli",
            high: "Keşfedici, dürtüsel, müsrif, çabuk parlayan, heyecanlı",
            detail: {
                low: "Klinik bir perspektiften bakıldığında, Yenilik Arayışı puanı düşük olan bireyler genellikle artmış dopaminerjik stabilite sergilerler. Yeni uyaranlar karşısında güçlü bir davranışsal ketleme göstererek sistematik, yapılandırılmış ve öngörülebilir ortamları tercih ederler.",
                high: "Klinik olarak yüksek Yenilik Arayışı, daha düşük bazal dopaminerjik aktivite ile ilişkilidir, bu da uyarılmayı sağlamak için sık sık keşfetme davranışına yol açar. Yeni ortamlara son derece duyarlıdırlar.",
                balanced: "Dengeli bir Yenilik Arayışı puanı, dopaminerjik tepkilerin optimal modülasyonunu gösterir."
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
        tr: {
            low: "Düşünceli, temkinli, metanetli, tutumlu, düzenli",
            high: "Keşfedici, dürtüsel, müsrif, çabuk parlayan, heyecanlı",
            detail: {
                low: "Klinik bir perspektiften bakıldığında, Yenilik Arayışı puanı düşük olan bireyler genellikle artmış dopaminerjik stabilite sergilerler. Yeni uyaranlar karşısında güçlü bir davranışsal ketleme göstererek sistematik, yapılandırılmış ve öngörülebilir ortamları tercih ederler.",
                high: "Klinik olarak yüksek Yenilik Arayışı, daha düşük bazal dopaminerjik aktivite ile ilişkilidir, bu da uyarılmayı sağlamak için sık sık keşfetme davranışına yol açar. Yeni ortamlara son derece duyarlıdırlar.",
                balanced: "Dengeli bir Yenilik Arayışı puanı, dopaminerjik tepkilerin optimal modülasyonunu gösterir."
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
        tr: {
            low: "Düşünceli, temkinli, metanetli, tutumlu, düzenli",
            high: "Keşfedici, dürtüsel, müsrif, çabuk parlayan, heyecanlı",
            detail: {
                low: "Klinik bir perspektiften bakıldığında, Yenilik Arayışı puanı düşük olan bireyler genellikle artmış dopaminerjik stabilite sergilerler. Yeni uyaranlar karşısında güçlü bir davranışsal ketleme göstererek sistematik, yapılandırılmış ve öngörülebilir ortamları tercih ederler.",
                high: "Klinik olarak yüksek Yenilik Arayışı, daha düşük bazal dopaminerjik aktivite ile ilişkilidir, bu da uyarılmayı sağlamak için sık sık keşfetme davranışına yol açar. Yeni ortamlara son derece duyarlıdırlar.",
                balanced: "Dengeli bir Yenilik Arayışı puanı, dopaminerjik tepkilerin optimal modülasyonunu gösterir."
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
        tr: {
            low: "Düşünceli, temkinli, metanetli, tutumlu, düzenli",
            high: "Keşfedici, dürtüsel, müsrif, çabuk parlayan, heyecanlı",
            detail: {
                low: "Klinik bir perspektiften bakıldığında, Yenilik Arayışı puanı düşük olan bireyler genellikle artmış dopaminerjik stabilite sergilerler. Yeni uyaranlar karşısında güçlü bir davranışsal ketleme göstererek sistematik, yapılandırılmış ve öngörülebilir ortamları tercih ederler.",
                high: "Klinik olarak yüksek Yenilik Arayışı, daha düşük bazal dopaminerjik aktivite ile ilişkilidir, bu da uyarılmayı sağlamak için sık sık keşfetme davranışına yol açar. Yeni ortamlara son derece duyarlıdırlar.",
                balanced: "Dengeli bir Yenilik Arayışı puanı, dopaminerjik tepkilerin optimal modülasyonunu gösterir."
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
        tr: {
            low: "Düşünceli, temkinli, metanetli, tutumlu, düzenli",
            high: "Keşfedici, dürtüsel, müsrif, çabuk parlayan, heyecanlı",
            detail: {
                low: "Klinik bir perspektiften bakıldığında, Yenilik Arayışı puanı düşük olan bireyler genellikle artmış dopaminerjik stabilite sergilerler. Yeni uyaranlar karşısında güçlü bir davranışsal ketleme göstererek sistematik, yapılandırılmış ve öngörülebilir ortamları tercih ederler.",
                high: "Klinik olarak yüksek Yenilik Arayışı, daha düşük bazal dopaminerjik aktivite ile ilişkilidir, bu da uyarılmayı sağlamak için sık sık keşfetme davranışına yol açar. Yeni ortamlara son derece duyarlıdırlar.",
                balanced: "Dengeli bir Yenilik Arayışı puanı, dopaminerjik tepkilerin optimal modülasyonunu gösterir."
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
        tr: {
            low: "Düşünceli, temkinli, metanetli, tutumlu, düzenli",
            high: "Keşfedici, dürtüsel, müsrif, çabuk parlayan, heyecanlı",
            detail: {
                low: "Klinik bir perspektiften bakıldığında, Yenilik Arayışı puanı düşük olan bireyler genellikle artmış dopaminerjik stabilite sergilerler. Yeni uyaranlar karşısında güçlü bir davranışsal ketleme göstererek sistematik, yapılandırılmış ve öngörülebilir ortamları tercih ederler.",
                high: "Klinik olarak yüksek Yenilik Arayışı, daha düşük bazal dopaminerjik aktivite ile ilişkilidir, bu da uyarılmayı sağlamak için sık sık keşfetme davranışına yol açar. Yeni ortamlara son derece duyarlıdırlar.",
                balanced: "Dengeli bir Yenilik Arayışı puanı, dopaminerjik tepkilerin optimal modülasyonunu gösterir."
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
        tr: {
            low: "Düşünceli, temkinli, metanetli, tutumlu, düzenli",
            high: "Keşfedici, dürtüsel, müsrif, çabuk parlayan, heyecanlı",
            detail: {
                low: "Klinik bir perspektiften bakıldığında, Yenilik Arayışı puanı düşük olan bireyler genellikle artmış dopaminerjik stabilite sergilerler. Yeni uyaranlar karşısında güçlü bir davranışsal ketleme göstererek sistematik, yapılandırılmış ve öngörülebilir ortamları tercih ederler.",
                high: "Klinik olarak yüksek Yenilik Arayışı, daha düşük bazal dopaminerjik aktivite ile ilişkilidir, bu da uyarılmayı sağlamak için sık sık keşfetme davranışına yol açar. Yeni ortamlara son derece duyarlıdırlar.",
                balanced: "Dengeli bir Yenilik Arayışı puanı, dopaminerjik tepkilerin optimal modülasyonunu gösterir."
            }
        }
    },
};

export const QS = [
    { en: "I often try new things just for fun or thrills, even if most people think it's a waste of time.", ko: "대부분의 사람들이 시간 낭비라고 생각하더라도, 나는 재미나 스릴을 위해 새로운 것을 자주 시도한다.", tr: "Çoğu insan zaman kaybı olduğunu düşünse bile, sırf eğlence veya heyecan olsun diye sık sık yeni şeyler denerim.", dim: "NS", rev: false },
    { en: "I usually feel tense and worried in unfamiliar situations, even when others feel there is little to worry about.", ko: "다른 사람들은 별로 걱정하지 않는 낯선 상황에서도 나는 보통 긴장하고 걱정한다.", tr: "Başkaları endişelenecek pek bir şey olmadığını hissetse bile, alışılmadık durumlarda genellikle gergin ve endişeli hissederim.", dim: "HA", rev: false },
    { en: "I often feel that I'm the victim of circumstances.", ko: "나는 종종 상황의 희생양이라고 느낀다.", tr: "Sık sık koşulların kurbanı olduğumu hissediyorum.", dim: "SD", rev: true },
    { en: "I usually feel confident that everything will go well, even in situations that worry most people.", ko: "대부분의 사람들이 걱정하는 상황에서도 나는 보통 모든 것이 잘 될 거라고 확신한다.", tr: "Çoğu insanı endişelendiren durumlarda bile genellikle her şeyin yolunda gideceğinden emin olurum.", dim: "HA", rev: true },
    { en: "I often do things based on how I feel at the moment without thinking about how they were done in the past.", ko: "나는 과거에 어떻게 했는지 생각하지 않고 그 순간의 느낌대로 행동할 때가 많다.", tr: "Geçmişte olayların nasıl yapıldığını düşünmeden genellikle o anki hislerime göre hareket ederim.", dim: "NS", rev: false },
    { en: "I usually enjoy being mean to anyone who has been mean to me.", ko: "나에게 못되게 군 사람에게 나도 못되게 구는 것이 보통 즐겁다.", tr: "Bana kaba davranan birine kaba davranmaktan genellikle keyif alırım.", dim: "CO", rev: true },
    { en: "I usually demand very good practical reasons before I'm willing to change my old ways of doing things.", ko: "나는 기존 방식을 바꾸기 전에 매우 확실한 실질적 이유를 요구하는 편이다.", tr: "Eski iş yapış biçimimi değiştirmeye istekli olmadan önce genellikle çok iyi pratik nedenler talep ederim.", dim: "NS", rev: true },
    { en: "I sometimes feel so connected to nature that everything seems to be part of one living organism.", ko: "때때로 자연과 깊이 연결되어 모든 것이 하나의 살아 있는 유기체처럼 느껴질 때가 있다.", tr: "Bazen doğaya o kadar bağlı hissediyorum ki her şey tek bir canlı organizmanın parçasıymış gibi görünüyor.", dim: "ST", rev: false },
    { en: "I am often moved deeply by a fine speech or poetry.", ko: "좋은 연설이나 시에 깊이 감동받는 경우가 많다.", tr: "Güzel bir konuşma veya şiirden sıklıkla derinden etkilenirim.", dim: "RD", rev: false },
    { en: "I usually stay calm and secure in situations that most people would find physically dangerous.", ko: "대부분의 사람들이 신체적으로 위험하다고 느끼는 상황에서도 나는 보통 침착하고 안정감을 느낀다.", tr: "Çoğu insanın fiziksel olarak tehlikeli bulacağı durumlarda genellikle sakin ve güvende hissederim.", dim: "HA", rev: true },
    { en: "I often push myself to the point of exhaustion or try to do more than I really can.", ko: "나는 종종 탈진할 때까지 자신을 밀어붙이거나 실제 능력 이상을 하려고 한다.", tr: "Kendimi genellikle tükenme noktasına kadar zorlar veya gerçekten yapabileceğimden fazlasını yapmaya çalışırım.", dim: "PS", rev: false },
    { en: "I usually like to stay cool and detached from other people.", ko: "나는 보통 다른 사람들과 거리를 두고 냉정하게 지내는 것을 좋아한다.", tr: "Genellikle soğukkanlı kalmayı ve diğer insanlardan uzak durmayı severim.", dim: "RD", rev: true },
    { en: "I like to discuss my experiences and feelings openly with friends instead of keeping them to myself.", ko: "나는 경험과 감정을 혼자 간직하기보다 친구들과 솔직하게 이야기하는 것을 좋아한다.", tr: "Deneyimlerimi ve duygularımı kendime saklamak yerine arkadaşlarımla açıkça tartışmayı severim.", dim: "RD", rev: false },
    { en: "I have less energy and get tired more quickly than most people.", ko: "나는 대부분의 사람들보다 에너지가 적고 더 빨리 피곤해진다.", tr: "Çoğu insandan daha az enerjim var ve daha çabuk yoruluyorum.", dim: "HA", rev: false },
    { en: "I often feel a strong spiritual or emotional connection with all the people around me.", ko: "주변 사람들과 강한 영적 또는 감정적 연결을 느끼는 경우가 많다.", tr: "Çoğu zaman etrafımdaki tüm insanlarla güçlü bir ruhsal veya duygusal bağ hissederim.", dim: "ST", rev: false },
    { en: "I usually try to get what I want for myself because it's not possible to satisfy everyone.", ko: "모든 사람을 만족시킬 수 없기 때문에 보통 내가 원하는 것을 얻으려고 한다.", tr: "Genellikle herkesi memnun etmek mümkün olmadığı için kendi istediğimi elde etmeye çalışırım.", dim: "CO", rev: true },
    { en: "I feel I have a sense of purpose and meaning in my life.", ko: "내 삶에 목적과 의미가 있다고 느낀다.", tr: "Hayatımda bir amaç ve anlam duygusu hissederim.", dim: "SD", rev: false },
    { en: "I prefer to spend money rather than save it.", ko: "나는 돈을 저축하기보다 쓰는 것을 더 좋아한다.", tr: "Para biriktirmek yerine harcamayı tercih ederim.", dim: "NS", rev: false },
    { en: "I often have to stop what I'm doing because I start worrying that something might go wrong.", ko: "무언가 잘못될까 봐 걱정이 시작되어 하던 일을 멈춰야 할 때가 많다.", tr: "Bir şeylerin ters gidebileceğinden endişelenmeye başladığım için çok defa yaptığım işi bırakmak zorunda kalıyorum.", dim: "HA", rev: false },
    { en: "I like to help find solutions to problems so that everyone comes out ahead.", ko: "모두가 이득을 볼 수 있도록 문제 해결책을 찾는 것을 좋아한다.", tr: "Herkesin karlı çıkması için sorunlara çözüm bulmaya yardım etmeyi severim.", dim: "CO", rev: false },
    { en: "I often feel powerless and want someone else to solve my problems.", ko: "종종 무력감을 느끼고 다른 사람이 내 문제를 해결해 주길 바란다.", tr: "Çoğu zaman kendimi güçsüz hisseder ve sorunlarımı başkasının çözmesini isterim.", dim: "SD", rev: true },
    { en: "I am more of a perfectionist than most people.", ko: "나는 대부분의 사람들보다 완벽주의적인 편이다.", tr: "Çoğu insandan daha çok mükemmeliyetçiyim.", dim: "PS", rev: false },
    { en: "I like old 'tried and true' ways of doing things much better than trying 'new and improved' ways.", ko: "'검증된 기존 방식'을 '새롭고 개선된 방식'보다 훨씬 더 좋아한다.", tr: "Eski \"denenmiş\" yöntemleri, \"yeni\" yöntemleri denemekten çok daha fazla severim.", dim: "NS", rev: true },
    { en: "I sometimes feel a spiritual connection with other people that I cannot explain in words.", ko: "때때로 말로 설명할 수 없는 영적 연결을 다른 사람들과 느낄 때가 있다.", tr: "Bazen diğer insanlarla kelimelerle açıklayamadığım ruhsal bir bağ kurduğumu hissederim.", dim: "ST", rev: false },
    { en: "I am not very sympathetic and don't understand why some things make other people so emotional.", ko: "나는 그다지 동정적이지 않고 어떤 일이 왜 다른 사람들을 그렇게 감정적으로 만드는지 이해하지 못한다.", tr: "Çok anlayışlı biri değilimdir ve bazı şeylerin diğer insanları neden bu kadar duygusallaştırdığını anlam veremem.", dim: "RD", rev: true },
    { en: "My actions are determined mainly by influences outside my control.", ko: "내 행동은 주로 내가 통제할 수 없는 외부 영향에 의해 결정된다.", tr: "Davranışlarım esas olarak kontrolüm dışındaki etkiler tarafından belirlenir.", dim: "SD", rev: true },
    { en: "I usually think about all the facts in detail before I make a decision.", ko: "결정을 내리기 전에 보통 모든 사실을 세부적으로 생각한다.", tr: "Bir karar vermeden önce genellikle tüm gerçekleri ayrıntılı olarak düşünürüm.", dim: "NS", rev: true },
    { en: "I often feel tense and worried in unfamiliar situations even when others feel everything is fine.", ko: "다른 사람들은 괜찮다고 느끼는 낯선 상황에서도 나는 종종 긴장하고 걱정한다.", tr: "Başkaları her şeyin yolunda olduğunu hissetse bile, alışılmadık durumlarda genellikle gergin ve endişeli hissederim.", dim: "HA", rev: false },
    { en: "If something works it doesn't bother me how or why it works.", ko: "무언가가 작동하면 어떻게, 왜 작동하는지는 신경 쓰지 않는다.", tr: "Eğer bir şey işe yarıyorsa, nasıl veya neden işe yaradığı benim için önemli değildir.", dim: "ST", rev: true },
    { en: "I generally don't like people who have different views from me.", ko: "나와 다른 견해를 가진 사람들을 일반적으로 좋아하지 않는다.", tr: "Genellikle benden farklı görüşleri olan insanlardan hoşlanmam.", dim: "CO", rev: true },
    { en: "I have many bad habits that I wish I could break.", ko: "고치고 싶은 나쁜 습관이 많다.", tr: "Kurtulmayı dilediğim birçok kötü alışkanlığım var.", dim: "SD", rev: true },
    { en: "I often give up a job if it takes much longer than I expected.", ko: "예상보다 훨씬 오래 걸리면 일을 포기하는 경우가 많다.", tr: "Bir iş beklediğimden çok daha uzun sürerse genellikle pes ederim.", dim: "PS", rev: true },
    { en: "I would do almost anything legal to become rich and famous even if I lost the trust of many old friends.", ko: "오랜 친구들의 신뢰를 잃더라도 부와 명성을 얻기 위해 합법적인 거의 모든 일을 할 것이다.", tr: "Eski arkadaşlarımın güvenini kaybetsem bile, zengin olmak için yasal olan hemen hemen her şeyi yapardım.", dim: "CO", rev: true },
    { en: "I am much more reserved and controlled than most people.", ko: "나는 대부분의 사람들보다 훨씬 더 내성적이고 절제력이 있다.", tr: "Çoğu insandan çok daha fazla içine kapanık ve kontrollüyümdür.", dim: "NS", rev: true },
    { en: "I frequently have to use careful self-control to keep out of trouble.", ko: "문제를 피하기 위해 신중한 자기 통제를 자주 사용해야 한다.", tr: "Beladan uzak durmak için sık sık dikkatli bir şekilde kendimi kontrol etmem gerekir.", dim: "HA", rev: false },
    { en: "I nearly always stay relaxed and carefree even when nearly everyone else is fearful.", ko: "거의 모든 사람이 두려워할 때도 나는 거의 항상 편안하고 태평하다.", tr: "Neredeyse herkes korku içindeyken bile hemen hemen her zaman rahat ve kaygısızımdır.", dim: "HA", rev: true },
    { en: "I don't care very much whether other people like me or the way I do things.", ko: "다른 사람들이 나를 좋아하든 내 방식을 좋아하든 별로 신경 쓰지 않는다.", tr: "Diğer insanların beni sevip sevmediği veya işleri yapma şeklimle pek ilgilenmiyorum.", dim: "RD", rev: true },
    { en: "I usually feel much more confident and energetic than most people even after minor illnesses or stress.", ko: "가벼운 질병이나 스트레스 후에도 대부분의 사람들보다 훨씬 자신감 있고 활력이 넘친다.", tr: "Hafif hastalıklardan veya stresten sonra bile genellikle çoğu insandan çok daha kendime güvenli hissederim.", dim: "SD", rev: false },
    { en: "I usually try to imagine myself in other people's place so I can really understand them.", ko: "다른 사람들을 진정으로 이해하기 위해 보통 그들의 입장에서 상상해 보려고 한다.", tr: "Genellikle onları gerçekten anlayabilmek için kendimi diğer insanların yerine koymaya çalışırım.", dim: "CO", rev: false },
    { en: "If I'm feeling upset I usually feel better in a familiar environment.", ko: "기분이 안 좋을 때 익숙한 환경에 있으면 보통 기분이 나아진다.", tr: "Eğer üzgün hissediyorsam genellikle tanıdık bir ortamda kendimi daha iyi hissederim.", dim: "HA", rev: false },
    { en: "I frequently feel empty when I'm alone, even for a few hours.", ko: "몇 시간이라도 혼자 있으면 공허함을 자주 느낀다.", tr: "Yalnızken sık sık kendimi boşlukta hissederim, sadece birkaç saatliğine bile olsa.", dim: "RD", rev: false },
    { en: "I have had personal experiences in which I felt in contact with a divine and wonderful spiritual power.", ko: "신성하고 경이로운 영적 힘과 접촉했다고 느낀 개인적 경험이 있다.", tr: "İlahi ve harika bir ruhsal güçle temas kurduğumu hissettiğim kişisel deneyimlerim oldu.", dim: "ST", rev: false },
    { en: "I often consider another person's feelings as much as my own.", ko: "다른 사람의 감정을 내 감정만큼 자주 고려한다.", tr: "Genellikle başka bir kişinin duygularını kendi duygularım kadar dikkate alırım.", dim: "CO", rev: false },
    { en: "I usually feel tense and worried when I have to do something new and unfamiliar.", ko: "새롭고 낯선 일을 해야 할 때 보통 긴장하고 걱정된다.", tr: "Yeni ve tanıdık olmayan bir şey yapmak zorunda kaldığımda genellikle gergin ve endişeli hissederim.", dim: "HA", rev: false },
    { en: "I recover more slowly than most people from minor illnesses or stress.", ko: "가벼운 질병이나 스트레스에서 대부분의 사람들보다 더 느리게 회복한다.", tr: "Küçük hastalık veya stresi çoğu insandan daha yavaş atlatırım.", dim: "HA", rev: false },
    { en: "My behavior is strongly guided by certain goals that I have set for my life.", ko: "내 행동은 내가 설정한 특정 삶의 목표에 의해 강하게 인도된다.", tr: "Davranışlarım büyük ölçüde hayatım için belirlediğim hedefler tarafından güçlü bir biçimde yönlendirilir.", dim: "SD", rev: false },
    { en: "I am usually so determined that I continue to work long after other people have given up.", ko: "다른 사람들이 포기한 후에도 계속 일할 만큼 보통 결단력이 있다.", tr: "Genellikle o kadar kararlıyımdır ki, diğer insanlar pes ettikten çok sonra bile çalışmaya devam ederim.", dim: "PS", rev: false },
    { en: "I enjoy getting revenge on people who hurt me.", ko: "나를 아프게 한 사람들에게 복수하는 것이 즐겁다.", tr: "Beni inciten insanlardan intikam almaktan zevk alırım.", dim: "CO", rev: true },
    { en: "I rarely feel free to choose what I want to do.", ko: "내가 원하는 것을 자유롭게 선택할 수 있다고 느끼는 경우가 드물다.", tr: "Ne yapmak istediğimi seçmekte nadiren kendimi özgür hissederim.", dim: "SD", rev: true },
    { en: "I am usually able to overcome difficulties and challenges without hesitation.", ko: "어려움과 도전을 주저 없이 극복할 수 있는 편이다.", tr: "Genellikle zorlukların ve engellerin üstesinden tereddüt etmeden gelebilirim.", dim: "SD", rev: false },
    { en: "I generally trust other people more than people trust me.", ko: "일반적으로 사람들이 나를 신뢰하는 것보다 내가 다른 사람들을 더 신뢰한다.", tr: "Genellikle insanlara onların bana güvendiğinden daha çok güvenirim.", dim: "CO", rev: false },
    { en: "I am satisfied with my present accomplishments.", ko: "현재의 성취에 만족한다.", tr: "Şu anki başarılarımdan memnunum.", dim: "SD", rev: false },
    { en: "I often react so strongly to unexpected news that I say or do things I regret.", ko: "예상치 못한 소식에 너무 강하게 반응하여 후회할 말이나 행동을 할 때가 많다.", tr: "Beklenmedik haberlere genellikle o kadar güçlü tepki veririm ki sonrasında pişman olacağım şeyler yaparım.", dim: "NS", rev: false },
    { en: "I do not think it is smart to help weak people who cannot help themselves.", ko: "스스로를 도울 수 없는 약한 사람들을 돕는 것이 현명하다고 생각하지 않는다.", tr: "Kendi başlarının çaresine bakamayan zayıf insanlara yardım etmenin akıllıca olduğunu düşünmüyorum.", dim: "CO", rev: true },
    { en: "I sometimes feel that my life is being directed by a spiritual force greater than any human being.", ko: "때때로 내 삶이 어떤 인간보다 위대한 영적 힘에 의해 인도되고 있다고 느낀다.", tr: "Bazen hayatımın herhangi bir insandan daha büyük ruhsal bir güç tarafından yönetildiğini hissediyorum.", dim: "ST", rev: false },
    { en: "Even when most people feel it's not important, I insist on things being done in a strict and orderly way.", ko: "대부분의 사람들이 중요하지 않다고 느끼더라도 일이 엄격하고 질서 있게 진행되어야 한다고 고집한다.", tr: "Çoğu insan bunun önemli olmadığını düşünse bile, işlerin katı ve düzenli bir şekilde yapılması konusunda ısrar ederim.", dim: "PS", rev: false },
    { en: "I tend to be very modest and downplay my achievements.", ko: "나는 매우 겸손한 편이며 내 성취를 축소하는 경향이 있다.", tr: "Genellikle çok mütevazıyımdır ve başarılarımı küçümseme eğilimindeyim.", dim: "RD", rev: false },
    { en: "I experience deep fulfillment and peace of mind through spiritual practices or reflections.", ko: "영적 수행이나 성찰을 통해 깊은 충만감과 마음의 평화를 경험한다.", tr: "Manevi uygulamalar veya derin düşünceler aracılığıyla derin bir tatmin ve gönül rahatlığı yaşarım.", dim: "ST", rev: false },
    { en: "I feel strongly driven to accomplish something meaningful.", ko: "의미 있는 것을 성취하려는 강한 동기를 느낀다.", tr: "Anlamlı bir şeyler başarmak için çok güçlü bir istek(dürtü) hissediyorum.", dim: "PS", rev: false },
    { en: "I prefer spending time with people who share my values and beliefs.", ko: "나와 같은 가치관과 신념을 가진 사람들과 시간을 보내는 것을 선호한다.", tr: "Değerlerimi ve inançlarımı paylaşan insanlarla vakit geçirmeyi tercih ederim.", dim: "CO", rev: true },
    { en: "I often wish I were stronger than everyone else.", ko: "다른 모든 사람보다 더 강해지기를 종종 바란다.", tr: "Sık sık herkesten daha güçlü olmayı dilerim.", dim: "CO", rev: true },
    { en: "I have had moments of great joy in which I suddenly had a clear, deep feeling of oneness with all that exists.", ko: "존재하는 모든 것과의 합일감을 갑자기 분명하고 깊게 느낀 큰 기쁨의 순간을 경험한 적이 있다.", tr: "Aniden var olan her şeyle açık, derin bir bütünlük hissettiğim büyük neşe anlarım oldu.", dim: "ST", rev: false },
    { en: "I think things usually work out for the best no matter what happens.", ko: "무슨 일이 일어나도 결국은 최선의 결과가 나온다고 생각한다.", tr: "Ne olursa olsun işlerin sonunda her zaman en iyisine bağlandığını düşünürüm.", dim: "SD", rev: false },
    { en: "I often find it hard to change my way of doing things even when a different approach would be better.", ko: "다른 접근 방식이 더 나을 때에도 내 방식을 바꾸기 어려울 때가 많다.", tr: "Farklı bir yaklaşım daha iyi olacak olsa bile, işleri yapma yöntemimi değiştirmekte çoğu zaman zorlanırım.", dim: "PS", rev: false }
];
