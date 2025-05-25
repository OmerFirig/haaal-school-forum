import type { Metadata } from "next"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Users, Search, Lock, Globe, UserPlus, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gruplar | HAAAL Forum",
  description: "HAAAL Forum grupları keşfedin ve katılın",
}

export default function GroupsPage() {
  // Örnek grup verileri
  const featuredGroups = [
    {
      id: "1",
      name: "Matematik Çalışma Grubu",
      description: "Matematik derslerinde yardımlaşma ve soru çözme grubu",
      memberCount: 156,
      isPrivate: false,
      lastActivity: "2 saat önce",
      avatar: "/placeholder.svg?text=MAT",
    },
    {
      id: "2",
      name: "Fizik Laboratuvarı",
      description: "Fizik deneyleri ve laboratuvar çalışmaları hakkında tartışma grubu",
      memberCount: 89,
      isPrivate: false,
      lastActivity: "Dün",
      avatar: "/placeholder.svg?text=FİZ",
    },
    {
      id: "3",
      name: "Edebiyat Kulübü",
      description: "Kitap önerileri, şiir ve edebiyat tartışmaları",
      memberCount: 212,
      isPrivate: false,
      lastActivity: "3 gün önce",
      avatar: "/placeholder.svg?text=EDK",
    },
    {
      id: "4",
      name: "Öğretmenler Odası",
      description: "Sadece öğretmenlere özel tartışma ve paylaşım grubu",
      memberCount: 45,
      isPrivate: true,
      lastActivity: "5 saat önce",
      avatar: "/placeholder.svg?text=ÖĞR",
    },
  ]

  const myGroups = [
    {
      id: "1",
      name: "Matematik Çalışma Grubu",
      description: "Matematik derslerinde yardımlaşma ve soru çözme grubu",
      memberCount: 156,
      isPrivate: false,
      lastActivity: "2 saat önce",
      avatar: "/placeholder.svg?text=MAT",
      unreadCount: 5,
    },
    {
      id: "5",
      name: "10-A Sınıf Grubu",
      description: "10-A sınıfı öğrencileri ve öğretmenleri için grup",
      memberCount: 32,
      isPrivate: true,
      lastActivity: "1 saat önce",
      avatar: "/placeholder.svg?text=10A",
      unreadCount: 12,
    },
    {
      id: "6",
      name: "Okul Gezisi Planlama",
      description: "Yıl sonu okul gezisi planlama ve organizasyon grubu",
      memberCount: 18,
      isPrivate: true,
      lastActivity: "Dün",
      avatar: "/placeholder.svg?text=GEZ",
      unreadCount: 0,
    },
  ]

  const suggestedGroups = [
    {
      id: "2",
      name: "Fizik Laboratuvarı",
      description: "Fizik deneyleri ve laboratuvar çalışmaları hakkında tartışma grubu",
      memberCount: 89,
      isPrivate: false,
      lastActivity: "Dün",
      avatar: "/placeholder.svg?text=FİZ",
    },
    {
      id: "3",
      name: "Edebiyat Kulübü",
      description: "Kitap önerileri, şiir ve edebiyat tartışmaları",
      memberCount: 212,
      isPrivate: false,
      lastActivity: "3 gün önce",
      avatar: "/placeholder.svg?text=EDK",
    },
    {
      id: "7",
      name: "Bilim ve Teknoloji",
      description: "Bilimsel gelişmeler ve teknoloji haberleri hakkında tartışmalar",
      memberCount: 178,
      isPrivate: false,
      lastActivity: "4 saat önce",
      avatar: "/placeholder.svg?text=BİL",
    },
    {
      id: "8",
      name: "Yabancı Dil Pratiği",
      description: "İngilizce, Almanca ve diğer dillerde pratik yapma grubu",
      memberCount: 124,
      isPrivate: false,
      lastActivity: "2 gün önce",
      avatar: "/placeholder.svg?text=DIL",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-heading">Gruplar</h1>
            <p className="text-muted-foreground">Ortak ilgi alanlarına sahip kişilerle bağlantı kurun ve tartışın</p>
          </div>
          <div className="flex gap-2">
            <Link href="/chat/group">
              <Button className="animated-button">
                <Users className="mr-2 h-4 w-4" />
                Yeni Grup Oluştur
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Grup ara..." className="pl-10" />
        </div>

        <Tabs defaultValue="featured" className="mb-6">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="featured" className="flex-1 md:flex-none">
              <Globe className="mr-2 h-4 w-4" />
              Öne Çıkan
            </TabsTrigger>
            <TabsTrigger value="my-groups" className="flex-1 md:flex-none">
              <Users className="mr-2 h-4 w-4" />
              Gruplarım
            </TabsTrigger>
            <TabsTrigger value="suggested" className="flex-1 md:flex-none">
              <UserPlus className="mr-2 h-4 w-4" />
              Önerilen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredGroups.map((group) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-groups" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myGroups.map((group) => (
                <GroupCard key={group.id} group={group} isMember />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="suggested" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestedGroups.map((group) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <ForumFooter />
    </div>
  )
}

interface GroupCardProps {
  group: {
    id: string
    name: string
    description: string
    memberCount: number
    isPrivate: boolean
    lastActivity: string
    avatar: string
    unreadCount?: number
  }
  isMember?: boolean
}

function GroupCard({ group, isMember = false }: GroupCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={group.avatar || "/placeholder.svg"} alt={group.name} />
              <AvatarFallback>{group.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                {group.name}
                {group.isPrivate && <Lock className="h-4 w-4 text-muted-foreground" />}
              </CardTitle>
              <CardDescription className="line-clamp-1">{group.description}</CardDescription>
            </div>
          </div>
          {group.unreadCount && group.unreadCount > 0 ? (
            <Badge variant="secondary" className="ml-2 pulse">
              {group.unreadCount}
            </Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            <span>{group.memberCount} üye</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{group.lastActivity}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {isMember ? (
          <Button variant="default" className="w-full">
            <MessageSquare className="mr-2 h-4 w-4" />
            Sohbete Git
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <UserPlus className="mr-2 h-4 w-4" />
            Katıl
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
