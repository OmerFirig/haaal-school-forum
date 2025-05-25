"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Underline, List, ListOrdered, LinkIcon, ImageIcon, Code, Quote, Undo, Redo } from "lucide-react"

export function RichTextEditor() {
  const [content, setContent] = useState("")

  return (
    <div className="border rounded-md">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bold className="h-4 w-4" />
          <span className="sr-only">Kalın</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Italic className="h-4 w-4" />
          <span className="sr-only">İtalik</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Underline className="h-4 w-4" />
          <span className="sr-only">Altı Çizili</span>
        </Button>
        <span className="w-px h-6 bg-border mx-1"></span>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <List className="h-4 w-4" />
          <span className="sr-only">Madde İşaretli Liste</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ListOrdered className="h-4 w-4" />
          <span className="sr-only">Numaralı Liste</span>
        </Button>
        <span className="w-px h-6 bg-border mx-1"></span>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <LinkIcon className="h-4 w-4" />
          <span className="sr-only">Bağlantı</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ImageIcon className="h-4 w-4" />
          <span className="sr-only">Resim</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Code className="h-4 w-4" />
          <span className="sr-only">Kod</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Quote className="h-4 w-4" />
          <span className="sr-only">Alıntı</span>
        </Button>
        <span className="w-px h-6 bg-border mx-1"></span>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Undo className="h-4 w-4" />
          <span className="sr-only">Geri Al</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Redo className="h-4 w-4" />
          <span className="sr-only">Yinele</span>
        </Button>
      </div>
      <div className="p-2">
        <textarea
          className="w-full min-h-[150px] resize-y border-0 focus:ring-0 focus:outline-none p-2"
          placeholder="Cevabınızı buraya yazın..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

// Default export for backward compatibility
export default RichTextEditor
