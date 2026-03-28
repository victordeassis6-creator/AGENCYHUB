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
    { label: "Clientes Ativos", value: "12", icon: Users, trend: "+2", color: "from-pink-400 to-violet-400" },
    { label: "Faturamento Mensal", value: "R$ 42.500", icon: BarChart3, trend: "+15%", color: "from-pink-400 to-violet-400" },
    { label: "Tarefas Hoje", value: "24", icon: CheckSquare, trend: "85%", color: "from-pink-400 to-violet-400" },
    { label: "Posts Março", value: "156", icon: TrendingUp, trend: "+32%", color: "from-pink-400 to-violet-400" },
  ]

  const pipelineStages = [
    { label: "Roteiro (IA)", count: 8, icon: Zap, color: "text-pink-400" },
    { label: "Gravação", count: 5, icon: Camera, color: "text-violet-400" },
    { label: "Edição", count: 12, icon: Scissors, color: "text-pink-400" },
    { label: "Aprovação", count: 4, icon: Eye, color: "text-violet-400" },
    { label: "Finalizado", count: 32, icon: CheckCircle2, color: "text-pink-400" },
  ]

  return (
    <div className="p-8 lg:p-12 space-y-12 animate-fade-in-up">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-6xl font-black tracking-tighter text-white mb-2 italic drop-shadow-2xl">Bom dia, Parceiro.</h1>
          <p className="text-pink-200/50 text-sm font-bold uppercase tracking-[0.3em] ml-1">Sua agência está operando a 94% da capacidade total.</p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/80 bg-white/10 border border-white/20 px-6 py-3 rounded-full backdrop-blur-3xl shadow-xl">
           <div className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)] animate-pulse" />
           Sistemas Operacionais
        </div>
      </div>

      {/* Stats Grid - Defined Containers v3.4 */}
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="group relative overflow-hidden p-8 rounded-[2.5rem] glass-glow border-white/[0.15] hover:scale-[1.02] duration-500">
             <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-200/50">{stat.label}</span>
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:bg-gradient-to-br ${stat.color} transition-all duration-300`}>
                   <stat.icon className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
                </div>
             </div>
             <div className="flex items-end gap-3">
                <h3 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-xl">{stat.value}</h3>
                <span className="text-[10px] font-black text-pink-400 mb-1.5 drop-shadow-lg">{stat.trend}</span>
             </div>
          </div>
        ))}
      </div>

      {/* 🔄 ESTEIRA FLOW - Defined Boxes v3.4 */}
      <div className="space-y-8">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-violet-300 mb-10 ml-2 italic">Pipeline de Produção</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-5 items-center">
           {pipelineStages.map((stage, i) => (
             <div key={i} className="flex-1 flex items-center group">
                <div className="flex-1 glass rounded-[2.5rem] p-7 text-center hover:bg-white/10 transition-all cursor-pointer group-hover:-translate-y-2 duration-300 border-white/20 group-hover:border-pink-500/40 shadow-2xl">
                   <div className="h-14 w-14 mx-auto mb-5 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all">
                      <stage.icon className={`h-6 w-6 ${stage.color} drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]`} />
                   </div>
                   <div className="text-4xl font-black text-white leading-none mb-1 tracking-tighter italic drop-shadow-lg">{stage.count}</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-pink-300 transition-colors">{stage.label}</div>
                </div>
                {i < pipelineStages.length - 1 && (
                   <div className="hidden md:flex flex-col items-center px-2 opacity-40">
                      <ChevronRight className="w-5 h-5 text-pink-300" />
                   </div>
                )}
             </div>
           ))}
        </div>
      </div>

      {/* Main Grid: Critical & Insights */}
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-8 space-y-8">
           <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white flex items-center gap-4 italic lg:text-sm">
                 <div className="h-2 w-14 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.6)]" /> 
                 Urgências Críticas
              </h3>
              <button className="text-[10px] font-black text-white hover:text-pink-400 transition-all uppercase tracking-widest bg-white/10 border border-white/20 px-8 py-4 rounded-2xl shadow-xl">Ver Todas Atividades</button>
           </div>
           
           <div className="space-y-5">
             {[
               { client: "Burger House", task: "Aprovação Pendente (3 Criativos)", time: "2h", urgent: true },
               { client: "Sushi Real", task: "Roteiro Pronto para Gravação", time: "4h", urgent: false },
             ].map((activity, i) => (
               <div key={i} className="flex items-center justify-between p-9 rounded-[2.5rem] glass-glow border-white/20 group cursor-pointer shadow-2xl">
                  <div className="flex items-center gap-10">
                     <div className={`h-4 w-4 rounded-xl rotate-45 ${activity.urgent ? "bg-gradient-to-br from-pink-500 to-violet-600 shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-pulse" : "bg-white/20"}`} />
                     <div>
                        <p className="text-[11px] font-black text-pink-300 uppercase tracking-widest mb-2 opacity-60">{activity.client}</p>
                        <p className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors leading-tight italic tracking-tighter drop-shadow-lg">{activity.task}</p>
                     </div>
                  </div>
                  <span className="text-[11px] font-black text-white opacity-40 italic group-hover:opacity-100 transition-opacity">{activity.time}</span>
               </div>
             ))}
           </div>
        </div>

        <div className="lg:col-span-4 space-y-10">
           <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-violet-600 via-purple-700 to-pink-600 text-white relative overflow-hidden group shadow-3xl shadow-purple-900/50 border border-white/30">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-400/20 rounded-full blur-[100px]" />
              
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-white/80 mb-8 italic">IA Master Insights</p>
              <h4 className="text-3xl font-black italic leading-tight mb-10 tracking-tighter drop-shadow-2xl">Sua produção disparou 12% nesta semana.</h4>
              
              <button className="w-full py-5 bg-white text-purple-900 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:scale-[0.97] hover:bg-pink-50 transition-all shadow-2xl border-0">Ver Estratégia</button>
           </div>

           <div className="p-12 rounded-[3.5rem] glass space-y-10 relative overflow-hidden border-white/25 shadow-2xl">
              <div className="flex items-center justify-between">
                 <h4 className="text-[11px] font-black text-white/50 uppercase tracking-widest flex items-center gap-3">
                    <Star className="w-4 h-4 text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]" /> Performance
                 </h4>
                 <div className="text-[9px] font-black bg-pink-500 text-white px-3 py-1.5 rounded-full shadow-lg italic">AO VIVO</div>
              </div>
              
              <div className="space-y-9">
                 {[
                   { label: "Taxa de Entrega", val: "94%", color: "from-pink-500 to-violet-500" },
                   { label: "Crescimento IG", val: "72%", color: "from-violet-500 to-indigo-500" },
                  ].map((bar, i) => (
                   <div key={i} className="space-y-4">
                      <div className="flex justify-between text-[12px] font-black text-white/70 tracking-wider">
                         <span>{bar.label}</span> 
                         <span className="text-white drop-shadow-md">{bar.val}</span>
                      </div>
                      <div className="h-3 w-full bg-white/10 rounded-full p-1 border border-white/10 overflow-hidden shadow-inner flex items-center">
                         <div className={`h-full rounded-full bg-gradient-to-r ${bar.color} shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-1000`} style={{ width: bar.val }} />
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
