"use client"

import { Bell, Search, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center gap-4 bg-[#09090b]/80 backdrop-blur-md px-8 border-b border-[#1a1a1a]">
      <div className="flex items-center gap-4 flex-1">
        <div className="hidden md:flex items-center gap-2 group cursor-pointer lg:w-96">
          <Search className="h-4 w-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
          <span className="text-[13px] text-slate-700 group-hover:text-slate-500 font-semibold transition-colors">Buscar clientes, tarefas ou arquivos...</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-500 hover:text-white transition-colors">
          <Bell className="h-[18px] w-[18px] stroke-[1.5px]" />
          <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />
        </button>
        
        <div className="flex items-center gap-4 border-l border-[#1a1a1a] pl-6 h-8">
           <div className="flex flex-col items-end hidden md:flex">
              <span className="text-[11px] font-bold text-white">Vitor Assis</span>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">Admin</span>
           </div>
           <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer group">
              <User className="h-4 w-4 stroke-[1.5px] group-hover:scale-110 transition-transform" />
           </div>
        </div>
      </div>
    </header>
  )
}
