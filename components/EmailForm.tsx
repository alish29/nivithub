"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2">
      <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 sm:p-1.5 shadow-[0_10px_35px_rgba(99,102,241,0.06)] focus-within:border-[#818cf8] focus-within:ring-2 focus-within:ring-[#818cf8]/10 transition-all duration-300">
        <div className="flex flex-1 items-center gap-2.5 px-3 sm:px-4">
          <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#818cf8]" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={status === "loading"}
            className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="rounded-full bg-gradient-to-r from-[#6366f1] via-[#5c5ee6] to-[#4f46e5] px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_12px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
        >
          {status === "loading" ? (
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <>
              <span>Notify Me</span>
              <Send className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </>
          )}
        </button>
      </div>

      <div className="px-2">
        {status === "success" ? (
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-500 fill-emerald-500/10" />
            <span>{message}</span>
          </div>
        ) : status === "error" ? (
          <div className="flex items-center gap-1.5 text-xs text-rose-600 font-medium">
            <AlertCircle className="h-3.5 w-3.5 text-rose-500 fill-rose-500/10" />
            <span>{message}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 font-medium">
            <CheckCircle className="h-3.5 w-3.5 text-[#4f46e5] fill-[#4f46e5]/10" />
            <span>No spam. Only updates about our launch.</span>
          </div>
        )}
      </div>
    </form>
  );
}