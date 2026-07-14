export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">LoadRight</h1>

        <p className="mt-4 text-xl text-slate-400">
          Professional Weight & Balance Calculator
        </p>

        <p className="mt-2 text-slate-500">
          Version 0.1 Alpha
        </p>

        <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-500 transition">
          Launch Calculator
        </button>
      </div>
    </main>
  );
}