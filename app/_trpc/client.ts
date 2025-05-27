'use client'

import { createTRPCReact } from '@trpc/react-query'

import type { PostRouter } from '@/server/routers/posts'

export const trpc = createTRPCReact<PostRouter>({})