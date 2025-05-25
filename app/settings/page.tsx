"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import ThemeCustomizer from "@/components/theme-customizer"
import NotificationSettings from "@/components/notification-settings"
import PrivacySettings from "@/components/privacy-settings"
import AccountSettings from "@/components/account-settings"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSaveSettings = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Ayarlar kaydedildi",
        description: "Tüm ayarlarınız başarıyla güncellendi.",
        action: <ToastAction altText="Tamam">Tamam</ToastAction>,
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Ayarlar</h1>
              <p className="text-muted-foreground">Hesap ve forum tercihlerinizi yönetin.</p>
            </div>
            <Button onClick={() => router.push("/profile/seda-celik")}>Profilime Dön</Button>
          </div>

          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid grid-cols-5 w-full max-w-3xl">
              <TabsTrigger value="account">Hesap</TabsTrigger>
              <TabsTrigger value="appearance">Görünüm</TabsTrigger>
              <TabsTrigger value="notifications">Bildirimler</TabsTrigger>
              <TabsTrigger value="privacy">Gizlilik</TabsTrigger>
              <TabsTrigger value="advanced">Gelişmiş</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-6 mt-6">
              <AccountSettings />
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tema Ayarları</CardTitle>
                  <CardDescription>Forum görünümünü kişiselleştirin ve tercihlerinize göre ayarlayın.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Tema Modu</Label>
                    <Select value={theme} onValueChange={setTheme}>
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Tema seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Aydınlık</SelectItem>
                        <SelectItem value="dark">Karanlık</SelectItem>
                        <SelectItem value="system">Sistem</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <ThemeCustomizer />

                  <Separator />

                  <div className="space-y-2">
                    <Label>Yazı Tipi Boyutu</Label>
                    <Slider defaultValue={[16]} max={24} min={12} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Küçük</span>
                      <span>Normal</span>
                      <span>Büyük</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="compact-mode">Kompakt Mod</Label>
                      <Switch id="compact-mode" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Daha fazla içeriği görüntülemek için boşlukları azaltır.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animations">Animasyonlar</Label>
                      <Switch id="animations" defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Arayüz animasyonlarını etkinleştirir veya devre dışı bırakır.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Varsayılana Sıfırla</Button>
                  <Button onClick={handleSaveSettings} disabled={isLoading}>
                    {isLoading ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6 mt-6">
              <NotificationSettings />
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6 mt-6">
              <PrivacySettings />
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gelişmiş Ayarlar</CardTitle>
                  <CardDescription>Gelişmiş forum ayarlarını yapılandırın.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Dil</Label>
                    <Select defaultValue="tr">
                      <SelectTrigger>
                        <SelectValue placeholder="Dil seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tr">Türkçe</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Zaman Dilimi</Label>
                    <Select defaultValue="europe-istanbul">
                      <SelectTrigger>
                        <SelectValue placeholder="Zaman dilimi seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="europe-istanbul">İstanbul (GMT+3)</SelectItem>
                        <SelectItem value="europe-london">Londra (GMT+0)</SelectItem>
                        <SelectItem value="america-new_york">New York (GMT-5)</SelectItem>
                        <SelectItem value="asia-tokyo">Tokyo (GMT+9)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Tarih Formatı</Label>
                    <RadioGroup defaultValue="dd-mm-yyyy">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dd-mm-yyyy" id="dd-mm-yyyy" />
                        <Label htmlFor="dd-mm-yyyy">GG/AA/YYYY (30/05/2025)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mm-dd-yyyy" id="mm-dd-yyyy" />
                        <Label htmlFor="mm-dd-yyyy">AA/GG/YYYY (05/30/2025)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yyyy-mm-dd" id="yyyy-mm-dd" />
                        <Label htmlFor="yyyy-mm-dd">YYYY/AA/GG (2025/05/30)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Veri Kullanımı</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="analytics" defaultChecked />
                        <Label htmlFor="analytics">Analitik verilerini topla</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cookies" defaultChecked />
                        <Label htmlFor="cookies">Çerezleri kabul et</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="personalization" defaultChecked />
                        <Label htmlFor="personalization">İçerik kişiselleştirmeyi etkinleştir</Label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label className="text-red-500">Tehlikeli Bölge</Label>
                    <div className="space-y-4">
                      <Button variant="destructive" className="w-full">
                        Tüm Verilerimi İndir
                      </Button>
                      <Button variant="destructive" className="w-full">
                        Hesabımı Sil
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Varsayılana Sıfırla</Button>
                  <Button onClick={handleSaveSettings} disabled={isLoading}>
                    {isLoading ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <ForumFooter />
    </div>
  )
}
