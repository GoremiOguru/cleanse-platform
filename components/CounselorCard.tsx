"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageSquare, Award, Star, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

type CounselorCardProps = {
  name: string;
  photo: string;
  bio: string;
  specialty: string;
  rating?: string;
};

export default function CounselorCard({ name, photo, bio, specialty, rating = "4.9" }: CounselorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
    >
      <div className="md:w-1/3 relative min-h-[300px] md:min-h-full">
        <Image 
          src={photo} 
          alt={name} 
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-700 border border-emerald-100 flex items-center gap-1 shadow-sm">
             <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" />
             Verified Expert
          </div>
        </div>
      </div>
      
      <div className="md:w-2/3 p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900">{name}</h3>
              <p className="text-emerald-600 font-semibold text-sm flex items-center gap-2">
                <Award className="w-4 h-4" />
                {specialty}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-zinc-50 px-2 py-1 rounded-lg border border-zinc-100">
               <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
               <span className="text-sm font-bold text-zinc-700">{rating}</span>
            </div>
          </div>
          
          <div className="relative">
            <p className={`text-zinc-500 text-sm leading-relaxed mb-6 transition-all duration-300 ${isExpanded ? "" : "line-clamp-4"}`}>
              {bio}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          <button className="flex-1 bg-zinc-900 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group">
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Book a Session
          </button>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-3 px-6 rounded-xl transition-all border border-emerald-100 flex items-center justify-center gap-2 group"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Hide Bio
              </>
            ) : (
              <>
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Full Bio
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
