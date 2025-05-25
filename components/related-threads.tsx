import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function RelatedThreads() {
  const relatedThreads = [
    {
      id: "8",
      title: "Okul Kapanışı - Hava Durumu Uyarısı",
      category: "Duyurular",
      replies: 8,
    },
    {
      id: "9",
      title: "Gelecek Hafta Başlayacak Yeni Kütüphane Saatleri",
      category: "Duyurular",
      replies: 3,
    },
    {
      id: "10",
      title: "Tarih Ödevi Format Sorusu",
      category: "Akademik",
      replies: 5,
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">İlgili Konular</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        {relatedThreads.map((thread) => (
          <div key={thread.id} className="space-y-1">
            <Link href={`/thread/${thread.id}`} className="text-sm font-medium hover:underline line-clamp-1">
              {thread.title}
            </Link>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{thread.category}</span>
              <span>{thread.replies} cevap</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

// Default export for backward compatibility
export default RelatedThreads
