'use client'

import { useFormContext, useWatch } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { FormData } from './orderForm.schema'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { getDeliveryDateRange } from '@/lib/deliveryDates'
import { useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'

const standardDelivery = getDeliveryDateRange('standard')
const extendedDelivery = getDeliveryDateRange('madeToOrder')

export default function CartForm() {
  const form = useFormContext<FormData>()
  const deliveryMethod = useWatch({ name: 'deliveryMethod', control: form.control })
  const isPickup = deliveryMethod === 'pickup'
  const { selectedProduct } = useSelector((state: RootState) => state.products)

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
        <div className="grid grid-cols-3 gap-4 bg-[#f9fcfd] ">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => {
              return (
                <FormItem
                  className={
                    'col-span-2 transition-opacity' +
                    (isPickup ? 'opacity-50 pointer-events-none' : '')
                  }
                >
                  <FormControl>
                    <Input placeholder="Straße*" {...field} disabled={isPickup} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            control={form.control}
            name="houseNumber"
            render={({ field }) => {
              return (
                <FormItem className={isPickup ? 'opacity-50 pointer-events-none' : ''}>
                  <FormControl>
                    <Input placeholder="Nummer*" {...field} disabled={isPickup} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        {/* ---------------- ROW 3 ---------------- */}
        <div className="grid grid-cols-2 gap-4 bg-[#f9fcfd]">
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => {
              return (
                <FormItem className={isPickup ? 'opacity-50 pointer-events-none' : ''}>
                  <FormControl>
                    <Input placeholder="PLZ*" {...field} disabled={isPickup} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => {
              return (
                <FormItem className={isPickup ? 'opacity-50 pointer-events-none' : ''}>
                  <FormControl>
                    <Input placeholder="Ort*" {...field} disabled={isPickup} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        {/* ---------------- ROW 4 ---------------- */}
        <div className="bg-[#f9fcfd]">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => {
              return (
                <FormItem className={isPickup ? 'opacity-50 pointer-events-none' : ''}>
                  <FormControl>
                    <Input placeholder="Deutschland*" {...field} disabled={isPickup} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        {/* ---------------- ROW 5 ---------------- */}
        <div className="bg-[#f9fcfd]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem className={isPickup ? 'opacity-50 pointer-events-none' : ''}>
                  <FormControl>
                    <Input placeholder="Email*" {...field} disabled={isPickup} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>

        {/* ---------------- ROW 6 ---------------- */}
        <div className="bg-[#f9fcfd]">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => {
              return (
                <FormItem className={isPickup ? 'opacity-50 pointer-events-none' : ''}>
                  <FormControl>
                    <Input
                      placeholder="Telefonnummer des Empfängers*"
                      {...field}
                      disabled={isPickup}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
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
