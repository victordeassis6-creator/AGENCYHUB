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
  ExternalLink, UploadCloud, Trash2,
  Link as LinkIcon, Globe
} from "lucide-react"
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogDescription, DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { toast } from "sonner"

export default function MediaBankPage() {
  const [activeClient, setActiveClient] = useState("burger")
  const [newLink, setNewLink] = useState("")

  const mediaItems = [
    { id: 1, name: "Foto_Smash_Burger.jpg", type: "image", size: "2.4 MB", date: "27/03", url: "#" },
    { id: 2, name: "Video_Chef_Preparando.mp4", type: "video", size: "18.5 MB", date: "26/03", url: "#" },
    { id: 3, name: "Drive: Campanha Abril", type: "link", size: "--", date: "20/03", url: "https://drive.google.com" },
    { id: 4, name: "Raw_Footage_Sexta.mov", type: "video", size: "145 MB", date: "15/03", url: "#" },
  ]

  const handleAddLink = () => {
    if (!newLink) return toast.error("Insira o link do Drive ou Dropbox.")
    toast.success("Link adicionado com sucesso!")
    setNewLink("")
  }

  return (
    <div className="space-y-6 lg:space-y-10 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-3 italic">
            Pasta de Arquivos. <FolderOpen className="w-6 h-6 text-fuchsia-400" />
          </h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest pl-1">Onde ficam guardadas as fotos e vídeos de cada cliente.</p>
        </div>
        <div className="flex gap-3">
          <Dialog>
            <DialogTrigger className="h-12 border border-white/10 glass text-fuchsia-400 hover:text-white rounded-2xl bg-transparent font-black text-xs uppercase tracking-widest px-6 flex items-center gap-2">
               <LinkIcon className="w-4 h-4" /> Link do Drive
            </DialogTrigger>
            <DialogContent className="bg-[#0e0e10] border-white/10 rounded-[2rem] p-8 shadow-3xl">
               <DialogHeader>
                  <DialogTitle className="text-2xl font-black italic text-white tracking-tighter">Adicionar Pasta Externa</DialogTitle>
                  <DialogDescription className="text-slate-500 font-bold text-xs uppercase tracking-widest">Cole o link do Google Drive ou Dropbox do cliente.</DialogDescription>
               </DialogHeader>
               <div className="py-6 space-y-4">
                  <div className="space-y-2">
                     <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">URL da Pasta</Label>
                     <Input 
                        placeholder="https://drive.google.com/..." 
                        value={newLink}
                        onChange={(e) => setNewLink(e.target.value)}
                        className="bg-black/40 border-white/5 h-12 rounded-xl text-sm font-bold"
                     />
                  </div>
               </div>
               <DialogFooter>
                  <Button onClick={handleAddLink} className="w-full h-12 bg-purple-600 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-fuchsia-500/25">Vincular Pasta</Button>
               </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button onClick={() => toast("Upload em massa...")} className="h-12 px-8 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-fuchsia-500/25">
            <UploadCloud className="w-4 h-4 mr-2" /> Upload
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 space-y-2">
          <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Escolher Cliente</Label>
          <Select value={activeClient} onValueChange={(val) => setActiveClient(val || "burger")}>
            <SelectTrigger className="glass border-white/10 text-slate-200 h-12 rounded-xl font-bold"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-[#0a0616] border-white/10 rounded-xl">
              <SelectItem value="burger" className="font-bold">Burger House</SelectItem>
              <SelectItem value="sushi" className="font-bold">Sushi Real</SelectItem>
              <SelectItem value="odonto" className="font-bold">Clínica Odonto</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 space-y-2">
          <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Procurar por nome</Label>
          <div className="relative">
             <Search className="absolute left-4 top-4 h-4 w-4 text-slate-500" />
             <Input placeholder="Qual arquivo você quer encontrar?" className="glass border-white/10 text-slate-200 h-12 pl-12 rounded-xl font-bold" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {mediaItems.map((item) => (
          <Card key={item.id} className="card-hover glass border-white/[0.06] rounded-[2rem] overflow-hidden group cursor-pointer relative shadow-2xl h-full flex flex-col">
            <div className="aspect-square bg-white/[0.03] flex flex-col items-center justify-center p-8 text-center flex-1">
               {item.type === "image" ? <FileImage className="w-12 h-12 text-fuchsia-400 opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110" /> : 
                item.type === "link" ? <Globe className="w-12 h-12 text-emerald-400 opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110" /> :
                <FileVideo className="w-12 h-12 text-fuchsia-400 opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110" />}
               <p className="text-[10px] text-slate-400 mt-6 font-black uppercase tracking-widest truncate w-full px-2 italic">{item.name}</p>
            </div>
            <div className="p-3 bg-white/[0.02] border-t border-white/5 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
               <a href={item.url} target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-xl text-fuchsia-400 hover:bg-white/5 flex items-center justify-center"><ExternalLink className="w-4 h-4" /></a>
               <Button size="icon" variant="ghost" className="h-8 w-8 rounded-xl text-rose-400 hover:bg-white/5 p-0"><Trash2 className="w-4 h-4" /></Button>
            </div>
            {item.type === "link" && (
                <div className="absolute top-3 left-3">
                   <div className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-[8px] font-black text-emerald-400 uppercase tracking-widest">Externo</div>
                </div>
            )}
          </Card>
        ))}

        <Card className="card-hover border-2 border-dashed border-white/5 bg-transparent rounded-[2rem] cursor-pointer hover:border-purple-500/30 hover:bg-purple-500/15 group flex items-center justify-center aspect-square" onClick={() => toast("Upload...")}>
          <div className="text-center">
            <div className="h-12 w-12 mx-auto rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-500 group-hover:text-fuchsia-400 transition-all mb-3">
              <Plus className="w-6 h-6" />
            </div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Novo</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
