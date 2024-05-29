import { useState } from 'react'

import { useTranslation } from '@/shared/hooks'
import { Options } from '@tazalov/kebab-ui/components'

import { Sort } from '../types'

export const useSortUsers = (onChangePage: (page: number) => void) => {
  const { t } = useTranslation()

  const selectOptions: Options[] = [
    { name: t.page.usersList.notSelected, value: 'none' },
    { name: t.page.usersList.blocked, value: 'blocked' },
    { name: t.page.usersList.notBlocked, value: 'notBlocked' },
  ]

  const [blocked, setBlocked] = useState(selectOptions[0].value)
  const [sort, setSort] = useState<Sort | null>(null)

  const handleChangeSort = (sort: Sort | null) => {
    setSort(sort)
    onChangePage(1)
  }

  const handleChangeBlocked = (value: string) => {
    setBlocked(value)
    onChangePage(1)
  }

  return {
    handleChangeSort,
    select: { blocked, handleChangeBlocked, options: selectOptions },
    sort,
  }
}
