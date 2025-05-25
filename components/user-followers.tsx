import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UserFollowers() {
  const followers = [
    { name: "Ali Yılmaz", username: "ali-yilmaz", avatar: "/placeholder.svg?text=AY", role: "Öğrenci" },
    { name: "Ayşe Öğretmen", username: "ayse-ogretmen", avatar: "/placeholder.svg?text=AÖ", role: "Öğretmen" },
    { name: "Zeynep Kaya", username: "zeynep-kaya", avatar: "/placeholder.svg?text=ZK", role: "Öğrenci" },
    { name: "Mehmet Demir", username: "mehmet-demir", avatar: "/placeholder.svg?text=MD", role: "Öğrenci" },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Takipçiler</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {followers.map((follower, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={follower.avatar || "/placeholder.svg"} alt={follower.name} />
                <AvatarFallback>
                  {follower.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <Link href={`/profile/${follower.username}`} className="text-sm font-medium hover:underline">
                  {follower.name}
                </Link>
                <p className="text-xs text-muted-foreground">{follower.role}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Takip Et
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
