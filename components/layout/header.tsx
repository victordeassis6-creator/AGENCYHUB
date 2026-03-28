"use client"

import { usePathname } from "next/navigation"
import { Bell } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  
  const titles: Record<string, string> = {
    "/": "Dashboard Geral",
    "/clientes": "Gestão de Clientes",
    "/execucao": "Controle de Execução",
    "/calendario": "Calendário de Conteúdo",
    "/ia": "Inteligência Artificial",
    "/financeiro": "Gestão Financeira",
    "/configuracoes": "Configurações da Agência",
    "/portal": "Portal do Cliente"
  }
  
  const title = titles[pathname] || "Dashboard"

  return (
    <header className="flex h-16 items-center gap-4 border-b border-white/[0.06] glass px-6 justify-between sticky top-0 z-10">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-white">{title}</h1>
        <p className="text-xs text-slate-500 font-medium mt-0.5">Sexta-feira, 27 de Março 2026</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="btn-scale relative h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all">
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-bold flex items-center justify-center shadow-lg shadow-rose-500/40">3</span>
        </button>
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-indigo-500/30 btn-scale cursor-pointer">
          AP
        </div>
      </div>
    </header>
  )
}
