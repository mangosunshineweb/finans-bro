import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 lg:px-10">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-lg font-semibold text-emerald-400 ring-1 ring-emerald-500/30">
              F
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Finance AI</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#insights" className="transition hover:text-white">Insights</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
          </nav>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
          >
            Open dashboard
          </Link>
        </header>

        <section className="grid items-center gap-12 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
              Financial intelligence
            </div>

            <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
              See your money clearly.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A financial cockpit for budgets, cash flow, savings, and investments — with AI insights that explain what is happening and what to do next.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Get started
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
              >
                Log in
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-emerald-950/40 ring-1 ring-white/5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Net worth</p>
                <p className="mt-2 text-3xl font-semibold text-white">243,820 kr.</p>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
                +4.2%
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-800 p-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Income</span>
                  <span>31,500 kr.</span>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Expenses</span>
                  <span>18,240 kr.</span>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Savings</span>
                  <span>13,260 kr.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-6 pb-20 md:grid-cols-3">
          {[
            { title: "Budget health", text: "Track spend by category and see how your cash flow shifts month by month." },
            { title: "AI explanations", text: "Understand changes in your spending, savings, and investment results in plain English." },
            { title: "Investment clarity", text: "Review diversification, concentration, and a clean overview of portfolio exposure." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-4 h-10 w-10 rounded-xl bg-emerald-500/12 text-center text-lg leading-10 text-emerald-300">
                ✓
              </div>
              <h2 className="mb-2 text-xl font-semibold text-white">{feature.title}</h2>
              <p className="text-slate-300">{feature.text}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
