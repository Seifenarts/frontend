export type DeliveryType = 'standard' | 'madeToOrder'

function addDays(days: number): Date {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date
}

function format(date: Date): string {
  return date.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'numeric',
  })
}

export function getDeliveryDateRange(type: DeliveryType): {
  from: string
  to: string
} {
  const ranges = {
    standard: [3, 5],
    madeToOrder: [7, 10],
  } as const

  const [fromDays, toDays] = ranges[type]

  return {
    from: format(addDays(fromDays)),
    to: format(addDays(toDays)),
  }
}
