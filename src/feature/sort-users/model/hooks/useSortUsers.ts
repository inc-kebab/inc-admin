import { useState } from 'react'

import { useTranslation } from '@/shared/hooks'
import { BanStatus } from '@/shared/types/apollo'
import { Options } from '@tazalov/kebab-ui/components'

import { Sort } from '../types'

type BlockedValue = 'none' | BanStatus

type BlockedOptions = {
  value: BlockedValue
} & Options

export const useSortUsers = (onChangePage: (page: number) => void) => {
  const { t } = useTranslation()

  const selectOptions: BlockedOptions[] = [
    { name: t.page.usersList.notSelected, value: 'none' },
    { name: t.page.usersList.blocked, value: BanStatus.Banned },
    { name: t.page.usersList.notBlocked, value: BanStatus.Unbanned },
  ]

  const [blocked, setBlocked] = useState<BlockedValue>(selectOptions[0].value)
  const [sort, setSort] = useState<Sort | null>(null)
  const [isAutoUpdate, setIsAutoUpdate] = useState(false)

  const handleChangeSort = (sort: Sort | null) => {
    setSort(sort)
    onChangePage(1)
  }

  const handleChangeBlocked = (value: string) => {
    setBlocked(value as BlockedValue)
    onChangePage(1)
  }
  const handleChangeIsAutoUpdate = (value: boolean) => {
    setIsAutoUpdate(value)
    onChangePage(1)
  }

  return {
    handleChangeIsAutoUpdate,
    handleChangeSort,
    isAutoUpdate,
    select: { blocked, handleChangeBlocked, options: selectOptions },
    sort,
  }
}
