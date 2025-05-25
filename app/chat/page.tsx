"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Phone,
  Video,
  Smile,
  Paperclip,
  ImageIcon,
  Send,
  Info,
  MoreVertical,
  Users,
  Plus,
  X,
  FileText,
  File,
  Download,
} from "lucide-react"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import EmojiPicker from "@/components/emoji-picker"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Message {
  id: string
  content: string
  sender: string
  senderAvatar: string
  timestamp: Date
  isOwn: boolean
  attachments?: { type: string; url: string; name: string }[]
  status?: "sent" | "delivered" | "read"
}

interface ChatContact {
  id: string
  name: string
  avatar: string
  lastMessage: string
  lastMessageTime: string
  unread: number
  online: boolean
  typing?: boolean
  isGroup?: boolean
  members?: { name: string; avatar: string }[]
}

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState<string | null>(null)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const contacts: ChatContact[] = [
    {
      id: "1",
      name: "Ali Yılmaz",
      avatar: "/placeholder.svg?text=AY",
      lastMessage: "Bilim fuarı projesi hakkında konuşabilir miyiz?",
      lastMessageTime: "10:30",
      unread: 2,
      online: true,
      typing: true,
    },
    {
      id: "2",
      name: "Ayşe Öğretmen",
      avatar: "/placeholder.svg?text=AÖ",
      lastMessage: "Ödevinizi aldım, geri bildirimlerim olacak.",
      lastMessageTime: "Dün",
      unread: 0,
      online: true,
    },
    {
      id: "3",
      name: "Zeynep Kaya",
      avatar: "/placeholder.svg?text=ZK",
      lastMessage: "Yarınki toplantıya katılacak mısın?",
      lastMessageTime: "Dün",
      unread: 0,
      online: false,
    },
    {
      id: "4",
      name: "Matematik Çalışma Grubu",
      avatar: "/placeholder.svg?text=MÇ",
      lastMessage: "Zeynep: Bu hafta sonu çalışmak için toplanıyor muyuz?",
      lastMessageTime: "Pazartesi",
      unread: 0,
      online: false,
      isGroup: true,
      members: [
        { name: "Seda Çelik", avatar: "/placeholder.svg?text=SC" },
        { name: "Ali Yılmaz", avatar: "/placeholder.svg?text=AY" },
        { name: "Zeynep Kaya", avatar: "/placeholder.svg?text=ZK" },
        { name: "Mehmet Demir", avatar: "/placeholder.svg?text=MD" },
        { name: "Ayşe Öğretmen", avatar: "/placeholder.svg?text=AÖ" },
      ],
    },
  ]

  // Sample messages for the first contact
  const sampleMessages: Message[] = [
    {
      id: "1",
      content: "Merhaba Seda, nasılsın?",
      sender: "Ali Yılmaz",
      senderAvatar: "/placeholder.svg?text=AY",
      timestamp: new Date(2025, 4, 18, 10, 0),
      isOwn: false,
      status: "read",
    },
    {
      id: "2",
      content: "İyiyim Ali, teşekkür ederim. Sen nasılsın?",
      sender: "Seda Çelik",
      senderAvatar: "/placeholder.svg?text=SC",
      timestamp: new Date(2025, 4, 18, 10, 2),
      isOwn: true,
      status: "read",
    },
    {
      id: "3",
      content: "Ben de iyiyim. Bilim fuarı projesi hakkında konuşabilir miyiz?",
      sender: "Ali Yılmaz",
      senderAvatar: "/placeholder.svg?text=AY",
      timestamp: new Date(2025, 4, 18, 10, 5),
      isOwn: false,
      status: "read",
    },
    {
      id: "4",
      content: "Tabii ki, ne düşünüyorsun?",
      sender: "Seda Çelik",
      senderAvatar: "/placeholder.svg?text=SC",
      timestamp: new Date(2025, 4, 18, 10, 7),
      isOwn: true,
      status: "read",
    },
    {
      id: "5",
      content:
        "Yenilenebilir enerji üzerine bir proje düşünüyorum. Güneş panelleri kullanarak küçük bir ev modeli yapabiliriz.",
      sender: "Ali Yılmaz",
      senderAvatar: "/placeholder.svg?text=AY",
      timestamp: new Date(2025, 4, 18, 10, 10),
      isOwn: false,
      status: "read",
    },
    {
      id: "6",
      content: "Harika bir fikir! Ben de sürdürülebilir enerji konusunda çalışmak istiyordum.",
      sender: "Seda Çelik",
      senderAvatar: "/placeholder.svg?text=SC",
      timestamp: new Date(2025, 4, 18, 10, 12),
      isOwn: true,
      status: "read",
    },
    {
      id: "7",
      content: "Projeye başlamak için ne zaman buluşabiliriz?",
      sender: "Ali Yılmaz",
      senderAvatar: "/placeholder.svg?text=AY",
      timestamp: new Date(2025, 4, 18, 10, 15),
      isOwn: false,
      status: "read",
      attachments: [{ type: "pdf", url: "#", name: "Proje_Taslak.pdf" }],
    },
  ]

  // Set active chat and load messages
  useEffect(() => {
    if (contacts.length > 0 && !activeChat) {
      setActiveChat(contacts[0].id)
      setMessages(sampleMessages)
    }
  }, [contacts, activeChat])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (message.trim() === "" && attachments.length === 0) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "Seda Çelik",
      senderAvatar: "/placeholder.svg?text=SC",
      timestamp: new Date(),
      isOwn: true,
      status: "sent",
      attachments: attachments.length
        ? attachments.map((file) => ({
            type: file.type.split("/")[0],
            url: "#",
            name: file.name,
          }))
        : undefined,
    }

    setMessages([...messages, newMessage])
    setMessage("")
    setShowEmojiPicker(false)
    setAttachments([])

    // Simulate message being delivered and read
    setTimeout(() => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg)),
      )
    }, 1000)

    setTimeout(() => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "read" } : msg)),
      )
    }, 2000)

    // Simulate reply for demo purposes
    if (activeChat === "1") {
      setTimeout(() => {
        const contact = contacts.find((c) => c.id === activeChat)
        if (contact) {
          // Show typing indicator
          const updatedContacts = contacts.map((c) =>
            c.id === activeChat ? { ...c, typing: true } : c,
          ) as ChatContact[]
          // This would normally update the contacts state

          // After a delay, add the reply
          setTimeout(() => {
            const replyMessage: Message = {
              id: Date.now().toString(),
              content: "Harika! Yarın öğleden sonra kütüphanede buluşalım mı?",
              sender: contact.name,
              senderAvatar: contact.avatar,
              timestamp: new Date(),
              isOwn: false,
              status: "delivered",
            }
            setMessages((prevMessages) => [...prevMessages, replyMessage])

            // Remove typing indicator
            // This would normally update the contacts state
          }, 3000)
        }
      }, 5000)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const addEmoji = (emoji: string) => {
    setMessage((prev) => prev + emoji)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setAttachments((prev) => [...prev, ...newFiles])
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
  }

  const formatDate = (date: Date) => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return "Bugün"
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Dün"
    } else {
      return date.toLocaleDateString("tr-TR", { day: "numeric", month: "long" })
    }
  }

  const getActiveContact = () => {
    return contacts.find((contact) => contact.id === activeChat)
  }

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const getMessageStatus = (status?: string) => {
    switch (status) {
      case "sent":
        return <span className="text-muted-foreground">✓</span>
      case "delivered":
        return <span className="text-muted-foreground">✓✓</span>
      case "read":
        return <span className="text-primary">✓✓</span>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Card className="h-[calc(100vh-12rem)]">
          <div className="grid grid-cols-1 md:grid-cols-4 h-full">
            <div className="md:col-span-1 border-r">
              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Kişileri ara..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <Tabs defaultValue="all">
                <div className="px-4">
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1">
                      Tümü
                    </TabsTrigger>
                    <TabsTrigger value="unread" className="flex-1">
                      Okunmamış
                    </TabsTrigger>
                    <TabsTrigger value="groups" className="flex-1">
                      Gruplar
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="m-0">
                  <ScrollArea className="h-[calc(100vh-16rem)]">
                    <div className="space-y-1 p-2">
                      {filteredContacts.map((contact) => (
                        <div
                          key={contact.id}
                          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                            activeChat === contact.id ? "bg-muted" : "hover:bg-muted/50"
                          }`}
                          onClick={() => setActiveChat(contact.id)}
                        >
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
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <h4 className="font-medium text-sm truncate">{contact.name}</h4>
                              <span className="text-xs text-muted-foreground">{contact.lastMessageTime}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                                {contact.typing ? (
                                  <span className="text-primary italic">Yazıyor...</span>
                                ) : (
                                  contact.lastMessage
                                )}
                              </p>
                              {contact.unread > 0 && (
                                <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                  {contact.unread}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="unread" className="m-0">
                  <ScrollArea className="h-[calc(100vh-16rem)]">
                    <div className="space-y-1 p-2">
                      {filteredContacts
                        .filter((c) => c.unread > 0)
                        .map((contact) => (
                          <div
                            key={contact.id}
                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                              activeChat === contact.id ? "bg-muted" : "hover:bg-muted/50"
                            }`}
                            onClick={() => setActiveChat(contact.id)}
                          >
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
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-baseline">
                                <h4 className="font-medium text-sm truncate">{contact.name}</h4>
                                <span className="text-xs text-muted-foreground">{contact.lastMessageTime}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                                  {contact.typing ? (
                                    <span className="text-primary italic">Yazıyor...</span>
                                  ) : (
                                    contact.lastMessage
                                  )}
                                </p>
                                {contact.unread > 0 && (
                                  <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {contact.unread}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="groups" className="m-0">
                  <ScrollArea className="h-[calc(100vh-16rem)]">
                    <div className="space-y-1 p-2">
                      {filteredContacts
                        .filter((c) => c.isGroup)
                        .map((contact) => (
                          <div
                            key={contact.id}
                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                              activeChat === contact.id ? "bg-muted" : "hover:bg-muted/50"
                            }`}
                            onClick={() => setActiveChat(contact.id)}
                          >
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
                              <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-muted-foreground text-background flex items-center justify-center text-[10px] font-bold border-2 border-background">
                                {contact.members?.length || 0}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-baseline">
                                <h4 className="font-medium text-sm truncate">{contact.name}</h4>
                                <span className="text-xs text-muted-foreground">{contact.lastMessageTime}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                                  {contact.lastMessage}
                                </p>
                                {contact.unread > 0 && (
                                  <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {contact.unread}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}

                      <div className="mt-4 px-2">
                        <Button variant="outline" className="w-full" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Yeni Grup Oluştur
                        </Button>
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </div>

            <div className="md:col-span-3 flex flex-col h-full">
              {activeChat ? (
                <>
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={getActiveContact()?.avatar || "/placeholder.svg"}
                          alt={getActiveContact()?.name}
                        />
                        <AvatarFallback>
                          {getActiveContact()
                            ?.name.split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                            .substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{getActiveContact()?.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {getActiveContact()?.online ? (
                            <span className="text-green-500">Çevrimiçi</span>
                          ) : (
                            "Çevrimdışı"
                          )}
                          {getActiveContact()?.typing && <span className="text-primary italic ml-2">Yazıyor...</span>}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Phone className="h-5 w-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Sesli Arama</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Video className="h-5 w-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Görüntülü Arama</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Info className="h-5 w-5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{getActiveContact()?.name}</DialogTitle>
                            <DialogDescription>Kişi Bilgileri</DialogDescription>
                          </DialogHeader>
                          <div className="flex flex-col items-center gap-4 py-4">
                            <Avatar className="h-24 w-24">
                              <AvatarImage
                                src={getActiveContact()?.avatar || "/placeholder.svg"}
                                alt={getActiveContact()?.name}
                              />
                              <AvatarFallback>
                                {getActiveContact()
                                  ?.name.split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .toUpperCase()
                                  .substring(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            <h3 className="text-xl font-bold">{getActiveContact()?.name}</h3>
                            <Badge variant={getActiveContact()?.online ? "default" : "secondary"}>
                              {getActiveContact()?.online ? "Çevrimiçi" : "Çevrimdışı"}
                            </Badge>

                            {getActiveContact()?.isGroup && (
                              <div className="w-full">
                                <h4 className="font-medium mb-2">
                                  Grup Üyeleri ({getActiveContact()?.members?.length})
                                </h4>
                                <div className="space-y-2">
                                  {getActiveContact()?.members?.map((member, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                      <Avatar className="h-8 w-8">
                                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                                        <AvatarFallback>
                                          {member.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .toUpperCase()
                                            .substring(0, 2)}
                                        </AvatarFallback>
                                      </Avatar>
                                      <span className="text-sm">{member.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="flex gap-2 mt-4">
                              <Button>
                                <Users className="h-4 w-4 mr-2" />
                                Profili Görüntüle
                              </Button>
                              <Button variant="outline">
                                <X className="h-4 w-4 mr-2" />
                                Engelle
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Sohbet Seçenekleri</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Sohbeti Temizle</DropdownMenuItem>
                          <DropdownMenuItem>Bildirimleri Sessize Al</DropdownMenuItem>
                          <DropdownMenuItem>Medya, Dosya ve Bağlantılar</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-500">Sohbeti Sil</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-6">
                      {messages.map((msg, index) => {
                        // Check if we need to show date header
                        const showDateHeader =
                          index === 0 || formatDate(messages[index - 1].timestamp) !== formatDate(msg.timestamp)

                        return (
                          <div key={msg.id}>
                            {showDateHeader && (
                              <div className="flex justify-center my-4">
                                <Badge variant="outline">{formatDate(msg.timestamp)}</Badge>
                              </div>
                            )}
                            <div className={`flex ${msg.isOwn ? "justify-end" : "justify-start"} items-end gap-2`}>
                              {!msg.isOwn && (
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={msg.senderAvatar || "/placeholder.svg"} alt={msg.sender} />
                                  <AvatarFallback>
                                    {msg.sender
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")
                                      .toUpperCase()
                                      .substring(0, 2)}
                                  </AvatarFallback>
                                </Avatar>
                              )}
                              <div
                                className={`max-w-[70%] ${
                                  msg.isOwn ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                                } rounded-lg p-3`}
                              >
                                {!msg.isOwn && <div className="font-medium text-xs mb-1">{msg.sender}</div>}
                                <div className="space-y-2">
                                  {msg.content && <p className="text-sm whitespace-pre-wrap">{msg.content}</p>}

                                  {msg.attachments && msg.attachments.length > 0 && (
                                    <div className="space-y-2">
                                      {msg.attachments.map((attachment, i) => (
                                        <div
                                          key={i}
                                          className={`flex items-center gap-2 p-2 rounded-md ${
                                            msg.isOwn ? "bg-primary-foreground/10" : "bg-background"
                                          }`}
                                        >
                                          {attachment.type === "image" ? (
                                            <ImageIcon className="h-5 w-5" />
                                          ) : attachment.type === "application" ? (
                                            <FileText className="h-5 w-5" />
                                          ) : (
                                            <File className="h-5 w-5" />
                                          )}
                                          <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium truncate">{attachment.name}</p>
                                          </div>
                                          <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-6 w-6"
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            <Download className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                                <div
                                  className={`text-[10px] ${
                                    msg.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                                  } mt-1 flex items-center justify-end gap-1`}
                                >
                                  {formatTime(msg.timestamp)}
                                  {msg.isOwn && getMessageStatus(msg.status)}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>

                  <div className="p-4 border-t">
                    {attachments.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {attachments.map((file, index) => (
                          <div key={index} className="flex items-center gap-2 bg-muted p-2 rounded-md text-xs">
                            {file.type.startsWith("image/") ? (
                              <ImageIcon className="h-4 w-4" />
                            ) : (
                              <FileText className="h-4 w-4" />
                            )}
                            <span className="max-w-[150px] truncate">{file.name}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5 rounded-full"
                              onClick={() => removeAttachment(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="relative">
                      <Input
                        placeholder="Mesajınızı yazın..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="pr-24"
                      />
                      <div className="absolute right-1 top-1 flex items-center gap-1">
                        <div className="relative">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                          >
                            <Smile className="h-5 w-5" />
                          </Button>
                          {showEmojiPicker && (
                            <div className="absolute bottom-full right-0 mb-2 z-10">
                              <EmojiPicker onEmojiClick={addEmoji} />
                            </div>
                          )}
                        </div>
                        <div>
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            className="hidden"
                            multiple
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <Paperclip className="h-5 w-5" />
                          </Button>
                        </div>
                        <Button size="icon" className="h-8 w-8" onClick={handleSendMessage}>
                          <Send className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold">Hoş Geldiniz!</h3>
                    <p className="text-muted-foreground">Sohbet etmek için bir kişi seçin.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </main>
      <ForumFooter />
    </div>
  )
}
