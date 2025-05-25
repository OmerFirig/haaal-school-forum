"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ImageIcon, Paperclip, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { RichTextEditor } from "@/components/rich-text-editor"
import { createThread } from "./actions"

export default function NewThreadPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !category || !content.trim()) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen başlık, kategori ve içerik alanlarını doldurun.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await createThread({
        title,
        category,
        content,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      })

      if (result.success) {
        toast({
          title: "Başarılı!",
          description: "Gönderiniz başarıyla oluşturuldu.",
        })

        // Redirect to the new thread
        router.push(`/thread/${result.threadId}`)
      } else {
        toast({
          title: "Hata",
          description: "Gönderi oluşturulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Gönderi oluşturulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Geri Dön
        </Link>
      </Button>

      <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Yeni Gönderi Oluştur</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Başlık</Label>
              <Input
                id="title"
                placeholder="Gönderinizin başlığını yazın"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategori</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Bir kategori seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="genel">Genel</SelectItem>
                  <SelectItem value="duyurular">Duyurular</SelectItem>
                  <SelectItem value="etkinlikler">Etkinlikler</SelectItem>
                  <SelectItem value="dersler">Dersler</SelectItem>
                  <SelectItem value="sinavlar">Sınavlar</SelectItem>
                  <SelectItem value="projeler">Projeler</SelectItem>
                  <SelectItem value="kulup">Kulüp Faaliyetleri</SelectItem>
                  <SelectItem value="yardim">Yardım</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">İçerik</Label>
              <RichTextEditor />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Etiketler (virgülle ayırın)</Label>
              <Input
                id="tags"
                placeholder="örn: matematik, sınav, ödev"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button type="button" variant="outline" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                <span>Resim Ekle</span>
              </Button>
              <Button type="button" variant="outline" className="flex items-center gap-2">
                <Paperclip className="h-4 w-4" />
                <span>Dosya Ekle</span>
              </Button>
              <Button type="button" variant="outline" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                <span>Anket Ekle</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              İptal
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Gönderiliyor..." : "Gönderiyi Oluştur"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
