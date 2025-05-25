"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import { useRouter } from "next/navigation"
import { Search, Users, X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export default function CreateGroupPage() {
  const router = useRouter()
  const [groupName, setGroupName] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const contacts = [
    { id: "1", name: "Ali Yılmaz", avatar: "/placeholder.svg?text=AY", role: "Öğrenci" },
    { id: "2", name: "Ayşe Öğretmen", avatar: "/placeholder.svg?text=AÖ", role: "Öğretmen" },
    { id: "3", name: "Zeynep Kaya", avatar: "/placeholder.svg?text=ZK", role: "Öğrenci" },
    { id: "4", name: "Mehmet Demir", avatar: "/placeholder.svg?text=MD", role: "Öğrenci" },
    { id: "5", name: "Fatma Şahin", avatar: "/placeholder.svg?text=FŞ", role: "Öğrenci" },
    { id: "6", name: "Ahmet Yıldız", avatar: "/placeholder.svg?text=AY", role: "Öğrenci" },
    { id: "7", name: "Elif Kara", avatar: "/placeholder.svg?text=EK", role: "Öğrenci" },
    { id: "8", name: "Mustafa Aydın", avatar: "/placeholder.svg?text=MA", role: "Öğretmen" },
  ]

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const handleCreateGroup = () => {
    if (groupName.trim() === "" || selectedUsers.length < 2) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/chat")
    }, 1500)
  }

  const getSelectedUser = (userId: string) => {
    return contacts.find((contact) => contact.id === userId)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Yeni Grup Oluştur
            </CardTitle>
            <CardDescription>Grup sohbeti için bir isim belirleyin ve üyeleri seçin.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="group-name">Grup Adı</Label>
              <Input
                id="group-name"
                placeholder="Grup adını girin..."
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>

            {selectedUsers.length > 0 && (
              <div className="space-y-2">
                <Label>Seçilen Üyeler ({selectedUsers.length})</Label>
                <div className="flex flex-wrap gap-2">
                  {selectedUsers.map((userId) => {
                    const user = getSelectedUser(userId)
                    if (!user) return null
                    return (
                      <Badge key={userId} variant="secondary" className="pl-1 pr-1 py-1">
                        <Avatar className="h-5 w-5 mr-1">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                              .substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5 ml-1 rounded-full"
                          onClick={() => toggleUserSelection(userId)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    )
                  })}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="search-contacts">Kişileri Ara</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search-contacts"
                  placeholder="İsim veya rol ile ara..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Kişiler</Label>
              <ScrollArea className="h-64 border rounded-md p-2">
                <div className="space-y-2">
                  {filteredContacts.map((contact) => (
                    <div key={contact.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={`contact-${contact.id}`}
                        checked={selectedUsers.includes(contact.id)}
                        onCheckedChange={() => toggleUserSelection(contact.id)}
                      />
                      <div className="flex items-center gap-2 flex-1">
                        <Avatar className="h-8 w-8">
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
                        <div>
                          <Label htmlFor={`contact-${contact.id}`} className="font-normal cursor-pointer">
                            {contact.name}
                          </Label>
                          <p className="text-xs text-muted-foreground">{contact.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/chat")}>
              İptal
            </Button>
            <Button
              onClick={handleCreateGroup}
              disabled={groupName.trim() === "" || selectedUsers.length < 2 || isLoading}
            >
              {isLoading ? "Oluşturuluyor..." : "Grup Oluştur"}
            </Button>
          </CardFooter>
        </Card>
      </main>
      <ForumFooter />
    </div>
  )
}
