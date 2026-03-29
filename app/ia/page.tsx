"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Sparkles, Brain, Zap, TrendingUp, 
  Video, Image as ImageIcon, Download, 
  Target, Megaphone, Activity, Fingerprint,
  BarChart3, Loader2
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

export default function IAModulePage() {
  const [instagramLink, setInstagramLink] = useState("")
  const [adObjective, setAdObjective] = useState("leads")
  const [proposalNiche, setProposalNiche] = useState("")
  
  const auditorChat = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { type: 'auditoria' }
    }),
    onFinish: () => toast.success("Pronto! ✨"),
  })

  const adsChat = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { type: 'ads' }
    }),
    onFinish: () => toast.success("Plano gerado! 🎯"),
  })

  const proposalChat = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { type: 'proposta' }
    }),
    onFinish: () => toast.success("Plano de Vendas criado! 💸"),
  })

  const handleGenerateAuditoria = () => {
    if (!instagramLink) return toast.error("Cole o link do Instagram.")
    auditorChat.setMessages([])
    auditorChat.sendMessage({
      text: `Faça uma auditoria viral do perfil: ${instagramLink}. Foque em pontos de melhoria e sugestões de conteúdo.`
    })
  }

  const handleGenerateAds = () => {
    adsChat.setMessages([])
    adsChat.sendMessage({
      text: `Gere uma estratégia de Meta Ads para uma agência com o objetivo: ${adObjective}. Sugira público-alvo e criativos.`
    })
  }

  const handleGenerateProposta = () => {
    if (!proposalNiche) return toast.error("Digite o tipo de negócio do cliente.")
    proposalChat.setMessages([])
    proposalChat.sendMessage({
      text: `Crie uma proposta comercial de agência de marketing curada para o nicho: ${proposalNiche}. Inclua serviços sugeridos e tom de voz.`
    })
  }

  const auditorBusy = auditorChat.status === 'submitted' || auditorChat.status === 'streaming'
  const adsBusy = adsChat.status === 'submitted' || adsChat.status === 'streaming'
  const proposalBusy = proposalChat.status === 'submitted' || proposalChat.status === 'streaming'

  return (
    <div className="space-y-12 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white mb-2 italic">Laboratório de Ideias.</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Nossa inteligência que ajuda a criar vídeos e anúncios muito mais rápido.</p>
        </div>
      </div>

      <Tabs defaultValue="auditoria" className="w-full">
        <TabsList className="bg-[#111113] border border-[#1e1e20] p-1.5 rounded-2xl mb-12 flex h-auto overflow-x-auto justify-start border-white/5">
          {[
            { id: "auditoria", label: "Ver o que melhorar no Instagram", icon: TrendingUp },
            { id: "criativos", label: "Criar Imagens Mágicas", icon: ImageIcon },
            { id: "roteiros", label: "Ideias para Vídeos", icon: Video },
            { id: "ads", label: "Plano para vender mais", icon: Megaphone },
            { id: "proposta", label: "Plano de Vendas Exclusivo", icon: Fingerprint },
            { id: "analista", label: "Ver o que as pessoas gostam", icon: BarChart3 }
          ].map(tab => (
            <TabsTrigger key={tab.id} value={tab.id} className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-black text-[12px] font-bold transition-all uppercase tracking-widest whitespace-nowrap">
              <tab.icon className="w-3.5 h-3.5 mr-2 stroke-[2px]" /> {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="auditoria" className="animate-fade-in-up">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
                <Card className="bg-[#111113] border-[#1e1e20] rounded-3xl p-8 border-white/5 shadow-2xl">
                  <h3 className="text-white font-bold mb-6 flex items-center gap-2 tracking-tight italic">Análise do Instagram</h3>
                  <div className="space-y-5">
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Usuário / Link</Label>
                       <Input 
                           placeholder="@perfil ou link do instagram..." 
                           value={instagramLink}
                           onChange={(e) => setInstagramLink(e.target.value)}
                           className="bg-black/40 border-white/5 h-12 text-sm rounded-xl focus:border-indigo-500/50 transition-all font-medium" 
                       />
                    </div>
                    <Button 
                        onClick={handleGenerateAuditoria} 
                        disabled={auditorBusy}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-[0.2em] h-12 rounded-xl shadow-lg shadow-indigo-500/20"
                    >
                        {auditorBusy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Conversando com a IA...</> : "Ver o que melhorar"}
                    </Button>
                  </div>
               </Card>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
               <div className="grid md:grid-cols-3 gap-6">
                 {[
                   { label: "Gostaram do Perfil", value: "4.8%", desc: "Muitas curtidas!", trend: "up" },
                   { label: "Melhor Horário", value: "20:00", desc: "Noite (Sexta/Sab)", trend: "none" },
                   { label: "O que postar mais", value: "Reels", desc: "Vídeos Curtos", trend: "up" },
                 ].map((stat, i) => (
                   <div key={i} className="p-6 rounded-2xl bg-[#111113] border border-[#1e1e20] text-center">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
                     <p className="text-2xl font-black text-white italic">{stat.value}</p>
                     <p className="text-[10px] text-slate-600 mt-1 font-bold">{stat.desc}</p>
                   </div>
                 ))}
               </div>

               {auditorChat.messages.length > 0 && (
                  <Card className="bg-[#111113] border-[#1e1e20] rounded-3xl p-8 animate-fade-in-up">
                     <h4 className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Brain className="w-4 h-4" /> Dicas da IA
                     </h4>
                     <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap italic">
                        {getTextFromMessages(auditorChat.messages)}
                     </div>
                  </Card>
               )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ads" className="animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <Card className="bg-[#111113] border-white/5 rounded-[2.5rem] p-10 shadow-3xl">
                   <h3 className="text-xl font-black text-white mb-8 italic tracking-tighter">Planejador de Vendas</h3>
                   <div className="space-y-8">
                      <div className="space-y-4">
                         <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">O que você quer fazer?</Label>
                         <Select value={adObjective} onValueChange={(val) => setAdObjective(val || "leads")}>
                            <SelectTrigger className="bg-black/40 border-white/10 h-14 rounded-2xl text-white font-bold hover:bg-white/5 transition-all outline-none md:w-full"><SelectValue /></SelectTrigger>
                            <SelectContent className="bg-[#111113] border-white/10 rounded-2xl">
                               <SelectItem value="leads" className="rounded-xl font-bold py-3">⚡ Mais mensagens (Vendas)</SelectItem>
                               <SelectItem value="sales" className="rounded-xl font-bold py-3">📍 Pessoas vindo na loja</SelectItem>
                               <SelectItem value="brand" className="rounded-xl font-bold py-3">💎 Ficar famoso (Marca)</SelectItem>
                            </SelectContent>
                         </Select>
                      </div>
                      <Button 
                         onClick={handleGenerateAds} 
                         disabled={adsBusy}
                         className="w-full bg-white text-black font-black text-xs uppercase tracking-[0.2em] h-14 rounded-2xl border-0 hover:scale-[0.98] transition-all"
                      >
                         {adsBusy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Pensando...</> : "Criar Plano para Vender Mais"}
                      </Button>
                   </div>
                </Card>

                {adsChat.messages.length > 0 ? (
                   <div className="space-y-6 animate-fade-in-up">
                      <div className="p-10 rounded-[2.5rem] bg-indigo-600/10 border border-indigo-500/20 shadow-2xl backdrop-blur-xl">
                         <div className="flex items-center justify-between mb-8">
                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] flex items-center gap-2">
                               <Activity className="w-4 h-4" /> Resultado Esperado
                            </p>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-indigo-400 hover:bg-indigo-500/10"><Download className="w-4 h-4" /></Button>
                         </div>
                         <div className="text-sm text-slate-300 leading-relaxed font-medium whitespace-pre-wrap">
                            {getTextFromMessages(adsChat.messages)}
                         </div>
                      </div>
                   </div>
                ) : (
                   <div className="p-12 rounded-[2.5rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                      <Megaphone className="w-12 h-12 text-slate-500" />
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Escolha o que você quer fazer e clique em gerar...</p>
                   </div>
                )}
            </div>
         </TabsContent>

         <TabsContent value="proposta" className="animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-10">
               <Card className="bg-[#111113] border-white/5 rounded-[2.5rem] p-10 shadow-3xl">
                  <h3 className="text-xl font-black text-white mb-8 italic tracking-tighter">Criar Plano de Vendas Exclusivo</h3>
                  <div className="space-y-8">
                     <div className="space-y-4">
                        <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Tipo de Negócio do Cliente</Label>
                        <Input 
                            placeholder="Ex: Hamburgueria, Dentista, Loja de Roupas..." 
                            value={proposalNiche}
                            onChange={(e) => setProposalNiche(e.target.value)}
                            className="bg-black/40 border-white/10 h-14 rounded-2xl text-white font-bold" 
                        />
                     </div>
                     <Button 
                        onClick={handleGenerateProposta}
                        disabled={proposalBusy}
                        className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black text-xs uppercase tracking-[0.2em] h-14 rounded-2xl border-0 shadow-lg shadow-emerald-500/20"
                     >
                        {proposalBusy ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Gerando...</> : "Criar Plano com IA"}
                     </Button>
                  </div>
               </Card>
               {proposalChat.messages.length > 0 ? (
                  <div className="animate-fade-in-up">
                     <div className="p-10 rounded-[2.5rem] bg-violet-500/10 border border-violet-500/20 shadow-2xl backdrop-blur-xl">
                        <h4 className="text-[10px] font-black text-violet-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-2"><Fingerprint className="w-4 h-4" /> Plano Sugerido</h4>
                        <div className="text-sm text-slate-300 leading-relaxed font-medium whitespace-pre-wrap">
                           {getTextFromMessages(proposalChat.messages)}
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="p-12 rounded-[2.5rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                     <Fingerprint className="w-12 h-12 text-slate-500" />
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Diga o tipo de negócio para começar.</p>
                  </div>
               )}
            </div>
         </TabsContent>

        <TabsContent value="analista">
           <div className="p-12 text-center opacity-30 italic text-sm text-slate-500">Módulo de Analista será ativado na próxima versão.</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
