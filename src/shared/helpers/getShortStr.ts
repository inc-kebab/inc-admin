export const getShortStr = (str: string, limiter = 16) => {
  return str.length > limiter ? str.slice(0, limiter) + '...' : str
}
