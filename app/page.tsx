import Link from 'next/link'
import Posts from '@/components/Posts'

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <Posts />

      <Link
        href="/posts/create"
        className="inline-block rounded-lg border-2 border-current px-4 py-2 text-current transition-all hover:scale-[0.98]"
      >
        Create New Post
      </Link>
    </div>
  );
}
