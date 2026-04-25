"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, User, ShieldCheck, HelpCircle, Activity, LayoutGrid } from "lucide-react";

type OnboardingData = {
  role: string | null;
  isAddicted: boolean | null;
  addictionType: string | null;
  reason: string;
  referral: string | null;
  personalityType?: string;
  personalityLabel?: string;
  personalityTraits?: string;
  personalityDescription?: string;
};

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "When faced with a sudden setback, my first instinct is to...",
    options: [
      { text: "Analyze what went wrong and build a plan", type: "ARCHITECT" },
      { text: "Reach out to someone I trust for support", type: "CATALYST" },
      { text: "Take a deep breath and stay present", type: "ANCHOR" },
      { text: "Protect my peace and honor my values", type: "GUARDIAN" }
    ]
  },
  {
    id: 2,
    question: "I feel most accomplished and energized when I...",
    options: [
      { text: "Solve a complex challenge systematically", type: "ARCHITECT" },
      { text: "Connect deeply with a new community", type: "CATALYST" },
      { text: "Maintain a steady, peaceful routine", type: "ANCHOR" },
      { text: "Fulfill a duty or promise I made", type: "GUARDIAN" }
    ]
  },
  {
    id: 3,
    question: "In my journey of growth, I value [X] the most:",
    options: [
      { text: "Clarity and understanding", type: "ARCHITECT" },
      { text: "Compassion and shared stories", type: "CATALYST" },
      { text: "Equanimity and inner silence", type: "ANCHOR" },
      { text: "Integrity and tradition", type: "GUARDIAN" }
    ]
  },
  {
    id: 4,
    question: "When I think about my future self, I see someone who is...",
    options: [
      { text: "Master of their habits and mind", type: "ARCHITECT" },
      { text: "A source of light and connection for others", type: "CATALYST" },
      { text: "Unshakeable amidst any storm", type: "ANCHOR" },
      { text: "A faithful steward of their legacy", type: "GUARDIAN" }
    ]
  },
  {
    id: 5,
    question: "My primary way of dealing with stress is...",
    options: [
      { text: "Researching and strategizing solutions", type: "ARCHITECT" },
      { text: "Talking it out and seeking empathy", type: "CATALYST" },
      { text: "Meditating or focusing on my breath", type: "ANCHOR" },
      { text: "Returning to my core principles and faith", type: "GUARDIAN" }
    ]
  },
  {
    id: 6,
    question: "I am most likely to be inspired by...",
    options: [
      { text: "A brilliant breakthrough or discovery", type: "ARCHITECT" },
      { text: "A story of profound human connection", type: "CATALYST" },
      { text: "A life of quiet, steady devotion", type: "ANCHOR" },
      { text: "An act of unwavering courage and honor", type: "GUARDIAN" }
    ]
  },
  {
    id: 7,
    question: "My ideal environment for healing is...",
    options: [
      { text: "Highly structured and data-driven", type: "ARCHITECT" },
      { text: "Warm, social, and collaborative", type: "CATALYST" },
      { text: "Minimalist, quiet, and serene", type: "ANCHOR" },
      { text: "Sacred, traditional, and meaningful", type: "GUARDIAN" }
    ]
  },
  {
    id: 8,
    question: "I tend to make decisions based on...",
    options: [
      { text: "Logic, evidence, and efficiency", type: "ARCHITECT" },
      { text: "Impact on others and emotional resonance", type: "CATALYST" },
      { text: "Intuition and inner alignment", type: "ANCHOR" },
      { text: "Consistency with my values and history", type: "GUARDIAN" }
    ]
  },
  {
    id: 9,
    question: "People often come to me when they need...",
    options: [
      { text: "A strategic plan or objective advice", type: "ARCHITECT" },
      { text: "Encouragement and a listening ear", type: "CATALYST" },
      { text: "A calming presence and perspective", type: "ANCHOR" },
      { text: "A reliable partner who keeps their word", type: "GUARDIAN" }
    ]
  },
  {
    id: 10,
    question: "What is your greatest 'uniqueness' in your eyes?",
    options: [
      { text: "My ability to see patterns others miss", type: "ARCHITECT" },
      { text: "My capacity to love and bridge divides", type: "CATALYST" },
      { text: "My stillness in a chaotic world", type: "ANCHOR" },
      { text: "My unwavering loyalty to what I believe", type: "GUARDIAN" }
    ]
  }
];

