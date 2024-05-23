import { useState } from 'react'

import { useDebounce } from '@/shared/hooks/useDebounce'

export const useSearchUsers = (onChangePage: (page: number) => void) => {
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce({ delay: 500, value: searchTerm })

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    onChangePage(1)
  }

  return {
    debouncedSearchTerm,
    handleSearch,
    searchTerm,
  }
}
