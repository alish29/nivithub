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

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-4 backdrop-blur-xl">
        <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
        <p className="text-sm text-cyan-300">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-3">
      <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
        <div className="flex flex-1 items-center gap-3 px-4">
          <Mail className="h-5 w-5 text-cyan-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            required
            disabled={status === "loading"}
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 outline-none disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(59,130,246,0.65)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {status === "loading" ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          Notify Me
        </button>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 px-1">
          <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
          <p className="text-xs text-red-400">{message}</p>
        </div>
      )}

      <p className="text-center text-xs tracking-wide text-slate-500">
        No spam. Only important launch updates.
      </p>
    </form>
  );
}