const PERSONALITY_DETAILS: Record<string, { label: string, traits: string, description: string }> = {
  ARCHITECT: {
    label: "The Resilient Architect",
    traits: "Analytical, Structured, Strategic",
    description: "You find strength in logic and systems. Your path to recovery involves understanding the mechanics of habit and building rigorous, data-backed routines that leave no room for error."
  },
  CATALYST: {
    label: "The Radiant Catalyst",
    traits: "Empathetic, Social, Dynamic",
    description: "You are powered by connection. You thrive in community and find your greatest breakthroughs when sharing your journey and being a source of light for others."
  },
  ANCHOR: {
    label: "The Stoic Anchor",
    traits: "Calm, Consistent, Grounded",
    description: "You are the steady presence. Your recovery is built on the power of the present moment and maintaining a peaceful, unshakeable core regardless of external circumstances."
  },
  GUARDIAN: {
    label: "The Devoted Guardian",
    traits: "Principled, Protective, Faithful",
    description: "You are driven by deep values and legacy. Your strength comes from protecting what is sacred and honoring your commitments to a higher purpose and those you love."
  }
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [quizIdx, setQuizIdx] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    ARCHITECT: 0, CATALYST: 0, ANCHOR: 0, GUARDIAN: 0
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    role: null,
    isAddicted: null,
    addictionType: null,
    reason: "",
    referral: null,
  });

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const handleQuizAnswer = (type: string) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);
    
    if (quizIdx < QUIZ_QUESTIONS.length - 1) {
      setQuizIdx(quizIdx + 1);
    } else {
      // Calculate final personality
      let maxScore = -1;
      let finalType = "ARCHITECT";
      
      Object.entries(newScores).forEach(([t, s]) => {
        if (s > maxScore) {
          maxScore = s;
          finalType = t;
        }
      });

      const details = PERSONALITY_DETAILS[finalType];
      updateData({
        personalityType: finalType,
        personalityLabel: details.label,
        personalityTraits: details.traits,
        personalityDescription: details.description
      });
      handleNext();
    }
  };

  const completeOnboarding = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/user/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to save onboarding data");
      }
      
      router.push("/dashboard");
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const updateData = (fields: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const totalSteps = 6;

  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-emerald-100 selection:text-emerald-900">
      
      <div className="absolute top-8 left-8">
        <button onClick={() => router.push("/auth")} className="flex items-center gap-2 text-zinc-500 hover:text-emerald-600 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-zinc-100 relative overflow-hidden">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-100">
          <div 
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <div className="mb-10 text-center text-sm font-bold text-emerald-600 tracking-wider uppercase">
          {step === 5 ? (
             <span>Personality Quiz: Q{quizIdx + 1} of 10</span>
          ) : (
             <span>Step {step} of {totalSteps}</span>
          )}
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: ROLE */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 text-center">Which best describes you?</h2>
              <p className="text-zinc-500 text-center mb-8">We tailor our privacy protocols and recovery networks based on your unique societal demands.</p>
              
              <div className="space-y-4">
                {[
                  { id: "CHRISTIAN_LEADER", label: "Christian Leader / Ministry", icon: ShieldCheck },
                  { id: "PUBLIC_FIGURE", label: "Public Figure / Executive", icon: User },
                  { id: "REGULAR_USER", label: "Everyday Believer / Professional", icon: LayoutGrid }
                ].map((role) => {
                  const Icon = role.icon;
                  return (
                    <button
                      key={role.id}
                      onClick={() => { updateData({ role: role.id }); handleNext(); }}
                      className={`w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${
                        data.role === role.id 
                          ? "border-emerald-500 bg-emerald-50" 
                          : "border-zinc-100 bg-white hover:border-emerald-200"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${data.role === role.id ? "bg-emerald-100 text-emerald-600" : "bg-zinc-100 text-zinc-500"}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-zinc-900 text-lg">{role.label}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2: ADDICTION STATUS */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 text-center">Are you currently battling an addiction?</h2>
              <p className="text-zinc-500 text-center mb-10 text-lg">Your vulnerability here ensures you get routed to the correct intensive care networks instantly.</p>
              
              <div className="grid grid-cols-2 gap-6">
                <button
                  onClick={() => { updateData({ isAddicted: true }); handleNext(); }}
                  className={`p-8 rounded-3xl border-2 text-center transition-all ${
                    data.isAddicted === true ? "border-emerald-500 bg-emerald-50" : "border-zinc-200 hover:border-emerald-300"
                  }`}
                >
                  <Activity className={`w-12 h-12 mx-auto mb-4 ${data.isAddicted === true ? "text-emerald-600" : "text-zinc-400"}`} />
                  <span className="block font-bold text-xl text-zinc-900">Yes, I need help</span>
                </button>
                <button
                  onClick={() => { updateData({ isAddicted: false, addictionType: null }); setStep(4); }}
                  className={`p-8 rounded-3xl border-2 text-center transition-all ${
                    data.isAddicted === false ? "border-emerald-500 bg-emerald-50" : "border-zinc-200 hover:border-emerald-300"
                  }`}
                >
                  <ShieldCheck className={`w-12 h-12 mx-auto mb-4 ${data.isAddicted === false ? "text-emerald-600" : "text-zinc-400"}`} />
                  <span className="block font-bold text-xl text-zinc-900">No, just exploring</span>
                </button>
              </div>
              <div className="mt-8 text-center">
                <button onClick={handleBack} className="text-zinc-400 hover:text-zinc-600 font-semibold">Go Back</button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: ADDICTION TYPE */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 text-center">What are you struggling with?</h2>
              <p className="text-zinc-500 text-center mb-8">This determines the type of clinical counselor and resources you will be matched with.</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: "PORNOGRAPHY", label: "Pornography" },
                  { id: "SMOKING", label: "Smoking" },
                  { id: "DRUG_ABUSE", label: "Drug Abuse" },
                  { id: "SUBSTANCE_ABUSE", label: "Substance/Alcohol" }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => { updateData({ addictionType: type.id }); handleNext(); }}
                    className={`p-6 rounded-2xl border-2 text-center font-bold text-lg transition-all ${
                      data.addictionType === type.id 
                        ? "border-emerald-500 bg-emerald-600 text-white shadow-lg" 
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-emerald-300"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button onClick={handleBack} className="text-zinc-400 hover:text-zinc-600 font-semibold">Go Back</button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: REASON & REFERRAL */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-6 text-center">Tell us more about your journey</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Why are you seeking Cleanse today?</label>
                  <textarea 
                    value={data.reason}
                    onChange={(e) => updateData({ reason: e.target.value })}
                    placeholder="Briefly describe what pushed you to seek support..."
                    rows={4}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">How did you hear about us?</label>
                  <select
                    value={data.referral || ""}
                    onChange={(e) => updateData({ referral: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Colleague">Colleague or Friend</option>
                    <option value="Church Network">Church Network</option>
                    <option value="Clinical Referral">Clinical Referral</option>
                    <option value="Online">Online Search / Social Media</option>
                    <option value="Event">Conference or Event</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button onClick={handleBack} className="text-zinc-400 hover:text-zinc-600 font-semibold">Go Back</button>
                <button 
                  onClick={handleNext}
                  disabled={!data.reason.trim() || !data.referral}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Personality Quiz
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: PERSONALITY QUIZ */}
          {step === 5 && (
            <motion.div
              key={`quiz-${quizIdx}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-zinc-900 mb-4">Discover Your Unique Traits</h2>
                <p className="text-zinc-500 mb-8">This helps us tailor your recovery path to your natural strengths.</p>
              </div>

              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mb-8">
                <h3 className="text-xl font-bold text-zinc-800 text-center leading-relaxed">
                  {QUIZ_QUESTIONS[quizIdx].question}
                </h3>
              </div>

              <div className="grid gap-4">
                {QUIZ_QUESTIONS[quizIdx].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuizAnswer(opt.type)}
                    className="w-full p-5 rounded-xl border-2 border-zinc-100 bg-white hover:border-emerald-400 hover:bg-emerald-50 transition-all text-left font-medium text-zinc-700 flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center font-bold text-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      {String.fromCharCode(65 + i)}
                    </div>
                    {opt.text}
                  </button>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button 
                  onClick={() => {
                    if (quizIdx > 0) setQuizIdx(quizIdx - 1);
                    else handleBack();
                  }} 
                  className="text-zinc-400 hover:text-zinc-600 font-semibold"
                >
                  Go Back
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 6: FINAL CONFIRMATION */}
          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Profile Analysis Complete.</h2>
              
              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 mb-8 text-left">
                <h3 className="text-emerald-800 font-bold text-sm uppercase tracking-wider mb-2">Your Personality Result:</h3>
                <p className="text-2xl font-bold text-emerald-900 mb-2">{data.personalityLabel}</p>
                <p className="text-emerald-700 text-sm leading-relaxed">
                  {data.personalityDescription}
                </p>
              </div>

              <p className="text-zinc-600 mb-10 text-lg max-w-md mx-auto">
                Your profile has been mapped perfectly. Our network is now adjusting to ensure your profound privacy while prioritizing clinical care.
              </p>
              
              <div className="flex gap-4 justify-center">
                <button onClick={() => setStep(5)} className="px-6 py-4 rounded-xl border border-zinc-200 text-zinc-600 font-bold hover:bg-zinc-50 transition-colors">
                  Retake Quiz
                </button>
                <button 
                  onClick={completeOnboarding}
                  disabled={loading}
                  className="bg-zinc-900 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md flex items-center gap-2 min-w-[200px] justify-center"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    "Complete Onboarding"
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
