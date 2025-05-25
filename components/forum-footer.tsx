"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

export default function ForumFooter() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      toast({
        title: "Abone olundu!",
        description: `${email} adresiniz bülten listemize eklendi.`,
      })
      setEmail("")
    }
  }

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary-foreground">
                  H
                </span>
              </div>
              <div>
                <span className="font-bold text-xl gradient-heading">HAAAL</span>
                <span className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  Forum
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              HAAAL Okul Forumu, öğrenciler, öğretmenler ve veliler arasında iletişimi güçlendirmek için tasarlanmış bir
              platformdur.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-all duration-300"
              >
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
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-all duration-300"
              >
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
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-all duration-300"
              >
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
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-all duration-300"
              >
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
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link
                  href="/rules"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Forum Kuralları
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Destek
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/announcements"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Duyurular
                </Link>
              </li>
              <li>
                <Link
                  href="/category/academics"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Akademik
                </Link>
              </li>
              <li>
                <Link
                  href="/category/clubs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Kulüpler & Aktiviteler
                </Link>
              </li>
              <li>
                <Link
                  href="/category/events"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Etkinlikler
                </Link>
              </li>
              <li>
                <Link
                  href="/category/general"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Genel Tartışma
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Bülten</h3>
            <p className="text-sm text-muted-foreground mb-4">
              En son forum güncellemeleri ve okul haberleri için abone olun.
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input
                placeholder="E-posta adresiniz"
                className="max-w-[220px] gradient-border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <Button type="submit" className="animated-button">
                Abone Ol
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 HAAAL Okul Forumu. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Kullanım Şartları
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
