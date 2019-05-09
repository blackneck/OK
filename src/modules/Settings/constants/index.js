const getRange = (range) =>
  [...Array(range)].map((_, index) => (index < 10 ? `0${index}` : `${index}`))

export const MINUTES = getRange(60)
export const HOURS = getRange(24)
export const FREQUENCY_VALUES = ['minute', 'hour', 'day', 'week']
