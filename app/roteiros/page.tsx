"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  FileText, Sparkles, Send, 
  History, Copy, CheckCircle2, 
  Video, Brain, Zap, Target
} from "lucide-react"
import { toast } from "sonner"

export default function RoteirosPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [script, setScript] = useState("")

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setScript(`[POV] O SEGREDO DO BURGER PERFEITO 🍔\n\n[Cena 1] Close-up no queijo derretendo (Slow motion).\n[Áudio] Som de grelha quente.\n\n[Cena 2] Narrador olha para a câmera e dá a primeira mordida.\n[Legenda] "Você não vai acreditar no que tem aqui dentro..."\n\n[CTA] Link na bio para pedir o seu!`)
      setIsGenerating(false)
      toast.success("Roteiro gerado com sucesso! ✨")
    }, 2000)
  }

  return (
    <div className="animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-pink-400" /> Gerador de Roteiros IA
          </h2>
          <p className="text-slate-500 text-sm font-medium">Crie roteiros virais e estratégicos em segundos.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass border-white/[0.06] rounded-2xl overflow-hidden shadow-xl">
             <CardHeader className="pb-4">
                <CardTitle className="text-white text-base flex items-center gap-2"><Zap className="w-4 h-4 text-pink-400" /> Briefing do Vídeo</CardTitle>
                <CardDescription className="text-slate-500 text-xs font-medium">O que a IA precisa saber?</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="space-y-2">
                   <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Objetivo</Label>
                   <Select defaultValue="reels">
                      <SelectTrigger className="glass border-white/10 h-10 rounded-xl text-xs text-white"><SelectValue /></SelectTrigger>
                      <SelectContent className="bg-[#0c081a] border-white/10">
                         <SelectItem value="reels">Reels Viral (Engajamento)</SelectItem>
                         <SelectItem value="ads">Anúncio (Conversão)</SelectItem>
                         <SelectItem value="educational">Educativo (Autoridade)</SelectItem>
                      </SelectContent>
                   </Select>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Produto/Serviço</Label>
                   <Input placeholder="Ex: Novo Cheese Bacon" className="glass border-white/10 h-10 rounded-xl text-xs text-white" />
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Diferencial (Gancho)</Label>
                   <Textarea placeholder="Ex: Bacon defumado em madeira de macieira" className="glass border-white/10 rounded-xl text-xs text-white min-h-[80px]" />
                </div>
                <Button onClick={handleGenerate} disabled={isGenerating} className="w-full btn-lift h-11 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-pink-500/20 shadow-glow">
                   {isGenerating ? "Processando..." : "Gerar Roteiro Mágico ✨"}
                </Button>
             </CardContent>
          </Card>

          <Card className="glass border-white/[0.06] rounded-2xl p-5">
             <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2"><History className="w-3.5 h-3.5" /> Últimos Gerados</h3>
             <div className="space-y-2">
                {["Reels: Review de Burger", "Ads: Promoção Sushi", "POV: Bastidores Docinho"].map((item, i) => (
                   <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-slate-400 font-medium hover:bg-white/[0.08] cursor-pointer transition-all truncate italic">
                      {item}
                   </div>
                ))}
             </div>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="glass border-pink-500/20 rounded-3xl overflow-hidden h-full min-h-[500px] relative">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Brain className="w-32 h-32 text-pink-400" />
             </div>
             <CardHeader className="border-b border-white/[0.06] flex flex-row items-center justify-between py-6">
                <div>
                  <CardTitle className="text-white text-lg font-black italic">Roteiro Sugerido</CardTitle>
                  <CardDescription className="text-pink-400/50 text-[10px] font-black uppercase tracking-widest">Baseado no fluxo operacional v3.6</CardDescription>
                </div>
                {script && (
                   <div className="flex gap-2">
                      <Button size="icon" variant="ghost" onClick={() => { navigator.clipboard.writeText(script); toast.success("Copiado!") }} className="h-9 w-9 rounded-xl border border-white/10 text-slate-400 hover:text-pink-400"><Copy className="w-4 h-4" /></Button>
                      <Button size="icon" variant="ghost" className="h-9 w-9 rounded-xl border border-white/10 text-slate-400 hover:text-emerald-400"><Send className="w-4 h-4" /></Button>
                   </div>
                )}
             </CardHeader>
             <CardContent className="p-8">
                {!script && !isGenerating ? (
                   <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                      <div className="h-16 w-16 bg-white/[0.04] border border-white/10 rounded-2xl flex items-center justify-center text-slate-600">
                         <Target className="w-8 h-8" />
                      </div>
                      <p className="text-slate-500 text-sm font-medium max-w-xs">Preencha o briefing ao lado para gerar seu roteiro estratégico.</p>
                   </div>
                ) : isGenerating ? (
                   <div className="space-y-4 py-10">
                      <div className="h-4 bg-white/10 rounded-full w-3/4 animate-pulse" />
                      <div className="h-4 bg-white/10 rounded-full w-1/2 animate-pulse" />
                      <div className="h-4 bg-white/10 rounded-full w-5/6 animate-pulse" />
                      <div className="h-20 bg-white/10 rounded-2xl w-full animate-pulse mt-8" />
                   </div>
                ) : (
                   <div className="animate-fade-in whitespace-pre-wrap text-slate-200 font-medium leading-relaxed text-sm lg:text-base">
                      {script}
                   </div>
                )}
             </CardContent>
             {script && (
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="p-4 rounded-2xl bg-[#0c081a] border border-pink-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="h-8 w-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
                            <Video className="w-4 h-4" />
                         </div>
                         <p className="text-[10px] font-black text-white uppercase tracking-widest">Enviar direto para a FILA de GRAVAÇÃO?</p>
                      </div>
                      <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white font-black text-[9px] uppercase tracking-widest px-6 h-8 rounded-lg">Confirmar Envio</Button>
                   </div>
                </div>
             )}
          </Card>
        </div>
      </div>
    </div>
  )
}
