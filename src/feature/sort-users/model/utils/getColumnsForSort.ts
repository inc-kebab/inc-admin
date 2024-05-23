import { LocaleType } from '@/../locales'

import { Column } from '../types'

export const getColumnsForSort = (t: LocaleType): Column[] => {
  return [
    { key: 'id', sortable: false, title: t.userID },
    { key: 'fullName', sortable: true, title: t.username },
    { key: 'username', sortable: false, title: t.profileLink },
    { key: 'createdAt', sortable: true, title: t.date },
    { key: 'modals', sortable: false },
  ]
}
