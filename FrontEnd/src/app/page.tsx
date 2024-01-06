import Image from 'next/image';
import PrivateRoute from '@/components/PrivateRoute';

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Home page",
  description: ""
}

export default function Home() {
  return (
    <main className="h-screen bg-white text-xl text-black">
      <Link href="/game" >
        Game
      </Link>
      <h1>hello</h1>
    </main>
  )
}
