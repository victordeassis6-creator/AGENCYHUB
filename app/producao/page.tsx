"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  return (
    <div className="animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Camera className="w-6 h-6 text-indigo-400" /> Produção & Gravação
          </h2>
          <p className="text-slate-500 text-sm font-medium">Agendas, checklists de campo e gestão de visitas externas.</p>
        </div>
        <Button onClick={() => toast("Agendar Visita...")} className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl px-6 h-11">
          <Plus className="w-4 h-4 mr-2" /> Agendar Gravação
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Próximas Visitas */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass border-white/[0.06] rounded-2xl overflow-hidden shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2"><CalendarIcon className="w-5 h-5 text-indigo-400" /> Visitas de Hoje</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-white/[0.06]">
                 {visits.map((visit) => (
                   <div key={visit.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors group">
                     <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                          <Camera className="w-6 h-6" />
                        </div>
                        <div>
                           <p className="font-bold text-white leading-tight">{visit.client}</p>
                           <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1"><MapPin className="w-3 h-3" /> {visit.location}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="text-right">
                           <p className="text-sm font-bold text-slate-200 flex items-center gap-1 justify-end"><Clock className="w-3.5 h-3.5" /> {visit.time}</p>
                           <p className="text-[10px] text-slate-500 font-medium">Equipe: {visit.team}</p>
                        </div>
                        <Badge className={`${visit.status === "CONFIRMED" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"} border-0 px-3 py-1 rounded-full uppercase text-[10px] font-bold`}>
                           {visit.status === "CONFIRMED" ? "Confirmado" : "Pendente"}
                        </Badge>
                        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                     </div>
                   </div>
                 ))}
               </div>
            </CardContent>
          </Card>

          <Card className="glass border-white/[0.06] rounded-2xl p-6">
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <h3 className="text-white font-bold flex items-center gap-2"><ClipboardList className="w-5 h-5 text-purple-400" /> Equipamentos & Materiais</h3>
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Master Checklist</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                   {["Câmera Principal", "Lente Macro", "Microfone Lapela", "Tripé & Gimbal", "Iluminação LED", "Powerbanks", "HD Externo", "Cartão SD"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-[10px] text-slate-300 font-medium italic">
                         <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500/50" /> {item}
                      </div>
                   ))}
                </div>
             </div>
          </Card>
        </div>

        {/* Checklist da Gravação (Conectado ao Roteiro) */}
        <div className="space-y-6">
           <Card className="glass border-indigo-500/20 rounded-2xl overflow-hidden h-full">
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
              <CardHeader className="pb-4">
                 <CardTitle className="text-white text-md flex items-center justify-between">
                    Checklist de Campo
                    <Badge variant="outline" className="text-[9px] border-indigo-500/40 text-indigo-400">BURGER HOUSE</Badge>
                 </CardTitle>
                 <CardDescription className="text-slate-500 text-xs font-bold leading-tight">O que precisa ser captado hoje (baseado nos roteiros).</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 {shootingChecklist.map((item) => (
                    <div key={item.id} className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${item.done ? "bg-emerald-500/5 border-emerald-500/10 opacity-60" : "bg-white/5 border-white/10"}`}>
                       <button className="mt-0.5 shrink-0">
                          {item.done ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Circle className="w-5 h-5 text-slate-600" />}
                       </button>
                       <div className="flex-1">
                          <p className={`text-xs font-bold ${item.done ? "line-through text-slate-500" : "text-slate-200"}`}>{item.item}</p>
                          <div className="flex items-center gap-2 mt-1">
                             <span className="text-[9px] font-black text-indigo-400 uppercase tracking-tighter bg-indigo-500/10 px-1.5 py-0.5 rounded-md flex items-center gap-1">
                                <Video className="w-2.5 h-2.5" /> {item.scriptId}
                             </span>
                          </div>
                       </div>
                    </div>
                 ))}
                 <Button className="w-full mt-4 h-11 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20">Finalizar Visita →</Button>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
