import { protectedProcedure, publicProcedure, router } from '../trpc'
import prisma from '@/lib/prisma'
import { generateSlug } from '@/utils/slug'
import { z } from 'zod'

const candidatSchema = z.object({
  prenoms: z.string(),
  nom: z.string(),
  date_naissance: z.string(),
  lieu_naissance: z.string(),
  sexe: z.string(),
  aptitude: z.string(),
  section: z.string(),
  option: z.string(),
  etat: z.boolean(),
  etablissement_id: z.number(),
})

export const candidatRouter = router({
  getCandidat: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    return await prisma.candidat.findUnique({
      where: { id: parseInt(input.id) },
    })
  }),
  getCandidats: publicProcedure.query(async () => {
    return await prisma.candidat.findMany()
  }),
  // Protected procedure that requires a user to be signed in
  createCandidats: protectedProcedure.input(candidatSchema).mutation(async ({ input }) => {
    return await prisma.candidat.create({
      data: {
        prenoms: input.prenoms,
        nom: input.nom,
        date_naissance: input.date_naissance,
        lieu_naissance: input.lieu_naissance,
        sexe: input.sexe,
        aptitude: input.aptitude,
        section: input.section,
        option: input.option,
        etat: input.etat,
        etablissement_id: input.etablissement_id
      },
    })  
  })
})

export type CandidatRouter = typeof candidatSchema
