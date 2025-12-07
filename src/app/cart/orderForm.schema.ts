import z from 'zod'

export type FormData = z.infer<typeof Schema>
export const Schema = z.object({
  firstName: z.string().min(3, { message: 'Pflichtfeld' }),
  lastName: z.string().min(3, { message: 'Pflichtfeld' }),
  street: z.string().min(2, { message: 'Pflichtfeld' }),
  houseNumber: z.string().min(1, { message: 'Pflichtfeld' }),
  zipCode: z.string().min(4, { message: 'Pflichtfeld' }),
  city: z.string().min(3, { message: 'Pflichtfeld' }),
  country: z.string().min(3, { message: 'Pflichtfeld' }),

  email: z.string().email({ message: 'Ungültige Email' }),
  phone: z.string().optional(),

  deliveryMethod: z.enum(['delivery', 'pickup']),
})
