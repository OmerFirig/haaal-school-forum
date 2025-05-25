import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"
import ForumHeader from "@/components/forum-header"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <ForumHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Card className="h-[calc(100vh-12rem)]">
          <div className="grid grid-cols-1 md:grid-cols-4 h-full">
            <div className="md:col-span-1 border-r p-4">
              <Skeleton className="h-10 w-full mb-4" />
              <Skeleton className="h-8 w-full mb-4" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col h-full">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div>
                    <Skeleton className="h-5 w-32 mb-1" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
              <div className="flex-1 p-4">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="flex items-end gap-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-20 w-64 rounded-lg" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Skeleton className="h-16 w-56 rounded-lg" />
                  </div>
                  <div className="flex justify-start">
                    <div className="flex items-end gap-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-24 w-72 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
