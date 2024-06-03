import { useState } from 'react'

import { useDebounce } from '@/shared/hooks'
import { useRouter } from 'next/router'

export const useSearchUsers = (onChangePage: (page: number) => void) => {
  const router = useRouter()
  const { term } = router.query
  const [searchTerm, setSearchTerm] = useState((term as string) || '')

  const debouncedSearchTerm = useDebounce({ delay: 500, value: searchTerm })

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    onChangePage(1)

    const updatedQuery = { ...router.query }

    if (term) {
      updatedQuery.term = term
    } else {
      delete updatedQuery.term
    }
    router.push({
      query: updatedQuery,
    })
  }

  return {
    debouncedSearchTerm,
    handleSearch,
    searchTerm,
  }
}
