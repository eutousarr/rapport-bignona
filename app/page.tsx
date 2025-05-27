import Link from 'next/link'
import prisma from '@/lib/prisma'

export default async function Page() {
  const groupes = await prisma.groupes.findMany() // Query the `Groupe` model for all groupes

  return (
    <div className="mx-auto mt-8 flex min-h-screen max-w-2xl flex-col">
      <h1 className="mb-8 text-4xl font-bold">Groupes</h1>

      <div className="mb-8 flex max-w-2xl flex-col space-y-4">
        {groupes.map((groupe) => (
          <Link
            key={groupe.id}
            href={`#${groupe.id}`}
            className="hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col rounded-lg px-2 py-4 transition-all hover:underline"
          >
            <span className="text-lg font-semibold">{groupe.name} - {groupe.id}</span>
            <span className="text-sm">by {groupe.slug}</span>
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="inline-block rounded-lg border-2 border-current px-4 py-2 text-current transition-all hover:scale-[0.98]"
      >
        Create New Groupe
      </Link>
    </div>
  )
}