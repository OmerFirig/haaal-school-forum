"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { PaperclipIcon, ImageIcon, BarChart3 } from "lucide-react"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RichTextEditor from "@/components/rich-text-editor"
import ThreadPoll from "@/components/thread-poll"
import ThreadAttachments from "@/components/thread-attachments"
import RelatedThreads from "@/components/related-threads"
import ThreadInteraction from "@/components/thread-interaction"
import { useToast } from "@/components/ui/use-toast"

export default function ThreadPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [replyContent, setReplyContent] = useState("")
  const [replies, setReplies] = useState([
    {
      id: "1",
      content:
        "Paylaştığınız için teşekkürler! Matematik sınavı için kendi hesap makinelerimizi getirmemiz gerekiyor mu?",
      author: "Ali Yılmaz",
      authorRole: "Öğrenci",
      timestamp: "1 saat önce",
      likes: 3,
      isLiked: false,
    },
    {
      id: "2",
      content:
        "Evet, lütfen kendi bilimsel hesap makinelerinizi getirin. Grafik hesap makinelerine sadece ileri matematik dersleri için izin verilmektedir.",
      author: "Ayşe Öğretmen",
      authorRole: "Öğretmen",
      timestamp: "45 dakika önce",
      likes: 5,
      isLiked: false,
    },
    {
      id: "3",
      content: "Biyoloji sınavından önce bir tekrar dersi olacak mı?",
      author: "Zeynep Kaya",
      authorRole: "Öğrenci",
      timestamp: "30 dakika önce",
      likes: 2,
      isLiked: false,
    },
  ])

  // This would normally fetch the thread data based on the ID
  // For now we'll use static data
  const thread = {
    id: params.id,
    title: "Final Sınav Programı Yayınlandı",
    content: `
      <p>Merhaba herkese,</p>
      <p>Bu dönem için final sınav programı okul web sitesinde yayınlandı. Lütfen bireysel programlarınızı en kısa sürede kontrol edin.</p>
      <p>Hatırlanması gereken önemli tarihler:</p>
      <ul>
        <li>Matematik ve Fen sınavları: 10-11 Haziran</li>
        <li>Türkçe ve Tarih sınavları: 12-13 Haziran</li>
        <li>Seçmeli dersler: 14-15 Haziran</li>
      </ul>
      <p>Herhangi bir çakışma durumunda, düzenleme yapmak için lütfen hemen rehber öğretmeninizle iletişime geçin.</p>
      <p>Çalışmalarınızda başarılar dilerim!</p>
    `,
    author: "Ayşe Öğretmen",
    authorRole: "Öğretmen",
    authorJoined: "Eylül 2020",
    authorPosts: 145,
    timestamp: "2 saat önce",
    category: "Duyurular",
    replies: 3,
    views: 145,
    likes: 24,
    hasAttachments: true,
    hasPoll: true,
    tags: ["sınavlar", "önemli", "akademik"],
    attachments: [
      { name: "Final_Sinav_Programi.pdf", size: "1.2 MB", type: "pdf" },
      { name: "Sinav_Kurallari.docx", size: "450 KB", type: "docx" },
    ],
  }

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!replyContent.trim()) {
      toast({
        title: "Hata",
        description: "Lütfen bir cevap yazın.",
        variant: "destructive",
      })
      return
    }

    const newReply = {
      id: `${replies.length + 1}`,
      content: replyContent,
      author: "Kullanıcı",
      authorRole: "Öğrenci",
      timestamp: "Şimdi",
      likes: 0,
      isLiked: false,
    }

    setReplies([...replies, newReply])
    setReplyContent("")

    toast({
      title: "Başarılı!",
      description: "Cevabınız gönderildi.",
    })
  }

  const handleLikeReply = (replyId: string) => {
    setReplies(
      replies.map((reply) => {
        if (reply.id === replyId) {
          const newIsLiked = !reply.isLiked
          return {
            ...reply,
            likes: newIsLiked ? reply.likes + 1 : reply.likes - 1,
            isLiked: newIsLiked,
          }
        }
        return reply
      }),
    )
  }

  return (
    <div className="min-h-screen flex flex-col animated-bg">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Link href="/" className="text-sm text-muted-foreground hover:underline">
                  Ana Sayfa
                </Link>
                <span className="text-sm text-muted-foreground">/</span>
                <Link href="/category/announcements" className="text-sm text-muted-foreground hover:underline">
                  Duyurular
                </Link>
                <span className="text-sm text-muted-foreground">/</span>
                <span className="text-sm">Konu</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight gradient-heading">{thread.title}</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {thread.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag}`}>
                    <Badge variant="secondary" className="text-xs hover:bg-secondary/80 transition-colors">
                      #{tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="space-y-6 sticky top-20">
                <Card className="animated-card">
                  <CardHeader className="pb-2">
                    <h3 className="text-lg font-semibold">Konu Bilgisi</h3>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Gönderildi:</span>
                      <span className="text-sm font-medium">{thread.timestamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Kategori:</span>
                      <Link href={`/category/${thread.category.toLowerCase()}`}>
                        <Badge variant="outline" className="text-xs">
                          {thread.category}
                        </Badge>
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Cevaplar:</span>
                      <span className="text-sm font-medium">{replies.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Görüntülemeler:</span>
                      <span className="text-sm font-medium">{thread.views}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animated-card">
                  <CardHeader className="pb-2">
                    <h3 className="text-lg font-semibold">Yazar Hakkında</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src="/placeholder.svg?text=AÖ" alt={thread.author} />
                        <AvatarFallback>AÖ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{thread.author}</div>
                        <div className="text-xs text-muted-foreground">{thread.authorRole}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Üyelik başlangıcı:</span>
                        <span className="text-sm font-medium">{thread.authorJoined}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Gönderiler:</span>
                        <span className="text-sm font-medium">{thread.authorPosts}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/profile/${thread.author.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-muted-foreground hover:underline hover:text-primary transition-colors"
                    >
                      Profili görüntüle
                    </Link>
                  </CardFooter>
                </Card>

                <RelatedThreads />
              </div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2 space-y-6">
              <Card id="post-main" className="animated-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src="/placeholder.svg?text=AÖ" alt={thread.author} />
                      <AvatarFallback>AÖ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Link
                            href={`/profile/${thread.author.toLowerCase().replace(/\s+/g, "-")}`}
                            className="font-medium hover:underline"
                          >
                            {thread.author}
                          </Link>
                          <span className="text-xs text-muted-foreground ml-2">{thread.authorRole}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{thread.timestamp}</span>
                      </div>
                      <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: thread.content }} />

                      {thread.hasPoll && (
                        <div className="mt-6">
                          <ThreadPoll />
                        </div>
                      )}

                      {thread.hasAttachments && (
                        <div className="mt-6">
                          <ThreadAttachments attachments={thread.attachments} />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 bg-muted/50">
                  <ThreadInteraction threadId={thread.id} initialLikes={thread.likes} initialReplies={replies.length} />
                </CardFooter>
              </Card>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Cevaplar ({replies.length})</h3>
                <Separator />
              </div>

              <div className="space-y-4">
                {replies.map((reply) => (
                  <Card key={reply.id} id={`reply-${reply.id}`} className="animated-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage
                            src={`/placeholder.svg?text=${reply.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                              .substring(0, 2)}`}
                            alt={reply.author}
                          />
                          <AvatarFallback>
                            {reply.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                              .substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Link
                                href={`/profile/${reply.author.toLowerCase().replace(/\s+/g, "-")}`}
                                className="font-medium hover:underline"
                              >
                                {reply.author}
                              </Link>
                              <span className="text-xs text-muted-foreground ml-2">{reply.authorRole}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                          </div>
                          <div className="prose prose-sm max-w-none">
                            <p>{reply.content}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 bg-muted/50 flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`gap-1 ${reply.isLiked ? "text-red-500" : ""}`}
                        onClick={() => handleLikeReply(reply.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={reply.isLiked ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-heart"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        <span>{reply.likes}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const textarea = document.querySelector("#reply-form textarea") as HTMLTextAreaElement
                          if (textarea) {
                            textarea.focus()
                            setReplyContent(`@${reply.author} `)
                          }
                        }}
                      >
                        Cevapla
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Card id="reply-form" className="animated-card">
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-semibold">Cevap Yaz</h3>
                </CardHeader>
                <form onSubmit={handleReplySubmit}>
                  <CardContent>
                    <Tabs defaultValue="basic">
                      <TabsList className="mb-4">
                        <TabsTrigger value="editor">Zengin Metin</TabsTrigger>
                        <TabsTrigger value="basic">Basit Metin</TabsTrigger>
                      </TabsList>
                      <TabsContent value="editor">
                        <RichTextEditor />
                      </TabsContent>
                      <TabsContent value="basic">
                        <Textarea
                          placeholder="Cevabınızı buraya yazın..."
                          className="min-h-[150px]"
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                        />
                      </TabsContent>
                    </Tabs>

                    <div className="flex items-center gap-4 mt-4">
                      <Button type="button" variant="outline" size="sm" className="gap-1">
                        <PaperclipIcon className="h-4 w-4" />
                        <span>Dosya Ekle</span>
                      </Button>
                      <Button type="button" variant="outline" size="sm" className="gap-1">
                        <ImageIcon className="h-4 w-4" />
                        <span>Resim Ekle</span>
                      </Button>
                      <Button type="button" variant="outline" size="sm" className="gap-1">
                        <BarChart3 className="h-4 w-4" />
                        <span>Anket Ekle</span>
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button type="button" variant="outline">
                      İptal
                    </Button>
                    <Button type="submit" className="animated-button">
                      Cevap Gönder
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <ForumFooter />
    </div>
  )
}
