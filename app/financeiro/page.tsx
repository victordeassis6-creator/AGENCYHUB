"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, CreditCard, ArrowUpRight, ArrowDownRight, TrendingUp, Receipt } from "lucide-react"
import { toast } from "sonner"

export default function FinanceiroPage() {
  const tx = [
    { client: "Burger House", amount: "R$ 2.500,00", date: "Hoje", status: "Pago", type: "income" },
    { client: "Sushi Real", amount: "R$ 1.800,00", date: "Ontem", status: "Pago", type: "income" },
    { client: "Facebook Ads", amount: "R$ 500,00", date: "15 Mai", status: "Despesa", type: "expense" },
    { client: "Clínica Odonto", amount: "R$ 3.200,00", date: "10 Mai", status: "Atrasado", type: "income" },
  ]
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Financeiro</h2>
          <p className="text-slate-500 text-sm">Gestão de MRR, cobranças e contratos.</p>
        </div>
        <Button onClick={() => toast.success("Link gerado!")} className="btn-lift bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25 rounded-xl">
          <DollarSign className="w-4 h-4 mr-2" /> Gerar Cobrança
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-3 animate-fade-in-up-delay-1">
        {[
          { label: "Receita Total (Mês)", value: "R$ 24.500", sub: "+15% vs mês passado", subColor: "text-emerald-400", icon: TrendingUp, iconColor: "text-emerald-400", iconBg: "bg-emerald-500/15", bar: "from-emerald-400 to-teal-500" },
          { label: "Inadimplência", value: "R$ 3.200", sub: "1 cliente atrasado", subColor: "text-rose-400", icon: CreditCard, iconColor: "text-rose-400", iconBg: "bg-rose-500/15", bar: "from-rose-400 to-red-500" },
          { label: "Previsão Próximo Mês", value: "R$ 26.000", sub: "Baseado nos contratos ativos", subColor: "text-slate-500", icon: Receipt, iconColor: "text-indigo-400", iconBg: "bg-indigo-500/15", bar: "from-indigo-400 to-purple-500" },
        ].map((c, i) => (
          <Card key={i} className="card-hover glass rounded-2xl border-white/[0.06] overflow-hidden">
            <div className={`h-1 bg-gradient-to-r ${c.bar}`} />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-slate-400">{c.label}</CardTitle>
              <div className={`h-10 w-10 rounded-xl ${c.iconBg} flex items-center justify-center`}><c.icon className={`w-5 h-5 ${c.iconColor}`} /></div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold text-white">{c.value}</div>
              <div className="flex items-center gap-1 mt-2">
                {c.subColor !== "text-slate-500" && <ArrowUpRight className={`w-3.5 h-3.5 ${c.subColor}`} />}
                <span className={`text-xs font-semibold ${c.subColor}`}>{c.sub}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="glass rounded-2xl border-white/[0.06] animate-fade-in-up-delay-2">
        <CardHeader><CardTitle className="text-lg font-bold text-white">Últimas Movimentações</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {tx.map((t, i) => (
            <div key={i} className="flex items-center justify-between p-4 border border-white/[0.06] rounded-2xl hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-all duration-200 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${t.type === 'income' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'}`}>
                  {t.type === 'income' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">{t.client}</p>
                  <p className="text-xs text-slate-500 font-medium">{t.date}</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-4">
                <span className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full ${
                  t.status === 'Pago' ? 'bg-emerald-500/15 text-emerald-400' : t.status === 'Atrasado' ? 'bg-rose-500/15 text-rose-400' : 'bg-white/[0.06] text-slate-400'
                }`}>{t.status}</span>
                <p className={`font-bold text-base ${t.type === 'income' ? 'text-emerald-400' : 'text-slate-300'}`}>{t.amount}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
