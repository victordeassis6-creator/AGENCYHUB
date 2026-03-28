import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Users, Calendar, LayoutDashboard, Settings } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 w-64 flex-col border-r bg-white dark:bg-slate-900 hidden sm:flex">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">A</div>
            <span>AgencyHub</span>
          </div>
        </div>
        <div className="flex-1 py-4">
          <nav className="grid items-start px-4 text-sm font-medium gap-2">
            <a href="#" className="flex items-center gap-3 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-2.5 transition-all hover:bg-blue-100">
              <LayoutDashboard className="h-4 w-4" /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-all hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-50 dark:hover:bg-slate-800">
              <Users className="h-4 w-4" /> Clientes
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-all hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-50 dark:hover:bg-slate-800">
              <Calendar className="h-4 w-4" /> Calendário
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-all hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-50 dark:hover:bg-slate-800">
              <BarChart className="h-4 w-4" /> Financeiro
            </a>
            <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-all hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-50 dark:hover:bg-slate-800">
              <Settings className="h-4 w-4" /> Configurações
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col sm:pl-64">
        <header className="flex h-14 items-center gap-4 border-b bg-white dark:bg-slate-900 px-4 lg:h-[60px] lg:px-6 justify-between">
          <h1 className="text-xl font-semibold md:text-2xl tracking-tight text-slate-900 dark:text-white">Dashboard Geral</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium hidden md:block">Olá, Agência Parceira</div>
            <div className="h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-slate-100 flex items-center justify-center font-bold text-slate-500">
              AP
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 space-y-8 max-w-7xl mx-auto w-full">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-slate-500">Clientes Ativos</CardTitle>
                <div className="h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-xs text-emerald-600 mt-1 font-medium bg-emerald-50 dark:bg-emerald-900/20 inline-flex px-2 py-0.5 rounded-full">+2 desde o último mês</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-slate-500">Receita Recorrente (MRR)</CardTitle>
                <div className="h-8 w-8 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                  <BarChart className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">R$ 24.500</div>
                <p className="text-xs text-emerald-600 mt-1 font-medium bg-emerald-50 dark:bg-emerald-900/20 inline-flex px-2 py-0.5 rounded-full">+15% vs mês passado</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-slate-500">Entregas Pendentes</CardTitle>
                <div className="h-8 w-8 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">34</div>
                <p className="text-xs text-slate-500 mt-1">Tarefas agendadas para a semana</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 shadow-sm">
              <CardHeader>
                <CardTitle>Visão Geral de Entregas</CardTitle>
                <CardDescription>Acompanhe o % de tarefas cumpridas para cada cliente.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Mock progress bars for clients */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Burger House</span>
                      <span className="text-emerald-600 font-medium">92%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Sushi Real</span>
                      <span className="text-blue-600 font-medium">78%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Clínica Odonto</span>
                      <span className="text-orange-500 font-medium">45%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3 shadow-sm border-orange-100 dark:border-orange-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Checklist Diário <span className="flex h-5 w-5 rounded-full bg-orange-100 text-orange-700 items-center justify-center text-xs ml-2">5</span>
                </CardTitle>
                <CardDescription>Tarefas urgentes para a equipe hoje.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Aprovar roteiro de Reels", client: "Burger House" },
                    { title: "Criar 3 artes para Feed", client: "Sushi Real" },
                    { title: "Responder comentários", client: "Clínica Odonto" }
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg border bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <div className="h-2 w-2 rounded-full bg-orange-500" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{task.title}</p>
                        <p className="text-xs text-slate-500">{task.client}</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs font-medium">Concluir</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  )
}
