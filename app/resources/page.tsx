import type { Metadata } from "next"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Search,
  FileText,
  Download,
  Video,
  FileQuestion,
  FileSpreadsheet,
  FileImage,
  Plus,
  Star,
  Clock,
  Eye,
  ThumbsUp,
  Filter,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Kaynaklar | HAAAL Forum",
  description: "HAAAL Forum eğitim kaynakları ve materyalleri",
}

export default function ResourcesPage() {
  // Örnek kaynak verileri
  const featuredResources = [
    {
      id: "1",
      title: "Matematik Sınav Hazırlık Kılavuzu",
      description: "Lise matematik sınavlarına hazırlık için kapsamlı bir kılavuz",
      type: "document",
      fileType: "PDF",
      fileSize: "2.4 MB",
      downloadCount: 1245,
      rating: 4.8,
      author: {
        name: "Ayşe Öğretmen",
        avatar: "/placeholder.svg?text=AÖ",
      },
      createdAt: "2 hafta önce",
      tags: ["matematik", "sınav", "hazırlık"],
    },
    {
      id: "2",
      title: "Fizik Formülleri Özet",
      description: "Tüm lise fizik formüllerinin özeti ve açıklamaları",
      type: "document",
      fileType: "PDF",
      fileSize: "1.8 MB",
      downloadCount: 987,
      rating: 4.5,
      author: {
        name: "Mehmet Demir",
        avatar: "/placeholder.svg?text=MD",
      },
      createdAt: "1 ay önce",
      tags: ["fizik", "formül", "özet"],
    },
    {
      id: "3",
      title: "Biyoloji Laboratuvar Deneyleri",
      description: "Lise biyoloji dersi için laboratuvar deneyleri ve açıklamaları",
      type: "document",
      fileType: "PDF",
      fileSize: "3.2 MB",
      downloadCount: 756,
      rating: 4.3,
      author: {
        name: "Zeynep Kaya",
        avatar: "/placeholder.svg?text=ZK",
      },
      createdAt: "3 hafta önce",
      tags: ["biyoloji", "laboratuvar", "deney"],
    },
    {
      id: "4",
      title: "Türk Edebiyatı Eser Özetleri",
      description: "Lise müfredatındaki tüm Türk edebiyatı eserlerinin özetleri",
      type: "document",
      fileType: "PDF",
      fileSize: "4.5 MB",
      downloadCount: 1102,
      rating: 4.7,
      author: {
        name: "Ali Yılmaz",
        avatar: "/placeholder.svg?text=AY",
      },
      createdAt: "1 ay önce",
      tags: ["edebiyat", "özet", "eser"],
    },
    {
      id: "5",
      title: "Kimya Deneyleri Video Serisi",
      description: "Lise kimya müfredatındaki deneylerin video anlatımları",
      type: "video",
      fileType: "MP4",
      fileSize: "250 MB",
      downloadCount: 689,
      rating: 4.9,
      author: {
        name: "Fatma Şahin",
        avatar: "/placeholder.svg?text=FŞ",
      },
      createdAt: "2 ay önce",
      tags: ["kimya", "deney", "video"],
    },
    {
      id: "6",
      title: "Tarih Kronolojisi Çalışma Kağıdı",
      description: "Türk ve dünya tarihinin kronolojik özeti",
      type: "spreadsheet",
      fileType: "XLSX",
      fileSize: "1.2 MB",
      downloadCount: 845,
      rating: 4.4,
      author: {
        name: "Ahmet Yıldız",
        avatar: "/placeholder.svg?text=AY",
      },
      createdAt: "3 ay önce",
      tags: ["tarih", "kronoloji", "çalışma"],
    },
  ]

  const recentResources = [
    {
      id: "7",
      title: "İngilizce Gramer Kılavuzu",
      description: "Lise İngilizce derslerindeki tüm gramer konularının açıklamaları",
      type: "document",
      fileType: "PDF",
      fileSize: "2.1 MB",
      downloadCount: 345,
      rating: 4.2,
      author: {
        name: "Elif Kara",
        avatar: "/placeholder.svg?text=EK",
      },
      createdAt: "3 gün önce",
      tags: ["ingilizce", "gramer", "kılavuz"],
    },
    {
      id: "8",
      title: "Geometri Problemleri ve Çözümleri",
      description: "Zorlu geometri problemleri ve adım adım çözümleri",
      type: "document",
      fileType: "PDF",
      fileSize: "3.5 MB",
      downloadCount: 278,
      rating: 4.6,
      author: {
        name: "Mustafa Aydın",
        avatar: "/placeholder.svg?text=MA",
      },
      createdAt: "1 hafta önce",
      tags: ["geometri", "problem", "çözüm"],
    },
    {
      id: "9",
      title: "Coğrafya Haritaları Koleksiyonu",
      description: "Lise coğrafya dersi için yüksek çözünürlüklü haritalar",
      type: "image",
      fileType: "ZIP",
      fileSize: "15 MB",
      downloadCount: 412,
      rating: 4.5,
      author: {
        name: "Seda Çelik",
        avatar: "/placeholder.svg?text=SÇ",
      },
      createdAt: "5 gün önce",
      tags: ["coğrafya", "harita", "görsel"],
    },
  ]

  const popularResources = [
    {
      id: "1",
      title: "Matematik Sınav Hazırlık Kılavuzu",
      description: "Lise matematik sınavlarına hazırlık için kapsamlı bir kılavuz",
      type: "document",
      fileType: "PDF",
      fileSize: "2.4 MB",
      downloadCount: 1245,
      rating: 4.8,
      author: {
        name: "Ayşe Öğretmen",
        avatar: "/placeholder.svg?text=AÖ",
      },
      createdAt: "2 hafta önce",
      tags: ["matematik", "sınav", "hazırlık"],
    },
    {
      id: "4",
      title: "Türk Edebiyatı Eser Özetleri",
      description: "Lise müfredatındaki tüm Türk edebiyatı eserlerinin özetleri",
      type: "document",
      fileType: "PDF",
      fileSize: "4.5 MB",
      downloadCount: 1102,
      rating: 4.7,
      author: {
        name: "Ali Yılmaz",
        avatar: "/placeholder.svg?text=AY",
      },
      createdAt: "1 ay önce",
      tags: ["edebiyat", "özet", "eser"],
    },
    {
      id: "5",
      title: "Kimya Deneyleri Video Serisi",
      description: "Lise kimya müfredatındaki deneylerin video anlatımları",
      type: "video",
      fileType: "MP4",
      fileSize: "250 MB",
      downloadCount: 689,
      rating: 4.9,
      author: {
        name: "Fatma Şahin",
        avatar: "/placeholder.svg?text=FŞ",
      },
      createdAt: "2 ay önce",
      tags: ["kimya", "deney", "video"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-heading">Eğitim Kaynakları</h1>
            <p className="text-muted-foreground">Öğretmenler ve öğrenciler tarafından paylaşılan eğitim materyalleri</p>
          </div>
          <div className="flex gap-2">
            <Button className="animated-button">
              <Plus className="mr-2 h-4 w-4" />
              Kaynak Ekle
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Kaynak ara..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Dosya Türü" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Dosyalar</SelectItem>
                <SelectItem value="document">Dokümanlar</SelectItem>
                <SelectItem value="video">Videolar</SelectItem>
                <SelectItem value="spreadsheet">Tablolar</SelectItem>
                <SelectItem value="image">Görseller</SelectItem>
              </SelectContent>
            </Select>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>En Yeni</DropdownMenuItem>
                <DropdownMenuItem>En Popüler</DropdownMenuItem>
                <DropdownMenuItem>En Çok İndirilen</DropdownMenuItem>
                <DropdownMenuItem>En Yüksek Puanlı</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs defaultValue="featured" className="mb-6">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="featured" className="flex-1 md:flex-none">
              <Star className="mr-2 h-4 w-4" />
              Öne Çıkan
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex-1 md:flex-none">
              <Clock className="mr-2 h-4 w-4" />
              Yeni Eklenen
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex-1 md:flex-none">
              <ThumbsUp className="mr-2 h-4 w-4" />
              Popüler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <ForumFooter />
    </div>
  )
}

interface ResourceCardProps {
  resource: {
    id: string
    title: string
    description: string
    type: string
    fileType: string
    fileSize: string
    downloadCount: number
    rating: number
    author: {
      name: string
      avatar: string
    }
    createdAt: string
    tags: string[]
  }
}

function ResourceCard({ resource }: ResourceCardProps) {
  // Dosya türüne göre ikon belirleme
  const getFileIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-6 w-6 text-blue-500" />
      case "video":
        return <Video className="h-6 w-6 text-red-500" />
      case "spreadsheet":
        return <FileSpreadsheet className="h-6 w-6 text-green-500" />
      case "image":
        return <FileImage className="h-6 w-6 text-purple-500" />
      default:
        return <FileQuestion className="h-6 w-6 text-gray-500" />
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-3">
          <div className="mt-1">{getFileIcon(resource.type)}</div>
          <div>
            <CardTitle className="text-lg">{resource.title}</CardTitle>
            <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1 mb-2">
          {resource.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={resource.author.avatar || "/placeholder.svg"} alt={resource.author.name} />
              <AvatarFallback>{resource.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span>{resource.author.name}</span>
          </div>
          <div>{resource.createdAt}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center">
            <Eye className="mr-1 h-4 w-4" />
            <span>{resource.downloadCount}</span>
          </div>
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 text-yellow-500" />
            <span>{resource.rating}</span>
          </div>
          <div>
            <Badge variant="outline" className="text-xs">
              {resource.fileType} • {resource.fileSize}
            </Badge>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
