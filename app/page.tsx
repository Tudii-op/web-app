export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-black font-sans text-white">
      
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6 px-10 py-12 rounded-3xl 
                      bg-zinc-900/70 backdrop-blur-xl 
                      border border-cyan-500/30 
                      shadow-[0_0_40px_rgba(0,255,255,0.15)]">
        <button className="mt-4 px-6 py-3 rounded-xl 
                           bg-cyan-500 text-black font-semibold
                           hover:bg-cyan-400 
                           active:scale-95 transition-all duration-200
                           shadow-[0_0_20px_rgba(0,255,255,0.5)]">
          Install
        </button>
      </div>
    </div>
  );
}