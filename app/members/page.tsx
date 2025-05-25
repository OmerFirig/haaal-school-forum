import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Users, ArrowUpDown } from "lucide-react"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MembersPage() {
  // Üye verileri
  const members = [
    {
      id: "1",
      name: "Ayşe Öğretmen",
      username: "ayse-ogretmen",
      role: "Öğretmen",
      joinDate: "Eylül 2020",
      posts: 145,
      reputation: 1250,
      badges: ["Onur Listesi", "Yardımsever", "Aktif Üye"],
      isOnline: true,
      avatar: "/placeholder.svg?text=AÖ",
    },
    {
      id: "2",
      name: "Ali Yılmaz",
      username: "ali-yilmaz",
      role: "Öğrenci",
      joinDate: "Ekim 2021",
      posts: 87,
      reputation: 980,
      badges: ["Bilim Kulübü", "Aktif Üye"],
      isOnline: true,
      avatar: "/placeholder.svg?text=AY",
    },
    {
      id: "3",
      name: "Zeynep Kaya",
      username: "zeynep-kaya",
      role: "Öğrenci",
      joinDate: "Kasım 2021",
      posts: 64,
      reputation: 845,
      badges: ["Münazara Takımı", "Yardımsever"],
      isOnline: false,
      avatar: "/placeholder.svg?text=ZK",
    },
    {
      id: "4",
      name: "Mehmet Hoca",
      username: "mehmet-hoca",
      role: "Öğretmen",
      joinDate: "Ağustos 2019",
      posts: 210,
      reputation: 1560,
      badges: ["Onur Listesi", "Yardımsever", "Aktif Üye", "Moderatör"],
      isOnline: false,
      avatar: "/placeholder.svg?text=MH",
    },
    {
      id: "5",
      name: "Ceren Demir",
      username: "ceren-demir",
      role: "Öğrenci",
      joinDate: "Ocak 2022",
      posts: 42,
      reputation: 320,
      badges: ["Yeni Üye"],
      isOnline: true,
      avatar: "/placeholder.svg?text=CD",
    },
    {
      id: "6",
      name: "Taner Yıldız",
      username: "taner-yildiz",
      role: "Öğrenci",
      joinDate: "Şubat 2022",
      posts: 38,
      reputation: 290,
      badges: ["Matematik Kulübü"],
      isOnline: true,
      avatar: "/placeholder.svg?text=TY",
    },
    {
      id: "7",
      name: "Fatma Hanım",
      username: "fatma-hanim",
      role: "Personel",
      joinDate: "Temmuz 2020",
      posts: 95,
      reputation: 780,
      badges: ["Personel", "Aktif Üye"],
      isOnline: false,
      avatar: "/placeholder.svg?text=FH",
    },
    {
      id: "8",
      name: "Ahmet Koç",
      username: "ahmet-koc",
      role: "Personel",
      joinDate: "Haziran 2021",
      posts: 67,
      reputation: 540,
      badges: ["Spor Departmanı"],
      isOnline: false,
      avatar: "/placeholder.svg?text=AK",
    },
    {
      id: "9",
      name: "Müdür Yılmaz",
      username: "mudur-yilmaz",
      role: "Yönetici",
      joinDate: "Ocak 2018",
      posts: 120,
      reputation: 1800,
      badges: ["Yönetici", "Onur Listesi", "Aktif Üye"],
      isOnline: true,
      avatar: "/placeholder.svg?text=MY",
    },
    {
      id: "10",
      name: "Ece Yılmaz",
      username: "ece-yilmaz",
      role: "Öğrenci",
      joinDate: "Mart 2023",
      posts: 12,
      reputation: 85,
      badges: ["Yeni Üye"],
      isOnline: false,
      avatar: "/placeholder.svg?text=EY",
    },
    {
      id: "11",
      name: "Burak Aydın",
      username: "burak-aydin",
      role: "Öğrenci",
      joinDate: "Nisan 2022",
      posts: 45,
      reputation: 320,
      badges: ["Bilim Kulübü"],
      isOnline: true,
      avatar: "/placeholder.svg?text=BA",
    },
    {
      id: "12",
      name: "Seda Çelik",
      username: "seda-celik",
      role: "Öğrenci",
      joinDate: "Eylül 2022",
      posts: 24,
      reputation: 210,
      badges: ["Münazara Takımı"],
      isOnline: false,
      avatar: "/placeholder.svg?text=SÇ",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col animated-bg">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <section className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight gradient-heading">Üyeler</h1>
                <p className="text-muted-foreground">Toplam {members.length} üye</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Input placeholder="Üyelerde ara..." className="pr-10 w-[300px] gradient-border" />
                  <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Ara</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <Filter className="h-3.5 w-3.5" />
                      <span>Filtrele</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Tüm Üyeler</DropdownMenuItem>
                    <DropdownMenuItem>Öğretmenler</DropdownMenuItem>
                    <DropdownMenuItem>Öğrenciler</DropdownMenuItem>
                    <DropdownMenuItem>Personel</DropdownMenuItem>
                    <DropdownMenuItem>Yöneticiler</DropdownMenuItem>
                    <DropdownMenuItem>Çevrimiçi Üyeler</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Select defaultValue="reputation">
                  <SelectTrigger className="w-[180px] h-8">
                    <SelectValue placeholder="Sıralama" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reputation">İtibar Puanı</SelectItem>
                    <SelectItem value="posts">Gönderi Sayısı</SelectItem>
                    <SelectItem value="joinDate">Katılım Tarihi</SelectItem>
                    <SelectItem value="name">İsim</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <ArrowUpDown className="h-3.5 w-3.5" />
                  <span>Azalan</span>
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Users className="h-3.5 w-3.5" />
                  <span>Çevrimiçi: {members.filter((m) => m.isOnline).length}</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member) => (
                <Link href={`/profile/${member.username}`} key={member.id}>
                  <Card className="animated-card h-full hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Avatar className="h-12 w-12 border">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          {member.isOnline && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background pulse"></div>
                          )}
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium">{member.name}</div>
                          <div className="text-xs text-muted-foreground">@{member.username}</div>
                          <div className="text-xs text-muted-foreground">{member.role}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {member.badges.map((badge, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                          <div className="bg-muted/50 p-2 rounded-md">
                            <div className="font-medium">{member.posts}</div>
                            <div className="text-xs text-muted-foreground">Gönderiler</div>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-md">
                            <div className="font-medium">{member.reputation}</div>
                            <div className="text-xs text-muted-foreground">İtibar</div>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-md">
                            <div className="font-medium">{member.joinDate}</div>
                            <div className="text-xs text-muted-foreground">Katılım</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Önceki
                </Button>
                <Button variant="outline" size="sm" className="bg-primary/10">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <span className="mx-1">...</span>
                <Button variant="outline" size="sm">
                  8
                </Button>
                <Button variant="outline" size="sm">
                  Sonraki
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ForumFooter />
    </div>
  )
}
