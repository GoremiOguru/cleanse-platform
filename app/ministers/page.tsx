import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeartHandshake, BookOpen, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { MinisterQuestionnaire } from "@/components/MinisterQuestionnaire";

export default function MinistersPage() {
  return (
    <main className="min-h-screen bg-zinc-50 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-sm mb-6 border border-emerald-100">
            <HeartHandshake className="w-4 h-4" />
            For Christian Leaders & Ministers
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
            Even leaders need <span className="text-emerald-600 drop-shadow-sm">grace.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Leading a flock is a heavy burden. Whether you are seeking confidential support for your own struggles or need resources to safely guide a congregant, we are here for you.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-emerald-950 text-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Hidden Contradiction</h2>
            <p className="text-lg text-emerald-100/80">
              There is a crucial gap between public image and private reality. Many pastors teach peace, discipline, and faith while privately carrying an immense burden. These statistics reveal uncomfortable facts that are rarely openly discussed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mental Health */}
            <div className="bg-emerald-900/50 p-8 rounded-3xl border border-emerald-800/50 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">🧠 Mental Health</h3>
              <ul className="space-y-3 text-emerald-100/90 text-sm mb-6 flex-grow">
                <li>• <strong><AnimatedNumber value={63} />%</strong> of pastors report feeling frequently overwhelmed by ministry demands.<sup className="text-emerald-400 ml-1">[2]</sup></li>
                <li>• While most rate their mental health highly, <strong><AnimatedNumber value={24} />%</strong> of U.S. pastors report having personally struggled with mental illness.<sup className="text-emerald-400 ml-1">[2]</sup></li>
                <li>• <strong>Over <AnimatedNumber value={60} />%</strong> say they frequently feel lonely or isolated.<sup className="text-emerald-400 ml-1">[1]</sup></li>
              </ul>
              <div className="text-emerald-300 text-sm font-medium pt-4 border-t border-emerald-800/80">
                Translation: While catastrophic burnout isn't the overarching norm, a vast majority struggle with immense, silent stress and isolation.
              </div>
            </div>

            {/* Marriage & Relationships */}
            <div className="bg-emerald-900/50 p-8 rounded-3xl border border-emerald-800/50 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">💔 Private Life</h3>
              <ul className="space-y-3 text-emerald-100/90 text-sm mb-6 flex-grow">
                <li>• Contrary to popular myth, <strong>over <AnimatedNumber value={85} />%</strong> of pastors report high marital satisfaction.<sup className="text-emerald-400 ml-1">[1]</sup></li>
                <li>• However, a vast majority state that the 24/7 demands of ministry create significant strain on family time.<sup className="text-emerald-400 ml-1">[2]</sup></li>
                <li>• Pastors' divorce rates are comparable to or <strong>lower</strong> than the general population.<sup className="text-emerald-400 ml-1">[1]</sup></li>
              </ul>
              <div className="text-emerald-300 text-sm font-medium pt-4 border-t border-emerald-800/80">
                The narrative of completely broken pastor marriages is largely a myth—but the immense pressure placed on pastor families is a stark reality.
              </div>
            </div>

            {/* Stress & Workload */}
            <div className="bg-emerald-900/50 p-8 rounded-3xl border border-emerald-800/50 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">😓 Stress & Workload</h3>
              <ul className="space-y-3 text-emerald-100/90 text-sm mb-6 flex-grow">
                <li>• Research shows pastors average <strong><AnimatedNumber value={50} />–<AnimatedNumber value={60} /></strong> work hours per week.<sup className="text-emerald-400 ml-1">[2]</sup></li>
                <li>• <strong><AnimatedNumber value={84} />%</strong> say they feel they are "on call 24 hours a day."<sup className="text-emerald-400 ml-1">[2]</sup></li>
                <li>• <strong><AnimatedNumber value={54} />%</strong> find the role of pastor to be frequently overwhelming.<sup className="text-emerald-400 ml-1">[2]</sup></li>
              </ul>
              <div className="text-emerald-300 text-sm font-medium pt-4 border-t border-emerald-800/80">
                It’s closer to running a company + being a therapist + being a spiritual leader simultaneously.
              </div>
            </div>

            {/* Quitting & Isolation */}
            <div className="bg-emerald-900/50 p-8 rounded-3xl border border-emerald-800/50 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">🚪 Isolation</h3>
              <ul className="space-y-3 text-emerald-100/90 text-sm mb-6 flex-grow">
                <li>• <strong><AnimatedNumber value={38} />–<AnimatedNumber value={57} />%</strong> have seriously considered quitting; yet only <strong>~<AnimatedNumber value={1} />%</strong> leave per year.<sup className="text-emerald-400 ml-1">[1][2]</sup></li>
                <li>• <strong>~<AnimatedNumber value={70} />%</strong> have no close friends.<sup className="text-emerald-400 ml-1">[3]</sup></li>
                <li>• <strong>Over <AnimatedNumber value={40} />%</strong> say they have no one they can confide in.</li>
              </ul>
              <div className="text-emerald-300 text-sm font-medium pt-4 border-t border-emerald-800/80">
                Many feel trapped. Imagine carrying everyone else’s problems, with no one to talk to about yours.
              </div>
            </div>

            {/* Pornography & Moral Struggles */}
            <div className="bg-emerald-900/50 p-8 rounded-3xl border border-emerald-800/50 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">🚫 Pornography & Moral Struggles</h3>
              <ul className="space-y-3 text-emerald-100/90 text-sm mb-6 flex-grow">
                <li>• <strong><AnimatedNumber value={57} />%</strong> of pastors report currently struggling with pornography use.<sup className="text-emerald-400 ml-1">[4]</sup></li>
                <li>• <strong><AnimatedNumber value={14} />%</strong> to <strong><AnimatedNumber value={21} />%</strong> state they currently view pornography on a regular basis.<sup className="text-emerald-400 ml-1">[4]</sup></li>
                <li>• Despite high struggle rates, only <strong><AnimatedNumber value={7} />%</strong> of pastors have a program in their church to help those struggling with porn addiction.</li>
              </ul>
              <div className="text-emerald-300 text-sm font-medium pt-4 border-t border-emerald-800/80">
                A silent epidemic. The stigma of leadership prevents many from seeking the critical help they need.
              </div>
            </div>

            {/* Imposter Syndrome */}
            <div className="bg-emerald-900/50 p-8 rounded-3xl border border-emerald-800/50 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">🎭 Imposter Syndrome</h3>
              <ul className="space-y-3 text-emerald-100/90 text-sm mb-6 flex-grow">
                <li>• Almost <strong>¼ of female pastors</strong> and <strong><AnimatedNumber value={11} />% of male pastors</strong> report persistent inadequacy issues regarding their calling.<sup className="text-emerald-400 ml-1">[1]</sup></li>
                <li>• Psychologists term this the "Glass House Effect," where immense moral expectations force pastors to project perfection while hiding deep insecurities.</li>
                <li>• The gap between outward performance and genuine internal struggle heavily triggers the "imposter monkey" in many spiritual leaders.</li>
              </ul>
              <div className="text-emerald-300 text-sm font-medium pt-4 border-t border-emerald-800/80">
                The relentless pressure to appear holy leaves many terrified of being exposed as "frauds" in their own pulpit.
              </div>
            </div>
          </div>

          {/* Sources Section */}
          <div className="mt-12 text-center border-t border-emerald-800/50 pt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Sources & Further Research</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="https://www.barna.com/research/pastors-quitting-ministry/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                [1] Barna Group: The State of Pastors
              </a>
              <span className="text-emerald-800/50">•</span>
              <a href="https://research.lifeway.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                [2] Lifeway Research: Pastoral Stress & Attrition
              </a>
              <span className="text-emerald-800/50">•</span>
              <a href="https://m1psychology.com/pastor-burnout-statistics/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                [3] Schaeffer Institute & Clergy Burnout
              </a>
              <span className="text-emerald-800/50">•</span>
              <a href="https://www.covenanteyes.com/porn-stats/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                [4] Covenant Eyes & Barna: The Porn Phenomenon
              </a>
            </div>
            <p className="text-emerald-100/50 text-xs mt-6 max-w-4xl mx-auto leading-relaxed">
              *Note: Historically circulated statistics painted a dire picture of mass pastoral burnout and high divorce rates over 70%. However, recent rigorous longitudinal data from Barna, Lifeway Research, and Duke’s Clergy Health Initiative clarify that catastrophic failure isn't the norm. Instead, the reality is a heavy chronic burden: pastors remain faithful and their marriages are often strong, yet they silently navigate profound, persistent demands, isolation, and an overwhelming 24/7 workload.
            </p>
          </div>
        </div>
      </section>

      <MinisterQuestionnaire />

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          
          {/* Personal Support */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Confidential Recovery</h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              We understand the delicate nature of public ministry. Burnout, stress, and isolation can lead to dependencies. You can find completely anonymous, highly discreet therapeutic recovery centers that honor your faith.
            </p>
            <ul className="space-y-4 mb-8 text-zinc-700 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Private trauma-informed counseling
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Faith-based therapeutic interventions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Non-judgmental peer support networks
              </li>
            </ul>
            <Link href="/private-help" className="inline-block bg-emerald-600 text-white font-semibold flex items-center justify-center py-3 px-6 rounded-full w-full hover:bg-emerald-700 transition shadow-sm">
              Find Private Help
            </Link>
          </div>

          {/* Guiding Others */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Guiding Your Congregation</h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              When a church member confesses a struggle with pornography, alcoholism, or drug addiction, the right response is critical. Access our evidence-based, compassionate resources.
            </p>
            <ul className="space-y-4 mb-8 text-zinc-700 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Christ Against Drug Abuse Ministry (CADAM)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Pornography addiction recovery tools
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Emergency referral pathways & crisis numbers
              </li>
            </ul>
            <Link href="/#resources" className="inline-block bg-zinc-100 text-zinc-700 font-semibold flex items-center justify-center py-3 px-6 rounded-full w-full hover:bg-zinc-200 transition">
              View Ministry Resources
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
