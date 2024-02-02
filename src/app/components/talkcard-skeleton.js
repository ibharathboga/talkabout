import { cn } from "@/components/shadcn/lib/utils"
import { Skeleton } from "@/components/shadcn/ui/skeleton"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/ui/card"

export default function TalkCardSkeleton() {
    return (
        <div className="m-auto p-5">
            <Card className="max-w-[500px] min-h-[400px] border-0">
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="w-[350px] h-[35px] rounded-full" />
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-2">
                    <Skeleton className="h-3" />
                    <Skeleton className="h-3 w-[150px]" />
                    <Skeleton className="h-3 w-[100px]" />
                    <Skeleton className="h-3 w-[50px]" />
                    <Skeleton className="h-3 w-[20px]" />
                    <Skeleton className="h-3" />
                    <Skeleton className="h-3 w-[150px]" />
                    <Skeleton className="h-3 w-[100px]" />
                    <Skeleton className="h-3 w-[50px]" />
                    <Skeleton className="h-3 w-[20px]" />
                </CardContent>
            </Card>
        </div>
    );
}
