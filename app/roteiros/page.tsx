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
  Video, Brain, Zap, Target, Loader2
} from "lucide-react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { toast } from "sonner"

function getTextFromMessages(messages: any[]): string {
  const last = messages[messages.length - 1]
  if (!last || last.role !== 'assistant') return ""
  if (last.content) return last.content
  if (last.parts) {
    return last.parts
      .filter((p: any) => p.type === 'text')
      .map((p: any) => p.text)
      .join('')
  }
  return ""
}

export default function RoteirosPage() {
  const [product, setProduct] = useState("")
  const [usp, setUsp] = useState("")
  const [objective, setObjective] = useState("reels")

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { type: 'script' }
    }),
    onFinish: () => toast.success("Roteiro pronto! ✨"),
    onError: () => toast.error("Erro ao gerar roteiro. Verifique suas chaves de API.")
  })

  const isBusy = status === 'submitted' || status === 'streaming'

  // The last message from the assistant is our script
  const script = getTextFromMessages(messages)

  const handleGenerate = () => {
    if (!product || !usp) {
      toast.error("Por favor, preencha o produto e o diferencial.")
      return
    }
    
    setMessages([]) // Clear previous chat
    sendMessage({
      text: `Gere um roteiro para: ${product}. Diferencial: ${usp}. Objetivo: ${objective}`
    })
  }

  return (
    <div className="space-y-10 lg:space-y-14 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white flex items-center gap-2">
            Ideias para Vídeos. <Sparkles className="w-7 h-7 text-violet-400" />
          </h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest pl-1">Crie roteiros incríveis em segundos com nossa IA.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass border-white/[0.06] rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#111113]">
             <CardHeader className="p-8 pb-4">
                <CardTitle className="text-white text-lg font-black italic flex items-center gap-2 tracking-tighter">
                  O que vamos gravar?
                </CardTitle>
                <CardDescription className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Preencha o básico para a IA trabalhar.</CardDescription>
             </CardHeader>
             <CardContent className="p-8 space-y-6">
                 <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Para onde é esse vídeo?</Label>
                    <Select value={objective} onValueChange={(val) => setObjective(val || "reels")}>
                       <SelectTrigger className="bg-black/40 border-white/10 h-12 rounded-2xl text-white font-bold"><SelectValue /></SelectTrigger>
                       <SelectContent className="bg-[#111113] border-white/10 rounded-2xl">
                          <SelectItem value="reels" className="rounded-xl font-bold py-3 text-xs">Reels Viral (Engajamento)</SelectItem>
                          <SelectItem value="ads" className="rounded-xl font-bold py-3 text-xs">Anúncio (Vender mais)</SelectItem>
                          <SelectItem value="educational" className="rounded-xl font-bold py-3 text-xs">Aula / Dica (Autoridade)</SelectItem>
                       </SelectContent>
                    </Select>
                 </div>
                 <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">O que é o produto/serviço?</Label>
                    <Input 
                      placeholder="Ex: Novo Combo X-Bacon" 
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className="bg-black/40 border-white/10 h-12 rounded-2xl text-white font-bold" 
                    />
                 </div>
                 <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">O que tem de legal nele?</Label>
                    <Textarea 
                      placeholder="Ex: Bacon defumado artesanalmente..." 
                      value={usp}
                      onChange={(e) => setUsp(e.target.value)}
                      className="bg-black/40 border-white/10 rounded-2xl text-white font-medium min-h-[100px]" 
                    />
                 </div>
                 <Button onClick={handleGenerate} disabled={isBusy} className="w-full h-14 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-lg shadow-emerald-500/20">
                    {isBusy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Pensando...</> : "Gerar Roteiro Mágico ✨"}
                 </Button>
             </CardContent>
          </Card>

          <Card className="glass border-white/[0.06] rounded-[2.5rem] p-8 bg-[#111113]">
             <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2 italic"><History className="w-4 h-4" /> Histórico</h3>
             <div className="space-y-3">
                {["Review de Burger", "Promoção Sushi", "Bastidores Docinho"].map((item, i) => (
                   <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 font-bold hover:bg-white/[0.08] cursor-pointer transition-all truncate italic flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-violet-500/40" /> {item}
                   </div>
                ))}
             </div>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="glass border-violet-500/20 bg-violet-500/[0.02] rounded-[2.5rem] overflow-hidden min-h-[600px] relative shadow-3xl">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Brain className="w-48 h-48 text-violet-400" />
             </div>
             <CardHeader className="border-b border-white/[0.06] flex flex-row items-center justify-between p-10">
                <div>
                   <CardTitle className="text-2xl font-black italic text-white tracking-tighter">Seu Roteiro.</CardTitle>
                   <CardDescription className="text-violet-400/50 text-[10px] font-black uppercase tracking-[0.2em]">Criado para converter e viralizar</CardDescription>
                </div>
                {script && (
                   <div className="flex gap-3">
                      <Button size="icon" variant="ghost" onClick={() => { navigator.clipboard.writeText(script); toast.success("Copiado!") }} className="h-11 w-11 rounded-2xl border border-white/10 text-slate-400 hover:text-violet-400 hover:bg-white/5 transition-all"><Copy className="w-5 h-5" /></Button>
                      <Button size="icon" variant="ghost" className="h-11 w-11 rounded-2xl border border-white/10 text-slate-400 hover:text-emerald-400 hover:bg-white/5 transition-all"><Send className="w-5 h-5" /></Button>
                   </div>
                )}
             </CardHeader>
             <CardContent className="p-10">
                 {!script && !isBusy ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-24 opacity-40">
                       <div className="h-24 w-24 bg-white/[0.04] border border-white/10 rounded-[2rem] flex items-center justify-center text-slate-600">
                          <Target className="w-12 h-12" />
                       </div>
                       <p className="text-xs font-bold uppercase tracking-widest text-slate-500 max-w-xs">Preencha o que vamos gravar ao lado para eu te dar o roteiro perfeito.</p>
                    </div>
                 ) : isBusy && !script ? (
                    <div className="space-y-6 py-10">
                       <div className="h-6 bg-white/5 rounded-full w-3/4 animate-pulse" />
                       <div className="h-6 bg-white/5 rounded-full w-1/2 animate-pulse" />
                       <div className="h-6 bg-white/5 rounded-full w-5/6 animate-pulse" />
                       <div className="h-32 bg-white/5 rounded-[2rem] w-full animate-pulse mt-12" />
                    </div>
                 ) : (
                   <div className="animate-fade-in whitespace-pre-wrap text-slate-200 font-medium leading-relaxed text-sm lg:text-base pr-12">
                      {script}
                   </div>
                 )}
             </CardContent>
             {script && (
                <div className="p-10 pt-0">
                   <div className="p-6 rounded-[2rem] bg-indigo-600/10 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
                      <div className="flex items-center gap-4">
                         <div className="h-12 w-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                            <Video className="w-6 h-6" />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-white uppercase tracking-widest">Gostou? Mande agora pro time!</p>
                            <p className="text-[9px] text-indigo-400 font-black uppercase tracking-[0.2em]">Envia direto para o WhatsApp da Produção</p>
                         </div>
                      </div>
                      <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-black text-[10px] uppercase tracking-widest px-8 h-12 rounded-xl shadow-lg shadow-indigo-500/20">Mandar agora!</Button>
                   </div>
                </div>
             )}
          </Card>
        </div>
      </div>
    </div>
  )
}
