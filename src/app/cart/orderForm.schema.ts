import { z } from 'zod'

export const Schema = z
  .object({
    deliveryMethod: z.enum(['delivery', 'pickup'], {
      message: 'Pflichtfeld',
    }),

    firstName: z.string().min(3, { message: 'Pflichtfeld' }),
    lastName: z.string().min(3, { message: 'Pflichtfeld' }),

    street: z.string().min(2, { message: 'Pflichtfeld' }),
    houseNumber: z.string().min(1, { message: 'Pflichtfeld' }),
    zipCode: z.string().min(4, { message: 'Pflichtfeld' }),
    city: z.string().min(3, { message: 'Pflichtfeld' }),
    country: z.string().min(3, { message: 'Pflichtfeld' }),

    email: z.string().email({ message: 'Ungültige Email' }),

    phone: z.string().optional(),
  })

  /**
   * Dynamische Regeln:
   * - Wird "pickup" gewählt → Adresse wird ignoriert
   * - Wird "delivery" gewählt → Adresse wird Pflicht
   */
  .refine(
    (data) => {
      if (data.deliveryMethod === 'pickup') return true
      return data.street && data.houseNumber && data.zipCode && data.city && data.country
    },
    {
      message: 'Adresse ist erforderlich',
      path: ['street'],
    },
  )

export type FormData = z.infer<typeof Schema>
