"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  BarChart3, Users, CheckSquare, 
  ArrowUpRight, TrendingUp, Clock, AlertCircle,
  Camera, Scissors, Eye, CheckCircle2, ChevronRight,
  Zap, Star, Play
} from "lucide-react"

export default function Dashboard() {
  const stats = [
    { label: "Clientes Ativos", value: "12", icon: Users, trend: "+2", color: "text-white" },
    { label: "MRR", value: "R$ 42.500", icon: BarChart3, trend: "+15%", color: "text-white" },
    { label: "Tarefas Hoje", value: "24", icon: CheckSquare, trend: "85%", color: "text-white" },
    { label: "Posts Março", value: "156", icon: TrendingUp, trend: "+32%", color: "text-white" },
  ]

  const pipelineStages = [
    { label: "Roteiro (IA)", count: 8, icon: Zap, color: "text-amber-500" },
    { label: "Gravação", count: 5, icon: Camera, color: "text-indigo-500" },
    { label: "Edição", count: 12, icon: Scissors, color: "text-purple-500" },
    { label: "Aprovação", count: 4, icon: Eye, color: "text-pink-500" },
    { label: "Finalizado", count: 32, icon: CheckCircle2, color: "text-emerald-500" },
  ]

  return (
    <div className="p-8 lg:p-12 space-y-12 animate-fade-in-up">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white mb-2">Bom dia, Parceiro.</h1>
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest">Sua agência está operando a 94% da capacidade total.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-white/5 border border-white/5 px-4 py-2 rounded-xl">
           <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
           Sistemas Operacionais
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="group relative overflow-hidden p-8 rounded-3xl bg-[#111113] border border-[#1e1e20] hover:border-slate-700 transition-all duration-300">
             <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</span>
                <stat.icon className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors" />
             </div>
             <div className="flex items-end gap-3">
                <h3 className="text-3xl font-black text-white italic">{stat.value}</h3>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-md mb-1.5">{stat.trend}</span>
             </div>
          </div>
        ))}
      </div>

      {/* 🔄 ESTEIRA FLOW (Simplified 3.0) */}
      <div className="space-y-6">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 mb-8">Fluxo da Esteira de Produção</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
           {pipelineStages.map((stage, i) => (
             <div key={i} className="flex-1 flex items-center group">
                <div className="flex-1 bg-[#111113] border border-[#1e1e20] rounded-2xl p-6 text-center hover:bg-white/[0.02] transition-all cursor-pointer">
                   <stage.icon className={`h-5 w-5 mx-auto mb-3 ${stage.color} opacity-80 group-hover:opacity-100`} />
                   <div className="text-2xl font-black text-white leading-none mb-1">{stage.count}</div>
                   <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{stage.label}</div>
                </div>
                {i < pipelineStages.length - 1 && (
                   <div className="hidden md:flex flex-col items-center px-2 opacity-10">
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
           <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                 <AlertCircle className="w-4 h-4 text-amber-500" /> Atividades Críticas
              </h3>
              <button className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Ver Todas</button>
           </div>
           
           <div className="space-y-3">
             {[
               { client: "Burger House", task: "Aprovação Pendente (3 Criativos)", time: "2h", urgent: true },
               { client: "Sushi Real", task: "Roteiro Pronto para Gravação", time: "4h", urgent: false },
               { client: "Clínica Odonto", task: "Entrega de Relatório Mensal", time: "Hoje", urgent: false },
             ].map((activity, i) => (
               <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-[#111113] border border-[#1e1e20] hover:bg-white/[0.02] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-6">
                     <div className={`h-2 w-2 rounded-full ${activity.urgent ? "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.4)]" : "bg-slate-700"}`} />
                     <div>
                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-0.5">{activity.client}</p>
                        <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{activity.task}</p>
                     </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-600 italic">{activity.time}</span>
               </div>
             ))}
           </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
           <div className="p-8 rounded-[2rem] bg-indigo-600 text-white relative overflow-hidden group shadow-2xl shadow-indigo-500/20">
              <div className="absolute top-0 right-0 p-8">
                 <Zap className="w-8 h-8 opacity-20 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-4 opacity-80">Master Insight</p>
              <h4 className="text-xl font-bold italic leading-tight mb-6">Sua produção cresceu 12% nesta semana.</h4>
              <p className="text-xs text-indigo-100/70 font-medium leading-relaxed mb-6">
                 O Burger House gerou um pico de engajamento incomum nas últimas 48h. Recomendamos dobrar o budget no criativo #04.
              </p>
              <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-colors">Agir Agora</button>
           </div>

           <div className="p-8 rounded-3xl bg-[#111113] border border-[#1e1e20]">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Performance Média</h4>
              <div className="space-y-6">
                 {[
                   { label: "Taxa de Entrega", val: "94%", color: "bg-emerald-500" },
                   { label: "Crescimento IG", val: "72%", color: "bg-indigo-500" },
                 ].map((bar, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-slate-400"><span>{bar.label}</span> <span>{bar.val}</span></div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className={`h-full ${bar.color} w-[${bar.val}]`} style={{ width: bar.val }} />
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
