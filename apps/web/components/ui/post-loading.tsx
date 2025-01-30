import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { LoadingSpinner } from "./loading-spinner"

interface PostLoadingProps {
  count?: number
  showSpinner?: boolean
}

export function PostLoading({ count = 3, showSpinner = true }: PostLoadingProps) {
  return (
    <div className="space-y-6">
      {showSpinner && (
        <div className="py-8">
          <LoadingSpinner />
        </div>
      )}

      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[140px]" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
            <div className="pt-4">
              <Skeleton className="h-[200px] w-full rounded-lg" />
            </div>
            <div className="flex space-x-4 pt-4">
              <Skeleton className="h-10 w-10" />
              <Skeleton className="h-10 w-10" />
              <Skeleton className="h-10 w-10" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

