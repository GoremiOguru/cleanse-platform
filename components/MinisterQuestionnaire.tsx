"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

type Question = {
  id: string;
  title: string;
  text: string;
};

type Section = {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
};

const surveyData: Section[] = [
  {
    id: "secret-life",
    title: "1. The \"Secret Life\" Diagnostic",
    description: "Shame grows in the dark. These questions assess how much of the pastor's life is hidden.",
    questions: [
      { id: "sl1", title: "The \"Transparency\" Test", text: "Is there any part of my life (financial, relational, or digital) that I would be terrified for my board or spouse to see right now?" },
      { id: "sl2", title: "The \"Accountability\" Gap", text: "When was the last time I told another person the absolute, unvarnished truth about a struggle I'm having—without 'pastoring' the answer?" },
      { id: "sl3", title: "The \"Private Devotion\" Check", text: "If my congregation knew the reality of my private prayer and study life this month, would they feel misled by my public persona?" }
    ]
  },
  {
    id: "emotional-health",
    title: "2. The Emotional & Mental Health Screen",
    description: "These questions identify \"leakage\"—where the internal pressure is starting to affect behavior.",
    questions: [
      { id: "em1", title: "The \"Irritability\" Marker", text: "Am I increasingly 'using' my sermons to settle personal scores or vent my frustrations with specific people?" },
      { id: "em2", title: "The \"Numbing\" Quotient", text: "Am I relying on 'small' secrets (excessive eating, shopping, scrolling, or substance use) just to get through the day or 'turn off' my brain?" },
      { id: "em3", title: "The \"Imposter\" Scale", text: "Do I feel like a fraud who is just one mistake away from being 'found out' and losing everything?" }
    ]
  },
  {
    id: "burnout-check",
    title: "3. The \"Vocation\" and Burnout Check",
    description: "When a calling becomes a \"job,\" the risk of a shame-based exit triples.",
    questions: [
      { id: "bc1", title: "The \"Joy\" Audit", text: "Am I 'manufacturing' joy in ministry most days, or is there a genuine sense of connection to my work?" },
      { id: "bc2", title: "The \"Escape\" Fantasy", text: "How often do I fantasize about a 'clean break'—resigning without notice and disappearing to a life where no one knows I was a pastor?" },
      { id: "bc3", title: "The \"Resentment\" Meter", text: "Do I look at my congregation and see 'sheep to be loved' or 'demands to be managed'?" }
    ]
  },
  {
    id: "resilience-markers",
    title: "4. 2026 Resilience Markers",
    description: "In recent studies (2025–2026), the following \"Positive Indicators\" were found to be the best predictors of a pastor's long-term health:",
    questions: [
      { id: "rm1", title: "The \"Non-Ministry\" Circle", text: "Does the pastor have at least two close friends who are not in their church or denomination?" },
      { id: "rm2", title: "The \"Sabbath\" Integrity", text: "Does the pastor actually take 24 hours off every week where they do zero church-related communication?" },
      { id: "rm3", title: "The \"Counseling\" Habit", text: "Is the pastor currently seeing a therapist or spiritual director proactively, rather than just in a crisis?" }
    ]
  },
  {
    id: "first-responder",
    title: "5. The \"First Responder\" Burden (Nigerian Context)",
    description: "In Nigeria, the lack of robust state social services means the church is the first stop for every crisis.",
    questions: [
      { id: "fr1", title: "Financial Compassion Fatigue", text: "Am I overwhelmed by the volume of financial requests from congregants (school fees, hospital bills, rent)—leading to 'provider shame' when I cannot help everyone?" },
      { id: "fr2", title: "Security Trauma", text: "Have I experienced or am I ignoring symptoms of trauma, like anxiety or PTSD, due to constant threats of kidnapping or communal violence in my region?" },
      { id: "fr3", title: "The \"Success\" Doctrine Pressure", text: "Am I actively struggling with debt or the temptation of unethical financial practices just to maintain an image of 'prosperity' that satisfies my congregation?" }
    ]
  },
  {
    id: "mental-stigma",
    title: "6. Mental Health Literacy and Stigma",
    description: "While the global conversation on mental health has grown, it remains a 'silent killer' in many Nigerian ministry circles.",
    questions: [
      { id: "ms1", title: "The \"Spiritualization\" Trap", text: "Do I misdiagnose my own symptoms of clinical depression or burnout as purely 'spiritual attacks,' preventing me from seeking medical help?" },
      { id: "ms2", title: "Treatment Gap", text: "Do I secretly suffer from high burnout while maintaining an outward facade, because I don't believe a leader should need an 'institutional' stress-management program?" },
      { id: "ms3", title: "The Shame of Therapy", text: "Am I avoiding a consultation with a psychiatrist or therapist because I view it—or fear others will view it—as a 'lack of faith'?" }
    ]
  },
  {
    id: "warning-signs",
    title: "7. Warning Signs Specific to the Nigerian Context",
    description: "Beyond the general red flags, Nigerian leaders should look for these culturally specific indicators:",
    questions: [
      { id: "ws1", title: "\"The Elijah Syndrome\"", text: "Do I feel that 'only I am left' to solve the nation’s or the community’s problems, leading to extreme isolation and the rejection of delegation?" },
      { id: "ws2", title: "Hyper-Spiritualizing Physical Ailments", text: "Am I ignoring serious physical symptoms like high blood pressure or chronic fatigue by calling them 'trials of faith' rather than physiological warning signs?" },
      { id: "ws3", title: "Pulpit Venting", text: "Am I increasingly using the sermon as a weapon or a place to vent against 'enemies' and 'critics' within the church because I have no private emotional outlets?" }
    ]
  }
];

