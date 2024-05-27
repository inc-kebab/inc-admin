import { useEffect, useState } from 'react'

type Props<T> = {
  delay: number
  value: T
}

export const useDebounce = <T>({ delay, value }: Props<T>) => {
  const [debaunceValue, setDebaunceValue] = useState(value)

  useEffect(() => {
    const timeId = setTimeout(() => setDebaunceValue(value), delay)

    return () => clearTimeout(timeId)
  }, [value, delay])

  return debaunceValue
}
