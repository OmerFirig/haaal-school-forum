import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  attendees: number
  id: string
}

export default function EventCard({ title, date, time, location, attendees, id }: EventCardProps) {
  return (
    <Card className="overflow-hidden group animated-card">
      <CardContent className="p-4">
        <div className="space-y-2">
          <Link
            href={`/events/${id}`}
            className="font-medium hover:text-primary transition-colors duration-300 group-hover:underline"
          >
            <h3 className="text-base">{title}</h3>
          </Link>
          <div className="flex flex-col space-y-1.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5" />
              <span>{attendees} katılımcı</span>
            </div>
          </div>
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full gradient-border transition-all duration-300 hover:bg-muted/50"
            >
              Katıl
            </Button>
          </div>
        </div>
      </CardContent>
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </Card>
  )
}
