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
  BarChart3
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
    }, 1500)
  }

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
            { id: "auditoria", label: "Auditoria Viral", icon: TrendingUp },
            { id: "criativos", label: "Artes (Ideogram)", icon: ImageIcon },
            { id: "roteiros", label: "Roteiros & Vídeos", icon: Video },
            { id: "ads", label: "Meta Ads Assistant", icon: Megaphone },
            { id: "analista", label: "Analista de Dados", icon: BarChart3 }
          ].map(tab => (
            <TabsTrigger key={tab.id} value={tab.id} className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white data-[state=active]:text-black text-[12px] font-bold transition-all uppercase tracking-widest">
              <tab.icon className="w-3.5 h-3.5 mr-2 stroke-[2px]" /> {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="auditoria" className="animate-fade-in-up">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-8">
               <Card className="bg-[#111113] border-[#1e1e20] rounded-3xl p-8">
                  <h3 className="text-white font-bold mb-6 flex items-center gap-2">Análise de Perfil</h3>
                  <div className="space-y-4">
                    <Input placeholder="Link do Instagram..." className="bg-black/40 border-white/5 h-12 text-sm rounded-xl focus:border-indigo-500/50" />
                    <Button onClick={handleGenerate} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-widest h-12 rounded-xl">Iniciar Auditoria</Button>
                  </div>
               </Card>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Engajamento", value: "4.8%", desc: "Acima da média", trend: "up" },
                  { label: "Melhor Hora", value: "20:00", desc: "Noite (Sexta/Sab)", trend: "none" },
                  { label: "Top Formato", value: "Reels", desc: "Institucional", trend: "up" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#111113] border border-[#1e1e20] text-center">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className="text-2xl font-black text-white italic">{stat.value}</p>
                    <p className="text-[10px] text-slate-600 mt-1 font-bold">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ads">
           <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-[#111113] border-[#1e1e20] rounded-[2rem] p-8">
                 <h3 className="text-lg font-bold text-white mb-6">Configuração de Campanha</h3>
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Objetivo Principal</Label>
                       <Select defaultValue="leads">
                          <SelectTrigger className="bg-black/40 border-white/5 h-12 rounded-xl"><SelectValue /></SelectTrigger>
                          <SelectContent>
                             <SelectItem value="leads">Conversão WhatsApp</SelectItem>
                             <SelectItem value="sales">Tráfego Local</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                    <Button onClick={handleGenerate} className="w-full bg-white text-black font-black text-xs uppercase tracking-widest h-12 rounded-xl border-0">Gerar Estratégia de Ads</Button>
                 </div>
              </Card>

              {result && (
                 <div className="space-y-6 animate-fade-in-up">
                    <div className="p-8 rounded-[2rem] bg-indigo-600/10 border border-indigo-500/20">
                       <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">Meta Targeting Sugerido</p>
                       <p className="text-sm text-slate-300 leading-relaxed font-medium">"Homens e Mulheres, 22-40 anos, interesse em Gastronomia e IFood, raio de 3km da unidade."</p>
                    </div>
                 </div>
              )}
           </div>
        </TabsContent>

        {/* Other tabs remain similar but with updated base styles via the parent TabsList */}
        <TabsContent value="analista">
           <div className="p-12 text-center opacity-30 italic text-sm text-slate-500">Módulo de Analista refinado na v3.0 Base.</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
