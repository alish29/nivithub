import Image from "next/image";
import Countdown from "@/components/Countdown";
import EmailForm from "@/components/EmailForm";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-4">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        {/* Logo */}
        <Image
          src="/nivlogo.png"
          alt="NIVITHUB"
          width={90}
          height={90}
          priority
          className="mb-2 select-none"
        />

        {/* Company Name */}
        <h2 className="text-[34px] font-light tracking-[0.55em] text-white">
          NIVITHUB
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-base text-slate-400">
          Professional IT Solutions
        </p>

        {/* Badge */}
        <div className="mt-5 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.12)]">
          <span className="text-sm font-medium text-cyan-300">
            ✨ Something Amazing Is Coming
          </span>
        </div>

        {/* Heading */}
        <div className="mt-6">
          <h1 className="text-5xl font-black leading-[0.95] text-white md:text-6xl lg:text-[72px]">
            We&apos;re Building
          </h1>

          <h1 className="mt-1 bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-5xl font-black leading-[0.95] text-transparent md:text-6xl lg:text-[72px]">
            The Future
          </h1>
        </div>

        {/* Description */}
        <p className="mt-5 max-w-xl text-[17px] leading-8 text-slate-400">
          NIVITHUB is crafting next-generation software solutions, cloud
          applications and automation tools to help businesses grow faster
          with modern technology.
        </p>

        {/* Countdown */}
        <div className="mt-7">
          <Countdown />
        </div>

        {/* Email Form */}
        <div className="mt-5 w-full max-w-xl">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}