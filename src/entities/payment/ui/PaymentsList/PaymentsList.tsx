import { useTranslation } from '@/shared/hooks/useTranslation'
import { clsx } from '@tazalov/kebab-ui'
import { Table } from '@tazalov/kebab-ui/components'
import { format } from 'date-fns'

import s from './PaymentsList.module.scss'

import { Payment } from '../../model/types'
import { PaymentsListSkeleton } from './PaymentsListSkeleton'

type Props = {
  isLoading?: boolean
  list?: Payment[] | null
  pageSize: number
}

export const PaymentsList = ({ isLoading, list, pageSize }: Props) => {
  const { t } = useTranslation()

  return (
    <Table.Root className={s.table}>
      <Table.Head className={s.tableHead}>
        <Table.Row>
          <Table.TitleCell className={s.title}>{t.page.user.payments.date}</Table.TitleCell>
          <Table.TitleCell className={s.title}>{t.page.user.payments.endDate}</Table.TitleCell>
          <Table.TitleCell className={s.title}>{t.page.user.payments.amount}</Table.TitleCell>
          <Table.TitleCell className={s.title}>{t.page.user.payments.subtype}</Table.TitleCell>
          <Table.TitleCell className={s.title}>{t.page.user.payments.paytype}</Table.TitleCell>
        </Table.Row>
      </Table.Head>
      <Table.Body className={s.body}>
        {isLoading ? (
          <PaymentsListSkeleton countCell={pageSize} />
        ) : (
          list?.map(el => (
            <Table.Row className={s.row} key={el.id}>
              <Table.Cell className={clsx(s.cell, s.date)} data-label={t.page.user.payments.date}>
                {format(el.dateOfPayments, 'dd.MM.yyyy')}
              </Table.Cell>
              <Table.Cell
                className={clsx(s.cell, s.endDate)}
                data-label={t.page.user.payments.endDate}
              >
                {format(el.endDateOfSubscription, 'dd.MM.yyyy')}
              </Table.Cell>
              <Table.Cell
                className={clsx(s.cell, s.amount)}
                data-label={t.page.user.payments.amount}
              >
                {`$${el.price}`}
              </Table.Cell>
              <Table.Cell
                className={clsx(s.cell, s.subtype)}
                data-label={t.page.user.payments.subtype}
              >
                {el.subscriptionType}
              </Table.Cell>
              <Table.Cell
                className={clsx(s.cell, s.paytype)}
                data-label={t.page.user.payments.paytype}
              >
                {el.paymentType}
              </Table.Cell>
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table.Root>
  )
}
