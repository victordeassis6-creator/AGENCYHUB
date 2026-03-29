"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Users, Calendar, LayoutDashboard, 
  Settings, CheckSquare, Sparkles, 
  Briefcase, FolderOpen, FilePieChart, 
  Scissors, Camera, ChevronRight, FileText,
  Wallet
} from "lucide-react"

const navItems = [
  { name: "Início", href: "/", icon: LayoutDashboard },
  { name: "Meus Clientes", href: "/clientes", icon: Users },
  { name: "Relatórios", href: "/relatorios", icon: FilePieChart },
  { name: "Criar Roteiro", href: "/roteiros", icon: FileText },
  { name: "Linha de Produção", href: "/producao", icon: Camera },
  { name: "Tarefas", href: "/execucao", icon: CheckSquare },
  { name: "Datas e Postagens", href: "/calendario", icon: Calendar },
  { name: "Laboratório de Ideias", href: "/ia", icon: Sparkles },
  { name: "Meus Arquivos", href: "/midia", icon: FolderOpen },
  { name: "Meu Cofre", href: "/financeiro", icon: Wallet },
  { name: "Vendas e Planos", href: "/vendas", icon: Briefcase },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-64 flex-col hidden sm:flex bg-white/[0.02] backdrop-blur-3xl border-r border-white/5 shadow-2xl">
      {/* Logo */}
      <div className="flex h-20 items-center px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 via-violet-600 to-purple-700 flex items-center justify-center text-white font-black text-base shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:scale-110 transition-transform duration-300">A</div>
          <span className="font-bold text-lg tracking-tighter text-white/90 italic">Agency<span className="text-emerald-400">Hub</span></span>
        </Link>
      </div>

      {/* Nav */}
      <div className="flex-1 py-4 px-4 space-y-2 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-5 py-3.5 text-[13px] font-bold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-white shadow-xl border border-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className={`h-[18px] w-[18px] stroke-[2px] ${isActive ? 'text-violet-400' : 'group-hover:text-violet-400 opacity-70 transition-all'}`} />
              <span className="tracking-tight">{item.name}</span>
            </Link>
          )
        })}
      </div>

      {/* Bottom User */}
      <div className="p-6">
        <div className="flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] p-4 hover:bg-white/[0.08] cursor-pointer transition-all group shadow-xl">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-400 to-violet-600 flex items-center justify-center text-[11px] font-black text-white shadow-lg border border-white/20">AP</div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-bold text-white truncate">Agência Parceira</p>
            <p className="text-[10px] text-emerald-400/80 font-black uppercase tracking-widest">Membro Pro</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
        </div>
      </div>
    </aside>
  )
}
