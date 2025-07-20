import { Loader2 } from "lucide-react"

export function LoadingScreen() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center space-y-4">
                <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
                {/* <h2 className="text-2xl font-semibold animate-pulse">Loading ...</h2> */}
                {/* <p className="text-muted-foreground animate-pulse">Preparing amazing content for you</p>/ */}
            </div>
        </div>
    )
} 