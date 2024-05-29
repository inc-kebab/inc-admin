import { useState } from 'react'

import { useTranslation } from '@/shared/hooks'
import { Options } from '@tazalov/kebab-ui/components'

export const useSortBlockUsers = (onChangePage: (page: number) => void) => {
  const { t } = useTranslation()

  const selectOptions: Options[] = [
    { name: t.page.usersList.notSelected, value: 'none' },
    { name: t.page.usersList.blocked, value: 'blocked' },
    { name: t.page.usersList.notBlocked, value: 'notBlocked' },
  ]

  const [blocked, setBlocked] = useState(selectOptions[0].value)

  const handleChangeBlocked = (value: string) => {
    setBlocked(value)
    onChangePage(1)
  }

  return { blocked, handleChangeBlocked, options: selectOptions }
}
