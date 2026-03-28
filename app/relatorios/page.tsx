"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  FilePieChart, Download, FileText, 
  TrendingUp, Users, Instagram, Share2, 
  Calendar, CheckCircle2, ChevronRight 
} from "lucide-react"
import { toast } from "sonner"

export default function ReportsPage() {
  const reports = [
    { id: "1", client: "Burger House", period: "Março 2026", status: "READY", views: "+15k", followers: "+240" },
    { id: "2", client: "Sushi Real", period: "Fevereiro 2026", status: "READY", views: "+12k", followers: "+180" },
    { id: "3", client: "Clínica Odonto", period: "Março 2026", status: "DRAFT", views: "-", followers: "-" },
  ]

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <FilePieChart className="w-6 h-6 text-indigo-400" /> Relatórios Mensais
          </h2>
          <p className="text-slate-500 text-sm font-medium">Resultados e performance automatizados para seus clientes.</p>
        </div>
        <Button onClick={() => toast("Gerar Novo Relatório...")} className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl px-6 h-11">
          <TrendingUp className="w-4 h-4 mr-2" /> Gerar Relatório
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 glass border-white/[0.06] rounded-2xl overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-lg font-bold">Histórico de Relatórios</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-white/[0.06]">
              {reports.map((report) => (
                <div key={report.id} className="p-5 flex items-center justify-between hover:bg-white/[0.02] transition-all group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-200">{report.client}</p>
                      <p className="text-xs text-slate-500">{report.period}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-8 text-center text-[11px] font-bold uppercase tracking-wider">
                       <div className="text-slate-500">Impressões <p className="text-emerald-400 text-sm mt-0.5">{report.views}</p></div>
                       <div className="text-slate-500">Likes/Saves <p className="text-indigo-400 text-sm mt-0.5">{report.followers}</p></div>
                    </div>
                    <div className="flex items-center gap-2">
                       {report.status === "READY" ? (
                          <Button size="sm" variant="outline" className="h-9 rounded-xl border-emerald-500/30 text-emerald-400 bg-transparent hover:bg-emerald-500/10">
                             <Download className="w-4 h-4 mr-2" /> Baixar PDF
                          </Button>
                       ) : (
                          <span className="text-[10px] font-bold text-slate-500 uppercase px-3 py-1.5 rounded-full bg-white/5 border border-white/10">Rascunho</span>
                       )}
                       <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
           <Card className="glass border-indigo-500/20 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
              <CardHeader className="pb-3">
                 <CardTitle className="text-white text-base">Automação de Relatórios</CardTitle>
                 <CardDescription className="text-slate-500 text-xs">Configure o envio automático por email.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-sm">
                    <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                       <span className="text-slate-300 font-medium">Envio no 1º dia do mês</span>
                    </div>
                    <div className="h-4 w-8 rounded-full bg-indigo-500 relative"><div className="h-3 w-3 bg-white rounded-full absolute top-0.5 right-0.5" /></div>
                 </div>
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-400 leading-relaxed italic">
                    "O relatório extrai dados do Instagram e Meta Ads automaticamente para todos os clientes ativos."
                 </div>
              </CardContent>
           </Card>

           <Card className="glass border-white/[0.06] rounded-2xl overflow-hidden">
              <CardHeader className="pb-3"><CardTitle className="text-white text-base flex items-center gap-2"><Instagram className="w-4 h-4 text-pink-500" /> Meta Insights</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="w-4/5 h-full bg-gradient-to-r from-pink-500 to-rose-500" />
                    </div>
                    <span className="text-xs font-bold text-slate-300">80%</span>
                 </div>
                 <p className="text-[10px] text-slate-500 text-center font-medium">Meta Ads está consumindo 80% do budget planejado para Março.</p>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
