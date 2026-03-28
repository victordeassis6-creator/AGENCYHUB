"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  BarChart, Users, Calendar, LayoutDashboard, 
  Settings, CheckSquare, Sparkles, UserCircle, 
  LogOut, ShieldCheck 
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Clientes", href: "/clientes", icon: Users },
  { name: "Execução", href: "/execucao", icon: CheckSquare },
  { name: "Calendário", href: "/calendario", icon: Calendar },
  { name: "Inteligência (IA)", href: "/ia", icon: Sparkles },
  { name: "Financeiro", href: "/financeiro", icon: BarChart },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
  { name: "Portal (Cliente)", href: "/portal", icon: UserCircle },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-64 flex-col hidden sm:flex glass border-r border-white/[0.06]">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-white/[0.06] px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300">
            A
          </div>
          <span className="font-bold text-lg tracking-tight text-white">Agency<span className="text-indigo-400">Hub</span></span>
        </Link>
      </div>

      {/* Nav */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium ${
                isActive
                  ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 shadow-sm shadow-indigo-500/10 border border-indigo-500/20"
                  : "text-slate-400 hover:text-indigo-300 hover:bg-white/[0.04]"
              }`}
            >
              <item.icon className={`h-[18px] w-[18px] ${isActive ? "text-indigo-400" : ""}`} />
              {item.name}
              {isActive && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400/50" />
              )}
            </Link>
          )
        })}
      </div>

      {/* Bottom User */}
      <div className="border-t border-white/[0.06] p-4">
        <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/10 p-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-indigo-500/30">
            AP
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-200 truncate">Agência Parceira</p>
            <p className="text-[11px] text-slate-500 truncate">Plano Pro</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
