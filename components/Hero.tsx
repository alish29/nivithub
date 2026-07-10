import Image from "next/image";
import Countdown from "@/components/Countdown";
import EmailForm from "@/components/EmailForm";

export default function Hero() {
  return (
    <section className="relative z-10 flex h-full items-center justify-center px-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        {/* Logo */}
        <Image
          src="/nivlogo.png"
          alt="NIVITHUB"
          width={64}
          height={64}
          priority
          className="mb-1.5 select-none"
        />

        {/* Company Name */}
        <h2 className="text-xl sm:text-2xl font-light tracking-[0.55em] text-white">
          NIVITHUB
        </h2>

        {/* Subtitle */}
        <p className="mt-1 text-xs sm:text-sm text-slate-400">
          Professional IT Solutions
        </p>

        {/* Badge */}
        <div className="mt-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.12)]">
          <span className="text-xs font-medium text-cyan-300">
            ✨ Something Amazing Is Coming
          </span>
        </div>

        {/* Heading */}
        <div className="mt-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[0.95] text-white">
            We&apos;re Building
          </h1>

          <h1 className="mt-1 bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-black leading-[0.95] text-transparent">
            The Future
          </h1>
        </div>

        {/* Description */}
        <p className="mt-3 max-w-lg text-xs sm:text-sm leading-6 text-slate-400">
          NIVITHUB is crafting next-generation software solutions, cloud
          applications and automation tools to help businesses grow faster
          with modern technology.
        </p>

        {/* Countdown */}
        <div className="mt-4">
          <Countdown />
        </div>

        {/* Email Form */}
        <div className="mt-4 w-full max-w-lg">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}