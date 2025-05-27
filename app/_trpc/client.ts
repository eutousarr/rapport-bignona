'use client'

import { createTRPCReact } from '@trpc/react-query'

import type { GroupeRouter } from '@/app/server/routers/groupes'

export const trpc = createTRPCReact<GroupeRouter>({})