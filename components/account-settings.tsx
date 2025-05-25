"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Camera, Trash2 } from "lucide-react"

export default function AccountSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [avatar, setAvatar] = useState("/placeholder.svg?text=SC")
  const [coverImage, setCoverImage] = useState("/placeholder.svg?height=300&width=800")

  const handleSaveSettings = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Hesap ayarları kaydedildi",
        description: "Profil bilgileriniz başarıyla güncellendi.",
        action: <ToastAction altText="Tamam">Tamam</ToastAction>,
      })
    }, 1000)
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatar(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setCoverImage(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profil Bilgileri</CardTitle>
          <CardDescription>Kişisel bilgilerinizi ve profil görünümünüzü güncelleyin.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="relative h-40 w-full overflow-hidden rounded-lg border">
              <img
                src={coverImage || "/placeholder.svg"}
                alt="Kapak fotoğrafı"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="relative">
                  <input
                    type="file"
                    id="cover-upload"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    accept="image/*"
                    onChange={handleCoverChange}
                  />
                  <Button variant="secondary" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Kapak Fotoğrafı Değiştir
                  </Button>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setCoverImage("/placeholder.svg?height=300&width=800")}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage src={avatar || "/placeholder.svg"} alt="Profil fotoğrafı" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2">
                  <div className="relative">
                    <input
                      type="file"
                      id="avatar-upload"
                      className="absolute inset-0 cursor-pointer opacity-0 w-10 h-10"
                      accept="image/*"
                      onChange={handleAvatarChange}
                    />
                    <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Profil Fotoğrafı</h3>
                <p className="text-sm text-muted-foreground">JPG, GIF veya PNG. Maksimum 2MB.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="first-name">Ad</Label>
              <Input id="first-name" defaultValue="Seda" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="last-name">Soyad</Label>
              <Input id="last-name" defaultValue="Çelik" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Kullanıcı Adı</Label>
              <Input id="username" defaultValue="sedacelik" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input id="email" type="email" defaultValue="seda.celik@haaal.edu" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Hakkımda</Label>
            <Textarea
              id="bio"
              placeholder="Kendiniz hakkında kısa bir bilgi yazın..."
              defaultValue="HAAAL Lisesi'nde son sınıf öğrencisi. 2025 mezunu. Bilgisayar bilimi, matematik ve münazara kulübü ile ilgileniyorum."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Konum</Label>
            <Input id="location" defaultValue="İstanbul, Türkiye" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Web Sitesi</Label>
            <Input id="website" type="url" placeholder="https://example.com" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">İptal</Button>
          <Button onClick={handleSaveSettings} disabled={isLoading}>
            {isLoading ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Şifre Değiştir</CardTitle>
          <CardDescription>Hesabınızın güvenliğini korumak için şifrenizi düzenli olarak değiştirin.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Mevcut Şifre</Label>
            <Input id="current-password" type="password" />
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="new-password">Yeni Şifre</Label>
            <Input id="new-password" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Yeni Şifre (Tekrar)</Label>
            <Input id="confirm-password" type="password" />
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Şifreniz:</p>
            <ul className="list-disc pl-4 space-y-1 mt-1">
              <li>En az 8 karakter uzunluğunda olmalıdır</li>
              <li>En az bir büyük harf içermelidir</li>
              <li>En az bir küçük harf içermelidir</li>
              <li>En az bir rakam içermelidir</li>
              <li>En az bir özel karakter içermelidir</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">İptal</Button>
          <Button>Şifreyi Değiştir</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bağlı Hesaplar</CardTitle>
          <CardDescription>Sosyal medya ve diğer hesaplarınızı HAAAL Forum hesabınıza bağlayın.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Facebook</h4>
                <p className="text-sm text-muted-foreground">Bağlı Değil</p>
              </div>
            </div>
            <Button variant="outline">Bağla</Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Twitter</h4>
                <p className="text-sm text-muted-foreground">Bağlı Değil</p>
              </div>
            </div>
            <Button variant="outline">Bağla</Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <p className="text-sm text-muted-foreground">Bağlı Değil</p>
              </div>
            </div>
            <Button variant="outline">Bağla</Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24292E] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">GitHub</h4>
                <p className="text-sm text-muted-foreground">Bağlı: @sedacelik</p>
              </div>
            </div>
            <Button variant="outline">Bağlantıyı Kes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
