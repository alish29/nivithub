"use client";

import { Mail } from "lucide-react";

export default function EmailForm() {
  return (
    <form className="w-full max-w-xl">
      <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

        <div className="flex flex-1 items-center gap-3 px-4">
          <Mail className="h-5 w-5 text-cyan-400" />

          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(59,130,246,0.65)]"
        >
          Notify Me
        </button>
      </div>

      <p className="mt-3 text-center text-xs tracking-wide text-slate-500">
        No spam. Only important launch updates.
      </p>
    </form>
  );
}