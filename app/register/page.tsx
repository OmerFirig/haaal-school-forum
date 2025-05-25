"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import ForumHeader from "@/components/forum-header"
import ForumFooter from "@/components/forum-footer"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would normally register the user
    console.log({ firstName, lastName, email, password, confirmPassword, role, agreeTerms })
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Hesap oluştur</CardTitle>
            <CardDescription>HAAAL Forum topluluğuna katılın</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Ad</Label>
                  <Input id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Soyad</Label>
                  <Input id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Okul e-postası</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="adiniz.soyadiniz@haaal.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">Geçerli bir HAAAL okul e-posta adresi olmalıdır</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Ben bir</Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Rolünüzü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Öğrenci</SelectItem>
                    <SelectItem value="teacher">Öğretmen</SelectItem>
                    <SelectItem value="staff">Personel</SelectItem>
                    <SelectItem value="parent">Veli</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Şifre</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  En az 8 karakter, bir rakam ve bir özel karakter içermelidir
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Şifreyi onayla</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  required
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <Link href="/terms" className="font-medium hover:underline">
                      Kullanım şartlarını
                    </Link>{" "}
                    ve{" "}
                    <Link href="/privacy" className="font-medium hover:underline">
                      gizlilik politikasını
                    </Link>{" "}
                    kabul ediyorum
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" disabled={!agreeTerms}>
                Hesap oluştur
              </Button>
              <div className="text-center text-sm">
                Zaten bir hesabınız var mı?{" "}
                <Link href="/login" className="font-medium hover:underline">
                  Giriş yap
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
