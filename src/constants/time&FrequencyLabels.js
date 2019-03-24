const getStringsRange = (start, end) => {
  const startString = start.toString().padStart(2, '0')
  if (start === end) return [startString]
  return [startString, ...getStringsRange(start + 1, end)]
}

export const frequencyValues = ['minute', 'hour', 'day', 'week']
export const minutes = getStringsRange(0, 59)
export const hours = getStringsRange(0, 23)
