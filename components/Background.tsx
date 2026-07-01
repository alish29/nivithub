export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#040816]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-[35%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[140px]" />

      {/* Left Glow */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-500/15 blur-[150px]" />

      {/* Right Glow */}
      <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Ring 1 */}
      <div className="absolute left-1/2 top-[35%] h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      {/* Ring 2 */}
      <div className="absolute left-1/2 top-[35%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

      {/* Small Glow */}
      <div className="absolute left-1/2 top-[35%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-[#040816] to-transparent" />
    </div>
  );
}