"use client"

import { Bell } from "lucide-react"
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
import Link from "next/link"

export default function NotificationDropdown() {
  const notifications = [
    {
      id: "1",
      title: "Konunuza yeni bir cevap geldi",
      message: "Ali Yılmaz, 'Bilim Fuarı Proje Fikirleri' konusuna cevap yazdı.",
      time: "5 dakika önce",
      read: false,
      link: "/thread/3",
    },
    {
      id: "2",
      title: "Yeni duyuru",
      message: "Ayşe Öğretmen 'Final Sınav Programı Yayınlandı' başlıklı bir duyuru paylaştı.",
      time: "2 saat önce",
      read: false,
      link: "/thread/1",
    },
    {
      id: "3",
      title: "Etkinlik hatırlatması",
      message: "Bahar Konseri yarın saat 19:00'da başlayacak.",
      time: "1 gün önce",
      read: true,
      link: "/event/event-1",
    },
  ]

  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                  {notifications.filter((n) => !n.read).length}
                </Badge>
                <span className="sr-only">Bildirimler</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Bildirimler</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Bildirimler</span>
          <Link href="/notifications" className="text-xs text-muted-foreground hover:underline">
            Tümünü Görüntüle
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} asChild>
                <Link href={notification.link} className="cursor-pointer">
                  <div className={`w-full p-1 ${notification.read ? "" : "font-medium"}`}>
                    <div className="flex justify-between items-start">
                      <p className="text-sm">{notification.title}</p>
                      <span className="text-xs text-muted-foreground ml-2">{notification.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="text-center py-4 text-sm text-muted-foreground">Bildiriminiz bulunmamaktadır</div>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/notifications/settings" className="cursor-pointer justify-center text-xs">
            Bildirim Ayarları
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
