"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Mail, Phone, UploadCloud, UserPlus, Shield, Crown, Settings } from "lucide-react"
import { toast } from "sonner"

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-10 lg:space-y-14 animate-fade-in-up max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 animate-fade-in-up">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white flex items-center gap-3">
             Ajustes. <Settings className="w-7 h-7 text-slate-400" />
          </h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest pl-1">Mude aqui o nome, o logo e quem trabalha com você.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <Card className="glass border-white/[0.06] rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0a0616]">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-black italic text-white tracking-tighter">Dados da Agência.</CardTitle>
              <CardDescription className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Informações que aparecem nos seus documentos.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-8">
                <div className="h-24 w-24 rounded-[2rem] border-2 border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-slate-500 cursor-pointer hover:bg-purple-500/15 hover:border-purple-500/30 hover:text-fuchsia-400 transition-all group">
                  <UploadCloud className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Logo</span>
                </div>
                <div>
                   <h4 className="font-black italic text-white tracking-tighter">Seu Logotipo</h4>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">PNG ou JPG até 2MB.</p>
                   <Button variant="link" className="text-fuchsia-400 p-0 h-auto text-[10px] font-black uppercase tracking-widest mt-2 hover:text-fuchsia-300">Trocar Imagem</Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                   <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nome da Agência</Label>
                   <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <Input defaultValue="Agência Parceira" className="pl-12 bg-black/40 border-white/10 h-12 rounded-2xl text-white font-bold transition-all focus:border-purple-500/50" />
                   </div>
                </div>
                <div className="space-y-3">
                   <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">CNPJ</Label>
                   <Input defaultValue="12.345.678/0001-90" className="bg-black/40 border-white/10 h-12 rounded-2xl text-white font-bold transition-all focus:border-purple-500/50" />
                </div>
                <div className="space-y-3">
                   <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">E-mail de Contato</Label>
                   <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <Input defaultValue="contato@agencia.com.br" className="pl-12 bg-black/40 border-white/10 h-12 rounded-2xl text-white font-bold transition-all focus:border-purple-500/50" />
                   </div>
                </div>
                <div className="space-y-3">
                   <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">WhatsApp</Label>
                   <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <Input defaultValue="(11) 99999-9999" className="pl-12 bg-black/40 border-white/10 h-12 rounded-2xl text-white font-bold transition-all focus:border-purple-500/50" />
                   </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button onClick={() => toast.success("Dados salvos com sucesso! ✅")} className="w-full sm:w-auto h-12 px-10 bg-white text-black hover:bg-slate-200 font-black text-xs uppercase tracking-widest rounded-xl shadow-2xl transition-all">
                 Salvar Alterações
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card className="glass border-white/[0.06] rounded-[2.5rem] bg-[#0a0616] p-8 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <UserPlus className="w-24 h-24 text-fuchsia-400" />
             </div>
             <h3 className="text-xl font-black italic text-white tracking-tighter mb-2">Quem trabalha aqui.</h3>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-8">Gerencie seu time de colaboradores.</p>
             
             <div className="space-y-4">
               {[
                 { name: "Victor Assis", email: "victor@agencia.com", role: "Admin", color: "from-purple-400 to-purple-500", icon: Crown },
                 { name: "Julia Santos", email: "julia@agencia.com", role: "Editora", color: "from-violet-400 to-purple-500", icon: Shield }
               ].map((user, i) => (
                 <div key={i} className="flex items-center justify-between p-5 border border-white/5 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                   <div className="flex items-center gap-4">
                     <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${user.color} flex items-center justify-center text-white text-xs font-black shadow-lg`}>
                        {user.name.split(' ').map(n => n[0]).join('')}
                     </div>
                     <div>
                        <p className="font-black italic text-white tracking-tighter text-sm">{user.name}</p>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{user.role}</p>
                     </div>
                   </div>
                   <user.icon className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                 </div>
               ))}
               
               <Button variant="outline" className="w-full h-14 border-purple-400/20 text-fuchsia-400 hover:bg-purple-500/15 rounded-2xl bg-transparent font-black text-[10px] uppercase tracking-[0.2em] mt-4" onClick={() => toast("Convite enviado! 📧")}>
                  <UserPlus className="w-4 h-4 mr-2" /> Adicionar Pessoa
               </Button>
             </div>
          </Card>

          <Card className="glass border-amber-500/20 rounded-[2.5rem] bg-amber-500/[0.02] p-8 shadow-2xl">
             <h3 className="text-sm font-black italic text-amber-400 tracking-tighter mb-4 flex items-center gap-2">
                <Crown className="w-4 h-4" /> Plano Premium Ativo
             </h3>
             <p className="text-[10px] text-slate-400 font-medium leading-relaxed">Sua agência tem acesso a todas as ferramentas de IA e armazenamento ilimitado.</p>
             <Button variant="link" className="text-amber-500 p-0 h-auto text-[10px] font-black uppercase tracking-widest mt-4 hover:text-amber-400">Ver Faturas</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
