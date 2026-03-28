"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  FolderOpen, Plus, Search, FileImage, 
  FileVideo, MoreVertical, Download, 
  ExternalLink, UploadCloud, Trash2
} from "lucide-react"
import { toast } from "sonner"

export default function MediaBankPage() {
  const [activeClient, setActiveClient] = useState("burger")

  const mediaItems = [
    { id: 1, name: "Foto_Smash_Burger.jpg", type: "image", size: "2.4 MB", date: "27/03" },
    { id: 2, name: "Video_Chef_Preparando.mp4", type: "video", size: "18.5 MB", date: "26/03" },
    { id: 3, name: "Logo_Vetor_V2.svg", type: "image", size: "0.5 MB", date: "20/03" },
    { id: 4, name: "Raw_Footage_Sexta.mov", type: "video", size: "145 MB", date: "15/03" },
  ]

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <FolderOpen className="w-6 h-6 text-indigo-400" /> Banco de Mídia
          </h2>
          <p className="text-slate-500 text-sm font-medium">Biblioteca central de assets para criação de conteúdo.</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => toast("Solicitar Upload ao Cliente")} variant="outline" className="border-white/10 glass text-slate-400 hover:text-white rounded-xl bg-transparent">
            Solicitar Mídia
          </Button>
          <Button onClick={() => toast("Upload em massa...")} className="btn-lift bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl px-6 h-11">
            <UploadCloud className="w-4 h-4 mr-2" /> Upload de Arquivos
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-64 space-y-2">
          <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Filtrar Cliente</Label>
          <Select value={activeClient} onValueChange={setActiveClient}>
            <SelectTrigger className="glass border-white/10 text-slate-200 h-10"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="burger">Burger House</SelectItem>
              <SelectItem value="sushi">Sushi Real</SelectItem>
              <SelectItem value="odonto">Clínica Odonto</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 space-y-2">
          <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Buscar Arquivo</Label>
          <div className="relative">
             <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
             <Input placeholder="Buscar por nome ou formato..." className="glass border-white/10 text-slate-200 h-10 pl-10" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {mediaItems.map((item) => (
          <Card key={item.id} className="card-hover glass border-white/[0.06] rounded-2xl overflow-hidden group cursor-pointer relative">
            <div className="aspect-square bg-white/[0.03] flex flex-col items-center justify-center p-6 text-center">
               {item.type === "image" ? <FileImage className="w-10 h-10 text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity" /> : <FileVideo className="w-10 h-10 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity" />}
               <p className="text-[10px] text-slate-400 mt-4 font-semibold truncate w-full px-2">{item.name}</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center gap-2">
               <Button size="icon" variant="ghost" className="h-7 w-7 rounded-lg text-white hover:bg-white/10 p-0"><Download className="w-3.5 h-3.5" /></Button>
               <Button size="icon" variant="ghost" className="h-7 w-7 rounded-lg text-white hover:bg-white/10 p-0"><Trash2 className="w-3.5 h-3.5 text-rose-400" /></Button>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="h-6 w-6 rounded-lg bg-white/10 flex items-center justify-center text-white"><MoreVertical className="w-3 h-3" /></button>
            </div>
          </Card>
        ))}

        <Card className="card-hover border-2 border-dashed border-white/10 bg-transparent rounded-2xl cursor-pointer hover:border-indigo-500/30 hover:bg-indigo-500/5 group flex items-center justify-center aspect-square" onClick={() => toast("Adicionar...")}>
          <div className="text-center">
            <div className="h-10 w-10 mx-auto rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-500 group-hover:text-indigo-400 transition-colors mb-2">
              <Plus className="w-5 h-5" />
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Novo Arquivo</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
