"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, CheckCircle2, TrendingUp, ArrowUpRight, Zap } from "lucide-react"
import { toast } from "sonner"

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="animate-fade-in-up rounded-2xl bg-gradient-to-r from-indigo-600/80 via-purple-600/80 to-pink-600/80 p-6 md:p-8 text-white relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwTTAtMTBWNjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-50"></div>
        <div className="relative">
          <p className="text-sm font-medium text-white/70 mb-1">Bem-vindo de volta 👋</p>
          <h2 className="text-2xl md:text-3xl font-bold">Agência Parceira</h2>
          <p className="text-sm text-white/60 mt-2 max-w-md">Você tem <strong className="text-white">5 tarefas pendentes</strong> e <strong className="text-white">2 pagamentos atrasados</strong> para resolver hoje.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up-delay-1">
        <Card className="card-hover glass rounded-2xl border-white/[0.06]">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-400">Clientes Ativos</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-indigo-500/15 flex items-center justify-center">
              <Users className="w-5 h-5 text-indigo-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold text-white">12</div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400">+2 este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover glass rounded-2xl border-white/[0.06]">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-400">Receita Recorrente (MRR)</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold text-white">R$ 24.500</div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400">+15% vs mês passado</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover glass rounded-2xl border-white/[0.06]">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-400">Entregas Pendentes</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold text-white">34</div>
            <p className="text-xs text-slate-500 mt-2 font-medium">Tarefas agendadas para a semana</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Bottom Section */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-7 animate-fade-in-up-delay-2">
        <Card className="col-span-4 glass rounded-2xl border-white/[0.06]">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">Visão Geral de Entregas</CardTitle>
            <CardDescription className="text-slate-500">Acompanhe o % de tarefas cumpridas para cada cliente.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {[
                { name: "Burger House", pct: 92, color: "bg-gradient-to-r from-emerald-400 to-teal-400" },
                { name: "Sushi Real", pct: 78, color: "bg-gradient-to-r from-indigo-400 to-blue-400" },
                { name: "Clínica Odonto", pct: 45, color: "bg-gradient-to-r from-amber-400 to-orange-400" },
              ].map((client, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-slate-300">{client.name}</span>
                    <span className={`font-bold ${client.pct >= 80 ? 'text-emerald-400' : client.pct >= 60 ? 'text-indigo-400' : 'text-amber-400'}`}>{client.pct}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                    <div className={`h-full progress-bar rounded-full ${client.color}`} style={{ width: `${client.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 glass rounded-2xl border-white/[0.06]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-bold text-white">
              <Zap className="w-5 h-5 text-amber-400" />
              Checklist Diário
              <span className="ml-auto flex h-6 w-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white items-center justify-center text-xs font-bold shadow-lg shadow-amber-500/30">5</span>
            </CardTitle>
            <CardDescription className="text-slate-500">Tarefas urgentes para a equipe hoje.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: "Aprovar roteiro de Reels", client: "Burger House" },
                { title: "Criar 3 artes para Feed", client: "Sushi Real" },
                { title: "Responder comentários", client: "Clínica Odonto" }
              ].map((task, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-200 group">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 shrink-0 group-hover:scale-125 transition-transform" />
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-slate-200 leading-none">{task.title}</p>
                      <p className="text-xs text-slate-500">{task.client}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="btn-lift h-8 text-xs font-semibold border-indigo-500/30 text-indigo-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 rounded-lg w-full sm:w-auto bg-transparent"
                    onClick={() => toast.success(`"${task.title}" concluída! ✅`)}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Concluir
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
