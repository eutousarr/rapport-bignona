import { protectedProcedure, publicProcedure, router } from '../trpc'
import prisma from '@/lib/prisma'
import { generateSlug } from '@/utils/slug'
import { z } from 'zod'

const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  slug: z.string().optional(),
  authorId: z.string(),
})

export const postRouter = router({
  getPost: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    return await prisma.post.findUnique({
      where: { id: parseInt(input.id) },
    })
  }),
  getPosts: publicProcedure.query(async () => {
    return await prisma.post.findMany()
  }),
  // Protected procedure that requires a user to be signed in
  createPosts: protectedProcedure.input(postSchema).mutation(async ({ input }) => {
    return await prisma.post.create({
      data: {
        title: input.title,
        content: input.content,
        slug: generateSlug(input.title),
        authorId: input.authorId,
      },
    })
  }),
})

export type PostRouter = typeof postRouter