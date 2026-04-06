"use client";

import { useState } from "react";

export function FeedbackForm() {
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    
    const subject = encodeURIComponent("Suggestion for Cleanse");
    const body = encodeURIComponent(suggestion);
    
    // Using the requested email from the previous context
    window.location.href = `mailto:goremioguru@gmail.com?subject=${subject}&body=${body}`;
    setSuggestion("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 shadow-sm text-left group hover:border-emerald-200 transition-colors">
      <div className="mb-6">
        <label htmlFor="suggestion" className="block text-sm font-semibold text-zinc-700 mb-2">
          Your Suggestion <span className="text-zinc-400 font-normal">(Completely Anonymous)</span>
        </label>
        <textarea 
          id="suggestion" 
          rows={5} 
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="What can we do better? Are there specific resources we are missing?"
          className="w-full bg-white border border-zinc-200 rounded-xl p-4 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-zinc-900 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-colors shadow-md active:scale-[0.98]"
      >
        Submit Feedback
      </button>
    </form>
  );
}
