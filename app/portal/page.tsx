"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  CheckSquare, Calendar, BarChart3, Upload, 
  MessageCircle, Star, Sparkles, CheckCircle2, 
  XCircle, Clock, ExternalLink 
} from "lucide-react"
import { toast } from "sonner"

export default function ClientPortalPage() {
  const contentToApprove = [
    { id: "1", title: "Reels: Receita Secreta", type: "REEL", date: "28/03", status: "PENDING" },
    { id: "2", title: "Post: Combo Sextou", type: "POST", date: "29/03", status: "PENDING" },
  ]

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Banner / Boas-vindas */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
        <div className="relative">
          <p className="text-sm font-semibold text-white/80 mb-2 uppercase tracking-widest italic">Hub do Parceiro</p>
          <h2 className="text-4xl font-black italic tracking-tighter">Burger House 🍔</h2>
          <p className="text-white/70 mt-3 text-lg font-medium max-w-xl">
            Acompanhe a sua estratégia digital, aprove conteúdos e veja seus resultados em tempo real.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-7 gap-8">
        {/* Painel de Aprovação Core */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="glass border-white/[0.06] rounded-3xl overflow-hidden shadow-xl">
            <CardHeader className="border-b border-white/[0.06] pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl font-black italic text-white leading-tight">
                <CheckSquare className="w-8 h-8 text-indigo-400" /> 
                Aprovação de Conteúdo
              </CardTitle>
              <CardDescription className="text-slate-500 font-medium">Diga para a agência o que achou dos próximos posts.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y divide-white/[0.06]">
                 {contentToApprove.map((item) => (
                   <div key={item.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-all">
                      <div className="flex items-center gap-5">
                         <div className="h-16 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 text-[10px] font-black italic shadow-inner">PREVIEW</div>
                         <div>
                            <p className="font-bold text-white text-lg leading-tight">{item.title}</p>
                            <p className="text-xs text-slate-500 mt-1 font-medium italic uppercase tracking-wider">{item.type} • Agendado para {item.date}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <button onClick={() => toast.success("Conteúdo aprovado! ✅")} className="h-11 px-5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-2">
                           <CheckCircle2 className="w-4 h-4" /> Aprovar
                         </button>
                         <button onClick={() => toast.error("Pedido de ajuste enviado!")} className="h-11 px-5 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold hover:bg-rose-500 hover:text-white transition-all flex items-center gap-2">
                           <XCircle className="w-4 h-4" /> Ajustes
                         </button>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="p-6 bg-white/[0.02] text-center">
                  <button className="text-xs font-bold text-slate-500 hover:text-indigo-400 transition-colors">Ver histórico completo de aprovações</button>
               </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
             <Card className="glass border-white/[0.06] rounded-3xl p-6 space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                   <Upload className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-white">Enviar Mídia</h3>
                   <p className="text-xs text-slate-500 mt-1">Suba novas fotos e vídeos para a agência trabalhar.</p>
                </div>
                <Button className="w-full h-11 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 font-bold">Upload de Fotos/Vídeos</Button>
             </Card>
             <Card className="glass border-white/[0.06] rounded-3xl p-6 space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                   <MessageCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-white">Briefing Rápido</h3>
                   <p className="text-xs text-slate-500 mt-1">Tem uma ideia? Mande agora para o nosso time.</p>
                </div>
                <Button className="w-full h-11 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 font-bold">Enviar Sugestão</Button>
             </Card>
          </div>
        </div>

        {/* Sidebar Insights Portal */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="glass border-white/[0.06] rounded-3xl overflow-hidden shadow-xl">
             <div className="h-1 bg-gradient-to-r from-emerald-400 to-indigo-500" />
             <CardHeader className="pb-4">
                <CardTitle className="text-white text-xl font-black italic tracking-tighter flex items-center gap-2">
                   <BarChart3 className="w-6 h-6 text-emerald-400" /> 
                   Performance Atual
                </CardTitle>
                <CardDescription className="text-slate-500 text-xs font-bold uppercase tracking-widest">Últimos 30 dias</CardDescription>
             </CardHeader>
             <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Engajamento</p>
                      <p className="text-2xl font-black text-emerald-400">+12%</p>
                   </div>
                   <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Alcance</p>
                      <p className="text-2xl font-black text-indigo-400">45k</p>
                   </div>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-4">
                   <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white uppercase tracking-widest">Post Mais Forte</p>
                      <span className="text-[10px] bg-pink-500 text-white px-2 py-0.5 rounded-md font-bold italic">VIRAL 🚀</span>
                   </div>
                   <div className="aspect-video bg-indigo-500/20 rounded-xl flex items-center justify-center text-[10px] font-black text-white italic">BURGER REELS PREVIEW</div>
                   <p className="text-sm text-slate-300 font-medium">O post "Receita Secreta" alcançou <strong className="text-emerald-400">12x mais</strong> pessoas que a média.</p>
                </div>
                <Button className="w-full h-12 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl flex items-center gap-2 mb-2">
                   <ExternalLink className="w-4 h-4" /> Ver Relatório Completo
                </Button>
             </CardContent>
          </Card>

          <Card className="glass border-amber-500/20 rounded-3xl bg-amber-500/5 relative overflow-hidden">
             <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-amber-500/10 blur-[60px] rounded-full" />
             <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg font-bold flex items-center gap-2"><Sparkles className="w-5 h-5 text-amber-400" /> Próxima Oportunidade</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-sm text-amber-200 leading-relaxed font-medium">
                   "Faltam <strong className="text-white">5 dias</strong> para o Dia do Nutricionista. Queremos sugerir um post sobre a qualidade dos seus ingredientes orgânicos?"
                </p>
                <div className="mt-4 flex gap-2">
                   <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-xl h-9 flex-1">Sim, vamos!</Button>
                   <Button size="sm" variant="outline" className="h-9 rounded-xl border-white/10 text-slate-400 hover:text-white bg-transparent flex-1">Agora não</Button>
                </div>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
