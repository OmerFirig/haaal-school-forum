"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function MessagesDropdown() {
  const messages = [
    {
      id: "1",
      sender: "Ali Yılmaz",
      avatar: "/placeholder.svg?text=AY",
      message: "Merhaba, bilim fuarı projesi hakkında konuşabilir miyiz?",
      time: "10 dakika önce",
      read: false,
    },
    {
      id: "2",
      sender: "Ayşe Öğretmen",
      avatar: "/placeholder.svg?text=AÖ",
      message: "Ödevinizi aldım, geri bildirimlerim olacak.",
      time: "1 saat önce",
      read: false,
    },
  ]

  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                  {messages.filter((m) => !m.read).length}
                </Badge>
                <span className="sr-only">Mesajlar</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Mesajlar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Mesajlar</span>
          <Link href="/messages" className="text-xs text-muted-foreground hover:underline">
            Tümünü Görüntüle
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-auto">
          {messages.length > 0 ? (
            messages.map((message) => (
              <DropdownMenuItem key={message.id} asChild>
                <Link href={`/messages/${message.id}`} className="cursor-pointer">
                  <div className="w-full p-1">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                        <AvatarFallback>
                          {message.sender
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                            .substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p className={`text-sm ${message.read ? "" : "font-medium"}`}>{message.sender}</p>
                          <span className="text-xs text-muted-foreground ml-2">{message.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{message.message}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="text-center py-4 text-sm text-muted-foreground">Mesajınız bulunmamaktadır</div>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/messages/new" className="cursor-pointer justify-center text-xs">
            Yeni Mesaj
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
