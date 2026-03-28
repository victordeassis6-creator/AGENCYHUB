"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

import { 
  Scissors, PlayCircle, Clock, CheckCircle2, 
  MessageSquare, User, MoreHorizontal, Download, 
  Eye, FileVideo, Zap, Calendar
} from "lucide-react"
import { toast } from "sonner"

export default function EdicaoPage() {
  const [view, setView] = useState<"kanban" | "list">("kanban")

  const pipeline = [
    { 
      id: "1", title: "Reels: Preparação Molho Secreto", client: "Burger House", 
      stage: "EDITING", editor: "Thiago", deadline: "Hoje", priority: "HIGH" 
    },
    { 
      id: "2", title: "Depoimento: Experiência Sushi", client: "Sushi Real", 
      stage: "RAW", editor: "-", deadline: "29/03", priority: "MEDIUM" 
    },
    { 
      id: "3", title: "Post: Tour na Clínica", client: "Clínica Odonto", 
      stage: "APPROVAL", editor: "Felipe", deadline: "Expira em 2h", priority: "HIGH" 
    },
    { 
      id: "4", title: "Ads: Black Week Burger", client: "Burger House", 
      stage: "FINAL", editor: "Thiago", deadline: "Concluído", priority: "LOW" 
    },
  ]

  const stages = [
    { title: "Vídeos que chegaram", id: "RAW", color: "border-slate-500/20 bg-slate-500/5", icon: PlayCircle },
    { title: "Editando agora", id: "EDITING", color: "border-indigo-500/20 bg-indigo-500/5", icon: Scissors },
    { title: "Pronto pra você ver", id: "APPROVAL", color: "border-amber-500/20 bg-amber-500/5", icon: Eye },
    { title: "Já pode postar!", id: "FINAL", color: "border-emerald-500/20 bg-emerald-500/5", icon: CheckCircle2 },
  ]

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white flex items-center gap-3">
             Fazendo os Vídeos. <Scissors className="w-7 h-7 text-indigo-400" />
          </h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest pl-1">Aqui você vê quais vídeos estão sendo feitos e quais já estão prontos.</p>
        </div>
        <div className="flex items-center gap-2 glass p-1.5 rounded-2xl border-white/5">
           <button onClick={() => setView("kanban")} className={`h-9 px-4 rounded-xl text-xs font-bold transition-all ${view === "kanban" ? "bg-indigo-500 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}>Kanban</button>
           <button onClick={() => setView("list")} className={`h-9 px-4 rounded-xl text-xs font-bold transition-all ${view === "list" ? "bg-indigo-500 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}>Lista</button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 min-h-[600px]">
        {stages.map((stage) => (
          <div key={stage.id} className="space-y-4">
            <div className={`p-4 rounded-2xl border ${stage.color} flex items-center justify-between`}>
               <h3 className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-widest leading-none">
                  <stage.icon className="w-4 h-4 text-white/60" /> {stage.title}
               </h3>
               <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-slate-300 font-bold">{pipeline.filter(p => p.stage === stage.id).length}</span>
            </div>

            <div className="space-y-4">
              {pipeline.filter(p => p.stage === stage.id).map((item) => (
                <Card key={item.id} className="glass border-white/[0.06] rounded-2xl p-4 space-y-3 cursor-grab hover:border-indigo-500/30 transition-all group relative">
                  <div className="flex justify-between items-start">
                     <p className={`text-[9px] font-black uppercase tracking-tighter px-1.5 py-0.5 rounded border ${item.priority === 'HIGH' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 'bg-slate-500/10 text-slate-500 border-white/10'}`}>
                        {item.priority}
                     </p>
                     <button className="h-6 w-6 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-500"><MoreHorizontal className="w-3.5 h-3.5" /></button>
                  </div>
                  <div>
                     <p className="text-[11px] font-bold text-slate-200 leading-snug group-hover:text-indigo-300 transition-colors">{item.title}</p>
                     <p className="text-[10px] text-slate-500 mt-0.5 font-medium">{item.client}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                     <div className="flex items-center gap-1.5">
                        <div className="h-5 w-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                           <User className="w-3 h-3 text-indigo-400" />
                        </div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{item.editor}</span>
                     </div>
                     <span className="text-[9px] font-black text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {item.deadline}</span>
                  </div>
                  {item.stage === "APPROVAL" && (
                    <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber-500 animate-pulse-slow shadow-lg shadow-amber-500/50" />
                  )}
                </Card>
              ))}
              
              {pipeline.filter(p => p.stage === stage.id).length === 0 && (
                <div className="h-32 rounded-2xl border-2 border-dashed border-white/5 flex items-center justify-center text-slate-700 font-bold text-xs">Vazio</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
