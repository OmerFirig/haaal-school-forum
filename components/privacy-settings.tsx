"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function PrivacySettings() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSaveSettings = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Gizlilik ayarları kaydedildi",
        description: "Gizlilik tercihleriniz başarıyla güncellendi.",
        action: <ToastAction altText="Tamam">Tamam</ToastAction>,
      })
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gizlilik Ayarları</CardTitle>
        <CardDescription>Kişisel bilgilerinizin nasıl görüntüleneceğini ve kullanılacağını yönetin.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Profil Gizliliği</h3>

          <div className="space-y-2">
            <Label htmlFor="profile-visibility">Profil Görünürlüğü</Label>
            <Select defaultValue="all">
              <SelectTrigger id="profile-visibility">
                <SelectValue placeholder="Profil görünürlüğünü seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Herkes</SelectItem>
                <SelectItem value="members">Sadece Üyeler</SelectItem>
                <SelectItem value="followers">Sadece Takipçilerim</SelectItem>
                <SelectItem value="none">Hiç Kimse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Profilimde Göster</Label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="show-email">E-posta Adresim</Label>
                <Switch id="show-email" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-activity">Aktivite Durumum</Label>
                <Switch id="show-activity" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-online">Çevrimiçi Durumum</Label>
                <Switch id="show-online" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-followers">Takipçilerim</Label>
                <Switch id="show-followers" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-following">Takip Ettiklerim</Label>
                <Switch id="show-following" defaultChecked />
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Mesajlaşma Gizliliği</h3>

          <div className="space-y-2">
            <Label htmlFor="message-permissions">Kimler Bana Mesaj Gönderebilir</Label>
            <Select defaultValue="all">
              <SelectTrigger id="message-permissions">
                <SelectValue placeholder="Mesaj izinlerini seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Herkes</SelectItem>
                <SelectItem value="members">Sadece Üyeler</SelectItem>
                <SelectItem value="followers">Sadece Takipçilerim</SelectItem>
                <SelectItem value="none">Hiç Kimse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="read-receipts">Okundu Bilgisi</Label>
              <Switch id="read-receipts" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">
              Mesajlarınızı ne zaman okuduğunuzu diğer kullanıcılara gösterin.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="typing-indicator">Yazıyor İndikatörü</Label>
              <Switch id="typing-indicator" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">Bir mesaj yazarken diğer kullanıcılara gösterin.</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">İçerik Gizliliği</h3>

          <div className="space-y-2">
            <Label htmlFor="post-visibility">Varsayılan Gönderi Görünürlüğü</Label>
            <Select defaultValue="all">
              <SelectTrigger id="post-visibility">
                <SelectValue placeholder="Gönderi görünürlüğünü seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Herkes</SelectItem>
                <SelectItem value="members">Sadece Üyeler</SelectItem>
                <SelectItem value="followers">Sadece Takipçilerim</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Etkileşim İzinleri</Label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="allow-comments">Gönderilerime Yorum Yapılabilir</Label>
                <Switch id="allow-comments" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="allow-mentions">Benden Bahsedilebilir</Label>
                <Switch id="allow-mentions" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="allow-tags">Gönderilerde Etiketlenebilirim</Label>
                <Switch id="allow-tags" defaultChecked />
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Arama ve Keşfedilebilirlik</h3>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="search-engines">Arama Motorlarında Görünür</Label>
              <Switch id="search-engines" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">
              Profilinizin Google gibi arama motorlarında görünmesine izin verin.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="discovery">Keşfet Bölümünde Görün</Label>
              <Switch id="discovery" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">
              Profilinizin ve içeriğinizin keşfet bölümünde görünmesine izin verin.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="suggestions">Öneri Listelerinde Görün</Label>
              <Switch id="suggestions" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">Diğer kullanıcılara önerilen kişiler listesinde görünün.</p>
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
  )
}
