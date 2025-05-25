"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Megaphone, X } from "lucide-react"
import { useState } from "react"

interface AnnouncementBannerProps {
  title: string
  description: string
  link: string
}

export default function AnnouncementBanner({ title, description, link }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Card className="mb-6 border-primary/20 bg-primary/5 overflow-hidden shimmer animated-card">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Megaphone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href={link}>
              <Button variant="outline" size="sm" className="animated-button text-white border-none">
                Detaylar
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setIsVisible(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Kapat</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
