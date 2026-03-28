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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-400" /> Vendas & Propostas
          </h2>
          <p className="text-slate-500 text-sm font-medium">Transforme prospects em clientes pagantes com um clique.</p>
        </div>
        <Button onClick={() => toast("Criar Proposta...")} className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl px-6 h-11">
          <Plus className="w-4 h-4 mr-2" /> Nova Proposta
        </Button>
      </div>

      <div className="grid lg:grid-cols-7 gap-6">
        {/* Main List */}
        <Card className="lg:col-span-5 glass border-white/[0.06] rounded-2xl overflow-hidden">
          <CardHeader className="border-b border-white/[0.06] flex flex-row items-center justify-between pb-4">
             <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTab("propostas")}
                  className={`text-sm font-bold pb-1 transition-all border-b-2 ${activeTab === "propostas" ? "border-indigo-500 text-white" : "border-transparent text-slate-500"}`}
                >
                  Propostas
                </button>
                <button 
                  onClick={() => setActiveTab("contratos")}
                  className={`text-sm font-bold pb-1 transition-all border-b-2 ${activeTab === "contratos" ? "border-indigo-500 text-white" : "border-transparent text-slate-500"}`}
                >
                  Contratos Ativos
                </button>
             </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-white/[0.06]">
              {proposals.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-200">{item.client}</p>
                      <p className="text-[11px] text-slate-500">{item.date} • {item.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      item.status === "ACCEPTED" ? "bg-emerald-500/15 text-emerald-400" : 
                      item.status === "EXPIRED" ? "bg-rose-500/15 text-rose-400" : 
                      "bg-amber-500/15 text-amber-400"
                    }`}>
                      {item.status === "ACCEPTED" ? "Aceita" : item.status === "EXPIRED" ? "Expirada" : "Enviada"}
                    </span>
                    <button className="h-9 w-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-all">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar Creation Magic */}
        <div className="lg:col-span-2 space-y-6">
           <Card className="glass border-indigo-500/20 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 overflow-hidden">
              <CardHeader className="pb-3">
                 <CardTitle className="text-white text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" /> Proposta Relâmpago
                 </CardTitle>
                 <CardDescription className="text-slate-500 text-xs">Crie e envie em PDF em 10 segundos.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label className="text-[10px] font-bold text-slate-500 uppercase">Nome do Lead</Label>
                    <Input placeholder="Ex: Hamburgueria do João" className="glass h-9 text-xs" />
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[10px] font-bold text-slate-500 uppercase">Pacote Sugerido</Label>
                    <div className="grid grid-cols-2 gap-2">
                       <Button size="sm" variant="outline" className="h-8 rounded-lg text-[10px] bg-indigo-500/10 border-indigo-500/40 text-indigo-300">Plano Pro</Button>
                       <Button size="sm" variant="outline" className="h-8 rounded-lg text-[10px] bg-transparent border-white/10 text-slate-400">Plano Basic</Button>
                    </div>
                 </div>
                 <Button className="w-full btn-lift h-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xs rounded-xl">
                    <Send className="w-3.5 h-3.5 mr-2" /> Gerar Proposta PDF
                 </Button>
              </CardContent>
           </Card>

           <Card className="glass border-white/[0.06] rounded-2xl">
              <CardHeader className="pb-3">
                 <CardTitle className="text-white text-base flex items-center gap-2">
                    <FileSignature className="w-4 h-4 text-emerald-400" /> Assinaturas Pendentes
                 </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                 <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex justify-between items-center">
                       <p className="text-xs font-bold text-slate-200">Burger House</p>
                       <span className="text-[9px] text-amber-500 font-bold uppercase">Aguardando</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                       <div className="w-1/2 h-full bg-emerald-500" />
                    </div>
                    <p className="text-[10px] text-slate-500 italic">"Falta o cliente assinar"</p>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
