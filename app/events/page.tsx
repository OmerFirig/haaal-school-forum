import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Search, Filter, Plus, CalendarDays } from "lucide-react"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventsPage() {
  // Etkinlik verileri
  const events = [
    {
      id: "event-1",
      title: "Bahar Konseri",
      description: "Okul korosu ve müzik kulübü tarafından düzenlenen yıllık bahar konseri.",
      date: "25 Mayıs 2025",
      time: "19:00",
      location: "Okul Konferans Salonu",
      organizer: "Müzik Bölümü",
      attendees: 42,
      category: "Kültür & Sanat",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "event-2",
      title: "Final Sınavları Başlangıcı",
      description: "2024-2025 Eğitim Yılı Bahar Dönemi final sınavlarının başlangıcı.",
      date: "10 Haziran 2025",
      time: "08:30",
      location: "Tüm Sınıflar",
      organizer: "Okul Yönetimi",
      attendees: 523,
      category: "Akademik",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "event-3",
      title: "Mezuniyet Töreni",
      description: "2025 yılı mezunları için düzenlenen mezuniyet töreni ve kutlaması.",
      date: "18 Haziran 2025",
      time: "13:00",
      location: "Okul Bahçesi",
      organizer: "Okul Yönetimi",
      attendees: 156,
      category: "Tören",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "event-4",
      title: "Yaz Okulu Kayıtları",
      description: "2025 yaz okulu programı için kayıtların başlangıcı.",
      date: "20 Haziran 2025",
      time: "09:00",
      location: "Çevrimiçi",
      organizer: "Eğitim Koordinatörlüğü",
      attendees: 78,
      category: "Akademik",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "event-5",
      title: "Bilim Fuarı",
      description: "Öğrencilerin bilimsel projelerini sergileyeceği yıllık bilim fuarı.",
      date: "5 Mayıs 2025",
      time: "10:00",
      location: "Spor Salonu",
      organizer: "Fen Bilimleri Bölümü",
      attendees: 112,
      category: "Akademik",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "event-6",
      title: "Basketbol Turnuvası",
      description: "Okullar arası basketbol turnuvası final maçları.",
      date: "12 Mayıs 2025",
      time: "14:00",
      location: "Spor Salonu",
      organizer: "Beden Eğitimi Bölümü",
      attendees: 87,
      category: "Spor",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "event-7",
      title: "Kariyer Günü",
      description: "Farklı sektörlerden profesyonellerin katılacağı kariyer günü etkinliği.",
      date: "15 Mayıs 2025",
      time: "09:30",
      location: "Konferans Salonu",
      organizer: "Rehberlik Servisi",
      attendees: 145,
      category: "Kariyer",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "event-8",
      title: "Tiyatro Gösterisi",
      description: "Tiyatro kulübünün hazırladığı yıl sonu gösterisi.",
      date: "22 Mayıs 2025",
      time: "18:30",
      location: "Okul Tiyatro Salonu",
      organizer: "Tiyatro Kulübü",
      attendees: 64,
      category: "Kültür & Sanat",
      image: "/placeholder.svg?height=200&width=400",
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
                <h1 className="text-3xl font-bold tracking-tight gradient-heading">Etkinlikler</h1>
                <p className="text-muted-foreground">Yaklaşan okul etkinlikleri ve aktiviteleri</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Input placeholder="Etkinliklerde ara..." className="pr-10 w-[300px] gradient-border" />
                  <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Ara</span>
                  </Button>
                </div>
                <Button className="animated-button">
                  <Plus className="h-4 w-4 mr-2" />
                  Etkinlik Oluştur
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filtrele</span>
                </Button>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] h-8">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tüm Kategoriler</SelectItem>
                    <SelectItem value="academic">Akademik</SelectItem>
                    <SelectItem value="sports">Spor</SelectItem>
                    <SelectItem value="arts">Kültür & Sanat</SelectItem>
                    <SelectItem value="career">Kariyer</SelectItem>
                    <SelectItem value="ceremony">Tören</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="upcoming">
                  <SelectTrigger className="w-[180px] h-8">
                    <SelectValue placeholder="Zaman" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upcoming">Yaklaşan Etkinlikler</SelectItem>
                    <SelectItem value="today">Bugün</SelectItem>
                    <SelectItem value="week">Bu Hafta</SelectItem>
                    <SelectItem value="month">Bu Ay</SelectItem>
                    <SelectItem value="past">Geçmiş Etkinlikler</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <CalendarDays className="h-3.5 w-3.5 mr-1" />
                  <span>Takvim Görünümü</span>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="grid" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">Liste</TabsTrigger>
              </TabsList>
              <TabsContent value="grid" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {events.map((event) => (
                    <Card key={event.id} className="animated-card overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white font-medium">{event.title}</div>
                          <div className="text-white/80 text-sm">{event.date}</div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="text-sm text-muted-foreground line-clamp-2">{event.description}</div>
                          <div className="flex flex-col space-y-1.5 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>{event.attendees} katılımcı</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <Button variant="outline" size="sm" className="w-full">
                          Detaylar
                        </Button>
                        <Button size="sm" className="w-full ml-2 animated-button">
                          Katıl
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="list" className="space-y-4">
                <div className="space-y-4">
                  {events.map((event) => (
                    <Card key={event.id} className="animated-card overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-48 h-48 md:h-auto">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <h3 className="text-lg font-medium">{event.title}</h3>
                              <p className="text-sm text-muted-foreground">{event.description}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                Detaylar
                              </Button>
                              <Button size="sm" className="animated-button">
                                Katıl
                              </Button>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{event.attendees} katılımcı</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

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
