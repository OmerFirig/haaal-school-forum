"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState({
    newMessages: true,
    mentions: true,
    replies: true,
    follows: true,
    announcements: true,
    digest: true,
  })

  const [pushNotifications, setPushNotifications] = useState({
    newMessages: true,
    mentions: true,
    replies: true,
    follows: false,
    announcements: false,
  })

  const [digestFrequency, setDigestFrequency] = useState("weekly")

  const handleSaveSettings = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Bildirim ayarları kaydedildi",
        description: "Bildirim tercihleriniz başarıyla güncellendi.",
        action: <ToastAction altText="Tamam">Tamam</ToastAction>,
      })
    }, 1000)
  }

  const toggleEmailNotification = (key: keyof typeof emailNotifications) => {
    setEmailNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const togglePushNotification = (key: keyof typeof pushNotifications) => {
    setPushNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bildirim Ayarları</CardTitle>
        <CardDescription>
          Hangi bildirimler hakkında ne zaman ve nasıl bilgilendirilmek istediğinizi seçin.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">E-posta Bildirimleri</h3>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-messages">Yeni mesajlar</Label>
              <Switch
                id="email-messages"
                checked={emailNotifications.newMessages}
                onCheckedChange={() => toggleEmailNotification("newMessages")}
              />
            </div>
            <p className="text-sm text-muted-foreground">Birisi size özel mesaj gönderdiğinde e-posta alın.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-mentions">Bahsetmeler</Label>
              <Switch
                id="email-mentions"
                checked={emailNotifications.mentions}
                onCheckedChange={() => toggleEmailNotification("mentions")}
              />
            </div>
            <p className="text-sm text-muted-foreground">Birisi sizden bahsettiğinde e-posta alın.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-replies">Cevaplar</Label>
              <Switch
                id="email-replies"
                checked={emailNotifications.replies}
                onCheckedChange={() => toggleEmailNotification("replies")}
              />
            </div>
            <p className="text-sm text-muted-foreground">Konunuza veya yorumunuza cevap geldiğinde e-posta alın.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-follows">Takipler</Label>
              <Switch
                id="email-follows"
                checked={emailNotifications.follows}
                onCheckedChange={() => toggleEmailNotification("follows")}
              />
            </div>
            <p className="text-sm text-muted-foreground">Birisi sizi takip ettiğinde e-posta alın.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-announcements">Duyurular</Label>
              <Switch
                id="email-announcements"
                checked={emailNotifications.announcements}
                onCheckedChange={() => toggleEmailNotification("announcements")}
              />
            </div>
            <p className="text-sm text-muted-foreground">Önemli forum duyuruları hakkında e-posta alın.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-digest">Haftalık Özet</Label>
              <Switch
                id="email-digest"
                checked={emailNotifications.digest}
                onCheckedChange={() => toggleEmailNotification("digest")}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Takip ettiğiniz konular ve popüler tartışmalar hakkında özet e-posta alın.
            </p>
          </div>

          {emailNotifications.digest && (
            <div className="space-y-2 pl-6 border-l-2 border-muted">
              <Label>Özet Sıklığı</Label>
              <RadioGroup value={digestFrequency} onValueChange={setDigestFrequency}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="daily" id="digest-daily" />
                  <Label htmlFor="digest-daily">Günlük</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weekly" id="digest-weekly" />
                  <Label htmlFor="digest-weekly">Haftalık</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="digest-monthly" />
                  <Label htmlFor="digest-monthly">Aylık</Label>
                </div>
              </RadioGroup>
            </div>
          )}
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Anlık Bildirimler</h3>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-messages">Yeni mesajlar</Label>
              <Switch
                id="push-messages"
                checked={pushNotifications.newMessages}
                onCheckedChange={() => togglePushNotification("newMessages")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-mentions">Bahsetmeler</Label>
              <Switch
                id="push-mentions"
                checked={pushNotifications.mentions}
                onCheckedChange={() => togglePushNotification("mentions")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-replies">Cevaplar</Label>
              <Switch
                id="push-replies"
                checked={pushNotifications.replies}
                onCheckedChange={() => togglePushNotification("replies")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-follows">Takipler</Label>
              <Switch
                id="push-follows"
                checked={pushNotifications.follows}
                onCheckedChange={() => togglePushNotification("follows")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-announcements">Duyurular</Label>
              <Switch
                id="push-announcements"
                checked={pushNotifications.announcements}
                onCheckedChange={() => togglePushNotification("announcements")}
              />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Bildirim Sessiz Saatleri</h3>
          <p className="text-sm text-muted-foreground">
            Belirli saatlerde bildirim almak istemiyorsanız, sessiz saatler ayarlayabilirsiniz.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quiet-start">Başlangıç Saati</Label>
              <input
                id="quiet-start"
                type="time"
                defaultValue="22:00"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quiet-end">Bitiş Saati</Label>
              <input
                id="quiet-end"
                type="time"
                defaultValue="07:00"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="quiet-hours-enabled">Sessiz Saatleri Etkinleştir</Label>
              <Switch id="quiet-hours-enabled" defaultChecked />
            </div>
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
