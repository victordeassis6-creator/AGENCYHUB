"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ArrowUpCircle, ArrowDownCircle, Wallet, 
  TrendingUp, Calendar, ArrowRight,
  Plus, Search, Filter, Download
} from "lucide-react"
import { toast } from "sonner"

export default function FinanceiroPage() {
  const [activeTab, setActiveTab] = useState("todos")

  const transactions = [
    { id: 1, type: "ganho", title: "Pagamento: Burger House", val: "R$ 4.500", date: "Hoje", category: "Mensalidade" },
    { id: 2, type: "gasto", title: "Assinatura Adobe Cloud", val: "R$ 250", date: "Ontem", category: "Ferramentas" },
    { id: 3, type: "ganho", title: "Pagamento: Sushi Real", val: "R$ 3.800", date: "Ontem", category: "Mensalidade" },
    { id: 4, type: "gasto", title: "Posto Shell (Combustível)", val: "R$ 180", date: "26/03", category: "Logística" },
  ]

  return (
    <div className="space-y-10 lg:space-y-14 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white">Meu Cofre.</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest pl-1">Acompanhe o dinheiro que entra e o que sai da sua agência.</p>
        </div>
        <Button onClick={() => toast("Adicionar novo registro")} className="h-12 px-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-emerald-500/20">
          <Plus className="w-4 h-4 mr-2" /> Novo Registro
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <Card className="glass border-white/5 rounded-[2.5rem] p-8 shadow-3xl bg-emerald-500/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
              <ArrowUpCircle className="w-20 h-20 text-emerald-400" />
           </div>
           <p className="text-[10px] font-black uppercase text-emerald-400 tracking-[0.3em] mb-4">Ganhos (Mês)</p>
           <h3 className="text-4xl font-black italic text-white tracking-tighter">R$ 12.450</h3>
           <p className="text-xs text-emerald-400/60 font-medium mt-2">+12% em relação ao mês passado</p>
        </Card>

        <Card className="glass border-white/5 rounded-[2.5rem] p-8 shadow-3xl bg-rose-500/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:-rotate-12 transition-transform">
              <ArrowDownCircle className="w-20 h-20 text-rose-400" />
           </div>
           <p className="text-[10px] font-black uppercase text-rose-400 tracking-[0.3em] mb-4">Gastos (Mês)</p>
           <h3 className="text-4xl font-black italic text-white tracking-tighter">R$ 3.200</h3>
           <p className="text-xs text-rose-400/60 font-medium mt-2">Dentro do esperado</p>
        </Card>

        <Card className="glass border-white/5 rounded-[2.5rem] p-8 shadow-3xl bg-purple-500/15 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <Wallet className="w-20 h-20 text-fuchsia-400" />
           </div>
           <p className="text-[10px] font-black uppercase text-fuchsia-400 tracking-[0.3em] mb-4">Sobrou (Saldo)</p>
           <h3 className="text-4xl font-black italic text-white tracking-tighter">R$ 9.250</h3>
           <p className="text-xs text-fuchsia-400/60 font-medium mt-2">Pronto para investir</p>
        </Card>
      </div>

      <div className="space-y-6">
         <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex gap-6">
               <button 
                  onClick={() => setActiveTab("todos")}
                  className={`text-xs font-black uppercase tracking-widest pb-4 border-b-2 transition-all ${activeTab === "todos" ? "border-purple-500 text-white" : "border-transparent text-slate-500 hover:text-slate-300"}`}
               >
                  Ver Tudo
               </button>
               <button 
                  onClick={() => setActiveTab("ganhos")}
                  className={`text-xs font-black uppercase tracking-widest pb-4 border-b-2 transition-all ${activeTab === "ganhos" ? "border-emerald-500 text-white" : "border-transparent text-slate-500 hover:text-slate-300"}`}
               >
                  Dinheiro que Entra
               </button>
               <button 
                  onClick={() => setActiveTab("gastos")}
                  className={`text-xs font-black uppercase tracking-widest pb-4 border-b-2 transition-all ${activeTab === "gastos" ? "border-rose-500 text-white" : "border-transparent text-slate-500 hover:text-slate-300"}`}
               >
                  Dinheiro que Sai
               </button>
            </div>
            <Button variant="ghost" className="text-slate-500 hover:text-white"><Download className="w-4 h-4 mr-2" /> Exportar</Button>
         </div>

         <Card className="glass border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="p-4 space-y-1">
               {transactions.filter(t => activeTab === "todos" || (activeTab === "ganhos" && t.type === "ganho") || (activeTab === "gastos" && t.type === "gasto")).map((t, i) => (
                  <div key={t.id} className="group flex items-center justify-between p-6 rounded-3xl hover:bg-white/[0.04] transition-all cursor-pointer">
                     <div className="flex items-center gap-6">
                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center border ${t.type === 'ganho' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`}>
                           {t.type === 'ganho' ? <ArrowUpCircle className="w-6 h-6" /> : <ArrowDownCircle className="w-6 h-6" />}
                        </div>
                        <div>
                           <p className="font-black italic text-lg text-white tracking-tighter">{t.title}</p>
                           <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.category} • {t.date}</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className={`text-xl font-black italic tracking-tighter ${t.type === 'ganho' ? 'text-emerald-400' : 'text-white'}`}>
                           {t.type === 'ganho' ? '+' : '-'} {t.val}
                        </p>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors">Concluído</p>
                     </div>
                  </div>
               ))}
            </div>
         </Card>
      </div>
    </div>
  )
}
