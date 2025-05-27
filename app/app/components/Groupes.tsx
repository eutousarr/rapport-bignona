'use client'

import Link from 'next/link'
import { trpc } from '@/app/_trpc/client'

export default function Groupes() {
  // Use the `getGroupes` query from the TRPC client
  const getGroupes = trpc.getGroupes.useQuery()
  const { isLoading, data } = getGroupes

  return (
    <div className="mb-8 flex max-w-2xl flex-col space-y-4">
      {isLoading && <div>Loading...</div>}
      {data?.map((groupe) => (
        <Link
          key={groupe.id}
          href={`/groupes/${groupe.id}`}
          className="hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col rounded-lg px-2 py-4 transition-all hover:underline"
        >
          <span className="text-lg font-semibold">{groupe.name}</span>
          <span className="text-sm">by {groupe.slug}</span>
        </Link>
      ))}
    </div>
  )
}