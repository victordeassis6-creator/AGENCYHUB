"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Users, Calendar, LayoutDashboard, 
  Settings, CheckSquare, Sparkles, 
  Briefcase, FolderOpen, FilePieChart, 
  Scissors, Camera, ChevronRight
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Clientes", href: "/clientes", icon: Users },
  { name: "Vendas", href: "/vendas", icon: Briefcase },
  { name: "Produção", href: "/producao", icon: Camera },
  { name: "Edição", href: "/edicao", icon: Scissors },
  { name: "Execução", href: "/execucao", icon: CheckSquare },
  { name: "Calendário", href: "/calendario", icon: Calendar },
  { name: "Inteligência (IA)", href: "/ia", icon: Sparkles },
  { name: "Banco de Mídia", href: "/midia", icon: FolderOpen },
  { name: "Relatórios", href: "/relatorios", icon: FilePieChart },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-64 flex-col hidden sm:flex bg-black/20 backdrop-blur-3xl border-r border-white/5">
      {/* Logo */}
      <div className="flex h-20 items-center px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-white to-gray-400 flex items-center justify-center text-black font-black text-sm shadow-xl">A</div>
          <span className="font-bold text-base tracking-tight text-white/90">AgencyHub</span>
        </Link>
      </div>

      {/* Nav */}
      <div className="flex-1 py-4 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-white/10 text-white shadow-lg shadow-indigo-500/10 border border-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className={`h-[18px] w-[18px] stroke-[1.5px] ${isActive ? 'text-indigo-400' : ''}`} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>

      {/* Bottom User */}
      <div className="p-6">
        <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] p-3 hover:bg-white/[0.08] cursor-pointer transition-all group">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-black text-white shadow-lg">AP</div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-white truncate">Agência Parceira</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Membro Pro</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-slate-400" />
        </div>
      </div>
    </aside>
  )
}
