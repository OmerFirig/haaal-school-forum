"use client"

import { useState } from "react"

interface EmojiPickerProps {
  onEmojiClick: (emoji: string) => void
}

const EMOJI_CATEGORIES = [
  {
    name: "Yüzler",
    emojis: ["😀", "😂", "😍", "🤔", "😊", "😎", "😭", "😡", "😇", "😈"],
  },
  {
    name: "İnsanlar",
    emojis: ["👋", "👍", "🙌", "🙏", "💪", "💃", "🏃", "🚶", "👨", "👩"],
  },
  {
    name: "Hayvanlar",
    emojis: ["🐶", "🐱", "🐭", "🐹", "🐻", "🐼", "🌷", "🌻", "🌴", "🍄"],
  },
  {
    name: "Yiyecekler",
    emojis: ["🍎", "🍕", "🍔", "🍣", "☕", "🍺", "🍷", "🍸", "🍹", "🍩"],
  },
  {
    name: "Aktiviteler",
    emojis: ["⚽", "🏀", "🎮", "🎬", "🚗", "✈️", "🚢", "🚀", "🚲", "🏕️"],
  },
  {
    name: "Semboller",
    emojis: ["💡", "💰", "📚", "📌", "📍", "❤️", "⭐", "✅", "❓", "❗"],
  },
]

export default function EmojiPicker({ onEmojiClick }: EmojiPickerProps) {
  const [activeCategory, setActiveCategory] = useState(EMOJI_CATEGORIES[0].name)

  return (
    <div className="border rounded-md shadow-sm p-2 bg-background">
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-2 overflow-x-auto scrollbar-none">
          {EMOJI_CATEGORIES.map((category) => (
            <button
              key={category.name}
              className={`px-2 py-1 rounded-md text-sm ${
                activeCategory === category.name ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-8 gap-1 max-h-40 overflow-y-auto">
        {EMOJI_CATEGORIES.find((cat) => cat.name === activeCategory)?.emojis.map((emoji) => (
          <button
            key={emoji}
            className="text-2xl hover:bg-muted rounded-md flex items-center justify-center p-1"
            onClick={() => onEmojiClick(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  )
}