export function MinisterQuestionnaire() {
  const [expandedSection, setExpandedSection] = useState<string | null>(surveyData[0].id);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const toggleAnswer = (questionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <section className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Self-Reflection Questionnaire</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Take a moment for an honest, private self-assessment. No data is saved, recorded, or sent anywhere. This is strictly between you and your conscience.
          </p>
        </div>

        <div className="space-y-6">
          {surveyData.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors text-left"
              >
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">{section.title}</h3>
                  {section.description && (
                    <p className="text-sm text-zinc-500 mt-1">{section.description}</p>
                  )}
                </div>
                <div className="flex-shrink-0 ml-4 text-emerald-600 bg-emerald-50 p-2 rounded-full">
                  {expandedSection === section.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: expandedSection === section.id ? "auto" : 0, opacity: expandedSection === section.id ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 space-y-4">
                  {section.questions.map((question) => {
                    const isChecked = !!answers[question.id];
                    return (
                      <div
                        key={question.id}
                        onClick={() => toggleAnswer(question.id)}
                        className={`group relative p-5 rounded-xl border-2 transition-all cursor-pointer flex gap-4 items-start ${
                          isChecked 
                            ? "border-emerald-500 bg-emerald-50/50" 
                            : "border-zinc-100 hover:border-emerald-200 hover:bg-zinc-50"
                        }`}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-md border mt-0.5 flex items-center justify-center transition-colors ${
                          isChecked ? "bg-emerald-500 border-emerald-500" : "border-zinc-300 group-hover:border-emerald-400 bg-white"
                        }`}>
                          {isChecked && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div>
                          <p className="font-semibold text-zinc-900 mb-1">{question.title}</p>
                          <p className={`text-sm ${isChecked ? "text-emerald-900" : "text-zinc-600"}`}>
                            {question.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  
                  {index === 2 && (
                    <div className="mt-6 p-5 bg-zinc-900 text-white rounded-xl shadow-inner">
                      <h4 className="font-bold text-emerald-400 mb-2">Understanding the "Shame-Burnout" Connection</h4>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        The relationship between high expectations and internal struggle often follows a predictable cycle. Breaking this cycle requires moving from "image management" to "vulnerability."
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
