import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-8 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 items-center sm:items-start text-center sm:text-left bg-white dark:bg-slate-800 p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
          SWAP
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
          Swap Smart. Save Money. Save Earth.
        </p>
        <p className="text-slate-500 dark:text-slate-400">
          The Phase 1 foundation is set. Next up: Building the authentication and user profiles with a premium, Apple-inspired design.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-12 px-8 shadow-md hover:shadow-lg font-medium"
            href="/login"
          >
            Sign In
          </Link>
          <Link
            className="rounded-full border border-solid border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center bg-white dark:bg-slate-800 text-slate-900 dark:text-white gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-sm sm:text-base h-12 px-8 shadow-sm font-medium"
            href="/register"
          >
            Create Account
          </Link>
        </div>
      </main>
    </div>
  );
}
