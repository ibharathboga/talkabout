import { Button } from "@/components/shadcn/ui/button";
import { Plus } from 'lucide-react';
import Link from "next/link";
export default function AddCardButton() {
    return (
        <>
            <Link href="/create-talkcard">
                <Button className="fixed right-0 bottom-0 m-5">
                    <Plus
                        size={25}
                        absoluteStrokeWidth={true}
                    />
                </Button>
            </Link>
        </>
    );
}
