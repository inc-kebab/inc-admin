import { getShortStr } from '@/shared/helpers/getShortStr'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { clsx } from '@tazalov/kebab-ui'
import { Table } from '@tazalov/kebab-ui/components'
import { format } from 'date-fns'

import s from './UsersList.module.scss'

import { Sort, User } from '../../model/types'
import { getColumnsForSort } from '../../model/utils/getColumnsForSort'
import { SortableHead } from '../SortableHead/SortableHead'
import { UsersListSkeleton } from './UsersListSkeleton'

type Props = {
  isLoading?: boolean
  list?: User[] | null
  onChangeSort?: (sort: Sort | null) => void
  pageSize: number
  sort: Sort | null
}

export const UsersList = ({ isLoading, list, onChangeSort, pageSize, sort }: Props) => {
  const { t } = useTranslation()

  return (
    <Table.Root className={s.table}>
      <Table.Head className={s.tableHead}>
        <SortableHead columns={getColumnsForSort(t)} onChangeSort={onChangeSort} sort={sort} />
      </Table.Head>
      <Table.Body className={s.body}>
        {isLoading ? (
          <UsersListSkeleton countCell={pageSize} />
        ) : (
          list?.map(user => (
            <Table.Row className={s.row} key={user.id}>
              <Table.Cell className={clsx(s.cell, s.idCell)} data-label={t.userID}>
                {user.id}
              </Table.Cell>
              <Table.Cell
                className={clsx(s.cell, s.userNameCell)}
                data-label={t.username}
                title={user.fullName || `Not specified`}
              >
                {user.fullName ? getShortStr(user.fullName) : `Not specified`}
              </Table.Cell>
              <Table.Cell
                className={clsx(s.cell, s.profileCell)}
                data-label={t.profileLink}
                title={user.username || `Not specified`}
              >
                {user.username ? getShortStr(user.username, 18) : `Not specified`}
              </Table.Cell>
              <Table.Cell className={clsx(s.cell, s.dateCell)} data-label={t.date}>
                {format(new Date(+user.createdAt), 'dd.MM.yyyy')}
              </Table.Cell>
              <Table.Cell className={clsx(s.cell, s.modalsCell)}>mod</Table.Cell>
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table.Root>
  )
}
