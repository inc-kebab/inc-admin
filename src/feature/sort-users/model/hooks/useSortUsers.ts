import { useState } from 'react'

import { Sort } from '../types'

export const useSortUsers = (onChangePage: (page: number) => void) => {
  const [sort, setSort] = useState<Sort | null>(null)

  const handleChangeSort = (sort: Sort | null) => {
    setSort(sort)
    onChangePage(1)
  }

  return {
    handleChangeSort,
    sort,
  }
}
