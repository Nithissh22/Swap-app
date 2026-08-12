import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans">
      {/* Calm, soft ambient background shapes */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-lighten animate-blob" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000" />
      <div className="absolute top-[20%] left-[60%] w-[40%] h-[40%] rounded-full bg-teal-50/50 dark:bg-teal-900/10 blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md p-6 sm:p-10">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/50 dark:border-slate-800/50 rounded-3xl p-8 transition-all duration-300">
          {children}
        </div>
      </div>
    </div>
  );
}
