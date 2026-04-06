"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Globe, Search, Building2 } from "lucide-react";

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", 
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", 
  "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "Abuja (FCT)"
].sort();

const rehabCenters = [
  {
    name: "Synapse Services",
    state: "Abuja (FCT)",
    address: "Provides evidence-based treatment and technology-assisted care.",
    phone: "National Provider",
    website: "https://synapseservices.org"
  },
  {
    name: "Newlife Specialist Hospital and Rehab Center",
    state: "Abuja (FCT)",
    address: "Comprehensive mental health and addiction treatment.",
    phone: "Contact via Website",
    website: "https://newlifehospitalandrehab.com.ng"
  },
  {
    name: "The Serene Haven",
    state: "Abuja (FCT)",
    address: "Expert drug rehabilitation in a residential setting.",
    phone: "Contact via Website",
    website: "https://theserenehaven.ng"
  },
  {
    name: "Vanguard Against Drug Abuse (VGADA) Detox Center",
    state: "Abuja (FCT)",
    address: "Detoxification, counseling, and recovery programs.",
    phone: "Contact via Website",
    website: "https://vgadanigeria.com"
  },
  {
    name: "Tranquil and Quest Behavioral Health",
    state: "Lagos",
    address: "Evidence-based, personalized mental health and substance use treatment.",
    phone: "Contact via Website",
    website: "https://tranquilandquest.org.ng"
  },
  {
    name: "Adicare Rehabilitation Home",
    state: "Lagos",
    address: "Focused rehabilitation for chronic substance abuse.",
    phone: "Contact via Website",
    website: "https://adicarerehab.org"
  },
  {
    name: "Gracehill Hospital and Rehab",
    state: "Lagos",
    address: "Amuwo Odofin & Lekki. Patient-centered mental health and addiction solutions.",
    phone: "Contact via Website",
    website: "https://gbhs.com.ng"
  },
  {
    name: "The Freudian Centre",
    state: "Lagos",
    address: "Outpatient and inpatient mental health services.",
    phone: "Contact via Website",
    website: "https://freudiancentre.com"
  },
  {
    name: "Synapse Japonica",
    state: "Rivers",
    address: "Port Harcourt branch. Mental health and drug rehabilitation.",
    phone: "National Provider",
    website: "https://synapseservices.org"
  },
  {
    name: "180-Degree Rehabilitation Centre",
    state: "Rivers",
    address: "Port Harcourt NGO focused on helping individuals struggling with drug addiction.",
    phone: "Contact via NGO",
    website: "#"
  },
  {
    name: "Road to Recovery (R2R)",
    state: "Rivers",
    address: "Multi-professional rehabilitation services.",
    phone: "Contact via Website",
    website: "https://r2rteam.com"
  }
];

export function RehabLocator() {
  const [selectedState, setSelectedState] = useState("Lagos");

  const filteredCenters = useMemo(() => {
    return rehabCenters.filter(center => center.state === selectedState);
  }, [selectedState]);

  return (
    <section id="locator" className="py-24 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">We can help you find a Rehab Center anywhere in Nigeria.</h2>
          <p className="text-lg text-zinc-600">
            Select your state to find trusted, professional addiction recovery centers near you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* State Selector */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-200 flex items-center mb-8 relative z-10">
            <Search className="w-6 h-6 text-emerald-500 ml-2" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-transparent text-lg font-medium text-zinc-800 outline-none border-none py-3 px-4 appearance-none cursor-pointer"
            >
              <option value="" disabled>Select a state...</option>
              {NIGERIAN_STATES.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
              ▼
            </div>
          </div>

          {/* Results Area */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {filteredCenters.length > 0 ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 gap-6"
                >
                  {filteredCenters.map((center, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 leading-tight">{center.name}</h3>
                          <p className="text-emerald-600 font-medium text-sm mt-1">{center.state}</p>
                        </div>
                      </div>
                      <div className="space-y-3 mt-5">
                        <div className="flex items-start gap-3 text-zinc-600">
                          <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                          <p className="text-sm">{center.address}</p>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-600">
                          <Phone className="w-5 h-5 text-zinc-400 shrink-0" />
                          <p className="text-sm">{center.phone}</p>
                        </div>
                        {center.website !== "#" && (
                          <div className="flex items-center gap-3 text-emerald-600 mt-4">
                            <Globe className="w-5 h-5 shrink-0" />
                            <a href={center.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline">
                              Visit Website
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-emerald-50 rounded-2xl p-8 text-center border border-emerald-100"
                >
                  <Building2 className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">No Verified Centers in {selectedState} Listed Yet</h3>
                  <p className="text-zinc-600 mb-6 max-w-lg mx-auto">
                    We are continually updating our database. If you urgently need help in {selectedState}, please reach out to the National NDLEA Helplines or the Asido Foundation.
                  </p>
                  <a 
                    href="https://findahelpline.com/countries/ng/topics/substance-use" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    View National Helplines
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
