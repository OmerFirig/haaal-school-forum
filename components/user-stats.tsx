import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart } from "@/components/ui/charts"

interface UserStatsProps {
  user: any
}

export default function UserStats({ user }: UserStatsProps) {
  // Simulated activity data
  const activityData = {
    posts: [4, 7, 5, 3, 8, 6, 2],
    replies: [12, 8, 15, 10, 7, 13, 9],
    likes: [18, 22, 15, 25, 20, 17, 23],
    views: [120, 145, 98, 156, 132, 178, 143],
    labels: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
  }

  // Simulated category distribution
  const categoryData = {
    categories: ["Akademik", "Genel", "Etkinlikler", "Spor", "Kulüpler"],
    values: [42, 28, 15, 8, 7],
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">İstatistikler</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Haftalık Aktivite</h4>
          <LineChart
            data={{
              labels: activityData.labels,
              datasets: [
                {
                  label: "Konular",
                  data: activityData.posts,
                  borderColor: "hsl(var(--primary))",
                  backgroundColor: "hsl(var(--primary) / 0.1)",
                },
                {
                  label: "Cevaplar",
                  data: activityData.replies,
                  borderColor: "hsl(var(--secondary))",
                  backgroundColor: "hsl(var(--secondary) / 0.1)",
                },
              ],
            }}
            height={200}
          />
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Kategori Dağılımı</h4>
          <BarChart
            data={{
              labels: categoryData.categories,
              datasets: [
                {
                  label: "Gönderiler",
                  data: categoryData.values,
                  backgroundColor: [
                    "hsl(var(--primary))",
                    "hsl(var(--secondary))",
                    "hsl(var(--accent))",
                    "hsl(var(--muted))",
                    "hsl(var(--card))",
                  ],
                },
              ],
            }}
            height={200}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1 text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold">{user.threadCount}</div>
            <div className="text-xs text-muted-foreground">Toplam Konu</div>
          </div>
          <div className="space-y-1 text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold">{user.replyCount}</div>
            <div className="text-xs text-muted-foreground">Toplam Cevap</div>
          </div>
          <div className="space-y-1 text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold">{user.likesCount}</div>
            <div className="text-xs text-muted-foreground">Toplam Beğeni</div>
          </div>
          <div className="space-y-1 text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold">{user.followersCount}</div>
            <div className="text-xs text-muted-foreground">Toplam Takipçi</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
