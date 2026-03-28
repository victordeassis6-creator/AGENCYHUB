"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  BarChart3, Users, CheckSquare, 
  ArrowUpRight, TrendingUp, AlertCircle,
  Camera, Scissors, Eye, CheckCircle2, ChevronRight,
  Zap, Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Dashboard() {
  const stats = [
    { label: "Meus Clientes", value: "12", icon: Users, trend: "+2", color: "from-pink-500/20 to-violet-500/20", href: "/clientes" },
    { label: "Meu Cofre", value: "R$ 42.500", icon: BarChart3, trend: "+15%", color: "from-emerald-500/20 to-teal-500/20", href: "/vendas" },
    { label: "O que fazer hoje", value: "24", icon: CheckSquare, trend: "85%", color: "from-indigo-500/20 to-blue-500/20", href: "/execucao" },
    { label: "Resultados", value: "156", icon: TrendingUp, trend: "+32%", color: "from-amber-500/20 to-orange-500/20", href: "/relatorios" },
  ]

  const pipelineStages = [
    { label: "Ideias (IA)", count: 8, icon: Zap, color: "text-pink-400", href: "/roteiros" },
    { label: "Gravações", count: 5, icon: Camera, color: "text-violet-400", href: "/producao" },
    { label: "Edição", count: 12, icon: Scissors, color: "text-indigo-400", href: "/edicao" },
    { label: "Para Ver", count: 4, icon: Eye, color: "text-amber-400", href: "/relatorios" },
    { label: "Postados!", count: 32, icon: CheckCircle2, color: "text-emerald-400", href: "/relatorios" },
  ]

  return (
    <div className="space-y-14 animate-fade-in-up">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-7xl font-black tracking-tighter text-white mb-2 italic drop-shadow-2xl">Olá, Parceiro!</h1>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] ml-2">Tudo pronto para os vídeos de hoje.</p>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/80 bg-white/5 border border-white/10 px-8 py-4 rounded-[2rem] backdrop-blur-3xl shadow-2xl">
           <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse" />
           Sistema 100% Online
        </div>
      </div>

      {/* Symmetrical Notification Bar */}
      <div className="grid md:grid-cols-2 gap-8 -mt-4">
        <div className="p-10 rounded-[3rem] bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/10 border border-white/10 backdrop-blur-3xl flex items-center justify-between group hover:border-pink-500/40 transition-all duration-500 shadow-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform pointer-events-none">
              <Camera className="w-32 h-32 text-pink-400" />
           </div>
           <div className="flex items-center gap-8 relative z-10">
              <div className="h-16 w-16 rounded-[1.5rem] bg-black/40 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                 <Camera className="w-7 h-7 text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]" />
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-200/50 mb-2">Próxima Gravação</p>
                 <h3 className="text-2xl font-black text-white italic tracking-tighter">Burger House</h3>
                 <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1 italic">Terça, 31/03</p>
              </div>
           </div>
           <div className="text-right relative z-10 bg-black/20 p-4 rounded-2xl border border-white/5">
              <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-1">Horário</p>
              <p className="text-2xl font-black text-white italic tracking-tighter">14:00h</p>
           </div>
        </div>

        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl flex items-center justify-between group hover:border-violet-500/40 transition-all duration-500 shadow-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:-rotate-12 transition-transform pointer-events-none">
              <Star className="w-32 h-32 text-violet-400" />
           </div>
           <div className="flex items-center gap-8 relative z-10">
              <div className="h-16 w-16 rounded-[1.5rem] bg-black/40 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                 <Star className="w-7 h-7 text-violet-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-200/50 mb-2">Destaque de Hoje</p>
                 <h3 className="text-2xl font-black text-white italic tracking-tighter">Meta Batida!</h3>
                 <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1 italic">Vencemos o cronograma</p>
              </div>
           </div>
           <Link href="/relatorios">
              <Button size="icon" className="h-12 w-12 rounded-2xl bg-white text-black hover:bg-slate-200 shadow-xl transition-all relative z-10">
                 <ArrowUpRight className="w-6 h-6" />
              </Button>
           </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Link key={i} href={stat.href} className="group relative overflow-hidden p-8 rounded-[2.5rem] glass-glow border-white/[0.1] hover:bg-white/[0.04] transition-all duration-500 min-h-[200px] flex flex-col justify-between cursor-pointer shadow-xl">
             <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">{stat.label}</span>
                <div className={`shrink-0 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-indigo-500/20 transition-all duration-300`}>
                   <stat.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </div>
             </div>
             <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                   <h3 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-xl">{stat.value}</h3>
                   <span className="text-[11px] font-black text-emerald-400 drop-shadow-lg">{stat.trend}</span>
                </div>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-600">Este mês</p>
             </div>
          </Link>
        ))}
      </div>

      {/* 🔄 ESTEIRA FLOW - Improved v5.0 */}
      <div className="space-y-10">
        <div className="flex items-center gap-6 ml-2">
           <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-indigo-400 italic">Como a gente trabalha</h2>
           <div className="h-px flex-1 bg-white/5" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-6 items-center">
           {pipelineStages.map((stage, i) => (
             <div key={i} className="flex-1 flex items-center group">
                <Link href={stage.href} className="flex-1 glass rounded-[3rem] p-10 text-center hover:bg-white/5 transition-all cursor-pointer group-hover:-translate-y-3 duration-500 border-white/5 group-hover:border-white/20 shadow-2xl relative overflow-hidden bg-[#111113]">
                   <div className="h-20 w-20 mx-auto mb-6 rounded-[2rem] bg-black/40 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                      <stage.icon className={`h-8 w-8 ${stage.color} drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]`} />
                   </div>
                   <div className="text-5xl font-black text-white leading-none mb-2 tracking-tighter italic drop-shadow-2xl">{stage.count}</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">{stage.label}</div>
                   <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                {i < pipelineStages.length - 1 && (
                   <div className="hidden md:flex flex-col items-center px-2 opacity-20">
                      <ChevronRight className="w-6 h-6 text-white" />
                   </div>
                )}
             </div>
           ))}
        </div>
      </div>

      {/* Main Grid: Critical & Insights */}
      <div className="grid gap-16 lg:grid-cols-2 items-start mt-20">
        <div className="space-y-10">
           <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-6">
                 <div className="h-3 w-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]" /> 
                 <h3 className="text-xl font-black italic tracking-tighter text-white">Não esqueça disso.</h3>
              </div>
           </div>
           
           <div className="grid gap-5">
             {[
               { client: "Burger House", task: "Ver aprovação de 3 vídeos", time: "Há 2h", urgent: true },
               { client: "Sushi Real", task: "Roteiro pronto para filmar", time: "Para às 14h", urgent: false },
               { client: "Clínica Odonto", task: "Postar Stories de agora", time: "AGORA", urgent: true },
             ].map((activity, i) => (
               <div key={i} className="flex items-center justify-between p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group cursor-pointer shadow-2xl transition-all hover:bg-white/[0.04] hover:translate-x-2">
                  <div className="flex items-center gap-8">
                     <div className={`h-4 w-4 rounded-full ${activity.urgent ? "bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)] animate-pulse" : "bg-white/10"}`} />
                     <div>
                        <p className="text-[10px] font-black text-indigo-400/60 uppercase tracking-widest mb-1 italic">{activity.client}</p>
                        <p className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors leading-tight italic tracking-tighter drop-shadow-lg">{activity.task}</p>
                     </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-600 italic uppercase tracking-widest">{activity.time}</span>
               </div>
             ))}
           </div>
        </div>

         <div className="grid gap-12">
            <div className="p-10 rounded-[3.5rem] bg-[#111113] border border-white/5 space-y-10 relative overflow-hidden shadow-3xl">
               <div className="flex items-center justify-between relative z-10">
                  <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] flex items-center gap-3 italic">
                     <Star className="w-5 h-5 text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]" /> Como estamos indo
                  </h4>
                  <div className="text-[9px] font-black bg-white text-black px-4 py-1.5 rounded-full shadow-2xl italic">AO VIVO</div>
               </div>
               
               <div className="space-y-8 relative z-10">
                  {[
                    { label: "Trabalhos Entregues", val: "94%", color: "from-indigo-500 to-purple-500" },
                    { label: "Novos Seguidores", val: "72%", color: "from-pink-500 to-rose-500" },
                    { label: "Retenção de Clientes", val: "100%", color: "from-emerald-500 to-teal-500" },
                   ].map((bar, i) => (
                    <div key={i} className="space-y-4">
                       <div className="flex justify-between text-[11px] font-black text-slate-400 tracking-widest uppercase">
                          <span>{bar.label}</span> 
                          <span className="text-white drop-shadow-md font-bold">{bar.val}</span>
                       </div>
                       <div className="h-4 w-full bg-black/40 rounded-full p-1 border border-white/5 overflow-hidden shadow-inner flex items-center">
                          <div className={`h-full rounded-full bg-gradient-to-r ${bar.color} shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-1000`} style={{ width: bar.val }} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-indigo-700 via-indigo-900 to-black text-white relative overflow-hidden group shadow-3xl border border-white/10">
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
                  <Zap className="w-48 h-48 text-indigo-300" />
               </div>
               <p className="text-[11px] font-black uppercase tracking-[0.6em] text-indigo-300/60 mb-8 italic">IA de Hoje</p>
               <h4 className="text-3xl font-black italic leading-tight mb-10 tracking-tighter drop-shadow-2xl max-w-[300px]">Sugestão: Reels de Bastidores para Burger House.</h4>
               <Link href="/ia">
                  <Button className="h-14 px-12 bg-white text-black hover:bg-slate-200 font-black text-xs rounded-[1.5rem] shadow-3xl uppercase tracking-widest border-0 transition-all">
                     Ver Estratégia
                  </Button>
               </Link>
            </div>
         </div>
      </div>
    </div>
  )
}
