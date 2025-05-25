"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart,
  Users,
  MessageSquare,
  Flag,
  Settings,
  Bell,
  LogOut,
  Search,
  Trash2,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Lock,
  User,
  FileText,
  Calendar,
  LayoutDashboard,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function AdminPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)

  // Şikayet verileri
  const reports = [
    {
      id: "1",
      threadTitle: "Uygunsuz İçerik Paylaşımı",
      reporter: "Ali Yılmaz",
      reportedUser: "Taner Yıldız",
      reason: "Konu içeriğinde uygunsuz ifadeler ve hakaret içeren cümleler bulunmaktadır.",
      status: "pending",
      date: "2 saat önce",
      threadId: "thread-123",
    },
    {
      id: "2",
      threadTitle: "Spam İçerik",
      reporter: "Zeynep Kaya",
      reportedUser: "Anonim Kullanıcı",
      reason: "Aynı içerik birden fazla kez paylaşılmış, spam niteliğinde.",
      status: "resolved",
      date: "1 gün önce",
      threadId: "thread-456",
    },
    {
      id: "3",
      threadTitle: "Yanlış Bilgi",
      reporter: "Mehmet Hoca",
      reportedUser: "Ceren Demir",
      reason: "Paylaşılan akademik bilgiler yanlış ve yanıltıcı.",
      status: "pending",
      date: "3 saat önce",
      threadId: "thread-789",
    },
    {
      id: "4",
      threadTitle: "Telif Hakkı İhlali",
      reporter: "Ayşe Öğretmen",
      reportedUser: "Burak Aydın",
      reason: "Paylaşılan içerik telif hakkı ile korunan materyaller içeriyor.",
      status: "pending",
      date: "5 saat önce",
      threadId: "thread-101",
    },
    {
      id: "5",
      threadTitle: "Kişisel Bilgi Paylaşımı",
      reporter: "Müdür Yılmaz",
      reportedUser: "Ece Yılmaz",
      reason: "Başka bir öğrencinin kişisel bilgilerini izinsiz paylaşmış.",
      status: "resolved",
      date: "2 gün önce",
      threadId: "thread-102",
    },
  ]

  // Kullanıcı verileri
  const users = [
    {
      id: "1",
      name: "Ali Yılmaz",
      username: "ali-yilmaz",
      email: "ali.yilmaz@haaal.edu",
      role: "Öğrenci",
      status: "active",
      joinDate: "Ekim 2021",
      lastActive: "2 saat önce",
      postCount: 87,
    },
    {
      id: "2",
      name: "Zeynep Kaya",
      username: "zeynep-kaya",
      email: "zeynep.kaya@haaal.edu",
      role: "Öğrenci",
      status: "active",
      joinDate: "Kasım 2021",
      lastActive: "1 gün önce",
      postCount: 64,
    },
    {
      id: "3",
      name: "Mehmet Hoca",
      username: "mehmet-hoca",
      email: "mehmet.hoca@haaal.edu",
      role: "Öğretmen",
      status: "active",
      joinDate: "Ağustos 2019",
      lastActive: "3 saat önce",
      postCount: 210,
    },
    {
      id: "4",
      name: "Ceren Demir",
      username: "ceren-demir",
      email: "ceren.demir@haaal.edu",
      role: "Öğrenci",
      status: "suspended",
      joinDate: "Ocak 2022",
      lastActive: "1 hafta önce",
      postCount: 42,
    },
    {
      id: "5",
      name: "Taner Yıldız",
      username: "taner-yildiz",
      email: "taner.yildiz@haaal.edu",
      role: "Öğrenci",
      status: "active",
      joinDate: "Şubat 2022",
      lastActive: "5 saat önce",
      postCount: 38,
    },
  ]

  // Gönderi verileri
  const posts = [
    {
      id: "1",
      title: "Final Sınav Programı Yayınlandı",
      author: "Ayşe Öğretmen",
      category: "Duyurular",
      status: "published",
      date: "2 saat önce",
      views: 145,
      replies: 12,
    },
    {
      id: "2",
      title: "Basketbol Takımı Seçmeleri Gelecek Hafta",
      author: "Ahmet Koç",
      category: "Spor",
      status: "published",
      date: "5 saat önce",
      views: 97,
      replies: 8,
    },
    {
      id: "3",
      title: "Bilim Fuarı Proje Fikirleri",
      author: "Ali Yılmaz",
      category: "Akademik",
      status: "published",
      date: "1 gün önce",
      views: 210,
      replies: 23,
    },
    {
      id: "4",
      title: "Uygunsuz İçerik - Silindi",
      author: "Taner Yıldız",
      category: "Genel",
      status: "deleted",
      date: "2 gün önce",
      views: 45,
      replies: 5,
    },
    {
      id: "5",
      title: "Yemekhane Menü Önerileri",
      author: "Zeynep Kaya",
      category: "Genel",
      status: "published",
      date: "3 gün önce",
      views: 256,
      replies: 31,
    },
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogout = () => {
    toast({
      title: "Çıkış Yapıldı",
      description: "Admin panelinden çıkış yaptınız.",
    })
    router.push("/")
  }

  const handleReportAction = (reportId: string, action: string) => {
    toast({
      title: action === "resolve" ? "Şikayet Çözüldü" : "Şikayet Reddedildi",
      description: `Şikayet #${reportId} başarıyla ${action === "resolve" ? "çözüldü" : "reddedildi"}.`,
    })
  }

  const handleUserAction = (userId: string, action: string) => {
    toast({
      title: action === "suspend" ? "Kullanıcı Askıya Alındı" : "Kullanıcı Aktifleştirildi",
      description: `Kullanıcı #${userId} başarıyla ${action === "suspend" ? "askıya alındı" : "aktifleştirildi"}.`,
    })
  }

  const handlePostAction = (postId: string, action: string) => {
    toast({
      title: action === "delete" ? "Gönderi Silindi" : "Gönderi Düzenlendi",
      description: `Gönderi #${postId} başarıyla ${action === "delete" ? "silindi" : "düzenlendi"}.`,
    })
  }

  const handleDeleteConfirm = () => {
    if (selectedItemId) {
      toast({
        title: "Öğe Silindi",
        description: `#${selectedItemId} ID'li öğe başarıyla silindi.`,
      })
      setIsDeleteDialogOpen(false)
      setSelectedItemId(null)
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <header className="border-b bg-background sticky top-0 z-30">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="flex items-center gap-2">
              <LayoutDashboard className="h-6 w-6" />
              <span className="font-bold text-xl">HAAAL Admin</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg?text=A" alt="Admin" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Admin Hesabı</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Ayarlar</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Çıkış Yap</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10 py-6">
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
          <nav className="flex h-full flex-col gap-2 py-2">
            <Button
              variant={activeTab === "dashboard" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <BarChart className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={activeTab === "reports" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("reports")}
            >
              <Flag className="mr-2 h-4 w-4" />
              Şikayetler
              <Badge className="ml-auto" variant="secondary">
                {reports.filter((r) => r.status === "pending").length}
              </Badge>
            </Button>
            <Button
              variant={activeTab === "users" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("users")}
            >
              <Users className="mr-2 h-4 w-4" />
              Kullanıcılar
            </Button>
            <Button
              variant={activeTab === "posts" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("posts")}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Gönderiler
            </Button>
            <Button
              variant={activeTab === "categories" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("categories")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Kategoriler
            </Button>
            <Button
              variant={activeTab === "events" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("events")}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Etkinlikler
            </Button>
            <Button
              variant={activeTab === "settings" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Ayarlar
            </Button>
            <Separator className="my-2" />
            <Button
              variant="ghost"
              className="justify-start text-red-500 hover:text-red-600 hover:bg-red-100"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Çıkış Yap
            </Button>
          </nav>
        </aside>
        <main className="flex w-full flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value="dashboard" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center gap-2">
                  <Button>
                    <Bell className="mr-2 h-4 w-4" />
                    Duyuru Oluştur
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Toplam Kullanıcı</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,245</div>
                    <p className="text-xs text-muted-foreground">Geçen haftaya göre +12% artış</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Toplam Gönderi</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8,392</div>
                    <p className="text-xs text-muted-foreground">Geçen haftaya göre +8% artış</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Aktif Kullanıcılar</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">523</div>
                    <p className="text-xs text-muted-foreground">Şu anda 42 kullanıcı çevrimiçi</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Bekleyen Şikayetler</CardTitle>
                    <Flag className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{reports.filter((r) => r.status === "pending").length}</div>
                    <p className="text-xs text-muted-foreground">Son 24 saatte 3 yeni şikayet</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Forum Aktivitesi</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[200px] flex items-end gap-2">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-primary/10 hover:bg-primary/20 rounded-md w-full transition-colors relative"
                          style={{
                            height: `${Math.floor(Math.random() * 80) + 20}%`,
                          }}
                        >
                          <div className="absolute bottom-1 left-0 right-0 text-center text-xs">{i + 1}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Popüler Kategoriler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-primary"></div>
                            <span>Akademik</span>
                          </div>
                          <span className="font-medium">38%</span>
                        </div>
                        <Progress value={38} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                            <span>Genel Tartışma</span>
                          </div>
                          <span className="font-medium">25%</span>
                        </div>
                        <Progress value={25} className="bg-muted [&>div]:bg-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-green-500"></div>
                            <span>Etkinlikler</span>
                          </div>
                          <span className="font-medium">18%</span>
                        </div>
                        <Progress value={18} className="bg-muted [&>div]:bg-green-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                            <span>Duyurular</span>
                          </div>
                          <span className="font-medium">12%</span>
                        </div>
                        <Progress value={12} className="bg-muted [&>div]:bg-yellow-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-red-500"></div>
                            <span>Diğer</span>
                          </div>
                          <span className="font-medium">7%</span>
                        </div>
                        <Progress value={7} className="bg-muted [&>div]:bg-red-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Son Gönderiler</CardTitle>
                    <CardDescription>Son 24 saat içinde oluşturulan gönderiler</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Başlık</TableHead>
                          <TableHead>Yazar</TableHead>
                          <TableHead>Kategori</TableHead>
                          <TableHead>Tarih</TableHead>
                          <TableHead className="text-right">İşlemler</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {posts.slice(0, 5).map((post) => (
                          <TableRow key={post.id}>
                            <TableCell className="font-medium">{post.title}</TableCell>
                            <TableCell>{post.author}</TableCell>
                            <TableCell>{post.category}</TableCell>
                            <TableCell>{post.date}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">Görüntüle</span>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Tüm Gönderileri Görüntüle
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Bekleyen Şikayetler</CardTitle>
                    <CardDescription>İncelemeniz gereken şikayetler</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {reports
                        .filter((report) => report.status === "pending")
                        .slice(0, 3)
                        .map((report) => (
                          <div key={report.id} className="flex items-start gap-4 border-b pb-4 last:border-0">
                            <div className="flex-1 space-y-1">
                              <p className="text-sm font-medium leading-none">{report.threadTitle}</p>
                              <p className="text-xs text-muted-foreground">
                                {report.reporter} tarafından şikayet edildi
                              </p>
                              <p className="text-xs text-muted-foreground">{report.date}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              İncele
                            </Button>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab("reports")}>
                      Tüm Şikayetleri Görüntüle
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Şikayetler</h2>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Durum" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tüm Şikayetler</SelectItem>
                      <SelectItem value="pending">Bekleyen</SelectItem>
                      <SelectItem value="resolved">Çözülen</SelectItem>
                      <SelectItem value="rejected">Reddedilen</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Şikayetlerde ara..." className="w-[200px] pl-8" />
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Konu</TableHead>
                        <TableHead>Şikayet Eden</TableHead>
                        <TableHead>Şikayet Edilen</TableHead>
                        <TableHead>Durum</TableHead>
                        <TableHead>Tarih</TableHead>
                        <TableHead className="text-right">İşlemler</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reports.map((report) => (
                        <TableRow key={report.id}>
                          <TableCell className="font-medium">#{report.id}</TableCell>
                          <TableCell>
                            <Link href={`/thread/${report.threadId}`} className="hover:underline">
                              {report.threadTitle}
                            </Link>
                          </TableCell>
                          <TableCell>{report.reporter}</TableCell>
                          <TableCell>{report.reportedUser}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                report.status === "pending"
                                  ? "outline"
                                  : report.status === "resolved"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {report.status === "pending"
                                ? "Bekliyor"
                                : report.status === "resolved"
                                  ? "Çözüldü"
                                  : "Reddedildi"}
                            </Badge>
                          </TableCell>
                          <TableCell>{report.date}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => {
                                  toast({
                                    description: `Şikayet nedeni: ${report.reason}`,
                                  })
                                }}
                              >
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">Detaylar</span>
                              </Button>
                              {report.status === "pending" && (
                                <>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-green-500 hover:text-green-600 hover:bg-green-100"
                                    onClick={() => handleReportAction(report.id, "resolve")}
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                    <span className="sr-only">Çöz</span>
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100"
                                    onClick={() => handleReportAction(report.id, "reject")}
                                  >
                                    <XCircle className="h-4 w-4" />
                                    <span className="sr-only">Reddet</span>
                                  </Button>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Kullanıcılar</h2>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tüm Roller</SelectItem>
                      <SelectItem value="student">Öğrenci</SelectItem>
                      <SelectItem value="teacher">Öğretmen</SelectItem>
                      <SelectItem value="staff">Personel</SelectItem>
                      <SelectItem value="admin">Yönetici</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Kullanıcılarda ara..." className="w-[200px] pl-8" />
                  </div>
                  <Button>
                    <User className="mr-2 h-4 w-4" />
                    Kullanıcı Ekle
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Kullanıcı</TableHead>
                        <TableHead>E-posta</TableHead>
                        <TableHead>Rol</TableHead>
                        <TableHead>Durum</TableHead>
                        <TableHead>Katılım</TableHead>
                        <TableHead>Son Aktivite</TableHead>
                        <TableHead className="text-right">İşlemler</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">#{user.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src={`/placeholder.svg?text=${user.name.substring(0, 2)}`}
                                  alt={user.name}
                                />
                                <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col">
                                <span className="font-medium">{user.name}</span>
                                <span className="text-xs text-muted-foreground">@{user.username}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            <Badge
                              variant={user.status === "active" ? "default" : "secondary"}
                              className={user.status === "suspended" ? "bg-red-100 text-red-800 hover:bg-red-100" : ""}
                            >
                              {user.status === "active" ? "Aktif" : "Askıda"}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.joinDate}</TableCell>
                          <TableCell>{user.lastActive}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => router.push(`/profile/${user.username}`)}
                              >
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">Görüntüle</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Düzenle</span>
                              </Button>
                              {user.status === "active" ? (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100"
                                  onClick={() => handleUserAction(user.id, "suspend")}
                                >
                                  <Lock className="h-4 w-4" />
                                  <span className="sr-only">Askıya Al</span>
                                </Button>
                              ) : (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-green-500 hover:text-green-600 hover:bg-green-100"
                                  onClick={() => handleUserAction(user.id, "activate")}
                                >
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="sr-only">Aktifleştir</span>
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="posts" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Gönderiler</h2>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tüm Kategoriler</SelectItem>
                      <SelectItem value="announcements">Duyurular</SelectItem>
                      <SelectItem value="academics">Akademik</SelectItem>
                      <SelectItem value="clubs">Kulüpler</SelectItem>
                      <SelectItem value="events">Etkinlikler</SelectItem>
                      <SelectItem value="general">Genel</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Gönderilerde ara..." className="w-[200px] pl-8" />
                  </div>
                  <Button>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Gönderi Oluştur
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Başlık</TableHead>
                        <TableHead>Yazar</TableHead>
                        <TableHead>Kategori</TableHead>
                        <TableHead>Durum</TableHead>
                        <TableHead>Tarih</TableHead>
                        <TableHead>Görüntüleme</TableHead>
                        <TableHead className="text-right">İşlemler</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {posts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell className="font-medium">#{post.id}</TableCell>
                          <TableCell>
                            <Link href={`/thread/${post.id}`} className="hover:underline">
                              {post.title}
                            </Link>
                          </TableCell>
                          <TableCell>{post.author}</TableCell>
                          <TableCell>{post.category}</TableCell>
                          <TableCell>
                            <Badge
                              variant={post.status === "published" ? "default" : "secondary"}
                              className={post.status === "deleted" ? "bg-red-100 text-red-800 hover:bg-red-100" : ""}
                            >
                              {post.status === "published" ? "Yayında" : "Silindi"}
                            </Badge>
                          </TableCell>
                          <TableCell>{post.date}</TableCell>
                          <TableCell>{post.views}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => router.push(`/thread/${post.id}`)}
                              >
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">Görüntüle</span>
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handlePostAction(post.id, "edit")}
                              >
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Düzenle</span>
                              </Button>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                    <span className="sr-only">Sil</span>
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Gönderiyi Sil</DialogTitle>
                                    <DialogDescription>
                                      Bu gönderiyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <DialogFooter>
                                    <Button variant="secondary" onClick={() => setIsDeleteDialogOpen(false)}>
                                      İptal
                                    </Button>
                                    <Button
                                      variant="destructive"
                                      onClick={() => {
                                        setSelectedItemId(post.id)
                                        handleDeleteConfirm()
                                      }}
                                    >
                                      Sil
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="categories" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Kategoriler</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Kategorilerde ara..." className="w-[200px] pl-8" />
                  </div>
                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    Kategori Ekle
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Başlık</TableHead>
                        <TableHead>Açıklama</TableHead>
                        <TableHead>Gönderi Sayısı</TableHead>
                        <TableHead className="text-right">İşlemler</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* Kategoriler burada listelenecek */}
                      <TableRow>
                        <TableCell className="font-medium">#1</TableCell>
                        <TableCell>Duyurular</TableCell>
                        <TableCell>Okul duyuruları ve bilgilendirmeler</TableCell>
                        <TableCell>56</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Görüntüle</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Düzenle</span>
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Sil</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Kategoriyi Sil</DialogTitle>
                                  <DialogDescription>
                                    Bu kategoriyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <Button variant="secondary" onClick={() => setIsDeleteDialogOpen(false)}>
                                    İptal
                                  </Button>
                                  <Button variant="destructive">Sil</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#2</TableCell>
                        <TableCell>Akademik</TableCell>
                        <TableCell>Dersler, ödevler ve akademik tartışmalar</TableCell>
                        <TableCell>123</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Görüntüle</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Düzenle</span>
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Sil</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Kategoriyi Sil</DialogTitle>
                                  <DialogDescription>
                                    Bu kategoriyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <Button variant="secondary" onClick={() => setIsDeleteDialogOpen(false)}>
                                    İptal
                                  </Button>
                                  <Button variant="destructive">Sil</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Etkinlikler</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Etkinliklerde ara..." className="w-[200px] pl-8" />
                  </div>
                  <Button>
                    <Calendar className="mr-2 h-4 w-4" />
                    Etkinlik Oluştur
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Etkinlik Adı</TableHead>
                        <TableHead>Tarih</TableHead>
                        <TableHead>Yer</TableHead>
                        <TableHead>Açıklama</TableHead>
                        <TableHead className="text-right">İşlemler</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* Etkinlikler burada listelenecek */}
                      <TableRow>
                        <TableCell className="font-medium">#1</TableCell>
                        <TableCell>Bahar Şenliği</TableCell>
                        <TableCell>20 Mayıs 2024</TableCell>
                        <TableCell>Kampüs Alanı</TableCell>
                        <TableCell>Müzik, oyunlar ve yiyecek stantları</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Görüntüle</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Düzenle</span>
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Sil</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Etkinliği Sil</DialogTitle>
                                  <DialogDescription>
                                    Bu etkinliği silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <Button variant="secondary" onClick={() => setIsDeleteDialogOpen(false)}>
                                    İptal
                                  </Button>
                                  <Button variant="destructive">Sil</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#2</TableCell>
                        <TableCell>Kariyer Günleri</TableCell>
                        <TableCell>10 Haziran 2024</TableCell>
                        <TableCell>Kongre Merkezi</TableCell>
                        <TableCell>Şirket sunumları ve iş görüşmeleri</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Görüntüle</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Düzenle</span>
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Sil</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Etkinliği Sil</DialogTitle>
                                  <DialogDescription>
                                    Bu etkinliği silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <Button variant="secondary" onClick={() => setIsDeleteDialogOpen(false)}>
                                    İptal
                                  </Button>
                                  <Button variant="destructive">Sil</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Ayarlar</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Genel Ayarlar</CardTitle>
                  <CardDescription>Web sitesi genel ayarlarını yapılandırın</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="site-title"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Site Başlığı
                    </label>
                    <Input type="text" id="site-title" placeholder="HAAAL" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="site-description"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Site Açıklaması
                    </label>
                    <Input type="text" id="site-description" placeholder="HAAAL Eğitim Platformu" />
                  </div>
                  <Button>Kaydet</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
