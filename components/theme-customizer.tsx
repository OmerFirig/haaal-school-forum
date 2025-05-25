"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { HexColorPicker } from "react-colorful"
import { Button } from "@/components/ui/button"
import { Check, Palette, Undo2 } from "lucide-react"

export default function ThemeCustomizer() {
  const [primaryColor, setPrimaryColor] = useState("#0ea5e9")
  const [accentColor, setAccentColor] = useState("#f97316")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [textColor, setTextColor] = useState("#0f172a")
  const [selectedPreset, setSelectedPreset] = useState("default")

  const presets = [
    {
      id: "default",
      name: "Varsayılan",
      primary: "#0ea5e9",
      accent: "#f97316",
      background: "#ffffff",
      text: "#0f172a",
    },
    { id: "dark", name: "Koyu", primary: "#3b82f6", accent: "#ec4899", background: "#1e293b", text: "#f8fafc" },
    { id: "forest", name: "Orman", primary: "#10b981", accent: "#f59e0b", background: "#f8fafc", text: "#1e293b" },
    { id: "sunset", name: "Gün Batımı", primary: "#f97316", accent: "#8b5cf6", background: "#fffbeb", text: "#1e293b" },
    { id: "royal", name: "Kraliyet", primary: "#8b5cf6", accent: "#ec4899", background: "#f8fafc", text: "#1e293b" },
  ]

  const applyPreset = (preset: any) => {
    setPrimaryColor(preset.primary)
    setAccentColor(preset.accent)
    setBackgroundColor(preset.background)
    setTextColor(preset.text)
    setSelectedPreset(preset.id)

    // Burada gerçek bir uygulamada CSS değişkenlerini güncelleyebilirsiniz
    document.documentElement.style.setProperty("--primary", preset.primary)
    document.documentElement.style.setProperty("--accent", preset.accent)
    document.documentElement.style.setProperty("--background", preset.background)
    document.documentElement.style.setProperty("--text", preset.text)
  }

  const applyCustomColors = () => {
    // Burada gerçek bir uygulamada CSS değişkenlerini güncelleyebilirsiniz
    document.documentElement.style.setProperty("--primary", primaryColor)
    document.documentElement.style.setProperty("--accent", accentColor)
    document.documentElement.style.setProperty("--background", backgroundColor)
    document.documentElement.style.setProperty("--text", textColor)
    setSelectedPreset("custom")
  }

  return (
    <div className="space-y-4">
      <Label>Tema Renkleri</Label>

      <Tabs defaultValue="presets">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="presets">Hazır Temalar</TabsTrigger>
          <TabsTrigger value="custom">Özel Renkler</TabsTrigger>
        </TabsList>

        <TabsContent value="presets" className="space-y-4 pt-4">
          <RadioGroup
            value={selectedPreset}
            onValueChange={(value) => {
              const preset = presets.find((p) => p.id === value)
              if (preset) applyPreset(preset)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {presets.map((preset) => (
                <div key={preset.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={preset.id} id={`preset-${preset.id}`} />
                  <Label htmlFor={`preset-${preset.id}`} className="flex items-center gap-2 cursor-pointer">
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.primary }}></div>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.accent }}></div>
                    </div>
                    <span>{preset.name}</span>
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          <div className="p-4 border rounded-md bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="h-4 w-4" />
              <h4 className="font-medium">Önizleme</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <div
                className="h-8 px-3 flex items-center justify-center rounded-md text-white text-sm"
                style={{ backgroundColor: primaryColor }}
              >
                Ana Renk
              </div>
              <div
                className="h-8 px-3 flex items-center justify-center rounded-md text-white text-sm"
                style={{ backgroundColor: accentColor }}
              >
                Vurgu Rengi
              </div>
              <div
                className="h-8 px-3 flex items-center justify-center rounded-md border text-sm"
                style={{ backgroundColor: backgroundColor, color: textColor }}
              >
                Arkaplan
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Ana Renk</Label>
              <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 rounded-md mr-2" style={{ backgroundColor: primaryColor }}></div>
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Vurgu Rengi</Label>
              <HexColorPicker color={accentColor} onChange={setAccentColor} />
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 rounded-md mr-2" style={{ backgroundColor: accentColor }}></div>
                <input
                  type="text"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Arkaplan Rengi</Label>
              <HexColorPicker color={backgroundColor} onChange={setBackgroundColor} />
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 rounded-md mr-2 border" style={{ backgroundColor: backgroundColor }}></div>
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Metin Rengi</Label>
              <HexColorPicker color={textColor} onChange={setTextColor} />
              <div className="flex items-center mt-2">
                <div className="w-6 h-6 rounded-md mr-2 border" style={{ backgroundColor: textColor }}></div>
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                const defaultPreset = presets.find((p) => p.id === "default")
                if (defaultPreset) {
                  setPrimaryColor(defaultPreset.primary)
                  setAccentColor(defaultPreset.accent)
                  setBackgroundColor(defaultPreset.background)
                  setTextColor(defaultPreset.text)
                }
              }}
            >
              <Undo2 className="h-4 w-4 mr-2" />
              Sıfırla
            </Button>
            <Button onClick={applyCustomColors}>
              <Check className="h-4 w-4 mr-2" />
              Uygula
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
