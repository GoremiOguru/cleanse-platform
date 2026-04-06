"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const resources = [
  {
    name: "SURPIN (Suicide Research and Prevention Initiative)",
    description: "A Nigerian 24-hour helpline for individuals struggling with depression, anxiety, substance use, or thoughts of self-harm.",
    url: "https://surpin.org",
  },
  {
    name: "National Drug Law Enforcement Agency (NDLEA)",
    description: "In addition to drug control, the NDLEA offers counseling services at its state commands across Nigeria for those seeking help.",
    url: "https://ndlea.gov.ng",
  },
  {
    name: "CRISA (African Centre for Research and Information on Substance Abuse)",
    description: "Based in Nigeria, CRISA provides research, prevention, advocacy, and treatment services for substance use disorders.",
    url: "https://crisaafrica.org",
  },
  {
    name: "Substance Abuse and Mental Health Services Administration (SAMHSA) - International",
    description: "A free, confidential, 24/7, 365-day-a-year treatment referral and information service.",
    url: "https://www.samhsa.gov",
  },
  {
    name: "National Institute on Drug Abuse (NIDA)",
    description: "Resources for patients and families including facts, treatment approaches, and research.",
    url: "https://nida.nih.gov",
  },
  {
    name: "Alcoholics Anonymous (AA)",
    description: "An international fellowship of people who have had a drinking problem. Peer-led meetings and support.",
    url: "https://www.aa.org",
  },
  {
    name: "SMART Recovery",
    description: "Global community of mutual-support groups using science-based techniques for addiction.",
    url: "https://www.smartrecovery.org",
  },
  {
    name: "Smokefree.gov",
    description: "Tools, tips, and dedicated support to help you quit smoking and stay entirely smoke-free.",
    url: "https://smokefree.gov",
  },
  {
    name: "Fight the New Drug",
    description: "A movement and organization providing science-based resources and support for overcoming pornography addiction.",
    url: "https://fightthenewdrug.org",
  },
  {
    name: "Sex Addicts Anonymous (SAA)",
    description: "A support program with local and online meetings dedicated to helping individuals recover from sexual and pornography addiction.",
    url: "https://saa-recovery.org",
  }
];

export function Resources() {
  return (
    <section id="resources" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-emerald-400 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Help is Always Available</h2>
          <p className="text-lg text-zinc-600">
            If you need immediate assistance or specialized programs, these trusted organizations offer free and confidential help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block h-full bg-zinc-50 border border-zinc-100 rounded-2xl p-8 hover:bg-emerald-50 hover:border-emerald-200 hover:shadow-sm transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors pr-4">
                    {resource.name}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 shrink-0" />
                </div>
                <p className="text-zinc-600 leading-relaxed">{resource.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
