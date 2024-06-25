import { Payment } from '@/feature/payments/model/types'
import { getUserPaymentsColumns } from '@/feature/sort-users'
import { Sort } from '@/feature/sort-users/model/types'
import { SortableHead } from '@/feature/sort-users/ui/SortableHead/SortableHead'
import { UsersListSkeleton } from '@/feature/sort-users/ui/UsersList/UsersListSkeleton'
import { image } from '@/shared/assets'
import { useTranslation } from '@/shared/hooks'
import { Table } from '@tazalov/kebab-ui/components'
import { format } from 'date-fns'
import Image from 'next/image'

import s from './AllPaymentsList.module.scss'

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
      <Table.Body className={s.tableBody}>
        {isLoading ? (
          <UsersListSkeleton countCell={pageSize} />
        ) : (
          list?.map(payment => (
            <Table.Row className={s.row} key={`${payment.userId} ${payment.dateOfPayments}`}>
              <Table.Cell className={s.username} data-label={t.table.username}>
                <Image
                  alt="avatar"
                  className={s.avatar}
                  height={36}
                  src={payment.avatar || image}
                  width={36}
                />
                {payment.username}
              </Table.Cell>
              <Table.Cell className={s.cell} data-label={t.table.dateAdded}>
                {format(new Date(payment.dateOfPayments), 'dd.MM.yyyy')}
              </Table.Cell>
              <Table.Cell className={s.cell} data-label={t.table.amount}>
                {payment.price}$
              </Table.Cell>
              <Table.Cell className={s.cell} data-label={t.table.subscriptionType}>
                {payment.subscriptionType}
              </Table.Cell>
              <Table.Cell className={s.cell} data-label={t.table.paymentType}>
                {payment.paymentType}
              </Table.Cell>
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table.Root>
  )
}
