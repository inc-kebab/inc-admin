import { ChangeEvent, useState } from 'react'

import { useDebounce } from '@/shared/hooks/useDebounce'

export const useSearchUsers = (onChangePage: (page: number) => void) => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce({ delay: 500, value: searchTerm })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    onChangePage(1)
  }

  return {
    handleSearch,
    searchTerm: debouncedSearchTerm,
  }
}
