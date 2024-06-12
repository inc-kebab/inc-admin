import { Payment } from '@/feature/payments/model/types'
import { Sort } from '@/feature/sort-users/model/types'
import { getUserPaymentsColumns } from '@/feature/sort-users/model/utils/getColumnsForSort'
import { SortableHead } from '@/feature/sort-users/ui/SortableHead/SortableHead'
import { UsersListSkeleton } from '@/feature/sort-users/ui/UsersList/UsersListSkeleton'
import { useTranslation } from '@/shared/hooks'
import { clsx } from '@tazalov/kebab-ui'
import { Table } from '@tazalov/kebab-ui/components'
import { format } from 'date-fns'

import s from '@/pages/payments-list/Payments.module.scss'

type Props = {
  isLoading?: boolean
  list?: Payment[]
  onChangeSort?: (sort: Sort | null) => void
  pageSize: number
  sort: Sort | null
}

export const AllPaymentsList = ({ isLoading, list, onChangeSort, pageSize, sort }: Props) => {
  const { t } = useTranslation()

  return (
    <Table.Root className={s.table}>
      <Table.Head className={s.tableHead}>
        <SortableHead columns={getUserPaymentsColumns(t)} onChangeSort={onChangeSort} sort={sort} />
      </Table.Head>
      <Table.Body className={s.body}>
        {isLoading ? (
          <UsersListSkeleton countCell={pageSize} />
        ) : (
          list?.map(payment => (
            <Table.Row className={s.row} key={payment.userId}>
              <Table.Cell className={clsx(s.cell, s.idCell)} data-label={t.table.username}>
                {payment.username}
              </Table.Cell>
              <Table.Cell
                className={clsx(s.cell, s.idCell)}
                data-label={t.table.endDateOfSubscription}
              >
                {format(new Date(payment.dateOfPayments), 'dd.MM.yyyy')}
              </Table.Cell>
              <Table.Cell className={clsx(s.cell, s.idCell)} data-label={t.table.date}>
                ${payment.price}
              </Table.Cell>
              <Table.Cell className={clsx(s.cell, s.idCell)} data-label={t.table.subscriptionType}>
                {payment.subscriptionType}
              </Table.Cell>
              <Table.Cell className={clsx(s.cell, s.idCell)} data-label={t.table.paymentType}>
                {payment.paymentType}
              </Table.Cell>
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table.Root>
  )
}
