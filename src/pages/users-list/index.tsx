import { useMemo, useState } from 'react'

import { useGetUsersQuery } from '@/shared/api/queries/get-users/get-useres.generated'
import { MenuIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { BanDialog } from '@/widgets/get-users/ui/BanDialog/BanDialog'
import { DeleteUserDialog } from '@/widgets/get-users/ui/DeleteUserDialog/DeleteUserDialog'
import { MoreInformationDialog } from '@/widgets/get-users/ui/MoreInformationDialog.tsx/MoreInformationDialog'
import { Button, Dropdown, Pagination, Select, Table, TextField } from '@tazalov/kebab-ui-kit'
import clsx from 'clsx'

import s from './UsersList.module.scss'

const paginationOptions = [
  { name: '3', value: '3' },
  { name: '5', value: '5' },
  { name: '8', value: '8' },
]

const UsersList = () => {
  const { t } = useTranslation()
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(8)

  const handleChangePageNumber = (page: number) => {
    setPageNumber(page)
  }

  const handleChangePageSize = (size: string) => {
    setPageSize(Number(size))
    setPageNumber(1)
  }

  const defaultOptions = useMemo(
    () => [
      { name: t.notSelected, value: 'Not selected' },
      { name: t.blocked, value: 'Blocked' },
      { name: t.notBlocked, value: 'Not blocked' },
    ],
    []
  )

  const { data } = useGetUsersQuery({
    fetchPolicy: 'no-cache',
    variables: { pageNumber, pageSize },
  })

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <TextField className={s.textField} placeholder={t.search} type="search" />
        <Select className={s.select} defaultValue="Not selected" options={defaultOptions} />
      </div>
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
        <Table.Body>
          {data?.getUsers?.users &&
            data?.getUsers?.users.map(user => (
              <Table.Row className={s.row} key={user.id}>
                <Table.Cell className={s.cell} data-label="sssdf">
                  {user.id}
                </Table.Cell>
                <Table.Cell className={s.cell} data-label="sddf">
                  {user.username}
                </Table.Cell>
                <Table.Cell className={s.cell} data-label="sdddf">
                  {user.profile?.firstname ?? 'profile'}
                </Table.Cell>
                <Table.Cell className={s.cell} data-label="t.pages.myPayments.paymentType">
                  {user.createdAt}
                </Table.Cell>
                <Table.Cell className={s.cell} data-label="t.pages.myPayments.paymentType">
                  <Dropdown.Menu
                    align="end"
                    className={s.viewport}
                    modal={false}
                    sideOffset={2}
                    trigger={
                      <Button
                        className={s.dropdownTrigger}
                        startIcon={<MenuIcon className={clsx(s.menuIcon)} />}
                        variant="text"
                      />
                    }
                  >
                    <DeleteUserDialog />
                    <BanDialog />
                    <MoreInformationDialog />
                    <Dropdown.Item>
                      <MoreInformationDialog />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>

      <Pagination
        className={s.pagination}
        currentPage={pageNumber}
        onChangePage={handleChangePageNumber}
        onValueChange={handleChangePageSize}
        options={paginationOptions}
        pageSize={pageSize}
        totalCount={data?.getUsers?.pagination?.totalCount ?? 0}
        value={String(pageSize)}
      />
    </div>
  )
}

export default UsersList
