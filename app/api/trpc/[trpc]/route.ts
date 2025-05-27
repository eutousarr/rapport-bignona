import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { postRouter } from '@/server/routers/posts'
import { createContext } from '@/server/context'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: postRouter,
    createContext,
  })

export { handler as GET, handler as POST }