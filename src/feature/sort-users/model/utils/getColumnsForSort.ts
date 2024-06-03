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

export const getUserPaymentsColumns = (t: LocaleType): Column[] => {
  return [
    { key: 'username', sortable: true, title: t.table.username },
    { key: 'date', sortable: true, title: t.table.date },
    { key: 'amount', sortable: true, title: t.table.amount },
    { key: 'subscriptionType', sortable: false, title: t.table.subscriptionType },
    { key: 'paymentType', sortable: true, title: t.table.paymentType },
    { key: 'modals', sortable: false },
  ]
}
