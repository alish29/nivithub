export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#f9fafc] via-[#f4f6fe] to-[#ebeeff]">
      {/* Soft purple/lilac ambient blurs */}
      <div className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#e5e4ff] opacity-70 blur-[130px] pointer-events-none" />
      <div className="absolute left-[5%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#ede6ff] opacity-80 blur-[110px] pointer-events-none" />
      <div className="absolute right-[15%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-[#e0ddff] opacity-65 blur-[100px] pointer-events-none" />

      {/* Top center dot pattern matching the mockup */}
      <div 
        className="absolute left-[50%] md:left-[52%] top-[14%] h-[60px] w-[100px] opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6366f1 2px, transparent 2px)",
          backgroundSize: "14px 14px"
        }}
      />
    </div>
  );
}