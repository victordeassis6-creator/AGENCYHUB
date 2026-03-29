"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  CheckSquare, BarChart3, Upload, 
  MessageCircle, Sparkles, CheckCircle2, 
  XCircle, ExternalLink, Activity, Target
} from "lucide-react"
import { toast } from "sonner"

export default function ClientPortalPage() {
  const contentToApprove = [
    { id: "1", title: "Corte do Burger (Sinal do Chef)", type: "REEL", date: "Hoje", status: "PENDING" },
    { id: "2", title: "Post: Nosso Novo Menu", type: "FEED", date: "Amanhã", status: "PENDING" },
  ]

  return (
    <div className="animate-fade-in-up">
      {/* Premium Banner */}
      <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#0a0616] border border-[#1a1030] p-12 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
           <Activity className="w-48 h-48" />
        </div>
        <div className="relative z-10 max-w-xl">
          <p className="text-[10px] font-black uppercase text-fuchsia-400 tracking-[0.4em] mb-4 italic">Portal de Experiência</p>
          <h2 className="text-5xl font-black italic tracking-tighter text-white mb-6">Burger House.</h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
             Bem-vindo ao centro estratégico da sua marca. Aprove novos conteúdos e acompanhe suas mídias em tempo real.
          </p>
        </div>
        <div className="relative z-10 flex gap-4">
           <div className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-3xl min-w-[120px]">
              <p className="text-[10px] font-black text-slate-600 uppercase mb-1">Alcance</p>
              <p className="text-2xl font-black text-white italic">45.2k</p>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Content Approval Section */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center justify-between">
             <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-fuchsia-400" /> Aprovação de Conteúdo
             </h3>
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Aguardando sua revisão</span>
          </div>

          <div className="space-y-4">
             {contentToApprove.map((item) => (
                <div key={item.id} className="p-8 rounded-3xl bg-[#0a0616] border border-[#1a1030] hover:border-slate-800 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 group">
                   <div className="flex items-center gap-8">
                      <div className="h-24 w-16 bg-white/5 rounded-2xl flex items-center justify-center text-[10px] font-black italic text-slate-600 border border-white/5 group-hover:border-purple-400/20 overflow-hidden relative shadow-inner">
                         PREVIEW
                      </div>
                      <div>
                         <p className="text-xs font-black text-slate-600 uppercase tracking-widest mb-1 italic">{item.type} • {item.date}</p>
                         <p className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">{item.title}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <button onClick={() => toast.success("Aprovado!")} className="h-12 px-8 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all">Aprovar</button>
                      <button onClick={() => toast.error("Ajuste solicitado")} className="h-12 px-8 rounded-2xl bg-white/5 border border-white/5 text-slate-400 hover:text-white font-black text-xs uppercase tracking-widest transition-all">Ajustes</button>
                   </div>
                </div>
             ))}
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="lg:col-span-4 space-y-8">
           <Card className="bg-[#0a0616] border-[#1a1030] rounded-[2rem] p-8 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-1 w-full bg-purple-600" />
              <div>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Oportunidade Estratégica</p>
                 <p className="text-lg font-bold text-white leading-tight italic">O Dia do Hambúrguer é daqui a 5 dias.</p>
                 <p className="text-sm text-slate-500 mt-4 leading-relaxed">Sugerimos um evento de 'Open Burger' para seguidores. Quer que a IA monte o roteiro?</p>
              </div>
              <Button className="w-full h-12 bg-white/5 border border-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-2xl">Mais Detalhes</Button>
           </Card>

           <div className="grid grid-cols-2 gap-4">
              <div className="p-8 rounded-3xl bg-[#0a0616] border border-[#1a1030] flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/[0.02] transition-colors">
                 <Upload className="w-5 h-5 text-fuchsia-400 mb-3" />
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Enviar Mídia</span>
              </div>
              <div className="p-8 rounded-3xl bg-[#0a0616] border border-[#1a1030] flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/[0.02] transition-colors">
                 <MessageCircle className="w-5 h-5 text-fuchsia-400 mb-3" />
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Suporte IA</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
