"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  FilePieChart, Download, FileText, 
  TrendingUp, Users, Instagram, Share2, 
  Calendar, CheckCircle2, ChevronRight,
  Mail, Send, Sparkles, Filter, 
  ArrowUpRight, BarChart3, PieChart as PieChartIcon,
  MousePointer2
} from "lucide-react"
import { toast } from "sonner"

export default function ReportsPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [step, setStep] = useState(1)

  const reports = [
    { id: "1", client: "Burger House", period: "Março 2026", status: "READY", views: "+15k", followers: "+240" },
    { id: "2", client: "Sushi Real", period: "Fevereiro 2026", status: "READY", views: "+12k", followers: "+180" },
    { id: "3", client: "Clínica Odonto", period: "Março 2026", status: "DRAFT", views: "-", followers: "-" },
  ]

  const startGeneration = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setStep(3)
      toast.success("Relatório gerado com sucesso! 📈")
    }, 3000)
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <FilePieChart className="w-6 h-6 text-indigo-400" /> Relatórios de Performance
          </h2>
          <p className="text-slate-500 text-sm font-medium">Extração de dados automática das APIs do Facebook e Instagram.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="glass border-white/10 text-slate-400 h-11 px-6 rounded-xl bg-transparent">
              <Filter className="w-4 h-4 mr-2" /> Agendar Automação
           </Button>
           <Button onClick={() => setStep(2)} className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl px-6 h-11">
             <TrendingUp className="w-4 h-4 mr-2" /> Novo Relatório
           </Button>
        </div>
      </div>

      {step === 2 && (
        <Card className="glass border-indigo-500/20 bg-indigo-500/5 rounded-3xl p-8 text-center animate-fade-in-up">
           <div className="max-w-md mx-auto space-y-6">
              <div className="h-16 w-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto text-indigo-400">
                 <Sparkles className="w-8 h-8" />
              </div>
              <div>
                 <h3 className="text-xl font-bold text-white">Gerar Relatório Estratégico</h3>
                 <p className="text-slate-500 text-sm mt-2">Nossa IA está conectando aos servidores do Meta para consolidar as métricas de Março.</p>
              </div>
              <div className="grid gap-3">
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-left flex items-center justify-between">
                    <div>
                        <p className="text-white font-bold text-sm">Burger House</p>
                        <p className="text-[10px] text-slate-500 uppercase font-black">Periodo: 01/03 - 28/03</p>
                    </div>
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                 </div>
              </div>
              <Button onClick={startGeneration} disabled={isGenerating} className="w-full h-12 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-2xl">
                 {isGenerating ? "Processando APIs (Meta & IG)..." : "Iniciar Geração"}
              </Button>
           </div>
        </Card>
      )}

      {step === 3 && (
        <div className="grid lg:grid-cols-4 gap-6 animate-fade-in-up">
           <Card className="lg:col-span-3 glass border-emerald-500/20 bg-emerald-500/5 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-8 space-y-8">
                 <div className="flex justify-between items-start">
                    <div>
                       <h3 className="text-3xl font-black italic text-white tracking-tighter">Relatório Consolidado 📈</h3>
                       <p className="text-emerald-400 font-bold text-sm mt-1 uppercase tracking-widest">Burger House • Março 2026</p>
                    </div>
                    <div className="flex gap-2">
                       <Button size="sm" variant="outline" className="border-white/10 text-slate-300">Preview Web</Button>
                       <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">Enviar p/ Cliente <Send className="w-4 h-4 ml-2" /></Button>
                    </div>
                 </div>

                 <div className="grid md:grid-cols-3 gap-6">
                    {[
                       { label: "Alcance Total", val: "45.280", trend: "+12%", color: "text-indigo-400" },
                       { label: "Investimento Ads", val: "R$ 1.450", trend: "+5%", color: "text-purple-400" },
                       { label: "Cliques no Link", val: "840", trend: "+24%", color: "text-emerald-400" },
                    ].map((m, i) => (
                       <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5">
                          <p className="text-[10px] text-slate-500 font-black uppercase mb-2 tracking-widest">{m.label}</p>
                          <div className="flex items-baseline gap-2">
                             <p className={`text-2xl font-black text-white italic`}>{m.val}</p>
                             <span className="text-[10px] text-emerald-400 font-bold">{m.trend}</span>
                          </div>
                       </div>
                    ))}
                 </div>

                 <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                    <p className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2"><Brain className="w-4 h-4 text-indigo-400" /> Resumo Estratégico da IA</p>
                    <p className="text-sm text-slate-400 leading-relaxed italic">
                       "O mês de Março apresentou uma alta eficiência no tráfego pago focado em 'Mensagens'. O custo por lead baixou de R$ 2,10 para R$ 1,72. Recomendamos manter a estratégia de vídeos de bastidores (Reels) que gerou o pico de engajamento no dia 15."
                    </p>
                 </div>
              </div>
           </Card>

           <div className="space-y-6">
              <Card className="glass border-white/10 rounded-3xl p-6">
                 <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Meta de Conversão</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold text-slate-300"><span>Vendas vs Meta</span> <span>85%</span></div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500 w-[85%]" />
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed">Você está a 15% de bater a meta de ROI estabelecida no início do mês.</p>
                 </div>
              </Card>
           </div>
        </div>
      )}

      {step === 1 && (
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 glass border-white/[0.06] rounded-2xl overflow-hidden">
            <CardHeader className="pb-4"><CardTitle className="text-white text-lg font-bold">Relatórios Recentes</CardTitle></CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-white/[0.06]">
                {reports.map((report) => (
                  <div key={report.id} className="p-5 flex items-center justify-between hover:bg-white/[0.02] transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-indigo-500/30 transition-all">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-200">{report.client}</p>
                        <p className="text-xs text-slate-500 font-medium">{report.period}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <Button size="icon" variant="ghost" className="h-9 w-9 border border-white/5 text-slate-500 hover:text-white"><Download className="w-4 h-4" /></Button>
                       <Button size="icon" variant="ghost" className="h-9 w-9 border border-white/5 text-slate-500 hover:text-white"><Send className="w-4 h-4" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-indigo-500/20 rounded-3xl p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
             <div className="text-center space-y-4 py-8">
                <div className="h-16 w-16 bg-white/5 rounded-full mx-auto flex items-center justify-center border border-white/10">
                   <Mail className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-white font-bold italic text-lg tracking-tighter">Envio Automático</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Os clientes recebem o PDF de resultados no 1º dia útil de cada mês via email e WhatsApp.</p>
                <Button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold h-11 rounded-xl">Configurar Agendamento</Button>
             </div>
          </Card>
        </div>
      )}
    </div>
  )
}
