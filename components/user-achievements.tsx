import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award, HelpCircle, MessageSquare, Calendar, CheckCircle2 } from "lucide-react"

interface Achievement {
  name: string
  description: string
  icon: string
  progress: number
  max: number
  completed?: boolean
}

interface UserAchievementsProps {
  achievements: Achievement[]
}

export default function UserAchievements({ achievements }: UserAchievementsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="h-5 w-5 text-amber-500" />
      case "HelpCircle":
        return <HelpCircle className="h-5 w-5 text-blue-500" />
      case "MessageSquare":
        return <MessageSquare className="h-5 w-5 text-green-500" />
      case "Calendar":
        return <Calendar className="h-5 w-5 text-purple-500" />
      default:
        return <Award className="h-5 w-5 text-amber-500" />
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Award className="h-4 w-4" />
          <span>Başarılar</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getIcon(achievement.icon)}
                <div>
                  <div className="font-medium text-sm flex items-center gap-1">
                    {achievement.name}
                    {achievement.completed && <CheckCircle2 className="h-3 w-3 text-green-500" />}
                  </div>
                  <div className="text-xs text-muted-foreground">{achievement.description}</div>
                </div>
              </div>
              <div className="text-xs font-medium">
                {achievement.progress}/{achievement.max}
              </div>
            </div>
            <Progress
              value={(achievement.progress / achievement.max) * 100}
              className="h-1.5"
              indicatorClassName={achievement.completed ? "bg-green-500" : undefined}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
