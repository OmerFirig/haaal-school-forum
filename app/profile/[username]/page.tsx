"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  CalendarDays,
  Mail,
  MapPin,
  Settings,
  Edit,
  Users,
  UserPlus,
  MessageSquare,
  FileText,
  Bookmark,
  Heart,
  Share2,
} from "lucide-react"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import RecentThreadCard from "@/components/recent-thread-card"
import UserAchievements from "@/components/user-achievements"
import UserStats from "@/components/user-stats"
import UserCalendar from "@/components/user-calendar"
import { useRouter } from "next/navigation"

export default function ProfilePage({ params }: { params: { username: string } }) {
  const router = useRouter()
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState("threads")

  // This would normally fetch user data based on the username
  // For now we'll use static data
  const user = {
    name: "Seda Çelik",
    username: "seda-celik",
    role: "Öğrenci",
    bio: "HAAAL Lisesi'nde son sınıf öğrencisi. 2025 mezunu. Bilgisayar bilimi, matematik ve münazara kulübü ile ilgileniyorum.",
    location: "HAAAL Lisesi, İstanbul",
    email: "seda.celik@haaal.edu",
    joinDate: "Eylül 2022",
    lastActive: "Bugün saat 10:45",
    threadCount: 24,
    replyCount: 87,
    followersCount: 156,
    followingCount: 89,
    likesCount: 342,
    badges: ["Onur Listesi", "Münazara Takımı", "Öğrenci Konseyi"],
    achievements: [
      { name: "Konuşmacı", description: "100 konu başlattı", icon: "MessageSquare", progress: 24, max: 100 },
      { name: "Yardımsever", description: "50 soruyu cevapladı", icon: "HelpCircle", progress: 37, max: 50 },
      { name: "Popüler", description: "100 takipçi kazandı", icon: "Users", progress: 156, max: 100, completed: true },
      { name: "Aktif Üye", description: "365 gün boyunca aktif kaldı", icon: "Calendar", progress: 187, max: 365 },
    ],
    recentThreads: [
      {
        title: "Bilim Fuarı Proje Fikirleri",
        author: "Seda Çelik",
        authorRole: "Öğrenci",
        category: "Akademik",
        replies: 23,
        views: 210,
        timestamp: "1 gün önce",
        id: "3",
        tags: ["bilim", "projeler"],
      },
      {
        title: "Çalışma Grubu Arıyorum - Kalkülüs",
        author: "Seda Çelik",
        authorRole: "Öğrenci",
        category: "Akademik",
        replies: 0,
        views: 12,
        timestamp: "1 saat önce",
        id: "6",
        tags: ["matematik", "çalışma grubu"],
      },
      {
        title: "Kampüste En İyi Çalışma Yerleri?",
        author: "Seda Çelik",
        authorRole: "Öğrenci",
        category: "Genel",
        replies: 14,
        views: 103,
        timestamp: "4 gün önce",
        id: "15",
        tags: ["kampüs", "çalışma"],
      },
    ],
    recentReplies: [
      {
        threadTitle: "Final Sınav Programı Yayınlandı",
        threadId: "1",
        content: "AP Kalkülüs için bir tekrar dersi olacak mı?",
        timestamp: "3 saat önce",
      },
      {
        threadTitle: "Basketbol Takımı Seçmeleri Gelecek Hafta",
        threadId: "2",
        content: "Seçmelere katılmak için herhangi bir gereksinim var mı?",
        timestamp: "1 gün önce",
      },
      {
        threadTitle: "Yemekhane Menü Önerileri",
        threadId: "5",
        content: "Daha fazla vejetaryen seçenek olmasını çok isterim!",
        timestamp: "2 gün önce",
      },
    ],
    savedThreads: [
      {
        title: "Üniversite Başvuru Süreci Hakkında",
        author: "Ayşe Öğretmen",
        authorRole: "Öğretmen",
        category: "Akademik",
        replies: 45,
        views: 320,
        timestamp: "1 hafta önce",
        id: "20",
        tags: ["üniversite", "başvuru"],
      },
      {
        title: "Yaz Staj Fırsatları 2025",
        author: "Kariyer Merkezi",
        authorRole: "Departman",
        category: "Kariyer",
        replies: 18,
        views: 245,
        timestamp: "2 hafta önce",
        id: "25",
        tags: ["staj", "kariyer"],
      },
    ],
    likedThreads: [
      {
        title: "Mezuniyet Töreni Hazırlıkları",
        author: "Müdür Yılmaz",
        authorRole: "Yönetici",
        category: "Etkinlikler",
        replies: 32,
        views: 410,
        timestamp: "3 gün önce",
        id: "30",
        tags: ["mezuniyet", "tören"],
      },
      {
        title: "Okul Gazetesi İçin Yazar Aranıyor",
        author: "Edebiyat Kulübü",
        authorRole: "Kulüp",
        category: "Kulüpler",
        replies: 7,
        views: 130,
        timestamp: "5 gün önce",
        id: "35",
        tags: ["gazete", "yazarlık"],
      },
    ],
  }

  // Generate initials from user name
  const initials = user.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  const isOwnProfile = params.username === "seda-celik"

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <div className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=1200"
              alt="Kapak fotoğrafı"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              {isOwnProfile ? (
                <>
                  <Button onClick={() => router.push("/settings")} variant="secondary">
                    <Settings className="h-4 w-4 mr-2" />
                    Ayarlar
                  </Button>
                  <Button variant="secondary">
                    <Edit className="h-4 w-4 mr-2" />
                    Profili Düzenle
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="secondary">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Mesaj Gönder
                  </Button>
                  <Button variant={isFollowing ? "outline" : "default"} onClick={() => setIsFollowing(!isFollowing)}>
                    {isFollowing ? (
                      <>
                        <Users className="h-4 w-4 mr-2" />
                        Takip Ediliyor
                      </>
                    ) : (
                      <>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Takip Et
                      </>
                    )}
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-24 w-24 border-4 border-background -mt-12 bg-background">
                        <AvatarImage src={`/placeholder.svg?text=${initials}`} alt={user.name} />
                        <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
                      </Avatar>
                      <h2 className="mt-4 text-xl font-bold">{user.name}</h2>
                      <p className="text-sm text-muted-foreground">@{params.username}</p>
                      <p className="text-sm text-muted-foreground">{user.role}</p>

                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {user.badges.map((badge) => (
                          <Badge key={badge} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-4 text-center w-full">
                        <div>
                          <p className="text-lg font-bold">{user.threadCount}</p>
                          <p className="text-xs text-muted-foreground">Konular</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold">{user.followersCount}</p>
                          <p className="text-xs text-muted-foreground">Takipçi</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold">{user.followingCount}</p>
                          <p className="text-xs text-muted-foreground">Takip</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Hakkında</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-sm">{user.bio}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>Katılım: {user.joinDate}</span>
                      </div>
                    </div>

                    <div className="pt-2 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Son aktivite:</span>
                        <span>{user.lastActive}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <UserAchievements achievements={user.achievements} />
              </div>
            </div>

            <div className="lg:col-span-3">
              <Tabs defaultValue="threads" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="threads">Konular</TabsTrigger>
                    <TabsTrigger value="replies">Cevaplar</TabsTrigger>
                    <TabsTrigger value="saved">Kaydedilenler</TabsTrigger>
                    <TabsTrigger value="liked">Beğenilenler</TabsTrigger>
                    <TabsTrigger value="activity">Aktivite</TabsTrigger>
                  </TabsList>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Profili Paylaş
                    </Button>
                  </div>
                </div>

                <TabsContent value="threads" className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Konular</CardTitle>
                      <CardDescription>{user.name} tarafından başlatılan konular</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {user.recentThreads.map((thread) => (
                        <RecentThreadCard
                          key={thread.id}
                          title={thread.title}
                          author={thread.author}
                          authorRole={thread.authorRole}
                          category={thread.category}
                          replies={thread.replies}
                          views={thread.views}
                          timestamp={thread.timestamp}
                          id={thread.id}
                          tags={thread.tags}
                        />
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Tüm konuları görüntüle
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="replies" className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Cevaplar</CardTitle>
                      <CardDescription>{user.name} tarafından gönderilen cevaplar</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {user.recentReplies.map((reply, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardContent className="p-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Link href={`/thread/${reply.threadId}`} className="font-medium hover:underline">
                                  {reply.threadTitle}
                                </Link>
                                <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                              </div>
                              <p className="text-sm">{reply.content}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Tüm cevapları görüntüle
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="saved" className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Kaydedilenler</CardTitle>
                      <CardDescription>{user.name} tarafından kaydedilen konular</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {user.savedThreads.map((thread) => (
                        <RecentThreadCard
                          key={thread.id}
                          title={thread.title}
                          author={thread.author}
                          authorRole={thread.authorRole}
                          category={thread.category}
                          replies={thread.replies}
                          views={thread.views}
                          timestamp={thread.timestamp}
                          id={thread.id}
                          tags={thread.tags}
                        />
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Bookmark className="h-4 w-4 mr-2" />
                        Tüm kaydedilenleri görüntüle
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="liked" className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Beğenilenler</CardTitle>
                      <CardDescription>{user.name} tarafından beğenilen konular</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {user.likedThreads.map((thread) => (
                        <RecentThreadCard
                          key={thread.id}
                          title={thread.title}
                          author={thread.author}
                          authorRole={thread.authorRole}
                          category={thread.category}
                          replies={thread.replies}
                          views={thread.views}
                          timestamp={thread.timestamp}
                          id={thread.id}
                          tags={thread.tags}
                        />
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Heart className="h-4 w-4 mr-2" />
                        Tüm beğenilenleri görüntüle
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="activity" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <UserStats user={user} />
                    <UserCalendar />
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Son Aktivite</CardTitle>
                      <CardDescription>{user.name}'in son forum aktivitesi</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-2 border-muted pl-4 space-y-4">
                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-primary"></div>
                            <div className="space-y-1">
                              <p className="text-sm">
                                <span className="font-medium">{user.name}</span>{" "}
                                <Link href="/thread/1" className="font-medium hover:underline">
                                  Final Sınav Programı Yayınlandı
                                </Link>{" "}
                                konusuna cevap verdi
                              </p>
                              <p className="text-xs text-muted-foreground">3 saat önce</p>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-primary"></div>
                            <div className="space-y-1">
                              <p className="text-sm">
                                <span className="font-medium">{user.name}</span> yeni bir konu oluşturdu{" "}
                                <Link href="/thread/6" className="font-medium hover:underline">
                                  Çalışma Grubu Arıyorum - Kalkülüs
                                </Link>
                              </p>
                              <p className="text-xs text-muted-foreground">1 saat önce</p>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-primary"></div>
                            <div className="space-y-1">
                              <p className="text-sm">
                                <span className="font-medium">{user.name}</span>{" "}
                                <Link href="/thread/2" className="font-medium hover:underline">
                                  Basketbol Takımı Seçmeleri Gelecek Hafta
                                </Link>{" "}
                                konusuna cevap verdi
                              </p>
                              <p className="text-xs text-muted-foreground">1 gün önce</p>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-primary"></div>
                            <div className="space-y-1">
                              <p className="text-sm">
                                <span className="font-medium">{user.name}</span>{" "}
                                <Link href="/thread/5" className="font-medium hover:underline">
                                  Yemekhane Menü Önerileri
                                </Link>{" "}
                                konusuna cevap verdi
                              </p>
                              <p className="text-xs text-muted-foreground">2 gün önce</p>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-primary"></div>
                            <div className="space-y-1">
                              <p className="text-sm">
                                <span className="font-medium">{user.name}</span> yeni bir konu oluşturdu{" "}
                                <Link href="/thread/15" className="font-medium hover:underline">
                                  Kampüste En İyi Çalışma Yerleri?
                                </Link>
                              </p>
                              <p className="text-xs text-muted-foreground">4 gün önce</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        Tüm aktiviteyi görüntüle
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <ForumFooter />
    </div>
  )
}
