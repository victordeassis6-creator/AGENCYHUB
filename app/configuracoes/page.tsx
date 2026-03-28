"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Mail, Phone, UploadCloud, UserPlus, Shield, Crown } from "lucide-react"
import { toast } from "sonner"

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="animate-fade-in-up">
        <h2 className="text-2xl font-bold text-white">Configurações</h2>
        <p className="text-slate-500 text-sm">Gerencie os dados da agência.</p>
      </div>
      <Card className="glass rounded-2xl border-white/[0.06] animate-fade-in-up-delay-1">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-white">Dados da Agência</CardTitle>
          <CardDescription className="text-slate-500">Informações públicas.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 rounded-2xl border-2 border-dashed border-white/10 bg-white/[0.03] flex flex-col items-center justify-center text-slate-500 cursor-pointer hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-400 transition-all btn-scale">
              <UploadCloud className="w-6 h-6 mb-1" /><span className="text-[10px] font-bold uppercase">Logo</span>
            </div>
            <div><h4 className="font-semibold text-sm text-slate-300">Logotipo</h4><p className="text-xs text-slate-500">400x400px, PNG/JPG até 2MB.</p></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><Label className="text-xs font-semibold text-slate-400 uppercase">Nome</Label><div className="relative"><Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" /><Input defaultValue="Agência Parceira" className="pl-9 rounded-xl border-white/10 bg-white/[0.04] text-slate-200" /></div></div>
            <div className="space-y-2"><Label className="text-xs font-semibold text-slate-400 uppercase">CNPJ</Label><Input defaultValue="12.345.678/0001-90" className="rounded-xl border-white/10 bg-white/[0.04] text-slate-200" /></div>
            <div className="space-y-2"><Label className="text-xs font-semibold text-slate-400 uppercase">Email</Label><div className="relative"><Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" /><Input defaultValue="contato@agencia.com.br" className="pl-9 rounded-xl border-white/10 bg-white/[0.04] text-slate-200" /></div></div>
            <div className="space-y-2"><Label className="text-xs font-semibold text-slate-400 uppercase">WhatsApp</Label><div className="relative"><Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" /><Input defaultValue="(11) 99999-9999" className="pl-9 rounded-xl border-white/10 bg-white/[0.04] text-slate-200" /></div></div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/[0.06] px-6 py-4">
          <Button onClick={() => toast.success("Salvo! ✅")} className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg shadow-indigo-500/25">Salvar</Button>
        </CardFooter>
      </Card>
      <Card className="glass rounded-2xl border-white/[0.06] animate-fade-in-up-delay-2">
        <CardHeader><CardTitle className="text-lg font-bold text-white">Equipe</CardTitle><CardDescription className="text-slate-500">Convide colaboradores.</CardDescription></CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-white/[0.06] rounded-2xl hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-colors">
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">VA</div><div><p className="font-semibold text-sm text-slate-200">Victor Assis</p><p className="text-xs text-slate-500">victor@agencia.com</p></div></div>
            <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400 flex items-center gap-1"><Crown className="w-3 h-3" /> Admin</span>
          </div>
          <div className="flex items-center justify-between p-4 border border-white/[0.06] rounded-2xl hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-colors">
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">JS</div><div><p className="font-semibold text-sm text-slate-200">Julia Santos</p><p className="text-xs text-slate-500">julia@agencia.com</p></div></div>
            <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-teal-500/15 text-teal-400 flex items-center gap-1"><Shield className="w-3 h-3" /> Colaborador</span>
          </div>
          <Button variant="outline" className="btn-lift w-full border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 rounded-xl bg-transparent" onClick={() => toast("Convite enviado! 📧")}><UserPlus className="w-4 h-4 mr-2" /> Convidar</Button>
        </CardContent>
      </Card>
    </div>
  )
}
