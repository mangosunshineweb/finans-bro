import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { ArrowUpRight, PiggyBank, TrendingUp, Wallet } from "lucide-react";

const spending = [
  { label: "Housing", value: 8200 },
  { label: "Food", value: 3120 },
  { label: "Transport", value: 1840 },
  { label: "Entertainment", value: 1220 },
  { label: "Other", value: 3860 },
];

const maxSpending = Math.max(...spending.map((item) => item.value));

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900 md:p-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-emerald-300">Good morning</p>
            <h1 className="mt-2 text-3xl font-semibold">Casper</h1>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
              C
            </span>
            Casper Jensen
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Net worth</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-3xl font-semibold">243,820 kr.</p>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <ArrowUpRight className="h-4 w-4" />
                4.2% this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Income</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-3xl font-semibold">31,500 kr.</p>
              <p className="text-sm text-slate-500">Monthly salary</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-3xl font-semibold">18,240 kr.</p>
              <p className="text-sm text-slate-500">This month</p>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <CardHeader>
              <CardTitle>Spending</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {spending.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="text-slate-500">{item.value.toLocaleString("da-DK")} kr.</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                      style={{ width: `${(item.value / maxSpending) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Savings rate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-3xl font-semibold text-slate-900">
                  <PiggyBank className="h-7 w-7 text-emerald-600" />
                  42%
                </div>
                <p className="text-sm text-slate-500">You are saving 13,260 kr. this month.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI insight</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-700">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">Spending is 8% below average.</span>
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  Your spending has eased thanks to lower transport and restaurant costs compared with the last three-month average.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Bank accounts", value: "4", icon: Wallet },
            { title: "Budget health", value: "On track", icon: PiggyBank },
            { title: "Investments", value: "240,330 kr.", icon: TrendingUp },
          ].map(({ title, value, icon: Icon }) => (
            <Card key={title}>
              <CardContent className="flex items-center justify-between gap-4 py-5">
                <div>
                  <p className="text-sm text-slate-500">{title}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">{value}</p>
                </div>
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
