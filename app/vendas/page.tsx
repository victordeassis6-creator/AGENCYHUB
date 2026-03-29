"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Plus, Briefcase, FileText, Send, 
  CheckCircle2, Clock, MoreHorizontal, 
  Download, FileSignature, Sparkles 
} from "lucide-react"
import { toast } from "sonner"

export default function VendasDocsPage() {
  const [activeTab, setActiveTab] = useState<"propostas" | "contratos">("propostas")

  const proposals = [
    { id: "1", client: "Burger House", value: "R$ 3.500/mês", status: "PENDING", date: "27/03" },
    { id: "2", client: "Sushi Real", value: "R$ 4.200/mês", status: "ACCEPTED", date: "25/03" },
    { id: "3", client: "Clínica Odonto", value: "R$ 2.800/mês", status: "EXPIRED", date: "10/03" },
  ]

  return (
    <div className="space-y-10 lg:space-y-14 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 animate-fade-in-up">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white flex items-center gap-3">
             Novos Planos. <Briefcase className="w-7 h-7 text-fuchsia-400" />
          </h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest pl-1">Veja aqui os novos planos que os clientes aceitaram.</p>
        </div>
        <Button onClick={() => toast("Criar Proposta...")} className="h-12 px-8 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-fuchsia-500/25">
          <Plus className="w-4 h-4 mr-2" /> Criar Proposta
        </Button>
      </div>

      <div className="grid lg:grid-cols-7 gap-8">
        {/* Main List */}
        <Card className="lg:col-span-5 glass border-white/[0.06] rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0a0616]">
          <CardHeader className="p-8 border-b border-white/[0.06] flex flex-row items-center justify-between pb-6">
             <div className="flex gap-8">
                <button 
                  onClick={() => setActiveTab("propostas")}
                  className={`text-[10px] font-black uppercase tracking-widest pb-4 border-b-2 transition-all ${activeTab === "propostas" ? "border-purple-500 text-white" : "border-transparent text-slate-500 hover:text-slate-300"}`}
                >
                  Propostas
                </button>
                <button 
                  onClick={() => setActiveTab("contratos")}
                  className={`text-[10px] font-black uppercase tracking-widest pb-4 border-b-2 transition-all ${activeTab === "contratos" ? "border-purple-500 text-white" : "border-transparent text-slate-500 hover:text-slate-300"}`}
                >
                  Contratos
                </button>
             </div>
          </CardHeader>
          <CardContent className="p-4 space-y-1">
            <div className="divide-y divide-white/[0.06]">
              {proposals.map((item) => (
                <div key={item.id} className="p-6 flex items-center justify-between hover:bg-white/[0.04] transition-all rounded-3xl group cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-fuchsia-400 group-hover:border-purple-500/30 transition-all">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-black italic text-lg text-white tracking-tighter">{item.client}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.date} • {item.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/5 ${
                      item.status === "ACCEPTED" ? "bg-emerald-500/15 text-emerald-400" : 
                      item.status === "EXPIRED" ? "bg-rose-500/15 text-rose-400" : 
                      "bg-amber-500/15 text-amber-400"
                    }`}>
                      {item.status === "ACCEPTED" ? "Aceita" : item.status === "EXPIRED" ? "Expirada" : "Enviada"}
                    </span>
                    <button className="h-10 w-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-all">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar Creation Magic */}
        <div className="lg:col-span-2 space-y-8">
           <Card className="glass border-purple-400/20 rounded-[2.5rem] bg-gradient-to-br from-purple-500/15 to-purple-500/10 overflow-hidden shadow-3xl">
              <CardHeader className="p-8 pb-4">
                 <CardTitle className="text-white text-xl font-black italic flex items-center gap-2 tracking-tighter">
                    <Sparkles className="w-6 h-6 text-fuchsia-400" /> Proposta Rápida
                 </CardTitle>
                 <CardDescription className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Crie um documento lindo em segundos.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                 <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nome do Cliente</Label>
                    <Input placeholder="Ex: Hamburgueria do João" className="bg-black/40 border-white/10 h-12 rounded-xl text-white font-bold" />
                 </div>
                 <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Qual plano ele vai querer?</Label>
                    <div className="grid grid-cols-2 gap-3">
                       <Button size="sm" variant="outline" className="h-10 rounded-xl text-[10px] font-black uppercase tracking-widest bg-purple-500/15 border-purple-500/40 text-fuchsia-300">Plano Pro</Button>
                       <Button size="sm" variant="outline" className="h-10 rounded-xl text-[10px] font-black uppercase tracking-widest bg-transparent border-white/10 text-slate-400">Plano Basic</Button>
                    </div>
                 </div>
                 <Button className="w-full h-12 bg-white text-black hover:bg-slate-200 font-black text-xs uppercase tracking-widest rounded-xl shadow-2xl">
                    <Send className="w-4 h-4 mr-2" /> Gerar Proposta PDF
                 </Button>
              </CardContent>
           </Card>

           <Card className="glass border-white/5 rounded-[2.5rem] bg-[#0a0616] p-8 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                 <FileSignature className="w-20 h-20 text-emerald-400" />
              </div>
              <h3 className="text-white font-black italic text-lg tracking-tighter mb-6 flex items-center gap-2">
                 Assinaturas.
              </h3>
              <div className="space-y-4">
                 <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                    <div className="flex justify-between items-center">
                       <p className="font-black italic text-white tracking-tighter">Burger House</p>
                       <span className="text-[9px] text-amber-500 font-black uppercase tracking-widest">Aguardando</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
                       <div className="w-[65%] h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    </div>
                    <p className="text-[10px] text-slate-500 italic font-medium">"O cliente só precisa assinar agora"</p>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  )
}
