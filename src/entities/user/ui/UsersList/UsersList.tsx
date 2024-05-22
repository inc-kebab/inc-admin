import { useTranslation } from '@/shared/hooks/useTranslation'
import { Table } from '@tazalov/kebab-ui-kit'
import { format } from 'date-fns'

import s from './UsersList.module.scss'

import { User } from '../../model/types'

type Props = {
  list: User[]
}

export const UsersList = ({ list }: Props) => {
  const { t } = useTranslation()

  return (
    <Table.Root className={s.table}>
      <Table.Head className={s.tableHead}>
        <Table.Row>
          <Table.TitleCell>{t.userID}</Table.TitleCell>
          <Table.TitleCell>{t.username}</Table.TitleCell>
          <Table.TitleCell>{t.profileLink}</Table.TitleCell>
          <Table.TitleCell>{t.date}</Table.TitleCell>
          <Table.TitleCell></Table.TitleCell>
        </Table.Row>
      </Table.Head>
      <Table.Body className={s.body}>
        {list.map(user => (
          <Table.Row className={s.row} key={user.id}>
            <Table.Cell className={s.cell} data-label={t.userID}>
              {user.id}
            </Table.Cell>
            <Table.Cell className={s.cell} data-label={t.username}>
              {user.fullName || `Not specified`}
            </Table.Cell>
            <Table.Cell className={s.cell} data-label={t.profileLink}>
              {user.username}
            </Table.Cell>
            <Table.Cell className={s.cell} data-label={t.date}>
              {format(new Date(+user.createdAt), 'dd.MM.yyyy')}
            </Table.Cell>
            <Table.Cell className={s.cell}>modals</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
