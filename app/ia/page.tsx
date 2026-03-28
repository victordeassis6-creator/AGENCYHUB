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
  Video, Image as ImageIcon, Download, Share2,
  BarChart3, Target, MousePointer2, Megaphone,
  PieChart, Activity, Fingerprint
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
      toast.success("Análise concluída com sucesso! ✨")
    }, 2000)
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-400" /> Inteligência Inteligente
          </h2>
          <p className="text-slate-500 text-sm font-medium">O cérebro operacional da sua agência: de criativos a anúncios e métricas.</p>
        </div>
      </div>

      <Tabs defaultValue="auditoria" className="w-full">
        <TabsList className="glass border-white/10 bg-white/5 p-1 rounded-2xl mb-6 overflow-x-auto justify-start h-auto">
          <TabsTrigger value="auditoria" className="rounded-xl px-6 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
            <TrendingUp className="w-4 h-4 mr-2" /> Auditoria Viral
          </TabsTrigger>
          <TabsTrigger value="criativos" className="rounded-xl px-6 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
            <ImageIcon className="w-4 h-4 mr-2" /> Artes (Ideogram)
          </TabsTrigger>
          <TabsTrigger value="roteiros" className="rounded-xl px-6 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
            <Video className="w-4 h-4 mr-2" /> Roteiros & Vídeos
          </TabsTrigger>
          <TabsTrigger value="ads" className="rounded-xl px-6 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
            <Megaphone className="w-4 h-4 mr-2" /> Meta Ads Assistant
          </TabsTrigger>
          <TabsTrigger value="analista" className="rounded-xl px-4 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
            <BarChart3 className="w-4 h-4 mr-2" /> Analista de Dados
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

        {/* 🎨 CREATIVE GENERATOR */}
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
                             <SelectItem value="3d">Digital 3D</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                  </div>
                  <Button onClick={handleGenerate} className="w-full btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold h-11 rounded-xl">Gerar Artes</Button>
                </CardContent>
              </Card>
              <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square glass border-white/5 rounded-2xl flex items-center justify-center opacity-40 italic text-xs text-slate-500">Preview Criativo #{i}</div>
                 ))}
              </div>
           </div>
        </TabsContent>

        {/* 📢 META ADS ASSISTANT (NOVO) */}
        <TabsContent value="ads" className="space-y-6 animate-fade-in-up">
           <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1 glass border-white/10 rounded-2xl">
                 <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2"><Target className="w-5 h-5 text-indigo-400" /> Criador de Campanhas</CardTitle>
                    <CardDescription>Configure sua estratégia de tráfego pago.</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="space-y-2">
                       <Label className="text-xs font-bold text-slate-500 uppercase">Objetivo</Label>
                       <Select defaultValue="leads">
                          <SelectTrigger className="glass h-10"><SelectValue /></SelectTrigger>
                          <SelectContent>
                             <SelectItem value="leads">Mensagens no WhatsApp</SelectItem>
                             <SelectItem value="sales">Vendas no Site</SelectItem>
                             <SelectItem value="visit">Visitas ao Perfil</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                    <div className="space-y-2">
                       <Label className="text-xs font-bold text-slate-500 uppercase">Budget Diário</Label>
                       <Input type="number" placeholder="R$ 50,00" className="glass h-10 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-xs font-bold text-slate-500 uppercase">Descrição da Oferta</Label>
                       <textarea className="w-full rounded-xl glass border-white/10 p-3 text-sm text-slate-200 min-h-[100px]" placeholder="Ex: Combo Casal por R$ 59,90 apenas hoje..." />
                    </div>
                    <Button onClick={handleGenerate} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl h-11">
                       <Zap className="w-4 h-4 mr-2" /> Gerar Configuração Ads
                    </Button>
                 </CardContent>
              </Card>

              <div className="lg:col-span-2 space-y-6">
                 {result && (
                    <Card className="glass border-indigo-500/20 rounded-2xl bg-indigo-500/5 animate-fade-in-up">
                       <CardHeader><CardTitle className="text-white text-md">Estratégia Meta Ads Gerada</CardTitle></CardHeader>
                       <CardContent className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                             <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2">Público Sugerido (Targeting)</p>
                                <p className="text-xs text-slate-300">"Pessoas 18-45 anos, raio 5km da loja, interessadas em: Gastronomia, Hamburguer e Ifood."</p>
                             </div>
                             <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">Copy de Alta Conversão</p>
                                <p className="text-xs text-slate-300">"🍔 Bateu aquela fome? O melhor burger da cidade com desconto exclusivo só para quem clicar abaixo! 👇"</p>
                             </div>
                          </div>
                          <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
                             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Estrutura de Campanha Recomendada</p>
                             <ul className="text-xs text-slate-400 space-y-2">
                                <li className="flex items-center gap-2"><MousePointer2 className="w-3.5 h-3.5 text-indigo-400" /> 1 Campanha de Mensagens</li>
                                <li className="flex items-center gap-2"><MousePointer2 className="w-3.5 h-3.5 text-indigo-400" /> 2 Conjuntos de Anúncios (Aberto vs Interesses)</li>
                                <li className="flex items-center gap-2"><MousePointer2 className="w-3.5 h-3.5 text-indigo-400" /> 3 Criativos (Foto estática + Reel bastidor + Vídeo Chef)</li>
                             </ul>
                          </div>
                       </CardContent>
                    </Card>
                 )}
              </div>
           </div>
        </TabsContent>

        {/* 📉 IA DATA ANALYST (NOVO) */}
        <TabsContent value="analista" className="space-y-6 animate-fade-in-up">
           <div className="grid lg:grid-cols-4 gap-6">
              <div className="space-y-6 lg:col-span-1">
                 <Card className="glass border-white/10 rounded-2xl">
                    <CardHeader><CardTitle className="text-white text-md">Analista de Insights</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                       <div className="space-y-2">
                          <Label className="text-xs font-bold text-slate-500 uppercase">Fonte de Dados</Label>
                          <Select defaultValue="instagram">
                             <SelectTrigger className="glass h-10"><SelectValue /></SelectTrigger>
                             <SelectContent>
                                <SelectItem value="instagram">Instagram Insights</SelectItem>
                                <SelectItem value="meta">Meta Ads Manager</SelectItem>
                                <SelectItem value="all">Dados Consolidados</SelectItem>
                             </SelectContent>
                          </Select>
                       </div>
                       <Button onClick={handleGenerate} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl h-11">
                          <Brain className="w-4 h-4 mr-2" /> Extrair Insights
                       </Button>
                    </CardContent>
                 </Card>
              </div>

              <div className="lg:col-span-3 space-y-6">
                 {result && (
                    <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
                       <Card className="glass border-white/10 rounded-2xl">
                          <CardHeader><CardTitle className="text-white text-md flex items-center gap-2"><Fingerprint className="w-4 h-4 text-purple-400" /> Padrões Identificados</CardTitle></CardHeader>
                          <CardContent className="space-y-4">
                             {[
                                { t: "Anomalia Positiva", d: "Vídeos postados entre 11h-12h geram 40% mais cliques em delivery." },
                                { t: "Gargalo de Retenção", d: "Público dropa nos primeiros 3s de Reels sem legenda na tela." },
                                { t: "Oportunidade de ROI", d: "Aumentar budget em 15% para o público 'Lookalike' pode reduzir o CPA em R$ 2,40." },
                             ].map((item, i) => (
                                <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5">
                                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.t}</p>
                                   <p className="text-xs text-slate-300 leading-relaxed font-medium">{item.d}</p>
                                </div>
                             ))}
                          </CardContent>
                       </Card>

                       <Card className="glass border-emerald-500/20 bg-emerald-500/5 rounded-2xl">
                          <CardHeader><CardTitle className="text-white text-md flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-400" /> Saúde da Marca</CardTitle></CardHeader>
                          <CardContent className="space-y-6">
                             <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase"><span>Sentiment Score</span> <span>92% Positivo</span></div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="w-[92%] h-full bg-emerald-500" /></div>
                             </div>
                             <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
                                <p className="text-xs font-bold text-white italic">"Conclusão do Analista:"</p>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                   "O crescimento está sustentável. O engajamento atual suporta uma nova rodada de expansão de tráfego pago focada em novos CEPs ao redor da unidade principal."
                                </p>
                             </div>
                          </CardContent>
                       </Card>
                    </div>
                 )}
              </div>
           </div>
        </TabsContent>

        {/* 🎬 ROTEIROS SECTION */}
        <TabsContent value="roteiros" className="space-y-6">
            <Card className="glass border-white/10 rounded-2xl p-8 text-center opacity-40">
               <Video className="w-12 h-12 mx-auto mb-4 text-slate-600" />
               <p className="text-sm font-bold text-slate-500">Módulo de Roteiros já consolidado com cena a cena.</p>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
