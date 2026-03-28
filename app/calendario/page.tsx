"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Video, Image as ImageIcon, Sparkles, Camera, Clock } from "lucide-react"
import { toast } from "sonner"

export default function CalendarioPage() {
  const posts = [
    { day: 15, title: "Reels - Bastidores", type: "video", status: "approved" },
    { day: 16, title: "Post Carrossel Dicas", type: "image", status: "production" },
    { day: 18, title: "Story Enquete", type: "image", status: "idea" },
    { day: 20, title: "GRAVAÇÃO LOCAL", type: "recording", status: "scheduled", time: "14:00" },
    { day: 22, title: "Reels - Antes/Depois", type: "video", status: "approved" },
    { day: 25, title: "Post Depoimento", type: "image", status: "production" },
    { day: 31, title: "GRAVAÇÃO: Burger House", type: "recording", status: "scheduled", time: "10:30" },
  ]
  const ss: Record<string, string> = {
    approved: "bg-emerald-500/15 border-emerald-500/20 text-emerald-400",
    production: "bg-indigo-500/15 border-indigo-500/20 text-indigo-400",
    idea: "bg-amber-500/15 border-amber-500/20 text-amber-400",
    scheduled: "bg-pink-500/15 border-pink-500/20 text-pink-400",
  }
  const sl: Record<string, string> = { 
    approved: "Aprovado", 
    production: "Em Produção", 
    idea: "Ideia",
    scheduled: "Dia de Gravação"
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
             Calendário de Conteúdo <Sparkles className="w-4 h-4 text-pink-400" />
          </h2>
          <p className="text-slate-500 text-sm">Planeje as postagens e as filmagens com sua equipe.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="btn-scale border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 rounded-xl bg-transparent" onClick={() => toast.success("IA ativada")}>
            <Sparkles className="w-4 h-4 mr-2" /> Sugerir com IA
          </Button>
          <Button className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg shadow-indigo-500/25">+ Novo</Button>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap animate-fade-in-up-delay-1">
        {Object.entries(sl).map(([k, l]) => (
          <div key={k} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <div className={`h-2.5 w-2.5 rounded-full border ${ss[k]}`} /> {l}
          </div>
        ))}
      </div>
      <Card className="glass border-white/[0.06] rounded-2xl overflow-hidden animate-fade-in-up-delay-2">
        <CardContent className="p-0">
          <div className="flex items-center justify-between border-b border-white/[0.06] p-5">
            <h3 className="font-black italic text-lg text-white">Maio 2026</h3>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="btn-scale rounded-xl hover:bg-indigo-500/10 text-slate-500 hover:text-indigo-400"><ChevronLeft className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="btn-scale rounded-xl hover:bg-indigo-500/10 text-slate-500 hover:text-indigo-400"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </div>
          <div className="grid grid-cols-7 border-b border-white/[0.06] bg-white/[0.02]">
            {["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(d => (
              <div key={d} className="p-3 text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] border-r border-white/[0.04] last:border-0">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 grid-rows-5">
            {Array.from({ length: 35 }).map((_, i) => {
              const day = i - 3
              const hp = posts.filter(p => p.day === day)
              const iv = day > 0 && day <= 31
              const it = day === 27
              return (
                <div key={i} className={`min-h-[130px] border-r border-b border-white/[0.04] p-3 flex flex-col gap-2 transition-colors duration-200 hover:bg-indigo-500/5 ${!iv ? "bg-white/[0.01]" : ""} ${it ? "bg-indigo-500/10 ring-1 ring-indigo-500/30 ring-inset" : ""}`}>
                  {iv && <span className={`text-[10px] font-black ${it ? 'text-indigo-400' : 'text-slate-600'}`}>{day}</span>}
                  <div className="space-y-1.5 overflow-y-auto max-h-full">
                    {hp.map((p, idx) => (
                      <div key={idx} className={`text-[9px] p-2 rounded-lg border flex flex-col gap-1 cursor-pointer btn-scale shadow-lg ${ss[p.status]}`} onClick={() => toast(`📝 ${p.title}`)}>
                        <div className="flex items-center gap-1.5 font-black uppercase tracking-tighter truncate">
                          {p.type === 'recording' ? <Camera className="w-2.5 h-2.5" /> : p.type === 'video' ? <Video className="w-2.5 h-2.5" /> : <ImageIcon className="w-2.5 h-2.5" />}
                          <span className="truncate">{p.title}</span>
                        </div>
                        {p.time && (
                          <div className="flex items-center gap-1 opacity-80 font-bold">
                            <Clock className="w-2.5 h-2.5" /> {p.time}h
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
