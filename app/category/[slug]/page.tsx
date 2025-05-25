import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, MessageCircle, TrendingUp, Users } from "lucide-react"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import RecentThreadCard from "@/components/recent-thread-card"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // This would normally fetch category data based on the slug
  // For now we'll use static data

  const categoryData = {
    announcements: {
      name: "Duyurular",
      description: "Resmi okul duyuruları ve önemli bilgiler",
      icon: BookOpen,
      threads: [
        {
          title: "Final Sınav Programı Yayınlandı",
          author: "Ayşe Öğretmen",
          authorRole: "Öğretmen",
          category: "Duyurular",
          replies: 12,
          views: 145,
          timestamp: "2 saat önce",
          id: "1",
        },
        {
          title: "Okul Kapanışı - Hava Durumu Uyarısı",
          author: "Müdür Yılmaz",
          authorRole: "Yönetici",
          category: "Duyurular",
          replies: 8,
          views: 203,
          timestamp: "1 gün önce",
          id: "8",
        },
        {
          title: "Gelecek Hafta Başlayacak Yeni Kütüphane Saatleri",
          author: "Fatma Hanım",
          authorRole: "Personel",
          category: "Duyurular",
          replies: 3,
          views: 87,
          timestamp: "3 gün önce",
          id: "9",
        },
      ],
    },
    academics: {
      name: "Akademik",
      description: "Dersler, ödevler ve akademik kaynaklar hakkında tartışmalar",
      icon: BookOpen,
      threads: [
        {
          title: "Bilim Fuarı Proje Fikirleri",
          author: "Ali Yılmaz",
          authorRole: "Öğrenci",
          category: "Akademik",
          replies: 23,
          views: 210,
          timestamp: "1 gün önce",
          id: "3",
        },
        {
          title: "Çalışma Grubu Arıyorum - Kalkülüs",
          author: "Taner Yıldız",
          authorRole: "Öğrenci",
          category: "Akademik",
          replies: 0,
          views: 12,
          timestamp: "1 saat önce",
          id: "6",
        },
        {
          title: "Tarih Ödevi Format Sorusu",
          author: "Ceren Demir",
          authorRole: "Öğrenci",
          category: "Akademik",
          replies: 5,
          views: 42,
          timestamp: "2 gün önce",
          id: "10",
        },
      ],
    },
    clubs: {
      name: "Kulüpler & Aktiviteler",
      description: "Okul kulüpleri, aktiviteleri ve ders dışı etkinlikler hakkında bilgiler",
      icon: Users,
      threads: [
        {
          title: "Satranç Kulübü Toplantı Programı",
          author: "Satranç Kulübü",
          authorRole: "Kulüp",
          category: "Kulüpler",
          replies: 7,
          views: 65,
          timestamp: "4 saat önce",
          id: "11",
        },
        {
          title: "Tiyatro Kulübü Seçmeleri Gelecek Hafta",
          author: "Mehmet Hoca",
          authorRole: "Öğretmen",
          category: "Kulüpler",
          replies: 15,
          views: 124,
          timestamp: "2 gün önce",
          id: "12",
        },
        {
          title: "Robotik Takımı Yeni Üyeler Arıyor",
          author: "Robotik Kulübü",
          authorRole: "Kulüp",
          category: "Kulüpler",
          replies: 9,
          views: 87,
          timestamp: "3 gün önce",
          id: "13",
        },
      ],
    },
    events: {
      name: "Etkinlikler",
      description: "Yaklaşan okul etkinlikleri, spor müsabakaları ve aktiviteler",
      icon: TrendingUp,
      threads: [
        {
          title: "Basketbol Takımı Seçmeleri Gelecek Hafta",
          author: "Ahmet Koç",
          authorRole: "Personel",
          category: "Spor",
          replies: 8,
          views: 97,
          timestamp: "5 saat önce",
          id: "2",
        },
        {
          title: "Gönüllü Saatleri Fırsatı",
          author: "Öğrenci Konseyi",
          authorRole: "Kulüp",
          category: "Etkinlikler",
          replies: 5,
          views: 78,
          timestamp: "2 gün önce",
          id: "4",
        },
        {
          title: "Bahar Konseri Bilet Satışları",
          author: "Müzik Bölümü",
          authorRole: "Personel",
          category: "Etkinlikler",
          replies: 11,
          views: 132,
          timestamp: "1 gün önce",
          id: "14",
        },
      ],
    },
    general: {
      name: "Genel Tartışma",
      description: "Okul topluluğu için genel konular ve sohbetler",
      icon: MessageCircle,
      threads: [
        {
          title: "Yemekhane Menü Önerileri",
          author: "Zeynep Kaya",
          authorRole: "Öğrenci",
          category: "Genel",
          replies: 31,
          views: 256,
          timestamp: "3 gün önce",
          id: "5",
        },
        {
          title: "Spor Salonunda Kayıp Su Şişesi",
          author: "Ceren Demir",
          authorRole: "Öğrenci",
          category: "Genel",
          replies: 0,
          views: 8,
          timestamp: "3 saat önce",
          id: "7",
        },
        {
          title: "Kampüste En İyi Çalışma Yerleri?",
          author: "Burak Aydın",
          authorRole: "Öğrenci",
          category: "Genel",
          replies: 14,
          views: 103,
          timestamp: "4 gün önce",
          id: "15",
        },
      ],
    },
  }

  const category = categoryData[params.slug as keyof typeof categoryData] || {
    name: "Kategori Bulunamadı",
    description: "Bu kategori mevcut değil",
    icon: MessageCircle,
    threads: [],
  }

  const CategoryIcon = category.icon

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <section className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-muted p-2 rounded-lg">
                  <CategoryIcon className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder={`${category.name.toLowerCase()} içinde ara...`} className="max-w-[300px]" />
                <Link href="/new-thread">
                  <Button>Yeni Konu</Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-sm text-muted-foreground hover:underline">
                Ana Sayfa
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <Link href="/categories" className="text-sm text-muted-foreground hover:underline">
                Kategoriler
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm">{category.name}</span>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>{category.name} içindeki konular</CardTitle>
                <CardDescription>Bu kategoride {category.threads.length} konu</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recent" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="recent">Yeni</TabsTrigger>
                    <TabsTrigger value="popular">Popüler</TabsTrigger>
                    <TabsTrigger value="unanswered">Cevaplanmamış</TabsTrigger>
                  </TabsList>
                  <TabsContent value="recent" className="space-y-4">
                    {category.threads.map((thread) => (
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
                      />
                    ))}
                  </TabsContent>
                  <TabsContent value="popular" className="space-y-4">
                    {[...category.threads]
                      .sort((a, b) => b.views - a.views)
                      .map((thread) => (
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
                        />
                      ))}
                  </TabsContent>
                  <TabsContent value="unanswered" className="space-y-4">
                    {category.threads
                      .filter((thread) => thread.replies === 0)
                      .map((thread) => (
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
                        />
                      ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  {category.threads.length} konudan {category.threads.length} tanesi gösteriliyor
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Önceki
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Sonraki
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </section>
        </div>
      </main>
      <ForumFooter />
    </div>
  )
}
