import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import CheckInCard from "@/components/CheckInCard";
import PersonalityCard from "@/components/PersonalityCard";
import CounselorCard from "@/components/CounselorCard";
import { LogOut, BookOpen, User, PhoneCall, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    redirect("/auth");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      checkIns: {
        orderBy: { date: 'desc' },
        take: 1
      }
    }
  });

  if (!user) {
    redirect("/auth");
  }

  // Redirect to onboarding if they haven't completed their profile
  if (!user.role || !user.personalityType) {
    redirect("/onboarding");
  }

  // Find the last check-in to pass down to the card
  const lastCheckIn = user.checkIns[0] 
    ? { status: user.checkIns[0].status, date: user.checkIns[0].date } 
    : null;

  return (
    <main className="min-h-screen bg-zinc-50 pb-20">
      
      {/* Dashboard Top Navigation */}
      <nav className="bg-white border-b border-zinc-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <ShieldCheck className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-zinc-900">
            cleanse<span className="text-emerald-600">.</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold text-zinc-500 hover:text-emerald-600 transition-colors">
            Back to Site
          </Link>
          <Link href="/api/auth/signout" className="text-sm font-semibold text-zinc-500 hover:text-red-600 flex items-center gap-2 transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Greeting & Check-ins */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900 mb-2">
              Welcome back{user.firstName ? `, ${user.firstName}` : ''}.
            </h1>
            <p className="text-lg text-zinc-500">Your secure, private dashboard built entirely around your needs.</p>
          </div>

          <CheckInCard lastCheckIn={lastCheckIn} />

          {/* Specialized Pathway specifically for Leaders / Public Figures */}
          {(user.role === "CHRISTIAN_LEADER" || user.role === "PUBLIC_FIGURE") && (
            <div className="bg-zinc-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <User className="w-40 h-40" />
               </div>
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                   <ShieldCheck className="w-4 h-4 text-emerald-400" />
                   High-Privacy Tier
                 </div>
                 <h2 className="text-2xl font-bold mb-3">Confidential Ministerial Support</h2>
                 <p className="text-zinc-400 max-w-md mb-6 leading-relaxed">
                   As a {user.role.replace("_", " ").toLowerCase()}, we understand the immense pressure and the critical need for absolute anonymity. Access highly vetted Christian therapists dedicated to leadership recovery.
                 </p>
                 <button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-bold py-3 px-6 rounded-xl transition-colors">
                   Request Private Match
                 </button>
               </div>
            </div>
          )}

          {/* Elite Therapeutic Support Section */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 flex items-center gap-3">
                  <PhoneCall className="w-8 h-8 text-emerald-600" />
                  Elite Therapeutic Support
                </h2>
                <p className="text-zinc-500 mt-1">Book private, secure sessions with some of our highly vetted specialists.</p>
              </div>
             
            </div>

            <div className="space-y-6">
              <CounselorCard 
                name="Victor Ikechukwu Okafor"
                photo="/counsellors_picture&bio/Victor Ikechukwu Okafor.webp"
                specialty="Addiction Counselor & Life Coach"
                bio="Victor IK Okafor is a dedicated addiction counselor, life coach, and mentor committed to helping individuals break free from destructive patterns and rediscover purpose. With a strong passion for emotional wellness and personal transformation, he guides people through the journey of healing, self-awareness, and lasting change. Victor has a degree in Business Administration and half a decade's worth of experience in marketing. His approach is rooted in aligning the mind, emotions, and spirit with God’s truth, empowering individuals to overcome addiction, rebuild their lives, and develop healthier habits. He believes that true freedom comes from both inner healing and spiritual alignment, and he works closely with clients to uncover the root causes of their struggles while equipping them with practical tools for growth."
              />
              
              <CounselorCard 
                name="Angel Ochanya"
                photo="/counsellors_picture&bio/Angel Ochanya.webp"
                specialty="Holistic Well-being & Public Health"
                bio="Angel is a counselor with a degree in Public Health and minister committed to healing, growth, and transformation. With years of ministry experience and a foundation in medical science, she provides support that nurtures both emotional well-being and holistic development."
              />
            </div>
          </div>
        </div>

        {/* Right Column: Mini Utility Widget */}
        <div className="space-y-6">
          <PersonalityCard 
            type={user.personalityType || "ARCHITECT"} 
            label={user.personalityLabel || ""} 
            traits={user.personalityTraits || ""} 
            description={user.personalityDescription || ""} 
          />

          <div className="bg-white rounded-[2rem] p-6 border border-zinc-100 shadow-sm">
             <h3 className="font-bold text-lg text-zinc-900 mb-4 flex items-center gap-2">
               <MapPin className="text-emerald-500 w-5 h-5"/> Locators
             </h3>
             <ul className="space-y-3">
               <li>
                 <Link href="/#rehab" className="flex items-center text-zinc-600 hover:text-emerald-600 font-medium bg-zinc-50 hover:bg-emerald-50 p-3 rounded-lg transition-colors">
                   Find a Rehab Center
                 </Link>
               </li>
               <li>
                 <Link href="/ministers" className="flex items-center text-zinc-600 hover:text-emerald-600 font-medium bg-zinc-50 hover:bg-emerald-50 p-3 rounded-lg transition-colors">
                   Ministerial Retreats
                 </Link>
               </li>
             </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
