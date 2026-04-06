import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Leaf, HeartPulse, HeartHandshake, Map, ArrowUpRight, Globe, Phone, Mail, Users } from "lucide-react";
import Link from "next/link";

export default function PrivateHelpPage() {
  return (
    <main className="min-h-screen bg-zinc-50 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white border-b border-zinc-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-sm mb-6 border border-emerald-100">
            <HeartPulse className="w-4 h-4" />
            Confidential Directories
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
            Trusted Partners in <span className="text-emerald-600 drop-shadow-sm">Restoration.</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            Standard support is often insufficient for the layered trauma of ministry. Connect with these highly-vetted organizations focusing on extreme privacy, specialized addiction care, and long-term well-being for leaders.
          </p>
        </div>
      </section>

      {/* Directory Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Category 1 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100/50 rounded-xl text-emerald-600">
                <Map className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">1. Counseling "Intensives" (The Deep Dive)</h2>
            </div>
            <p className="text-zinc-600 mb-6">Standard 50-minute counseling sessions are often insufficient for the layered trauma of ministry. Intensives provide 1 to 2 weeks of immersive therapy in a secluded setting.</p>
            
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  QuietWaters Ministries
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Offers "Counseling Intensives" specifically for burnout, moral failure, and marriage restoration. They focus on the "Spirit-led" healing of the leader's internal world away from the demands of the church.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://qwaters.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="tel:3036399066" className="flex items-center gap-1.5 hover:text-emerald-800"><Phone className="w-4 h-4"/> (303) 639-9066</a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  Marble Retreat
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Located in the Colorado Rockies, this is one of the oldest "clergy-only" retreats. It uses a small-group and individual therapy model to help pastors process the "shame-addiction" cycle in total confidentiality.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://marbleretreat.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="tel:9709632499" className="flex items-center gap-1.5 hover:text-emerald-800"><Phone className="w-4 h-4"/> (970) 963-2499</a>
                  <a href="mailto:MinistryCare@marbleretreat.org" className="flex items-center gap-1.5 hover:text-emerald-800"><Mail className="w-4 h-4"/> Email</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  Fairhaven Ministries
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Provides a "safe harbor" for Christian workers, focusing on biblically-based professional counseling for those suffering from burnout or relational crises.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://fairhaven-ministries.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="tel:4237724269" className="flex items-center gap-1.5 hover:text-emerald-800"><Phone className="w-4 h-4"/> (423) 772-4269</a>
                  <a href="mailto:info@fairhaven-ministries.org" className="flex items-center gap-1.5 hover:text-emerald-800"><Mail className="w-4 h-4"/> Email</a>
                </div>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100/50 rounded-xl text-emerald-600">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">2. Specialized Addiction & "Shame" Support</h2>
            </div>
            <p className="text-zinc-600 mb-6">For pastors dealing with secret addictions (pornography, substance abuse, or workaholism), these organizations provide a path that addresses the unique "spiritual shame" involved.</p>
            
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  Pure Desire Ministries
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  A leader in treating sexual addiction and betrayal trauma within the church. They offer "clinically informed and biblically based" counseling, including online groups specifically for pastors to ensure anonymity.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://puredesire.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="tel:5034890230" className="flex items-center gap-1.5 hover:text-emerald-800"><Phone className="w-4 h-4"/> (503) 489-0230</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  Christian Care Connect
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Focuses on the "Shame-Addiction Cycle," helping leaders move from seeing God as a "punitive judge" to a "merciful healer"—a critical shift for those who feel their sin has permanently disqualified them.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://christiancareconnect.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="tel:8005268673" className="flex items-center gap-1.5 hover:text-emerald-800"><Phone className="w-4 h-4"/> (800) 526-8673</a>
                  <a href="mailto:contact@christiancareconnect.com" className="flex items-center gap-1.5 hover:text-emerald-800"><Mail className="w-4 h-4"/> Email</a>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100/50 rounded-xl text-emerald-600">
                <Leaf className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">3. Proactive "Well-being" Networks</h2>
            </div>
            <p className="text-zinc-600 mb-6">These are designed to prevent the breakdown before it happens by providing long-term support systems.</p>
            
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  Full Strength Network
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  A membership-based network that provides pastors with access to coaching, counseling, and digital resources. Their goal is "prevention-focused" wellbeing, helping pastors stay at "full strength" rather than waiting for a crisis.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://fullstrength.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  Shepherd’s Heart Ministry
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Founded by a pastoral couple, they focus on restoring leaders who are "hanging on by a thread." They emphasize the "Restoration of the Shepherd," treating the pastor and their spouse as a unit.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://shministry.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="tel:3038848030" className="flex items-center gap-1.5 hover:text-emerald-800"><Phone className="w-4 h-4"/> (303) 884-8030</a>
                  <a href="mailto:hello@shministry.com" className="flex items-center gap-1.5 hover:text-emerald-800"><Mail className="w-4 h-4"/> Email</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  Broom Tree Ministries
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Offers free, week-long spiritual retreats for pastoral couples. The focus is purely on "uninterrupted time with God," rest, and silence, providing a "Sabbath" that many pastors haven't experienced in years.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://broomtreeministries.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                </div>
              </div>
            </div>
          </div>

          {/* Category 4 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100/50 rounded-xl text-emerald-600">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">4. Denominational & Sabbatical Resources</h2>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-emerald-900 text-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 opacity-20 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between relative z-10">
                  Lilly Endowment Clergy Renewal
                  <ArrowUpRight className="w-4 h-4 text-emerald-300" />
                </h3>
                <p className="text-emerald-100/80 text-sm leading-relaxed mb-4 relative z-10">
                  Many organizations (like the Lilly Endowment) provide grants specifically to fund a pastor’s sabbatical, recognizing that "rest is a survival skill" for long-term ministry. Taking time entirely away is actively supported.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-300 border-t border-emerald-800 pt-4 relative z-10">
                  <a href="https://cts.edu/clergy-renewal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><Globe className="w-4 h-4"/> Website</a>
                  <a href="mailto:clergyrenewal@cts.edu" className="flex items-center gap-1.5 hover:text-white"><Mail className="w-4 h-4"/> Email</a>
                </div>
              </div>
            </div>
          </div>

          {/* Category 5 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100/50 rounded-xl text-emerald-600">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">5. Nigerian Professional Support Networks & Safe Spaces</h2>
            </div>
            <p className="text-zinc-600 mb-6">These organizations provide confidential pathways tailored specifically to the nuances of Nigerian ministry, including isolation, communal trauma, and public image pressure.</p>
            
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  The Neem Foundation
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  While primarily focused on peacebuilding and trauma in the North, they have integrated mental health support that many local clergy in conflict zones (like Borno and Kaduna) rely on to handle secondary PTSD from communal violence.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://neemfoundation.org.ng" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  ACCNIG
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Association of Christian Counsellors of Nigeria. One of the most robust networks in the country offering a specific "E-Counselling" service available daily for anonymous, professional support.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://www.accnigeria.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="tel:+2348033330759" className="flex items-center gap-1.5 hover:text-emerald-800"><Phone className="w-4 h-4"/> +234 803 333 0759</a>
                  <a href="mailto:info@accnigeria.org" className="flex items-center gap-1.5 hover:text-emerald-800"><Mail className="w-4 h-4"/> Email</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  The CICN
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Chartered Institute of Counseling in Nigeria. They have a dedicated "Counseling Intervention for Religious Organizations" track designed to help resident pastors manage the "spiritual-psychological" overlap.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  NAPCOUN
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Nigerian Association of Pastoral Counsellors. Aimed at bridging the gap between theology and clinical psychology, providing long-term mentoring from PhD-level counselors who are also believers.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://napcoun.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="mailto:info@pastoralcounsellors.com" className="flex items-center gap-1.5 hover:text-emerald-800"><Mail className="w-4 h-4"/> Email</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  Hope Restoration and Health Initiative
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  A Nigerian-based residential center that provides mental health support and reintegration for those recovering from severe mental conditions, including clergy.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="https://www.hope-resource.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="tel:+2347015406246" className="flex items-center gap-1.5 hover:text-emerald-800"><Phone className="w-4 h-4"/> +234 701 540 6246</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 flex items-center justify-between">
                  Mental Health Foundation Nigeria
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  This NGO works with religious institutions to integrate mental health education into pastoral training and reduce the stigma of seeking help.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-emerald-600 border-t border-zinc-100 pt-4">
                  <a href="http://www.mentalhealthnigeria.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-800"><Globe className="w-4 h-4"/> Website</a>
                  <a href="tel:+2348033236814" className="flex items-center gap-1.5 hover:text-emerald-800"><Phone className="w-4 h-4"/> +234 803 323 6814</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  The RCCG Mental Health Literacy Program
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Large denominations like the Redeemed Christian Church of God (RCCG) have begun implementing targeted training internally to help pastors manage psychological distress.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  Informal Peer Support Networks
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Informal "pastors' circles" are forming in cities like Lagos and Abuja, where leaders meet in secret—often outside their own denominations—to share the burdens of leadership without fear of judgment.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-zinc-900 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">You don't have to carry this alone.</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            If you need immediate assistance or a closed-door consultation regarding any of these partners, reach out to our team privately.
          </p>
          <Link href="mailto:goremioguru@gmail.com" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-full transition-colors">
            Contact Us Confidentially
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
