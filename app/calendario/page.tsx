"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogDescription, DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from "@/components/ui/select"
import { 
  ChevronLeft, ChevronRight, Video, 
  Image as ImageIcon, Sparkles, Camera, 
  Clock, Calendar as CalendarIcon, 
  Trash2, Save, X
} from "lucide-react"
import { toast } from "sonner"

export default function CalendarioPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  const [posts, setPosts] = useState([
    { id: "1", day: 15, title: "Reels - Bastidores", type: "video", status: "approved" },
    { id: "2", day: 16, title: "Post Carrossel Dicas", type: "image", status: "production" },
    { id: "3", day: 18, title: "Story Enquete", type: "image", status: "idea" },
    { id: "4", day: 20, title: "GRAVAÇÃO LOCAL", type: "recording", status: "scheduled", time: "14:00" },
    { id: "5", day: 22, title: "Reels - Antes/Depois", type: "video", status: "approved" },
    { id: "6", day: 25, title: "Post Depoimento", type: "image", status: "production" },
    { id: "7", day: 31, title: "GRAVAÇÃO: Burger House", type: "recording", status: "scheduled", time: "10:30" },
  ])

  const ss: Record<string, string> = {
    approved: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    production: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    idea: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    scheduled: "bg-violet-500/10 border-violet-500/20 text-violet-400 font-black",
  }

  const sl: Record<string, string> = { 
    approved: "Tudo Certo", 
    production: "Estamos fazendo", 
    idea: "Ideia para depois",
    scheduled: "Dia de Filmar"
  }

  const handleEditEvent = (event: any) => {
    setSelectedEvent(event)
    setIsDialogOpen(true)
  }

  const handleSaveEvent = () => {
    toast.success("Agenda atualizada! ✨")
    setIsDialogOpen(false)
  }

  const handleDeleteEvent = () => {
    setPosts(prev => prev.filter(p => p.id !== selectedEvent.id))
    toast.error("Removido da agenda.")
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-10 lg:space-y-14 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white flex items-center gap-3">
             Nossa Agenda. <Sparkles className="w-7 h-7 text-violet-400 animate-pulse" />
          </h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest pl-1">Aqui você vê o que vai postar e quando vamos filmar.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 border-white/10 bg-white/5 text-indigo-400 hover:bg-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest px-6" onClick={() => toast.success("IA Gerando cronograma...")}>
            <Sparkles className="w-4 h-4 mr-2" /> Ajuda da IA
          </Button>
          <Button className="h-12 px-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-indigo-500/20">+ Novo</Button>
        </div>
      </div>

      <div className="flex gap-6 flex-wrap pb-6 border-b border-white/5">
        {Object.entries(sl).map(([k, l]) => (
          <div key={k} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <div className={`h-3 w-3 rounded-full border shadow-xl ${ss[k]}`} /> {l}
          </div>
        ))}
      </div>

      <Card className="glass border-white/5 rounded-[3rem] overflow-hidden shadow-3xl bg-[#111113]">
        <CardContent className="p-0">
          <div className="flex items-center justify-between border-b border-white/5 p-10 bg-white/[0.01]">
            <h3 className="font-black italic text-3xl text-white tracking-tighter">Maio 2026.</h3>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl hover:bg-white/5 text-slate-500 hover:text-white border border-white/5"><ChevronLeft className="w-6 h-6" /></Button>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl hover:bg-white/5 text-slate-500 hover:text-white border border-white/5"><ChevronRight className="w-6 h-6" /></Button>
            </div>
          </div>
          <div className="grid grid-cols-7 border-b border-white/5 bg-white/[0.02]">
            {["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(d => (
              <div key={d} className="p-6 text-center text-[11px] font-black text-slate-500 uppercase tracking-[0.4em] border-r border-white/5 last:border-0">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {Array.from({ length: 35 }).map((_, i) => {
              const day = i - 3
              const hp = posts.filter(p => p.day === day)
              const iv = day > 0 && day <= 31
              const it = day === 27
              return (
                <div key={i} className={`min-h-[160px] border-r border-b border-white/5 p-5 flex flex-col gap-4 transition-all duration-500 hover:bg-white/[0.03] ${!iv ? "bg-black/40 opacity-20" : ""} ${it ? "bg-indigo-500/[0.05] ring-1 ring-indigo-500/20 ring-inset" : ""}`}>
                  {iv && <span className={`text-xs font-black italic ${it ? 'text-indigo-400' : 'text-slate-500'}`}>{day}</span>}
                  <div className="space-y-3">
                    {hp.map((p, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => handleEditEvent(p)}
                        className={`text-[9px] p-4 rounded-2xl border flex flex-col gap-2 cursor-pointer hover:scale-[1.05] active:scale-[0.98] transition-all shadow-2xl ${ss[p.status]}`}
                      >
                        <div className="flex items-center gap-2 font-black uppercase tracking-widest truncate">
                          {p.type === 'recording' ? <Camera className="w-3.5 h-3.5" /> : p.type === 'video' ? <Video className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
                          <span className="truncate">{p.title}</span>
                        </div>
                        {p.time && (
                          <div className="flex items-center gap-2 opacity-80 font-black tracking-[0.2em] text-[8px] bg-black/20 p-1.5 rounded-lg w-fit">
                            <Clock className="w-3 h-3" /> {p.time}H
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md bg-[#0e0e10] border-white/10 rounded-[2.5rem] p-10 shadow-3xl">
           <DialogHeader>
              <DialogTitle className="text-3xl font-black italic text-white tracking-tighter">
                {selectedEvent?.id ? "Mudar Agenda." : "Novo Item."}
              </DialogTitle>
              <DialogDescription className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2">
                Gerencie o conteúdo ou gravação deste dia.
              </DialogDescription>
           </DialogHeader>

           <div className="space-y-8 py-8">
              <div className="space-y-3">
                 <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">O que vamos fazer?</Label>
                 <Input 
                    placeholder="Ex: Reels da Burger House"
                    value={selectedEvent?.title} 
                    onChange={(e) => setSelectedEvent({...selectedEvent, title: e.target.value})}
                    className="bg-black/40 border-white/10 h-14 rounded-2xl text-white font-bold transition-all focus:border-indigo-500/50"
                 />
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Como está?</Label>
                    <Select value={selectedEvent?.status} onValueChange={(val) => setSelectedEvent({...selectedEvent, status: val})}>
                       <SelectTrigger className="bg-black/40 border-white/10 h-14 rounded-2xl text-white font-bold"><SelectValue /></SelectTrigger>
                       <SelectContent className="bg-[#111113] border-white/10 rounded-2xl">
                          {Object.entries(sl).map(([k, v]) => (
                             <SelectItem key={k} value={k} className="text-xs font-bold py-3">{v}</SelectItem>
                          ))}
                       </SelectContent>
                    </Select>
                 </div>
                 <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Horário</Label>
                    <div className="relative">
                       <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                       <Input 
                          placeholder="Ex: 14:00" 
                          value={selectedEvent?.time} 
                          onChange={(e) => setSelectedEvent({...selectedEvent, time: e.target.value})}
                          className="pl-12 bg-black/40 border-white/10 h-14 rounded-2xl text-white font-bold transition-all focus:border-indigo-500/50"
                       />
                    </div>
                 </div>
              </div>
           </div>

           <DialogFooter className="gap-4 sm:flex-row flex-col">
              <Button 
                variant="outline" 
                onClick={handleDeleteEvent}
                className="flex-1 h-14 border-red-500/20 bg-red-500/5 text-red-500 hover:bg-red-500/10 rounded-2xl font-black text-[10px] uppercase tracking-widest"
              >
                 <Trash2 className="w-5 h-5 mr-3" /> Remover
              </Button>
              <Button 
                onClick={handleSaveEvent}
                className="flex-[2] h-14 bg-white text-black hover:bg-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl"
              >
                 <Save className="w-5 h-5 mr-3" /> Guardar
              </Button>
           </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
