"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, Circle, AlertCircle, Sparkles, Clock } from "lucide-react"
import { toast } from "sonner"

export default function ExecucaoPage() {
  const tasks = [
    { id: 1, title: "Publicar Reels (Sextou)", client: "Burger House", status: "pending", type: "Reel", time: "18:00" },
    { id: 2, title: "Aprovar roteiros da próxima semana", client: "Burger House", status: "pending", type: "Planejamento", time: "10:00" },
    { id: 3, title: "Subir campanha de Dia dos Namorados", client: "Sushi Real", status: "done", type: "Tráfego", time: "09:00" },
    { id: 4, title: "Criar 5 stories interativos", client: "Clínica Odonto", status: "pending", type: "Story", time: "14:00" },
    { id: 5, title: "Responder comentários do post de ontem", client: "Clínica Odonto", status: "pending", type: "Social", time: "11:00" },
  ]

  return (
  return (
    <div className="space-y-8 lg:space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Execução Diária</h2>
          <p className="text-slate-500 text-sm">Checklist do que precisa ser entregue hoje.</p>
        </div>
        <div className="flex items-center gap-4 glass rounded-2xl px-5 py-3 border-white/[0.06]">
          <span className="text-sm font-semibold text-slate-400">Progresso:</span>
          <div className="flex bg-white/[0.06] h-3 w-36 rounded-full overflow-hidden">
            <div className={`bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full progress-bar`} style={{ width: `45%` }} />
          </div>
          <span className="text-sm font-extrabold text-indigo-400">45%</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 animate-fade-in-up-delay-1">
        <Card className="md:col-span-2 glass rounded-2xl border-white/[0.06]">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-white">Tarefas de Hoje</CardTitle>
            <CardDescription className="text-slate-500">Fluxo operacional integrado.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className={`flex items-start gap-4 p-4 border rounded-2xl transition-all duration-300 group ${
                task.status === "done" ? "bg-emerald-500/5 border-emerald-500/10 opacity-60" : "bg-white/[0.02] hover:border-indigo-500/20 hover:bg-indigo-500/5 border-white/[0.06]"
              }`}>
                <button onClick={() => toast.success("Tarefa concluída! ✅")} className="mt-0.5 shrink-0 btn-scale">
                  {task.status === "done" ? <CheckCircle2 className="w-6 h-6 text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-600 group-hover:text-indigo-400 transition-colors" />}
                </button>
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className={`font-semibold ${task.status === "done" ? "line-through text-slate-600" : "text-slate-200"}`}>{task.title}</p>
                    <span className={`bg-indigo-500/15 text-indigo-400 text-[10px] px-2.5 py-0.5 rounded-full uppercase font-bold tracking-wider`}>{task.type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="font-medium">{task.client}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {task.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card className="glass rounded-2xl border-white/[0.06] overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
            <CardHeader className="pb-3"><CardTitle className="text-base font-bold text-white flex items-center gap-2"><AlertCircle className="w-4 h-4 text-amber-400" /> Alertas</CardTitle></CardHeader>
            <CardContent>
              <div className="bg-amber-500/10 text-amber-300 p-3.5 rounded-xl text-sm leading-relaxed border border-amber-500/10">
                <strong>Clínica Odonto</strong> está com entregas abaixo de 80%. Agende mais 2 posts.
              </div>
            </CardContent>
          </Card>

          <Card className="glass rounded-2xl border-indigo-500/10 overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
            <CardHeader className="pb-3"><CardTitle className="flex items-center gap-2 text-base font-bold text-indigo-300"><Sparkles className="w-4 h-4 text-indigo-400" /> Copiloto IA</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-400 space-y-4">
              <p>Os roteiros pendentes podem ser gerados em segundos.</p>
              <Button size="sm" className="btn-lift w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg shadow-indigo-500/25">Gerar com IA</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
