import { publicProcedure, router } from '../trpc'
import prisma from '@/lib/prisma'

export const groupeRouter = router({
  getGroupes: publicProcedure.query(async () => {
    return await prisma.groupes.findMany()
  }),
})

export type GroupeRouter = typeof groupeRouter