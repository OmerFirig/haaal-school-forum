import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, MessageCircle, TrendingUp, Users, Bell, Calendar, Award } from "lucide-react"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import RecentThreadCard from "@/components/recent-thread-card"
import TrendingTopics from "@/components/trending-topics"
import AnnouncementBanner from "@/components/announcement-banner"
import EventCard from "@/components/event-card"
import UserRankingCard from "@/components/user-ranking-card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col animated-bg">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <AnnouncementBanner
          title="Yeni Forum Özellikleri Eklendi!"
          description="Canlı sohbet, anketler ve dosya paylaşımı gibi yeni özelliklerimizi keşfedin."
          link="/announcements/new-features"
        />

        <div className="grid gap-6">
          <section className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight gradient-heading">HAAAL Forum'a Hoş Geldiniz</h1>
                <p className="text-muted-foreground">Okul topluluğunuzla bağlantı kurun, tartışın ve paylaşın</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Input placeholder="Tartışmaları ara..." className="pr-10 w-[300px] gradient-border" />
                  <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-search"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="sr-only">Ara</span>
                  </Button>
                </div>
                <Link href="/new-thread">
                  <Button className="animated-button">Yeni Konu</Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1 space-y-6">
                <Card className="animated-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Kategoriler</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link
                      href="/category/announcements"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-all duration-300 hover:translate-x-1"
                    >
                      <Bell className="h-4 w-4" />
                      <span>Duyurular</span>
                    </Link>
                    <Link
                      href="/category/academics"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-all duration-300 hover:translate-x-1"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>Akademik</span>
                    </Link>
                    <Link
                      href="/category/clubs"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-all duration-300 hover:translate-x-1"
                    >
                      <Users className="h-4 w-4" />
                      <span>Kulüpler & Aktiviteler</span>
                    </Link>
                    <Link
                      href="/category/events"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-all duration-300 hover:translate-x-1"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Etkinlikler</span>
                    </Link>
                    <Link
                      href="/category/general"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-all duration-300 hover:translate-x-1"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Genel Tartışma</span>
                    </Link>
                    <Link
                      href="/category/resources"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-all duration-300 hover:translate-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-file-text"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" x2="8" y1="13" y2="13" />
                        <line x1="16" x2="8" y1="17" y2="17" />
                        <line x1="10" x2="8" y1="9" y2="9" />
                      </svg>
                      <span>Kaynaklar</span>
                    </Link>
                    <Link
                      href="/category/questions"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-all duration-300 hover:translate-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-help-circle"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                      <span>Soru & Cevap</span>
                    </Link>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/categories"
                      className="text-sm text-muted-foreground hover:underline hover:text-primary transition-colors duration-300"
                    >
                      Tüm kategorileri görüntüle
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="animated-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>Trend Konular</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TrendingTopics />
                  </CardContent>
                </Card>

                <Card className="animated-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>En Aktif Kullanıcılar</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <UserRankingCard
                      name="Ayşe Öğretmen"
                      role="Öğretmen"
                      points={1250}
                      rank={1}
                      avatar="/placeholder.svg?text=AÖ"
                    />
                    <UserRankingCard
                      name="Ali Yılmaz"
                      role="Öğrenci"
                      points={980}
                      rank={2}
                      avatar="/placeholder.svg?text=AY"
                    />
                    <UserRankingCard
                      name="Zeynep Kaya"
                      role="Öğrenci"
                      points={845}
                      rank={3}
                      avatar="/placeholder.svg?text=ZK"
                    />
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/leaderboard"
                      className="text-sm text-muted-foreground hover:underline hover:text-primary transition-colors duration-300"
                    >
                      Sıralamayı görüntüle
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <Tabs defaultValue="recent" className="w-full">
                  <TabsList className="mb-4 w-full justify-start">
                    <TabsTrigger value="recent">Yeni</TabsTrigger>
                    <TabsTrigger value="popular">Popüler</TabsTrigger>
                    <TabsTrigger value="unanswered">Cevaplanmamış</TabsTrigger>
                    <TabsTrigger value="following">Takip Ettiklerim</TabsTrigger>
                  </TabsList>
                  <TabsContent value="recent" className="space-y-4">
                    <RecentThreadCard
                      title="Final Sınav Programı Yayınlandı"
                      author="Ayşe Öğretmen"
                      authorRole="Öğretmen"
                      category="Duyurular"
                      replies={12}
                      views={145}
                      timestamp="2 saat önce"
                      id="1"
                      isPinned={true}
                      hasAttachments={true}
                      tags={["önemli", "sınavlar"]}
                    />
                    <RecentThreadCard
                      title="Basketbol Takımı Seçmeleri Gelecek Hafta"
                      author="Ahmet Koç"
                      authorRole="Personel"
                      category="Spor"
                      replies={8}
                      views={97}
                      timestamp="5 saat önce"
                      id="2"
                      hasPolls={true}
                      tags={["spor", "basketbol"]}
                    />
                    <RecentThreadCard
                      title="Bilim Fuarı Proje Fikirleri"
                      author="Ali Yılmaz"
                      authorRole="Öğrenci"
                      category="Akademik"
                      replies={23}
                      views={210}
                      timestamp="1 gün önce"
                      id="3"
                      hasImages={true}
                      tags={["bilim", "projeler"]}
                    />
                    <RecentThreadCard
                      title="Gönüllü Saatleri Fırsatı"
                      author="Öğrenci Konseyi"
                      authorRole="Kulüp"
                      category="Etkinlikler"
                      replies={5}
                      views={78}
                      timestamp="2 gün önce"
                      id="4"
                      tags={["gönüllülük", "sosyal sorumluluk"]}
                    />
                    <RecentThreadCard
                      title="Yemekhane Menü Önerileri"
                      author="Zeynep Kaya"
                      authorRole="Öğrenci"
                      category="Genel"
                      replies={31}
                      views={256}
                      timestamp="3 gün önce"
                      id="5"
                      hasPolls={true}
                      tags={["yemekhane", "öneri"]}
                    />
                  </TabsContent>
                  <TabsContent value="popular" className="space-y-4">
                    <RecentThreadCard
                      title="Yemekhane Menü Önerileri"
                      author="Zeynep Kaya"
                      authorRole="Öğrenci"
                      category="Genel"
                      replies={31}
                      views={256}
                      timestamp="3 gün önce"
                      id="5"
                      hasPolls={true}
                      tags={["yemekhane", "öneri"]}
                    />
                    <RecentThreadCard
                      title="Bilim Fuarı Proje Fikirleri"
                      author="Ali Yılmaz"
                      authorRole="Öğrenci"
                      category="Akademik"
                      replies={23}
                      views={210}
                      timestamp="1 gün önce"
                      id="3"
                      hasImages={true}
                      tags={["bilim", "projeler"]}
                    />
                    <RecentThreadCard
                      title="Final Sınav Programı Yayınlandı"
                      author="Ayşe Öğretmen"
                      authorRole="Öğretmen"
                      category="Duyurular"
                      replies={12}
                      views={145}
                      timestamp="2 saat önce"
                      id="1"
                      isPinned={true}
                      hasAttachments={true}
                      tags={["önemli", "sınavlar"]}
                    />
                  </TabsContent>
                  <TabsContent value="unanswered" className="space-y-4">
                    <RecentThreadCard
                      title="Çalışma Grubu Arıyorum - Kalkülüs"
                      author="Taner Yıldız"
                      authorRole="Öğrenci"
                      category="Akademik"
                      replies={0}
                      views={12}
                      timestamp="1 saat önce"
                      id="6"
                      tags={["matematik", "çalışma grubu"]}
                    />
                    <RecentThreadCard
                      title="Spor Salonunda Kayıp Su Şişesi"
                      author="Ceren Demir"
                      authorRole="Öğrenci"
                      category="Genel"
                      replies={0}
                      views={8}
                      timestamp="3 saat önce"
                      id="7"
                      tags={["kayıp eşya"]}
                    />
                  </TabsContent>
                  <TabsContent value="following" className="space-y-4">
                    <RecentThreadCard
                      title="Final Sınav Programı Yayınlandı"
                      author="Ayşe Öğretmen"
                      authorRole="Öğretmen"
                      category="Duyurular"
                      replies={12}
                      views={145}
                      timestamp="2 saat önce"
                      id="1"
                      isPinned={true}
                      hasAttachments={true}
                      tags={["önemli", "sınavlar"]}
                    />
                    <RecentThreadCard
                      title="Bilim Fuarı Proje Fikirleri"
                      author="Ali Yılmaz"
                      authorRole="Öğrenci"
                      category="Akademik"
                      replies={23}
                      views={210}
                      timestamp="1 gün önce"
                      id="3"
                      hasImages={true}
                      tags={["bilim", "projeler"]}
                    />
                  </TabsContent>
                </Tabs>

                <div className="flex justify-center">
                  <Button variant="outline" className="gradient-border hover:bg-muted/50 transition-all duration-300">
                    Daha Fazla Göster
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <Card className="animated-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Yaklaşan Etkinlikler</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ScrollArea className="h-[300px]">
                      <div className="p-4 space-y-4">
                        <EventCard
                          title="Bahar Konseri"
                          date="25 Mayıs 2025"
                          time="19:00"
                          location="Okul Konferans Salonu"
                          attendees={42}
                          id="event-1"
                        />
                        <EventCard
                          title="Final Sınavları Başlangıcı"
                          date="10 Haziran 2025"
                          time="08:30"
                          location="Tüm Sınıflar"
                          attendees={523}
                          id="event-2"
                        />
                        <EventCard
                          title="Mezuniyet Töreni"
                          date="18 Haziran 2025"
                          time="13:00"
                          location="Okul Bahçesi"
                          attendees={156}
                          id="event-3"
                        />
                        <EventCard
                          title="Yaz Okulu Kayıtları"
                          date="20 Haziran 2025"
                          time="09:00"
                          location="Çevrimiçi"
                          attendees={78}
                          id="event-4"
                        />
                      </div>
                    </ScrollArea>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/events"
                      className="text-sm text-muted-foreground hover:underline hover:text-primary transition-colors duration-300"
                    >
                      Tam takvimi görüntüle
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="animated-card">
                  <CardHeader>
                    <CardTitle className="text-lg">İstatistikler</CardTitle>
                    <CardDescription>Forum aktivite özeti</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toplam Konular:</span>
                        <span className="font-medium">1,245</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toplam Cevaplar:</span>
                        <span className="font-medium">8,392</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Aktif Kullanıcılar:</span>
                        <span className="font-medium">523</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">En Yeni Üye:</span>
                        <span className="font-medium">Ece Yılmaz</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bugünkü Mesajlar:</span>
                        <span className="font-medium">47</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animated-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Aktif Kullanıcılar</CardTitle>
                    <CardDescription>Şu anda çevrimiçi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 bg-muted px-2 py-1 rounded-full text-sm transition-all duration-300 hover:bg-primary/10 hover:scale-105">
                        <div className="w-2 h-2 rounded-full bg-green-500 pulse"></div>
                        <span>Ayşe Öğretmen</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-2 py-1 rounded-full text-sm transition-all duration-300 hover:bg-primary/10 hover:scale-105">
                        <div className="w-2 h-2 rounded-full bg-green-500 pulse"></div>
                        <span>Ali Yılmaz</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-2 py-1 rounded-full text-sm transition-all duration-300 hover:bg-primary/10 hover:scale-105">
                        <div className="w-2 h-2 rounded-full bg-green-500 pulse"></div>
                        <span>Zeynep Kaya</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-2 py-1 rounded-full text-sm transition-all duration-300 hover:bg-primary/10 hover:scale-105">
                        <div className="w-2 h-2 rounded-full bg-green-500 pulse"></div>
                        <span>Taner Yıldız</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-2 py-1 rounded-full text-sm transition-all duration-300 hover:bg-primary/10 hover:scale-105">
                        <div className="w-2 h-2 rounded-full bg-green-500 pulse"></div>
                        <span>Ceren Demir</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-2 py-1 rounded-full text-sm transition-all duration-300 hover:bg-primary/10 hover:scale-105">
                        <div className="w-2 h-2 rounded-full bg-green-500 pulse"></div>
                        <span>+36 kişi</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="text-sm text-muted-foreground">42 kullanıcı şu anda çevrimiçi</div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ForumFooter />
    </div>
  )
}
