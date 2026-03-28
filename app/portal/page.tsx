"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Calendar, FileText, CheckCircle2, Crown, Download } from "lucide-react"

export default function PortalDashboard() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center -m-4 md:-m-6 lg:-m-8">
      <div className="w-full bg-gradient-to-r from-indigo-600/80 via-purple-600/80 to-pink-600/80 p-6 md:p-8 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwTTAtMTBWNjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-5xl mx-auto flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center font-bold text-white text-xl border border-white/30 shadow-lg">BH</div>
            <div className="text-white"><h1 className="font-bold text-2xl">Burger House</h1><p className="text-sm text-white/60">Portal do Cliente • AgencyHub</p></div>
          </div>
          <div className="px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold flex items-center gap-2 border border-white/20"><Crown className="w-4 h-4" /> Plano VIP</div>
        </div>
      </div>
      <main className="w-full max-w-5xl p-6 space-y-6 mt-2">
        <div className="grid gap-5 md:grid-cols-3 animate-fade-in-up">
          <Card className="card-hover glass rounded-2xl border-white/[0.06] overflow-hidden"><div className="h-1 bg-gradient-to-r from-indigo-400 to-blue-500" /><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Entregas do Mês</CardTitle></CardHeader><CardContent><div className="text-3xl font-extrabold text-white">24 / 30</div><p className="text-xs text-slate-500 mt-1">Posts produzidos.</p><div className="h-2.5 w-full bg-white/[0.06] mt-3 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full progress-bar" style={{ width: '80%' }}></div></div></CardContent></Card>
          <Card className="card-hover glass rounded-2xl border-white/[0.06] overflow-hidden"><div className="h-1 bg-gradient-to-r from-emerald-400 to-teal-500" /><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2"><BarChart className="w-4 h-4 text-emerald-400" /> Alcance</CardTitle></CardHeader><CardContent><div className="text-3xl font-extrabold text-white">+45%</div><span className="text-xs font-semibold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full mt-1 inline-block">↑ Maior engajamento</span></CardContent></Card>
          <Card className="card-hover glass rounded-2xl border-white/[0.06] overflow-hidden"><div className="h-1 bg-gradient-to-r from-violet-400 to-purple-500" /><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-400 flex items-center gap-2"><FileText className="w-4 h-4 text-violet-400" /> Faturas</CardTitle></CardHeader><CardContent><div className="text-xl font-extrabold text-emerald-400 mb-1">Em dia ✅</div><p className="text-xs text-slate-500">Vence: 10/06</p><Button variant="outline" size="sm" className="btn-scale mt-3 text-xs border-violet-500/30 text-violet-400 hover:bg-violet-500/10 rounded-lg bg-transparent"><Download className="w-3 h-3 mr-1" /> Ver Faturas</Button></CardContent></Card>
        </div>
        <Card className="glass rounded-2xl border-white/[0.06] animate-fade-in-up-delay-1">
          <CardHeader><CardTitle className="flex items-center gap-2 text-lg font-bold text-white"><Calendar className="w-5 h-5 text-indigo-400" /> Próximos Conteúdos</CardTitle><CardDescription className="text-slate-500">O que a agência planejou.</CardDescription></CardHeader>
          <CardContent className="space-y-3">
            {[
              { emoji: "🍔", title: "Post: Novo Hambúrguer", time: "Sexta, 18:00 • Feed", status: "Aguardando", sClass: "bg-amber-500/15 text-amber-400" },
              { emoji: "🎬", title: "Reels: Dia de Produção", time: "Domingo, 12:00 • Reels", status: "Aprovado", sClass: "bg-emerald-500/15 text-emerald-400" },
              { emoji: "📸", title: "Carrossel: 5 Motivos Delivery", time: "Segunda, 10:00 • Feed", status: "Em Produção", sClass: "bg-indigo-500/15 text-indigo-400" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-white/[0.06] rounded-2xl hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-all cursor-pointer group">
                <div className="h-14 w-14 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-2xl">{c.emoji}</div>
                <div className="flex-1"><h4 className="font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">{c.title}</h4><p className="text-sm text-slate-500 mt-0.5">{c.time}</p></div>
                <span className={`px-3 py-1.5 text-[10px] font-bold rounded-full uppercase tracking-wider ${c.sClass}`}>{c.status}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
