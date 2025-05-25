"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

export default function UserCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Simulated activity dates
  const activityDates = [
    new Date(2025, 4, 2),
    new Date(2025, 4, 5),
    new Date(2025, 4, 8),
    new Date(2025, 4, 10),
    new Date(2025, 4, 12),
    new Date(2025, 4, 15),
    new Date(2025, 4, 17),
    new Date(2025, 4, 18),
  ]

  // Function to check if a date has activity
  const hasActivity = (date: Date) => {
    return activityDates.some(
      (activityDate) =>
        activityDate.getDate() === date.getDate() &&
        activityDate.getMonth() === date.getMonth() &&
        activityDate.getFullYear() === date.getFullYear(),
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Aktivite Takvimi</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            activity: activityDates,
          }}
          modifiersClassNames={{
            activity: "activity-day",
          }}
          components={{
            DayContent: (props) => (
              <div className="relative">
                {props.date && hasActivity(props.date) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
                <div>{props.date?.getDate()}</div>
              </div>
            ),
          }}
        />

        {date && hasActivity(date) && (
          <div className="mt-4 p-3 border rounded-md">
            <h4 className="text-sm font-medium mb-2">
              {date.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Yeni konu oluşturuldu</span>
                <Badge variant="outline" className="text-xs">
                  10:30
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>3 cevap gönderildi</span>
                <Badge variant="outline" className="text-xs">
                  14:15
                </Badge>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
