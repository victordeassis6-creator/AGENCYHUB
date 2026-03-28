"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogDescription, DialogTrigger 
} from "@/components/ui/dialog"
import { 
  Search, Plus, MoreHorizontal, ExternalLink, 
  TrendingUp, Calendar, Video, MessageSquare,
  AtSign, Globe, Camera, ChevronRight
} from "lucide-react"
import { toast } from "sonner"

export default function ClientesPage() {
  const [selectedClient, setSelectedClient] = useState<any>(null)
  
  const clients = [
    { id: "1", name: "Burger House", niche: "Hamburgueria", status: "Ativo", plan: "Pro", color: "from-orange-400 to-red-500", metrics: { views: "45k", posts: 12, growth: "+15%" } },
    { id: "2", name: "Sushi Real", niche: "Japonês", status: "Ativo", plan: "Basic", color: "from-rose-400 to-pink-500", metrics: { views: "32k", posts: 8, growth: "+8%" } },
    { id: "3", name: "Clínica Odonto", niche: "Saúde", status: "Ativo", plan: "Pro", color: "from-cyan-400 to-blue-500", metrics: { views: "12k", posts: 4, growth: "+22%" } },
    { id: "4", name: "Hotel Paraíso", niche: "Turismo", status: "Pausado", plan: "Basic", color: "from-violet-400 to-purple-500", metrics: { views: "5k", posts: 0, growth: "0%" } },
    { id: "5", name: "Tech Store", niche: "E-commerce", status: "Ativo", plan: "Pro", color: "from-emerald-400 to-teal-500", metrics: { views: "88k", posts: 24, growth: "+40%" } },
  ]

  return (
    <div className="space-y-10 lg:space-y-14 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 animate-fade-in-up">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white">Meus Parceiros.</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest pl-1">As marcas que estamos fazendo brilhar.</p>
        </div>
        <Button onClick={() => toast("Solicitar Novo Cliente")} className="h-12 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-indigo-500/20">
          <Plus className="w-4 h-4 mr-2" /> Adicionar Novo
        </Button>
      </div>

      <div className="animate-fade-in-up-delay-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-4 top-4 h-4 w-4 text-slate-500" />
          <Input placeholder="Buscar por nome ou nicho..." className="pl-12 glass border-white/5 rounded-2xl h-12 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500/40" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 animate-fade-in-up-delay-2">
        {clients.map((client) => (
          <Dialog key={client.id}>
             <DialogTrigger className="text-left w-full">
                <Card className="card-hover glass border-white/[0.06] rounded-[2rem] overflow-hidden cursor-pointer group shadow-2xl">
                  <div className={`h-2 bg-gradient-to-r ${client.color}`} />
                  <CardContent className="p-7">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                          {client.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-lg text-white italic tracking-tighter group-hover:text-pink-400 transition-colors">{client.name}</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{client.niche} • {client.plan}</p>
                        </div>
                      </div>
                      <button className="h-9 w-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white bg-white/5">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${client.status === 'Ativo' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                        {client.status}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] font-black text-pink-400 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                        Detalhes <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
             </DialogTrigger>
             <DialogContent className="max-w-2xl bg-[#0a0a0c] border-white/10 rounded-[2.5rem] p-0 overflow-hidden shadow-3xl">
                <div className={`h-24 bg-gradient-to-r ${client.color} relative`}>
                   <div className="absolute -bottom-10 left-8">
                      <div className={`h-20 w-20 rounded-3xl bg-[#0a0a0c] p-1`}>
                         <div className={`w-full h-full rounded-[1.2rem] bg-gradient-to-br ${client.color} flex items-center justify-center text-white text-3xl font-black italic`}>
                            {client.name.charAt(0)}
                         </div>
                      </div>
                   </div>
                </div>
                <div className="p-10 pt-14 space-y-8">
                   <div className="flex justify-between items-start">
                      <div>
                         <h2 className="text-3xl font-black italic text-white tracking-tighter">{client.name}</h2>
                         <p className="text-slate-500 font-bold text-sm">{client.niche} • Parceiro desde Jan/2026</p>
                      </div>
                      <div className="flex gap-2">
                         <Button size="icon" variant="outline" className="rounded-xl border-white/5 bg-white/5 text-slate-400 hover:text-white"><AtSign className="w-4 h-4" /></Button>
                         <Button size="icon" variant="outline" className="rounded-xl border-white/5 bg-white/5 text-slate-400 hover:text-white"><Globe className="w-4 h-4" /></Button>
                      </div>
                   </div>

                   <div className="grid grid-cols-3 gap-4">
                      {[
                         { label: "Pessoas que viram", val: client.metrics.views, icon: TrendingUp },
                         { label: "Vídeos do Mês", val: client.metrics.posts, icon: Video },
                         { label: "Crescimento", val: client.metrics.growth, icon: TrendingUp },
                      ].map((m, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
                           <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-1">{m.label}</p>
                           <p className="text-xl font-black text-white italic">{m.val}</p>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-4">
                      <h4 className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">Agenda Próxima</h4>
                      <div className="space-y-3">
                         <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                               <Camera className="w-5 h-5 text-pink-400" />
                               <div>
                                  <p className="text-xs font-bold text-white">Filmagem Unidade Centro</p>
                                  <p className="text-[10px] text-slate-500 font-medium">31 de Março às 14:00h</p>
                               </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white" />
                         </div>
                      </div>
                   </div>

                   <div className="flex gap-4 pt-4">
                      <Button className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-widest rounded-xl">Planejamento Estratégico</Button>
                      <Button variant="outline" className="flex-1 h-12 border-white/10 bg-white/5 text-white font-black text-xs uppercase tracking-widest rounded-xl">Ver Banco de Mídia</Button>
                   </div>
                </div>
             </DialogContent>
          </Dialog>
        ))}

        <Card className="card-hover border-2 border-dashed border-white/5 bg-transparent rounded-[2rem] cursor-pointer hover:border-indigo-500/30 hover:bg-indigo-500/5 group flex items-center justify-center min-h-[220px]" onClick={() => toast("Novo Cliente")}>
          <div className="text-center">
            <div className="h-14 w-14 mx-auto rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-500 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all mb-4">
              <Plus className="w-8 h-8" />
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-indigo-400 transition-colors italic">Adicionar Novo Parceiro</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
