"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Eye, MessageSquare, Pin, Tag } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CommentInteraction, ThreadInteraction } from "@/components/thread-interaction"
import { RelatedThreads } from "@/components/related-threads"
import { RichTextEditor } from "@/components/rich-text-editor"
import { ThreadAttachments } from "@/components/thread-attachments"
import { ThreadPoll } from "@/components/thread-poll"
import { useToast } from "@/components/ui/use-toast"
import { submitReply, likeReply } from "./actions"

export default function ThreadClientPage({ params }: { params: { id: string } }) {
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
    title: "Next.js 13 ile Server Components kullanımı hakkında sorularım var",
    content: `
      <p>Merhaba arkadaşlar,</p>
      <p>Next.js 13 ile Server Components kullanmaya başladım ve bazı konularda takıldım. Özellikle veri çekme işlemleri ve state yönetimi konusunda zorlanıyorum.</p>
      <h3>İşte sorularım:</h3>
      <ol>
        <li>Server Component içinde fetch API kullanırken cache stratejilerini nasıl doğru şekilde yapılandırabilirim?</li>
        <li>Client ve Server componentler arasında veri paylaşımını en verimli nasıl yapabilirim?</li>
        <li>Server Actions ile form gönderimlerini nasıl doğru şekilde yönetebilirim?</li>
      </ol>
      <p>Şimdiden teşekkürler!</p>
    `,
    author: {
      id: 1,
      username: "ahmet_yilmaz",
      name: "Ahmet Yılmaz",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: {
      id: 1,
      name: "Next.js",
      slug: "nextjs",
    },
    tags: ["next.js", "react", "server-components", "javascript"],
    createdAt: "2 gün önce",
    views: 342,
    likes: 24,
    dislikes: 2,
    comments: 8,
    isPinned: true,
    hasAttachments: true,
    hasPoll: true,
  }

  const comments = [
    {
      id: 1,
      content: `
        <p>Server Component içinde fetch API kullanırken, Next.js'in yerleşik önbelleğe alma mekanizmalarını kullanabilirsiniz:</p>
        <pre><code>// Varsayılan olarak, bu istek önbelleğe alınır
const data = await fetch('https://...')

// Bu istek her istekte yeniden çalışır
const data = await fetch('https://...', { cache: 'no-store' })

// Bu istek 10 saniye boyunca önbelleğe alınır
const data = await fetch('https://...', { next: { revalidate: 10 } })</code></pre>
        <p>Umarım bu yardımcı olur!</p>
      `,
      author: {
        id: 2,
        username: "mehmet_kaya",
        name: "Mehmet Kaya",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Moderatör",
      },
      createdAt: "1 gün önce",
      likes: 12,
      dislikes: 0,
      isAcceptedAnswer: true,
    },
    {
      id: 2,
      content: `
        <p>Client ve Server componentler arasında veri paylaşımı için birkaç yaklaşım var:</p>
        <ol>
          <li>Props aracılığıyla veri aktarımı (en basit yöntem)</li>
          <li>Context API kullanımı (client componentler için)</li>
          <li>URL parametreleri veya arama parametreleri kullanma</li>
          <li>Server Actions ile veri alışverişi</li>
        </ol>
        <p>Hangisini seçeceğiniz uygulamanızın ihtiyaçlarına bağlı.</p>
      `,
      author: {
        id: 3,
        username: "ayse_demir",
        name: "Ayşe Demir",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "1 gün önce",
      likes: 8,
      dislikes: 1,
      isAcceptedAnswer: false,
    },
    {
      id: 3,
      content: `
        <p>Server Actions ile form gönderimlerini yönetmek için:</p>
        <pre><code>// server-action.js
'use server'

export async function submitForm(formData) {
  // form verilerini işle
  const name = formData.get('name')
  // veritabanına kaydet, API'ye gönder, vb.
  return { success: true }
}</code></pre>

<pre><code>// FormComponent.jsx
'use client'
import { submitForm } from './server-action'

export function Form() {
  return (
    <form action={submitForm}>
      <input name="name" />
      <button type="submit">Gönder</button>
    </form>
  )
}</code></pre>
      `,
      author: {
        id: 4,
        username: "can_ozturk",
        name: "Can Öztürk",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "12 saat önce",
      likes: 5,
      dislikes: 0,
      isAcceptedAnswer: false,
    },
  ]

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!replyContent.trim()) {
      toast({
        title: "Hata",
        description: "Lütfen bir cevap yazın.",
        variant: "destructive",
      })
      return
    }

    try {
      const result = await submitReply(replyContent, thread.id)

      if (result.success) {
        const newReply = {
          id: result.replyId,
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
    } catch (error) {
      toast({
        title: "Hata",
        description: "Cevabınız gönderilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      })
    }
  }

  const handleLikeReply = async (replyId: string) => {
    try {
      const result = await likeReply(replyId)

      if (result.success) {
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
    } catch (error) {
      toast({
        title: "Hata",
        description: "İşlem gerçekleştirilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/category/nextjs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri Dön
          </Link>
        </Button>

        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="outline" className="bg-primary/5">
            <Link href={`/category/${thread.category.slug}`}>{thread.category.name}</Link>
          </Badge>
          {thread.isPinned && (
            <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
              <Pin className="mr-1 h-3 w-3" /> Sabitlenmiş
            </Badge>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{thread.title}</h1>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={thread.author.avatar || "/placeholder.svg"} alt={thread.author.name} />
              <AvatarFallback>{thread.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <Link href={`/profile/${thread.author.username}`} className="font-medium hover:underline">
                {thread.author.name}
              </Link>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                <span>{thread.createdAt}</span>
                <span className="mx-1">•</span>
                <Eye className="mr-1 h-3 w-3" />
                <span>{thread.views} görüntülenme</span>
              </div>
            </div>
          </div>

          <ThreadInteraction
            threadId={thread.id}
            initialLikes={thread.likes}
            initialDislikes={thread.dislikes}
            initialComments={thread.comments}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div
                className="prose prose-sm sm:prose max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: thread.content }}
              />

              <div className="flex flex-wrap gap-2 mt-6">
                {thread.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-secondary/20">
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {(thread.hasAttachments || thread.hasPoll) && (
              <CardFooter className="flex flex-col items-start border-t p-6 space-y-4">
                {thread.hasAttachments && <ThreadAttachments />}
                {thread.hasPoll && <ThreadPoll />}
              </CardFooter>
            )}
          </Card>

          <div id="comments">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Yorumlar ({comments.length})
            </h2>

            <div className="space-y-4">
              {comments.map((comment) => (
                <Card
                  key={comment.id}
                  className={`border ${comment.isAcceptedAnswer ? "border-green-500/50" : "border-border/40"} bg-card/50 backdrop-blur-sm`}
                >
                  <CardHeader className="p-4 pb-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                          <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <Link
                              href={`/profile/${comment.author.username}`}
                              className="font-medium text-sm hover:underline"
                            >
                              {comment.author.name}
                            </Link>
                            {comment.author.role && (
                              <Badge variant="outline" className="ml-2 text-xs">
                                {comment.author.role}
                              </Badge>
                            )}
                            {comment.isAcceptedAnswer && (
                              <Badge className="ml-2 bg-green-500 hover:bg-green-600">Kabul Edilen Cevap</Badge>
                            )}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{comment.createdAt}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div
                      className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary"
                      dangerouslySetInnerHTML={{ __html: comment.content }}
                    />
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <CommentInteraction
                      commentId={comment.id}
                      initialLikes={comment.likes}
                      initialDislikes={comment.dislikes}
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Yanıt Yaz</h3>
              <RichTextEditor />
              <div className="mt-4 flex justify-end">
                <Button onClick={handleReplySubmit}>Yanıtı Gönder</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold">İlgili Konular</h3>
            </CardHeader>
            <CardContent className="p-0">
              <RelatedThreads />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
