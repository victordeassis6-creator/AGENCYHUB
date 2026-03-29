"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

import { 
  Camera, Calendar as CalendarIcon, Users, 
  MapPin, CheckCircle2, Circle, Clock, 
  Plus, ChevronRight, Video, ClipboardList 
} from "lucide-react"
import { toast } from "sonner"

export default function ProducaoPage() {
  const visits = [
    { id: 1, client: "Burger House", time: "14:00", team: "Lucas & Ana", status: "CONFIRMED", location: "Unidade Centro" },
    { id: 2, client: "Sushi Real", time: "10:00", team: "Gustavo", status: "PENDING", location: "Loja 2 (Jardins)" },
  ]

  const shootingChecklist = [
    { id: 1, item: "Corte do Burger em Câmera Lenta", scriptId: "SCR-001", done: false },
    { id: 2, item: "Depoimento do Chef (POV)", scriptId: "SCR-002", done: true },
    { id: 3, item: "Close-up nas batatas fritas", scriptId: "SCR-003", done: false },
    { id: 4, item: "Fachada da loja na Golden Hour", scriptId: "SCR-004", done: false },
  ]

  return (
    <div className="space-y-10 lg:space-y-14 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white flex items-center gap-3">
             Dia de Filmar. <Camera className="w-7 h-7 text-fuchsia-400" />
          </h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest pl-1">Veja o horário, o lugar e o que não pode esquecer de levar.</p>
        </div>
        <Button onClick={() => toast("Agendar Visita...")} className="h-12 px-8 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-fuchsia-500/25">
          <Plus className="w-4 h-4 mr-2" /> Agendar Gravação
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Próximas Visitas */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass border-white/[0.06] rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0a0616]">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-lg font-black italic text-white flex items-center gap-2 tracking-tighter"><CalendarIcon className="w-5 h-5 text-fuchsia-400" /> Para onde vamos hoje?</CardTitle>
              <CardDescription className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Nossas saídas para gravação.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-white/[0.06]">
                 {visits.map((visit) => (
                   <div key={visit.id} className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                     <div className="flex items-center gap-6">
                        <div className="h-14 w-14 rounded-2xl bg-purple-500/15 border border-purple-400/20 flex items-center justify-center text-fuchsia-400">
                          <Camera className="w-7 h-7" />
                        </div>
                        <div>
                           <p className="font-black italic text-lg text-white tracking-tighter leading-tight">{visit.client}</p>
                           <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {visit.location}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-8">
                        <div className="text-right">
                           <p className="text-sm font-black text-slate-200 flex items-center gap-1.5 justify-end"><Clock className="w-4 h-4" /> {visit.time}</p>
                           <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Equipe: {visit.team}</p>
                        </div>
                        <span className={`${visit.status === "CONFIRMED" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"} px-4 py-1.5 rounded-full uppercase text-[9px] font-black tracking-widest border border-white/5`}>
                           {visit.status === "CONFIRMED" ? "Tudo Certo" : "Aguardando"}
                        </span>
                        <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-fuchsia-400 transition-colors" />
                     </div>
                   </div>
                 ))}
               </div>
            </CardContent>
          </Card>

          <Card className="glass border-white/[0.06] rounded-[2.5rem] p-8 bg-[#0a0616]">
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-black italic flex items-center gap-2 tracking-tighter"><ClipboardList className="w-6 h-6 text-fuchsia-400" /> O que levar para a gravação</h3>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Checklist Geral</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {["Câmera", "Lente 35mm", "Microfone", "Tripé", "Luzes", "Bateria", "HD", "Cartão SD"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 text-[10px] text-slate-300 font-bold italic uppercase tracking-widest">
                         <CheckCircle2 className="w-4 h-4 text-purple-500/50" /> {item}
                      </div>
                   ))}
                </div>
             </div>
          </Card>
        </div>

        {/* Checklist da Gravação (Conectado ao Roteiro) */}
        <div className="space-y-6">
           <Card className="glass border-purple-400/20 rounded-[2.5rem] overflow-hidden h-full bg-[#0a0616]">
              <div className="h-1.5 bg-gradient-to-r from-purple-500 to-purple-500" />
              <CardHeader className="p-8 pb-4">
                 <CardTitle className="text-white text-md font-black italic flex items-center justify-between tracking-tighter">
                    O que filmar hoje
                    <span className="text-[9px] border border-purple-500/40 text-fuchsia-400 px-3 py-1 rounded-full font-black uppercase tracking-widest">BURGER HOUSE</span>
                 </CardTitle>
                 <CardDescription className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-tight">Itens obrigatórios para o roteiro.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                 {shootingChecklist.map((item) => (
                    <div key={item.id} className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${item.done ? "bg-emerald-500/5 border-emerald-500/10 opacity-60" : "bg-white/5 border-white/10"}`}>
                       <button className="mt-1 shrink-0">
                          {item.done ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <Circle className="w-6 h-6 text-slate-600" />}
                       </button>
                       <div className="flex-1">
                          <p className={`text-xs font-black uppercase tracking-widest leading-relaxed ${item.done ? "line-through text-slate-600" : "text-slate-200"}`}>{item.item}</p>
                          <div className="flex items-center gap-2 mt-2">
                             <span className="text-[9px] font-black text-fuchsia-400 uppercase tracking-[0.2em] bg-purple-500/15 px-2 py-0.5 rounded-lg flex items-center gap-1.5 border border-purple-400/20">
                                <Video className="w-3 h-3" /> {item.scriptId}
                             </span>
                          </div>
                       </div>
                    </div>
                 ))}
                 <Button className="w-full mt-6 h-14 bg-white text-black hover:bg-slate-200 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl">Finalizar Visita →</Button>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
