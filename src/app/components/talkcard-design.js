import { cn } from "@/components/shadcn/lib/utils"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/ui/card"

export default function TalkCardDesign({ title, description, className }) {
    return (
        <div className="p-5">
            <Card className="max-w-[500px] min-h-[400px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{description}</p>
                </CardContent>
            </Card>
        </div>
    );
}
