"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  BarChart3, Users, Calendar, CheckSquare, 
  ArrowUpRight, TrendingUp, Clock, AlertCircle,
  Camera, Scissors, Eye, CheckCircle2, ChevronRight,
  Zap, Star
} from "lucide-react"

export default function Dashboard() {
  const stats = [
    { label: "Clientes Ativos", value: "12", icon: Users, trend: "+2 este mês", color: "text-indigo-400" },
    { label: "MRR (Recorrência)", value: "R$ 42.500", icon: BarChart3, trend: "+15%", color: "text-emerald-400" },
    { label: "Tarefas Hoje", value: "24", icon: CheckSquare, trend: "85% concluído", color: "text-purple-400" },
    { label: "Conteúdos Postados", value: "156", icon: TrendingUp, trend: "+32% vs fev", color: "text-orange-400" },
  ]

  const pipelineStages = [
    { label: "Roteiro (IA)", count: 8, icon: Zap, color: "text-amber-400", bg: "bg-amber-400/10" },
    { label: "Gravação", count: 5, icon: Camera, color: "text-indigo-400", bg: "bg-indigo-400/10" },
    { label: "Em Edição", count: 12, icon: Scissors, color: "text-purple-400", bg: "bg-purple-400/10" },
    { label: "Aprovação", count: 4, icon: Eye, color: "text-pink-400", bg: "bg-pink-400/10" },
    { label: "Finalizado", count: 32, icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  ]

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="card-hover glass border-white/[0.06] rounded-2xl overflow-hidden group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <stat.icon className={`h-5 w-5 ${stat.color} group-hover:scale-110 transition-transform`} />
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-black italic tracking-tighter text-white">{stat.value}</h3>
                <span className="text-[10px] font-bold text-emerald-400 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> {stat.trend}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 🔄 ESTEIRA DE PRODUÇÃO (NOVO) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
           <h2 className="text-xl font-black italic text-white tracking-tight flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" /> Fluxo da Esteira
           </h2>
           <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-500 font-bold uppercase tracking-widest">Tempo médio de ciclo: 3 dias</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           {pipelineStages.map((stage, i) => (
             <Card key={i} className="glass border-white/[0.06] rounded-2xl p-4 overflow-hidden relative group cursor-pointer hover:border-white/20 transition-all">
                <div className={`absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-white/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10 flex flex-col items-center text-center">
                   <div className={`h-12 w-12 rounded-xl ${stage.bg} flex items-center justify-center mb-3`}>
                      <stage.icon className={`h-6 w-6 ${stage.color}`} />
                   </div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{stage.label}</p>
                   <p className="text-2xl font-black text-white italic">{stage.count}</p>
                </div>
                {i < pipelineStages.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 h-6 w-6 text-white/5" />
                )}
             </Card>
           ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        {/* Main Content Areas */}
        <Card className="md:col-span-4 glass border-white/[0.06] rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="text-lg font-bold text-white italic tracking-tight">Atividades Críticas</CardTitle>
              <CardDescription className="text-slate-500 font-medium">O que exige sua atenção imediata.</CardDescription>
            </div>
            <AlertCircle className="h-5 w-5 text-amber-500 animate-pulse" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { client: "Burger House", task: "Roteiro Pendente", time: "Há 2 horas", color: "bg-amber-500" },
              { client: "Sushi Real", task: "Feedback da Edição", time: "Há 4 horas", color: "bg-rose-500" },
              { client: "Clínica Odonto", task: "Visit Agendada", time: "Hoje, 14:00", color: "bg-indigo-500" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.05] transition-colors group cursor-pointer">
                <div className={`h-2 w-2 rounded-full ${activity.color} shadow-lg ${activity.color.replace('bg-', 'shadow-')}`} />
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">{activity.client}</p>
                  <p className="text-xs text-slate-500">{activity.task}</p>
                </div>
                <span className="text-[10px] font-bold text-slate-600 uppercase italic">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Secondary Info */}
        <div className="md:col-span-3 space-y-6">
          <Card className="glass border-indigo-500/20 rounded-3xl bg-indigo-500/5 relative overflow-hidden group">
            <div className="absolute top-[-30%] right-[-10%] w-[70%] h-[70%] bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-colors" />
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2"><Zap className="w-5 h-5 text-indigo-400" /> Master Insight</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Sua agência produziu <strong className="text-white">12% mais conteúdo</strong> que o planejado para Março. O engajamento médio subiu <strong className="text-emerald-400">8.4%</strong>.
              </p>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
                 <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                 <span className="text-xs font-bold text-slate-200">Melhor Cliente: Burger House</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-white/[0.06] rounded-3xl p-6">
            <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Agenda da Semana</h4>
            <div className="flex gap-3 justify-between">
              {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((day, i) => (
                <div key={i} className={`h-10 w-9 rounded-xl flex items-center justify-center text-[10px] font-bold ${i === 4 ? 'bg-indigo-500 text-white shadow-lg' : 'bg-white/5 text-slate-500'}`}>
                  {day}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
