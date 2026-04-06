"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ShieldCheck, HeartPulse, Clock } from "lucide-react";

export default function CheckInCard({ lastCheckIn }: { lastCheckIn?: { status: string, date: Date } | null }) {
  const [status, setStatus] = useState<"idle" | "logging" | "done">("idle");
  const [isLoading, setIsLoading] = useState(false);
  const [lastCheckInState, setLastCheckInState] = useState(lastCheckIn);

  const handleCheckIn = async (type: "WELL" | "STUMBLED") => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/user/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: type }),
      });
      if (res.ok) {
        setLastCheckInState({ status: type, date: new Date() });
        setStatus("done");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const isAlreadyCheckedInToday = lastCheckInState?.date 
    ? new Date(lastCheckInState.date).toDateString() === new Date().toDateString()
    : false;

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-emerald-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <HeartPulse className="w-48 h-48" />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">Daily Check-In</h2>
        
        {isAlreadyCheckedInToday || status === "done" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 mt-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-emerald-900 text-lg">Check-in Complete</h3>
            </div>
            <p className="text-emerald-700">
              You've logged your status for today. Consistency is the foundation of true healing. Check back tomorrow!
            </p>
          </motion.div>
        ) : (
          <>
            <p className="text-zinc-500 mb-8 max-w-md">
              Honesty is the most important step in recovery. How are you holding up today?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => handleCheckIn("WELL")}
                disabled={isLoading}
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-zinc-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group disabled:opacity-50"
              >
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-zinc-900">I'm standing strong</span>
                  <span className="block text-xs text-zinc-500">I maintained my sobriety today</span>
                </div>
              </button>

              <button
                onClick={() => handleCheckIn("STUMBLED")}
                disabled={isLoading}
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-zinc-100 hover:border-rose-500 hover:bg-rose-50 transition-all group disabled:opacity-50"
              >
                <div className="bg-rose-100 p-2 rounded-lg text-rose-600 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-zinc-900">I stumbled today</span>
                  <span className="block text-xs text-zinc-500">I need some extra grace</span>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
