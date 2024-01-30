import Link from 'next/link';
import { Button } from "@/components/shadcn/ui/button"
export default function Home() {
    return (
        <>
            <h1 className="border border-red-500">hello from home page.</h1>
            <Link href="/about" className='hover:underline underline-offset-4'>
                <Button>Click me</Button>
            </Link>
        </>
    );
}
