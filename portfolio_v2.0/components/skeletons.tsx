import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const ProjectSkeleton = () => (
    <Card className="overflow-hidden">
        <Skeleton className="aspect-video w-full" />
        <CardHeader>
            <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-5 w-16" />
            </div>
        </CardHeader>
        <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />
            <div className="flex gap-2 mb-4">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-12" />
                <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-9 w-full" />
        </CardContent>
    </Card>
)

export const SkillCardSkeleton = () => (
    <Card>
        <CardHeader>
            <Skeleton className="h-6 w-24" />
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16" />
                ))}
            </div>
        </CardContent>
    </Card>
) 