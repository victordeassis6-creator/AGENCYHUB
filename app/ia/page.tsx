"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Wand2, Brain, Zap, MessageSquare, Layout, FileText } from "lucide-react"
import { toast } from "sonner"

export default function IAModulePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setResult({
        caption: "Nesta sexta, nada melhor que um burger suculento para abrir o final de semana! 🍔✨\n\nNossa carne é 100% angus, grelhada no fogo como deve ser. Quem você marcaria para dividir essa delícia hoje? 👇",
        hashtags: "#BurgerHouse #Artesanal #Sextou #Gastronomia #BurgerLovers",
        ideas: [
          "Story: Poll de 'Qual seu ponto da carne favorito?'",
          "Reel: POV do queijo derretendo no smash burger",
          "Post: Carrossel com os 3 mais vendidos da semana"
        ]
      })
      toast.success("Conteúdo gerado com sucesso! ✨")
    }, 2000)
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-400" /> Inteligência Artificial
          </h2>
          <p className="text-slate-500 text-sm font-medium">Crie conteúdo, analise cardápios e gere ideias em segundos.</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3 animate-fade-in-up-delay-1">
        {[
          { icon: MessageSquare, title: "Legendas e Copy", desc: "Gere legendas otimizadas para Instagram, TikTok e Ads.", color: "text-indigo-400", bg: "bg-indigo-500/10" },
          { icon: Layout, title: "Ideias de Reels", desc: "Roteiros criativos baseados nas tendências do nicho.", color: "text-purple-400", bg: "bg-purple-500/10" },
          { icon: FileText, title: "Análise de Cardápio", desc: "Identifique pratos 'instagramáveis' e sugestões de promoções.", color: "text-emerald-400", bg: "bg-emerald-500/10" },
        ].map((f, i) => (
          <Card key={i} className="card-hover glass border-white/[0.06] rounded-2xl p-5 text-center group cursor-pointer">
              <div className={`h-12 w-12 mx-auto rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className="font-bold text-slate-200 text-sm mb-1">{f.title}</h3>
              <p className="text-[11px] text-slate-500 leading-tight">{f.desc}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-5 animate-fade-in-up-delay-2">
        <Card className="md:col-span-2 glass border-white/[0.06] rounded-2xl overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-bold text-white flex items-center gap-2"><Wand2 className="w-4 h-4 text-indigo-400" /> Gerador de Ideias</CardTitle>
            <CardDescription className="text-slate-500">Configure o contexto para a IA.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cliente</Label>
              <Select defaultValue="burger">
                <SelectTrigger className="glass border-white/10 text-slate-200 h-10"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="burger">Burger House</SelectItem>
                  <SelectItem value="sushi">Sushi Real</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Objetivo</Label>
              <Select defaultValue="engagement">
                <SelectTrigger className="glass border-white/10 text-slate-200 h-10"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="engagement">Engajamento / Interação</SelectItem>
                  <SelectItem value="sales">Vendas Diretas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleGenerate} disabled={isGenerating} className="w-full btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl h-11 shadow-lg shadow-indigo-500/25">
              {isGenerating ? "Gerando..." : "Gerar Sugestões"}
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 glass border-white/[0.06] rounded-2xl overflow-hidden min-h-[400px]">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white flex items-center gap-2"><Brain className="w-4 h-4 text-purple-400" /> Resultado da IA</CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6 animate-fade-in-up">
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Legenda Sugerida</p>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {result.caption}
                  </div>
                  <p className="text-indigo-400 text-xs font-medium">{result.hashtags}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Próximos Passos</p>
                  <div className="grid gap-2">
                    {result.ideas.map((idea: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-xs text-slate-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        {idea}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 opacity-40">
                <div className="h-16 w-16 rounded-full bg-white/[0.03] flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-slate-500 text-sm max-w-[240px]">Inicie a geração para ver os resultados aqui.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
