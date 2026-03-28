"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Plus, MoreHorizontal, ExternalLink } from "lucide-react"
import { toast } from "sonner"

export default function ClientesPage() {
  const clients = [
    { id: "1", name: "Burger House", niche: "Hamburgueria", status: "Ativo", plan: "Pro", color: "from-orange-400 to-red-500" },
    { id: "2", name: "Sushi Real", niche: "Japonês", status: "Ativo", plan: "Basic", color: "from-rose-400 to-pink-500" },
    { id: "3", name: "Clínica Odonto", niche: "Saúde", status: "Ativo", plan: "Pro", color: "from-cyan-400 to-blue-500" },
    { id: "4", name: "Hotel Paraíso", niche: "Turismo", status: "Pausado", plan: "Basic", color: "from-violet-400 to-purple-500" },
    { id: "5", name: "Tech Store", niche: "E-commerce", status: "Ativo", plan: "Pro", color: "from-emerald-400 to-teal-500" },
  ]

  return (
    <div className="animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Clientes</h2>
          <p className="text-slate-500 text-sm">Gerencie todos os clientes da sua agência.</p>
        </div>
        <Button onClick={() => toast("Solicitar Novo Cliente")} className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 rounded-xl">
          <Plus className="w-4 h-4 mr-2" /> Adicionar Cliente
        </Button>
      </div>

      <div className="animate-fade-in-up-delay-1">
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
          <Input placeholder="Buscar por nome ou nicho..." className="pl-10 glass border-white/[0.06] rounded-xl h-11 text-slate-200 placeholder:text-slate-500 focus:border-indigo-500/40 focus:ring-indigo-500/20" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up-delay-2">
        {clients.map((client) => (
          <Card key={client.id} className="card-hover glass border-white/[0.06] rounded-2xl overflow-hidden cursor-pointer group">
            <div className={`h-1.5 bg-gradient-to-r ${client.color}`} />
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">{client.name}</p>
                    <p className="text-xs text-slate-500">{client.niche} • Plano {client.plan}</p>
                  </div>
                </div>
                <button className="btn-scale h-8 w-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/10 bg-transparent">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${client.status === 'Ativo' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'}`}>
                  {client.status}
                </span>
                <button className="btn-scale flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                  Ver Painel <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="card-hover border-2 border-dashed border-white/10 bg-transparent rounded-2xl cursor-pointer hover:border-indigo-500/30 hover:bg-indigo-500/5 group flex items-center justify-center min-h-[160px]" onClick={() => toast("Novo Cliente")}>
          <div className="text-center">
            <div className="h-12 w-12 mx-auto rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-500 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors mb-3">
              <Plus className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-slate-500 group-hover:text-indigo-400 transition-colors">Novo Cliente</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
