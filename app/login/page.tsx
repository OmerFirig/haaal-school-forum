"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would normally authenticate the user
    console.log({ email, password, rememberMe })
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">HAAAL Forum'a Giriş Yap</CardTitle>
            <CardDescription>Hesabınıza erişmek için bilgilerinizi girin</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="a.ogretmen@haaal.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Şifre</Label>
                  <Link href="/forgot-password" className="text-xs text-muted-foreground hover:underline">
                    Şifremi unuttum?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Beni 30 gün hatırla
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Giriş yap
              </Button>
              <div className="text-center text-sm">
                Hesabınız yok mu?{" "}
                <Link href="/register" className="font-medium hover:underline">
                  Kayıt ol
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </main>
      <ForumFooter />
    </div>
  )
}
