import { clsx } from '@tazalov/kebab-ui'
import { Skeleton, Table } from '@tazalov/kebab-ui/components'

import s from './PaymentsList.module.scss'

interface Props {
  countCell: number
}

export const PaymentsListSkeleton = ({ countCell }: Props) => {
  return new Array(countCell).fill(0).map((_, i) => (
    <Table.Row className={s.row} key={i}>
      <Table.Cell className={clsx(s.cell, s.date)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
      <Table.Cell className={clsx(s.cell, s.endDate)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
      <Table.Cell className={clsx(s.cell, s.amount)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
      <Table.Cell className={clsx(s.cell, s.subtype)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
      <Table.Cell className={clsx(s.cell, s.paytype)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
    </Table.Row>
  ))
}
