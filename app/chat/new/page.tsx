"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import { useRouter } from "next/navigation"
import { Search, MessageSquare } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function NewChatPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const contacts = [
    { id: "1", name: "Ali Yılmaz", avatar: "/placeholder.svg?text=AY", role: "Öğrenci", online: true },
    { id: "2", name: "Ayşe Öğretmen", avatar: "/placeholder.svg?text=AÖ", role: "Öğretmen", online: true },
    { id: "3", name: "Zeynep Kaya", avatar: "/placeholder.svg?text=ZK", role: "Öğrenci", online: false },
    { id: "4", name: "Mehmet Demir", avatar: "/placeholder.svg?text=MD", role: "Öğrenci", online: false },
    { id: "5", name: "Fatma Şahin", avatar: "/placeholder.svg?text=FŞ", role: "Öğrenci", online: true },
    { id: "6", name: "Ahmet Yıldız", avatar: "/placeholder.svg?text=AY", role: "Öğrenci", online: false },
    { id: "7", name: "Elif Kara", avatar: "/placeholder.svg?text=EK", role: "Öğrenci", online: true },
    { id: "8", name: "Mustafa Aydın", avatar: "/placeholder.svg?text=MA", role: "Öğretmen", online: false },
  ]

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const startChat = (contactId: string) => {
    // In a real app, this would create a chat or navigate to an existing one
    router.push(`/chat?contact=${contactId}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Yeni Sohbet Başlat
            </CardTitle>
            <CardDescription>Mesajlaşmak istediğiniz kişiyi seçin.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="İsim veya rol ile ara..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <ScrollArea className="h-96">
              <div className="space-y-2">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer"
                    onClick={() => startChat(contact.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                          <AvatarFallback>
                            {contact.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                              .substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-xs text-muted-foreground">{contact.role}</p>
                      </div>
                    </div>
                    <Button size="sm">Mesaj Gönder</Button>
                  </div>
                ))}

                {filteredContacts.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    Arama kriterlerinize uygun kişi bulunamadı.
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/chat")}>
              Geri Dön
            </Button>
            <Button variant="outline" onClick={() => router.push("/chat/group")}>
              Grup Oluştur
            </Button>
          </CardFooter>
        </Card>
      </main>
      <ForumFooter />
    </div>
  )
}
