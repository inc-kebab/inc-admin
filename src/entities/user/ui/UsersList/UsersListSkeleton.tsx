import { clsx } from '@tazalov/kebab-ui'
import { Skeleton, Table } from '@tazalov/kebab-ui/components'

import s from './UsersList.module.scss'

interface Props {
  countCell: number
}

export const UsersListSkeleton = ({ countCell }: Props) => {
  return new Array(countCell).fill(0).map((_, i) => (
    <Table.Row className={s.row} key={i}>
      <Table.Cell className={clsx(s.cell, s.idCell)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
      <Table.Cell className={clsx(s.cell, s.userNameCell)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
      <Table.Cell className={clsx(s.cell, s.profileCell)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
      <Table.Cell className={clsx(s.cell, s.dateCell)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
      <Table.Cell className={clsx(s.cell, s.modalsCell)}>
        <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
      </Table.Cell>
    </Table.Row>
  ))
}
