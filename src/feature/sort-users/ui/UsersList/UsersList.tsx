import { ActionsMenu, DialogUserData } from '@/entities/user'
import { getShortStr } from '@/shared/helpers/getShortStr'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { BanStatus } from '@/shared/types/apollo'
import { clsx } from '@tazalov/kebab-ui'
import { Table } from '@tazalov/kebab-ui/components'
import { Block } from '@tazalov/kebab-ui/icons'
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
  onChangeUserForDelete: (data: DialogUserData) => void
  onChangeUserStatus: (data: DialogUserData) => void
  pageSize: number
  sort: Sort | null
}

export const UsersList = ({
  isLoading,
  list,
  onChangeSort,
  onChangeUserForDelete,
  onChangeUserStatus,
  pageSize,
  sort,
}: Props) => {
  const { t } = useTranslation()

  const handleChangeUserForDelete = (data: DialogUserData) => () => {
    onChangeUserForDelete(data)
  }

  return (
    <Table.Root className={s.table}>
      <Table.Head className={s.tableHead}>
        <SortableHead columns={getColumnsForSort(t)} onChangeSort={onChangeSort} sort={sort} />
      </Table.Head>
      <Table.Body className={s.body}>
        {isLoading ? (
          <UsersListSkeleton countCell={pageSize} />
        ) : (
          list?.map(user => {
            const isBlocked = user.status === BanStatus.Banned

            const dialogUserData = {
              id: user.id,
              name: user.fullName || `"${t.page.usersList.notSpecified}"`,
              status: user.status,
            }

            return (
              <Table.Row className={s.row} key={user.id}>
                <Table.Cell className={clsx(s.cell, s.idCell)} data-label={t.table.userID}>
                  <div className={s.idWrapper}>
                    {isBlocked && <Block className={s.idIcon} />}
                    {user.id}
                  </div>
                </Table.Cell>
                <Table.Cell
                  className={clsx(s.cell, s.userNameCell)}
                  data-label={t.table.username}
                  title={user.fullName || `Not specified`}
                >
                  {user.fullName ? getShortStr(user.fullName) : t.page.usersList.notSpecified}
                </Table.Cell>
                <Table.Cell
                  className={clsx(s.cell, s.profileCell)}
                  data-label={t.table.profileLink}
                  title={user.username || `Not specified`}
                >
                  {user.username ? getShortStr(user.username, 18) : `Not specified`}
                </Table.Cell>
                <Table.Cell className={clsx(s.cell, s.dateCell)} data-label={t.table.date}>
                  {format(new Date(+user.createdAt), 'dd.MM.yyyy')}
                </Table.Cell>
                <Table.Cell className={clsx(s.cell, s.modalsCell)}>
                  <ActionsMenu
                    id={user.id}
                    isBlocked={isBlocked}
                    onChangeStatus={() => onChangeUserStatus(dialogUserData)}
                    onDelete={handleChangeUserForDelete(dialogUserData)}
                  />
                </Table.Cell>
              </Table.Row>
            )
          })
        )}
      </Table.Body>
    </Table.Root>
  )
}
