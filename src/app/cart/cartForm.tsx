'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

{
  /* Validation schema*/
}
const Schema = z.object({
  firstName: z.string().min(3, { message: 'Pflichtfeld' }),
  lastName: z.string().min(3, { message: 'Pflichtfeld' }),
  street: z.string().min(2, { message: 'Pflichtfeld' }),
  streetNumber: z.string().min(1, { message: 'Pflichtfeld' }),
  zip: z.string().min(4, { message: 'Pflichtfeld' }),
  city: z.string().min(3, { message: 'Pflichtfeld' }),
  country: z.string().min(3, { message: 'Pflichtfeld' }),

  email: z.string().email({ message: 'Ungültige Email' }),
  phone: z.string().optional(),

  deliveryMethod: z.enum(['delivery', 'pickup']),
})

export type FormData = z.infer<typeof Schema>

{
  /* Component*/
}
export default function CartForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      deliveryMethod: 'delivery',
      country: 'Deutschland',
    },
  })

  const onSubmit = (values: FormData) => {
    console.log('FORM DATA:', values)
  }

  return (
    <div className="max-w-[750px] w-full bg-[#FFFFFF] p-6 rounded-xl">
      <h2 className="text-3xl font-bold mb-8">Empfängeradresse</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* ---------------- ROW 1 ---------------- */}
          <div className="grid grid-cols-2 gap-4 bg-[#f9fcfd]">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Vorname*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nachname*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* ---------------- ROW 2 ---------------- */}
          <div className="grid grid-cols-3 gap-4 bg-[#f9fcfd]">
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Input placeholder="Straße*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="streetNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nummer*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* ---------------- ROW 3 ---------------- */}
          <div className="grid grid-cols-2 gap-4 bg-[#f9fcfd]">
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="PLZ*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Ort*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* ---------------- ROW 4 ---------------- */}
          <div className="bg-[#f9fcfd]">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Deutschland*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* ---------------- ROW 5 ---------------- */}
          <div className="bg-[#f9fcfd]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* ---------------- ROW 6 ---------------- */}
          <div className="bg-[#f9fcfd]">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Telefonnummer des Empfängers" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* ---------------- DELIVERY METHOD ---------------- */}
          <FormField
            control={form.control}
            name="deliveryMethod"
            render={({ field }) => (
              <FormItem>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-10 mt-6"
                >
                  {/* DELIVERY */}
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="delivery" />
                    <div>
                      <p className="font-semibold text-green-700">
                        Lieferbar vom 08.07. bis 15.07.
                      </p>
                      <p className="text-sm">Lieferung nach Deutschland</p>
                    </div>
                  </div>

                  {/* PICKUP */}
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="pickup" />
                    <div>
                      <p className="font-semibold">Abholung im Studio</p>
                      <p className="text-sm text-gray-600">
                        Oberer Grifflenberg 83, 42119 Wuppertal
                      </p>
                    </div>
                  </div>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
