"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Sparkles, Wand2, Brain, Zap, MessageSquare, 
  Layout, FileText, Loader2, Instagram, TrendingUp, 
  Video, Image as ImageIcon, Download, Share2
} from "lucide-react"
import { toast } from "sonner"

export default function IAModulePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setResult(true)
      toast.success("Conteúdo gerado com IA! ✨")
    }, 2000)
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-400" /> Inteligência Artificial
          </h2>
          <p className="text-slate-500 text-sm font-medium">O cérebro criativo da sua agência alimentado por Claude e Ideogram.</p>
        </div>
      </div>

      <Tabs defaultValue="auditoria" className="w-full">
        <TabsList className="glass border-white/10 bg-white/5 p-1 rounded-2xl mb-6">
          <TabsTrigger value="auditoria" className="rounded-xl px-6 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
            <TrendingUp className="w-4 h-4 mr-2" /> Auditoria Viral
          </TabsTrigger>
          <TabsTrigger value="criativos" className="rounded-xl px-6 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
            <ImageIcon className="w-4 h-4 mr-2" /> Gerador de Artes
          </TabsTrigger>
          <TabsTrigger value="roteiros" className="rounded-xl px-6 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
            <Video className="w-4 h-4 mr-2" /> Roteiros & Vídeos
          </TabsTrigger>
        </TabsList>

        {/* 📈 VIRAL AUDITOR SECTION */}
        <TabsContent value="auditoria" className="space-y-6 animate-fade-in-up">
          <Card className="glass border-white/[0.06] rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white"><Instagram className="w-5 h-5 text-pink-500" /> Analista de Conteúdo Viral</CardTitle>
              <CardDescription className="text-slate-500">Cole o link do perfil ou post para uma análise profunda de engajamento.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <Input placeholder="https://instagram.com/cliente_perfil" className="glass border-white/10 text-slate-200 h-11" />
                <Button className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl px-8 h-11">
                  Analisar Perfil
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { label: "Taxa de Engajamento", value: "4.8%", desc: "1.2% acima da média do nicho", color: "text-emerald-400" },
                  { label: "Melhor Horário", value: "19:00 - 21:00", desc: "Baseado nos últimos 30 posts", color: "text-indigo-400" },
                  { label: "Formato Vencedor", value: "Reels Institucional", desc: "3x mais salvamentos que estáticos", color: "text-purple-400" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{stat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 space-y-3">
                <h4 className="text-sm font-bold text-indigo-300 flex items-center gap-2"><Brain className="w-4 h-4" /> Recomendação da IA</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  "Posts com o prato principal em destaque performam melhor que bastidores. Sugerimos focar em Close-ups dos novos burgers para a campanha de sexta-feira."
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 🎨 CREATIVE GENERATOR (Ideogram style) */}
        <TabsContent value="criativos" className="space-y-6 animate-fade-in-up">
           <div className="grid lg:grid-cols-5 gap-6">
              <Card className="lg:col-span-2 glass border-white/[0.06] rounded-2xl h-fit">
                <CardHeader>
                  <CardTitle className="text-white">Gerador de Artes (Ideogram v3)</CardTitle>
                  <CardDescription>Crie artes com texto perfeito em segundos.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-slate-500 uppercase">Input da Arte</Label>
                    <Input placeholder="Ex: Burger de costela com cebola caramelizada..." className="glass h-11 text-slate-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-slate-500 uppercase">Formato</Label>
                      <Select defaultValue="square">
                        <SelectTrigger className="glass h-10"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="square">Feed (1:1)</SelectItem>
                          <SelectItem value="story">Story (9:16)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-slate-500 uppercase">Estilo</Label>
                      <Select defaultValue="photo">
                        <SelectTrigger className="glass h-10"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="photo">Fotorealista</SelectItem>
                          <SelectItem value="art">Design Gráfico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                     <Label className="text-xs font-bold text-slate-500 uppercase">Texto na Imagem</Label>
                     <Input placeholder="Ex: PROMOÇÃO 20% OFF" className="glass h-10 text-slate-200" />
                  </div>
                  <Button onClick={handleGenerate} disabled={isGenerating} className="w-full btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold h-11 rounded-xl">
                    {isGenerating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
                    {isGenerating ? "Criando Artes..." : "Gerar 4 Opções"}
                  </Button>
                </CardContent>
              </Card>

              <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-[4/5] rounded-2xl glass border-white/[0.06] overflow-hidden group relative flex flex-col items-center justify-center bg-white/5">
                    {result ? (
                       <>
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex gap-2">
                               <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 h-8 flex-1 rounded-lg">Usar no Post</Button>
                               <Button size="sm" variant="outline" className="h-8 w-8 rounded-lg p-0"><Download className="w-4 h-4" /></Button>
                            </div>
                         </div>
                         <div className="text-center p-4">
                            <p className="text-xs text-indigo-400 font-bold mb-2">ARTE GERADA #{i}</p>
                            <div className="h-40 w-32 bg-slate-800 rounded-lg mx-auto shadow-2xl relative overflow-hidden">
                               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black text-[10px] leading-tight uppercase w-full px-2">
                                  Burger & Fries<br/><span className="text-indigo-400">20% OFF</span>
                               </div>
                            </div>
                         </div>
                       </>
                    ) : (
                      <div className="text-slate-600 text-center space-y-2">
                         <ImageIcon className="w-8 h-8 mx-auto opacity-20" />
                         <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Preview #{i}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
           </div>
        </TabsContent>

        {/* 🎬 SCRIPTS & VIDEO (Creatomate logic) */}
        <TabsContent value="roteiros" className="space-y-6 animate-fade-in-up">
           <div className="grid lg:grid-cols-2 gap-6">
              <Card className="glass border-white/[0.06] rounded-2xl">
                 <CardHeader>
                    <CardTitle className="text-white">Gerador de Roteiros Avançado</CardTitle>
                    <CardDescription>Roteiros prontos para gravar ou automatizar.</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                          <Label className="text-xs font-bold text-slate-500 uppercase">Tipo de Vídeo</Label>
                          <Select defaultValue="bastidor">
                             <SelectTrigger className="glass h-10"><SelectValue /></SelectTrigger>
                             <SelectContent>
                                <SelectItem value="bastidor">Bastidores / Rotina</SelectItem>
                                <SelectItem value="review">Review / Teste</SelectItem>
                                <SelectItem value="promo">Promoção Relâmpago</SelectItem>
                             </SelectContent>
                          </Select>
                       </div>
                       <div className="space-y-2">
                          <Label className="text-xs font-bold text-slate-500 uppercase">Duração</Label>
                          <Select defaultValue="30s">
                             <SelectTrigger className="glass h-10"><SelectValue /></SelectTrigger>
                             <SelectContent>
                                <SelectItem value="15s">15 Segundos</SelectItem>
                                <SelectItem value="30s">30 Segundos</SelectItem>
                                <SelectItem value="60s">60 Segundos</SelectItem>
                             </SelectContent>
                          </Select>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <Label className="text-xs font-bold text-slate-500 uppercase">Assunto Principal</Label>
                       <Input placeholder="Ex: Preparação do Molho Secreto" className="glass h-11 text-slate-200" />
                    </div>
                    <Button onClick={handleGenerate} className="w-full btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold h-11 rounded-xl">
                       <Zap className="w-4 h-4 mr-2" /> Gerar Roteiro Completo
                    </Button>
                 </CardContent>
              </Card>

              {result && (
                 <Card className="glass border-indigo-500/20 rounded-2xl bg-indigo-500/5 animate-fade-in-up">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between">
                       <CardTitle className="text-white text-md">Roteiro Sugerido</CardTitle>
                       <Button variant="outline" size="sm" className="h-8 rounded-lg text-[10px] uppercase font-bold border-indigo-500/40 text-indigo-400 bg-transparent">
                          <Download className="w-3.5 h-3.5 mr-1" /> PDF
                       </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="p-3 bg-white/5 rounded-xl border border-indigo-500/20">
                          <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Gancho de Abertura (Hook)</p>
                          <p className="text-sm text-slate-200">"Você nunca comeu nada igual a esse molho secreto..."</p>
                       </div>
                       <div className="space-y-3">
                          {[
                             { scene: "00-05s", action: "Câmera lenta entrando no pote de molho", talk: "Isso é o que dá o sabor..." },
                             { scene: "05-15s", action: "Corte rápido do Chef misturando ervas", talk: "São 12 temperos selecionados à mão." },
                             { scene: "15-30s", action: "Pessoa provando e sorrindo", talk: "Clique no link da bio e peça o seu agora!" },
                          ].map((step, i) => (
                             <div key={i} className="flex gap-3 text-[11px] leading-snug">
                                <span className="font-bold text-indigo-400 whitespace-nowrap">{step.scene}</span>
                                <div className="space-y-1">
                                   <p className="text-slate-300"><span className="text-slate-500 font-bold">[Cena]</span> {step.action}</p>
                                   <p className="text-slate-400 italic">"{step.talk}"</p>
                                </div>
                             </div>
                          ))}
                       </div>
                       <Button className="w-full bg-white/10 hover:bg-white/15 text-white h-9 rounded-xl text-xs font-bold border border-white/10">
                          <Video className="w-4 h-4 mr-2" /> Gerar Vídeo Automático (Creatomate)
                       </Button>
                    </CardContent>
                 </Card>
              )}
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
