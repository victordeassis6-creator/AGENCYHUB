"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  BarChart3, Users, CheckSquare, 
  ArrowUpRight, TrendingUp, AlertCircle,
  Camera, Scissors, Eye, CheckCircle2, ChevronRight,
  Zap, Star
} from "lucide-react"

export default function Dashboard() {
  const stats = [
    { label: "Clientes Ativos", value: "12", icon: Users, trend: "+2", color: "text-violet-400" },
    { label: "Faturamento Mensal", value: "R$ 42.500", icon: BarChart3, trend: "+15%", color: "text-pink-400" },
    { label: "Tarefas Hoje", value: "24", icon: CheckSquare, trend: "85%", color: "text-violet-400" },
    { label: "Posts Março", value: "156", icon: TrendingUp, trend: "+32%", color: "text-pink-400" },
  ]

  const pipelineStages = [
    { label: "Roteiro (IA)", count: 8, icon: Zap, color: "text-amber-400" },
    { label: "Gravação", count: 5, icon: Camera, color: "text-indigo-400" },
    { label: "Edição", count: 12, icon: Scissors, color: "text-purple-400" },
    { label: "Aprovação", count: 4, icon: Eye, color: "text-pink-400" },
    { label: "Finalizado", count: 32, icon: CheckCircle2, color: "text-emerald-400" },
  ]

  return (
    <div className="p-8 lg:p-12 space-y-12 animate-fade-in-up">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-white mb-2 italic">Bom dia, Parceiro.</h1>
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest opacity-80">Sua agência está operando a 94% da capacidade total.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md">
           <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
           Sistemas Operacionais
        </div>
      </div>

      {/* Stats Grid - High Transparency v3.1 */}
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="group relative overflow-hidden p-8 rounded-[2.5rem] glass hover:bg-white/[0.05] transition-all duration-500 glow-indigo">
             <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 opacity-60">{stat.label}</span>
                <stat.icon className={`h-4 w-4 ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
             </div>
             <div className="flex items-end gap-3">
                <h3 className="text-4xl font-black text-white italic tracking-tighter">{stat.value}</h3>
                <span className="text-[10px] font-bold text-emerald-400 mb-1.5">{stat.trend}</span>
             </div>
             <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
          </div>
        ))}
      </div>

      {/* 🔄 ESTEIRA FLOW - Luminous v3.1 */}
      <div className="space-y-6">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8 ml-1">Fluxo da Esteira de Produção</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
           {pipelineStages.map((stage, i) => (
             <div key={i} className="flex-1 flex items-center group">
                <div className="flex-1 glass rounded-3xl p-6 text-center hover:bg-white/[0.06] transition-all cursor-pointer group-hover:scale-[1.02] duration-300">
                   <div className="h-10 w-10 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all">
                      <stage.icon className={`h-5 w-5 ${stage.color} opacity-70 group-hover:opacity-100`} />
                   </div>
                   <div className="text-3xl font-black text-white leading-none mb-1 tracking-tighter italic">{stage.count}</div>
                   <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{stage.label}</div>
                </div>
                {i < pipelineStages.length - 1 && (
                   <div className="hidden md:flex flex-col items-center px-2 opacity-20">
                      <ChevronRight className="w-4 h-4 text-white" />
                   </div>
                )}
             </div>
           ))}
        </div>
      </div>

      {/* Main Grid: Critical & Insights */}
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-8 space-y-6">
           <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-3 italic">
                 <div className="h-1 w-8 bg-indigo-500 rounded-full" /> Atividades Críticas
              </h3>
              <button className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl">Ver Todas</button>
           </div>
           
           <div className="space-y-4">
             {[
               { client: "Burger House", task: "Aprovação Pendente (3 Criativos)", time: "2h", urgent: true },
               { client: "Sushi Real", task: "Roteiro Pronto para Gravação", time: "4h", urgent: false },
             ].map((activity, i) => (
               <div key={i} className="flex items-center justify-between p-8 rounded-[2rem] glass hover:bg-white/[0.05] transition-all cursor-pointer group">
                  <div className="flex items-center gap-8">
                     <div className={`h-3 w-3 rounded-full ${activity.urgent ? "bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] animate-pulse" : "bg-slate-700"}`} />
                     <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{activity.client}</p>
                        <p className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">{activity.task}</p>
                     </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-500 italic opacity-50 group-hover:opacity-100">{activity.time}</span>
               </div>
             ))}
           </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="p-10 rounded-[3rem] bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 text-white relative overflow-hidden group shadow-2xl shadow-purple-500/30">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-6">Master Insight</p>
              <h4 className="text-2xl font-black italic leading-tight mb-8 tracking-tighter">Sua produção cresceu 12% nesta semana.</h4>
              <button className="w-full py-4 bg-white text-purple-700 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[0.98] transition-all shadow-xl">Analisar Estratégia</button>
           </div>

           <div className="p-8 rounded-[2.5rem] glass space-y-8">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                 <Star className="w-3.5 h-3.5 text-amber-500" /> Performance Média
              </h4>
              <div className="space-y-6">
                 {[
                   { label: "Taxa de Entrega", val: "94%", color: "bg-emerald-500" },
                   { label: "Crescimento IG", val: "72%", color: "bg-indigo-400" },
                 ].map((bar, i) => (
                   <div key={i} className="space-y-3">
                      <div className="flex justify-between text-[11px] font-bold text-slate-300"><span>{bar.label}</span> <span className="text-white">{bar.val}</span></div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className={`h-full ${bar.color} w-[${bar.val}] shadow-[0_0_10px_rgba(99,102,241,0.3)]`} style={{ width: bar.val }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
