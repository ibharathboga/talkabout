"use client"
import Link from 'next/link';
export default function Header() {
    return <header>
        <div
            className="flex justify-between text-xl m-3 mx-5">
            <p
                className="tracking-widest hover:underline underline-offset-4">
                <Link href="/">
                    talkabout
                </Link>
            </p>
            <p>
                <Link href="/about" className='hover:underline underline-offset-4'>
                    about
                </Link>
            </p>
        </div>
    </header>
}