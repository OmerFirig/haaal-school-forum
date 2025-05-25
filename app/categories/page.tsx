import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, MessageCircle, TrendingUp, Users, Bell, Calendar, Award, Search } from "lucide-react"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"

export default function CategoriesPage() {
  // Kategori verileri
  const categories = [
    {
      id: "announcements",
      name: "Duyurular",
      description: "Resmi okul duyuruları ve önemli bilgiler",
      icon: Bell,
      threadCount: 42,
      color: "bg-red-100 text-red-600",
    },
    {
      id: "academics",
      name: "Akademik",
      description: "Dersler, ödevler ve akademik kaynaklar hakkında tartışmalar",
      icon: BookOpen,
      threadCount: 128,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "clubs",
      name: "Kulüpler & Aktiviteler",
      description: "Okul kulüpleri, aktiviteleri ve ders dışı etkinlikler hakkında bilgiler",
      icon: Users,
      threadCount: 76,
      color: "bg-green-100 text-green-600",
    },
    {
      id: "events",
      name: "Etkinlikler",
      description: "Yaklaşan okul etkinlikleri, spor müsabakaları ve aktiviteler",
      icon: Calendar,
      threadCount: 54,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: "general",
      name: "Genel Tartışma",
      description: "Okul topluluğu için genel konular ve sohbetler",
      icon: MessageCircle,
      threadCount: 215,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: "resources",
      name: "Kaynaklar",
      description: "Ders notları, kitaplar ve diğer eğitim kaynakları",
      icon: BookOpen,
      threadCount: 89,
      color: "bg-teal-100 text-teal-600",
    },
    {
      id: "questions",
      name: "Soru & Cevap",
      description: "Akademik ve okul hayatı ile ilgili sorular",
      icon: MessageCircle,
      threadCount: 167,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: "technology",
      name: "Teknoloji",
      description: "Teknoloji, bilgisayar ve yazılım ile ilgili konular",
      icon: TrendingUp,
      threadCount: 93,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: "sports",
      name: "Spor",
      description: "Okul spor takımları, müsabakalar ve spor etkinlikleri",
      icon: Users,
      threadCount: 68,
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: "arts",
      name: "Sanat & Kültür",
      description: "Sanat, müzik, tiyatro ve kültürel etkinlikler",
      icon: Award,
      threadCount: 45,
      color: "bg-cyan-100 text-cyan-600",
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
                <h1 className="text-3xl font-bold tracking-tight gradient-heading">Kategoriler</h1>
                <p className="text-muted-foreground">Tüm forum kategorilerini keşfedin</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Input placeholder="Kategorilerde ara..." className="pr-10 w-[300px] gradient-border" />
                  <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Ara</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <Link href={`/category/${category.id}`} key={category.id}>
                  <Card className="animated-card h-full hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-md ${category.color}`}>
                          <category.icon className="h-5 w-5" />
                        </div>
                        <div className="text-sm text-muted-foreground">{category.threadCount} konu</div>
                      </div>
                      <CardTitle className="mt-2">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Son aktivite:</span>
                        <span>2 saat önce</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="ghost" className="w-full hover:bg-primary/10 transition-colors duration-300">
                        Kategoriyi Görüntüle
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <ForumFooter />
    </div>
  )
}
