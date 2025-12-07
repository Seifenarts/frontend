'use client'

import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { FormData } from './orderForm.schema'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function CartForm() {
  const form = useFormContext<FormData>()

  return (
    <div className="max-w-[750px] w-full bg-[#FFFFFF] p-6 rounded-xl">
      <h2 className="text-3xl font-bold mb-8">Empfängeradresse</h2>
      <div className="space-y-6">
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
            name="houseNumber"
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
            name="zipCode"
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
                    <p className="font-semibold text-green-700">Lieferbar vom 08.07. bis 15.07.</p>
                    <p className="text-sm">Lieferung nach Deutschland</p>
                  </div>
                </div>

                {/* PICKUP */}
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="pickup" />
                  <div>
                    <p className="font-semibold">Abholung im Studio</p>
                    <p className="text-sm text-gray-600">Oberer Grifflenberg 83, 42119 Wuppertal</p>
                  </div>
                </div>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
