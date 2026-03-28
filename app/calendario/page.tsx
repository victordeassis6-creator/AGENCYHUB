"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Video, Image as ImageIcon, Sparkles } from "lucide-react"
import { toast } from "sonner"

export default function CalendarioPage() {
  const posts = [
    { day: 15, title: "Reels - Bastidores", type: "video", status: "approved" },
    { day: 16, title: "Post Carrossel Dicas", type: "image", status: "production" },
    { day: 18, title: "Story Enquete", type: "image", status: "idea" },
    { day: 22, title: "Reels - Antes/Depois", type: "video", status: "approved" },
    { day: 25, title: "Post Depoimento", type: "image", status: "production" },
  ]
  const ss: Record<string, string> = {
    approved: "bg-emerald-500/15 border-emerald-500/20 text-emerald-400",
    production: "bg-indigo-500/15 border-indigo-500/20 text-indigo-400",
    idea: "bg-amber-500/15 border-amber-500/20 text-amber-400",
  }
  const sl: Record<string, string> = { approved: "Aprovado", production: "Em Produção", idea: "Ideia" }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Calendário de Conteúdo</h2>
          <p className="text-slate-500 text-sm">Planeje as postagens de Burger House.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="btn-scale border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 rounded-xl bg-transparent" onClick={() => toast.success("IA ativada")}>
            <Sparkles className="w-4 h-4 mr-2" /> Sugerir com IA
          </Button>
          <Button className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg shadow-indigo-500/25">+ Novo Post</Button>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap animate-fade-in-up-delay-1">
        {Object.entries(sl).map(([k, l]) => (
          <div key={k} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <div className={`h-3 w-3 rounded-full border ${ss[k]}`} /> {l}
          </div>
        ))}
      </div>
      <Card className="glass border-white/[0.06] rounded-2xl overflow-hidden animate-fade-in-up-delay-2">
        <CardContent className="p-0">
          <div className="flex items-center justify-between border-b border-white/[0.06] p-5">
            <h3 className="font-bold text-lg text-white">Maio 2026</h3>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="btn-scale rounded-xl hover:bg-indigo-500/10 text-slate-500 hover:text-indigo-400"><ChevronLeft className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="btn-scale rounded-xl hover:bg-indigo-500/10 text-slate-500 hover:text-indigo-400"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </div>
          <div className="grid grid-cols-7 border-b border-white/[0.06] bg-white/[0.02]">
            {["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(d => (
              <div key={d} className="p-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider border-r border-white/[0.04] last:border-0">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 grid-rows-5">
            {Array.from({ length: 35 }).map((_, i) => {
              const day = i - 3
              const hp = posts.find(p => p.day === day)
              const iv = day > 0 && day <= 31
              const it = day === 27
              return (
                <div key={i} className={`min-h-[110px] border-r border-b border-white/[0.04] p-2 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-indigo-500/5 ${!iv ? "bg-white/[0.01]" : ""} ${it ? "bg-indigo-500/10 ring-1 ring-indigo-500/30 ring-inset" : ""}`}>
                  {iv && <span className={`text-xs font-bold ${it ? 'text-indigo-400' : 'text-slate-600'}`}>{day}</span>}
                  {hp && (
                    <div className={`text-xs p-2 rounded-lg border flex flex-col gap-1 cursor-pointer btn-scale ${ss[hp.status]}`} onClick={() => toast(`📝 ${hp.title}`)}>
                      <div className="flex items-center gap-1 font-bold truncate">
                        {hp.type === 'video' ? <Video className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                        <span className="truncate">{hp.title}</span>
                      </div>
                      <span className="text-[10px] opacity-70 uppercase tracking-wider font-semibold">{sl[hp.status]}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
