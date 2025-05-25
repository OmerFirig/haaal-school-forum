import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserRankingCardProps {
  name: string
  role: string
  points: number
  rank: number
  avatar: string
}

export function UserRankingCard({ name, role, points, rank, avatar }: UserRankingCardProps) {
  // Generate initials from name
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-8 w-8 border">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
            {rank}
          </div>
        </div>
        <div>
          <Link
            href={`/profile/${name.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm font-medium hover:underline"
          >
            {name}
          </Link>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sm font-medium">{points.toLocaleString()}</div>
        <div className="text-xs text-muted-foreground">puan</div>
      </div>
    </div>
  )
}

export default UserRankingCard
