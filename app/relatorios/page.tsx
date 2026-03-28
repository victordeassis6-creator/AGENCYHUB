"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  FilePieChart, Download, FileText, 
  TrendingUp, Users, Smartphone, Share2, 
  Calendar, CheckCircle2, ChevronRight,
  Mail, Send, Sparkles, Filter, 
  ArrowUpRight, BarChart3, PieChart as PieChartIcon,
  MousePointer2, Brain, Loader2
} from "lucide-react"
import { toast } from "sonner"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

function getTextFromMessages(messages: any[]): string {
  const last = messages[messages.length - 1]
  if (!last || last.role !== 'assistant') return "Nossa IA está analisando os dados..."
  if (last.content) return last.content
  if (last.parts) {
    return last.parts
      .filter((p: any) => p.type === 'text')
      .map((p: any) => p.text)
      .join('')
  }
  return "Nossa IA está analisando os dados..."
}

export default function ReportsPage() {
  const [step, setStep] = useState(1)
  
  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { type: 'report' }
    }),
    onFinish: () => {
       toast.success("Relatório pronto! 📈")
    }
  })

  const isBusy = status === 'submitted' || status === 'streaming'

  const reports = [
    { id: "1", client: "Burger House", period: "Março 2026", status: "READY", views: "+15k", followers: "+240" },
    { id: "2", client: "Sushi Real", period: "Fevereiro 2026", status: "READY", views: "+12k", followers: "+180" },
    { id: "3", client: "Clínica Odonto", period: "Março 2026", status: "DRAFT", views: "-", followers: "-" },
  ]

  const aiSummary = getTextFromMessages(messages)

  const startGeneration = async () => {
    setStep(3);
    sendMessage({
      text: 'Gere um resumo estratégico simples para o cliente Burger House com base nos seguintes dados: 45.000 pessoas viram o vídeo, 840 cliques no link, R$ 1.450 gastos em propagandas.'
    });
  }

  return (
    <div className="space-y-10 lg:space-y-14 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white flex items-center gap-3">
             Como estamos indo. <FilePieChart className="w-7 h-7 text-indigo-400" />
          </h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest pl-1">Veja de um jeito simples como estão os seus vídeos.</p>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" className="h-12 border-white/10 glass text-indigo-400 hover:text-white rounded-2xl bg-transparent font-black text-[10px] uppercase tracking-widest px-6">
              <Filter className="w-4 h-4 mr-2" /> Programar Envio
           </Button>
           <Button onClick={() => setStep(2)} className="h-12 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-indigo-500/20">
             <TrendingUp className="w-4 h-4 mr-2" /> Criar Novo Resumo
           </Button>
        </div>
      </div>

      {step === 2 && (
        <Card className="glass border-indigo-500/20 bg-indigo-500/5 rounded-[2.5rem] p-12 text-center animate-fade-in-up shadow-3xl">
           <div className="max-w-md mx-auto space-y-8">
              <div className="h-20 w-20 bg-indigo-500/20 rounded-[2rem] flex items-center justify-center mx-auto text-indigo-400 border border-indigo-500/30">
                 <Sparkles className="w-10 h-10 animate-pulse" />
              </div>
              <div className="space-y-2">
                 <h3 className="text-2xl font-black italic text-white tracking-tighter">Criar Resumo com IA</h3>
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Vou ler todos os números do mês e te explicar o que aconteceu.</p>
              </div>
              <div className="grid gap-4">
                 <div className="bg-black/40 p-5 rounded-2xl border border-white/5 text-left flex items-center justify-between">
                    <div>
                        <p className="text-white font-black text-lg">Burger House</p>
                        <p className="text-[10px] text-indigo-400 uppercase font-black tracking-widest">Mês de Março</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                       <CheckCircle2 className="text-emerald-500 w-4 h-4" />
                    </div>
                 </div>
              </div>
              <Button onClick={startGeneration} disabled={isBusy} className="w-full h-14 bg-white text-black hover:bg-slate-200 font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl">
                 {isBusy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Conversando com a IA...</> : "Gerar Resumo Mágico"}
              </Button>
           </div>
        </Card>
      )}

      {step === 3 && (
        <div className="grid lg:grid-cols-4 gap-8 animate-fade-in-up">
           <Card className="lg:col-span-3 glass border-white/5 bg-white/[0.01] rounded-[2.5rem] overflow-hidden shadow-3xl">
              <div className="p-10 space-y-10">
                 <div className="flex justify-between items-start">
                    <div>
                       <h3 className="text-4xl font-black italic text-white tracking-tighter">Deu tudo certo! 📈</h3>
                       <p className="text-emerald-400 font-black text-[10px] mt-2 uppercase tracking-[0.3em] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" /> Burger House • Março 2026
                       </p>
                    </div>
                    <div className="flex gap-3">
                       <Button size="sm" variant="outline" className="h-10 border-white/10 text-slate-400 font-black text-[9px] uppercase tracking-widest px-4 rounded-xl">Ver no Site</Button>
                       <Button size="sm" className="h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[9px] uppercase tracking-widest px-6 rounded-xl shadow-lg shadow-emerald-500/20">Mandar p/ WhatsApp <Send className="w-3.5 h-3.5 ml-2" /></Button>
                    </div>
                 </div>

                 <div className="grid md:grid-cols-3 gap-6">
                    {[
                       { label: "Pessoas que viram", val: "45.280", trend: "+12%", color: "text-indigo-400" },
                       { label: "Dinheiro investido", val: "R$ 1.450", trend: "+5%", color: "text-purple-400" },
                       { label: "Pessoas que clicaram", val: "840", trend: "+24%", color: "text-emerald-400" },
                    ].map((m, i) => (
                       <div key={i} className="p-6 rounded-[2rem] bg-black/40 border border-white/5 relative overflow-hidden group">
                          <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-125 transition-transform"><BarChart3 className="w-20 h-20 text-white" /></div>
                          <p className="text-[10px] text-slate-500 font-black uppercase mb-3 tracking-widest">{m.label}</p>
                          <div className="flex items-baseline gap-2">
                             <p className={`text-3xl font-black text-white italic tracking-tighter`}>{m.val}</p>
                             <span className="text-[10px] text-emerald-400 font-black">{m.trend}</span>
                          </div>
                       </div>
                    ))}
                 </div>

                 <div className="p-8 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><Brain className="w-24 h-24 text-indigo-400" /></div>
                    <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-3">
                       <Sparkles className="w-4 h-4 text-indigo-400" /> O que a IA descobriu
                    </p>
                    <div className="text-lg text-slate-300 leading-relaxed font-medium italic pr-12">
                       {aiSummary}
                    </div>
                 </div>
              </div>
           </Card>

           <div className="space-y-6">
              <Card className="glass border-white/5 rounded-[2.5rem] p-8 shadow-2xl bg-white/[0.01]">
                 <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 italic">Como está indo a meta?</h4>
                 <div className="space-y-6">
                    <div className="flex justify-between text-xs font-black text-white uppercase tracking-widest"><span>Vendas</span> <span>85%</span></div>
                    <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                       <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 w-[85%] shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-bold italic">Falta só 15% para batermos o que combinamos no início do mês! 🚀</p>
                 </div>
              </Card>
           </div>
        </div>
      )}

      {step === 1 && (
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 glass border-white/[0.06] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <CardHeader className="p-8 border-b border-white/5"><CardTitle className="text-white text-lg font-bold italic">Resumos Guardados</CardTitle></CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-white/[0.06]">
                {reports.map((report) => (
                  <div key={report.id} className="p-8 flex items-center justify-between hover:bg-white/[0.02] transition-all group cursor-pointer">
                    <div className="flex items-center gap-6">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-indigo-500/30 transition-all">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-lg italic tracking-tighter">{report.client}</p>
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{report.period}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <Button size="icon" variant="ghost" className="h-10 w-10 border border-white/5 text-slate-500 hover:text-white rounded-xl"><Download className="w-4 h-4" /></Button>
                       <Button size="icon" variant="ghost" className="h-10 w-10 border border-white/5 text-slate-500 hover:text-white rounded-xl"><Send className="w-4 h-4" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-indigo-500/20 rounded-[2.5rem] p-10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex flex-col justify-center text-center shadow-3xl">
             <div className="space-y-6">
                <div className="h-20 w-20 bg-white/10 rounded-full mx-auto flex items-center justify-center border border-white/10">
                   <Mail className="w-10 h-10 text-indigo-400" />
                </div>
                <div className="space-y-2">
                   <h3 className="text-white font-black italic text-2xl tracking-tighter">Mandar para o Cliente</h3>
                   <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-widest">Mande tudo direto no WhatsApp e Email.</p>
                </div>
                <Button className="w-full h-14 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-2xl">Configurar Envio Automático</Button>
             </div>
          </Card>
        </div>
      )}
    </div>
  )
}
