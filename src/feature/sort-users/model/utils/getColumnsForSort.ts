import { LocaleType } from '@/../locales'

import { Column } from '../types'

export const getColumnsForSort = (t: LocaleType): Column[] => {
  return [
    { key: 'id', sortable: false, title: t.table.userID },
    { key: 'fullName', sortable: true, title: t.table.username },
    { key: 'username', sortable: false, title: t.table.profileLink },
    { key: 'createdAt', sortable: true, title: t.table.date },
    { key: 'modals', sortable: false },
  ]
}
