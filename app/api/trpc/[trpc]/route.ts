import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { groupeRouter } from '@/app/server/routers/groupes'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: groupeRouter,
    createContext: () => ({}),
  })

export { handler as GET, handler as POST }