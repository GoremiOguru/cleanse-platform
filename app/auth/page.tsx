"use client";

import Link from "next/link";
import { ArrowLeft, Loader2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      if (!isLogin) {
        // Register User first if they are in "Sign Up" mode
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to register");
        }
      }

      // Log the User In regardless
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Invalid credentials. Please try again.");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative selection:bg-emerald-100 selection:text-emerald-900">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-emerald-600 font-medium transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block font-bold text-4xl text-emerald-600 tracking-tighter">
            cleanse<span className="text-emerald-300">.</span>
          </Link>
        </div>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-zinc-900 tracking-tight">
          {isLogin ? "Welcome back." : "Begin your journey."}
        </h2>
        <p className="mt-3 text-center text-lg text-zinc-600">
          {isLogin ? "Sign in to access your secure network." : "Create an account to start healing."}
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-xl shadow-emerald-900/5 sm:rounded-3xl sm:px-12 border border-zinc-100">
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-rose-50 text-rose-600 p-4 rounded-xl text-sm font-medium border border-rose-100 text-center">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full bg-white text-zinc-900 px-4 py-3 border border-zinc-200 rounded-xl shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 transition-colors sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full bg-white text-zinc-900 px-4 py-3 border border-zinc-200 rounded-xl shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 transition-colors sm:text-sm pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-emerald-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-700">
                  Confirm Password
                </label>
                <div className="mt-2 relative">
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    required={!isLogin}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full bg-white text-zinc-900 px-4 py-3 border border-zinc-200 rounded-xl shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 transition-colors sm:text-sm pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-emerald-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </div>
            
            <div className="text-center text-sm text-zinc-600 mt-4">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button" 
                onClick={() => { setIsLogin(!isLogin); setError(""); setConfirmPassword(""); }}
                className="font-bold text-emerald-600 hover:text-emerald-500"
              >
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
