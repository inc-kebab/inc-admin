import { usePaginationUsersList } from '@/entities/user'
import { ConfirmBanDialog, useBanUser } from '@/feature/ban-user'
import { ConfirmDeleteDialog, useDeleteUser } from '@/feature/delete-user'
import { useSearchUsers } from '@/feature/search-users'
import { UsersList, useSortUsers } from '@/feature/sort-users'
import { useGetUsersQuery } from '@/shared/api/queries/get-users/get-users.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useTranslation } from '@/shared/hooks'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { Pagination, TextField } from '@tazalov/kebab-ui/components'

import s from './index.module.scss'

const paginationOptions = [
  { name: '3', value: '3' },
  { name: '5', value: '5' },
  { name: '8', value: '8' },
]

const UsersListPage: Page = () => {
  const { t } = useTranslation()
  const { handleChangePage, handleChangePageSize, pageNumber, pageSize } = usePaginationUsersList()

  const { debouncedSearchTerm, handleSearch, searchTerm } = useSearchUsers(handleChangePage)
  const { handleChangeSort, sort } = useSortUsers(handleChangePage)

  const { confirm, handleChangeUserForDelete, handleDeleteUser, loadingDelete, userForDelete } =
    useDeleteUser()

  const {
    banConfirm,
    handleBanUser,
    handleChangeUserForBan,
    loadingBan,
    reason,
    setReason,
    userForBan,
  } = useBanUser()

  const { data, loading, previousData } = useGetUsersQuery({
    variables: {
      pageNumber,
      pageSize,
      searchTerm: debouncedSearchTerm,
      sortBy: sort ? sort.key : undefined,
      sortDirection: sort ? sort.direction : undefined,
    },
  })

  const totalCount =
    (data?.getUsers?.pagination?.totalCount || previousData?.getUsers?.pagination?.totalCount) ?? 0

  return (
    <div className={s.container}>
      <div className={s.filters}>
        <TextField
          className={s.search}
          onValueChange={handleSearch}
          placeholder="Search"
          type="search"
          value={searchTerm}
        />
      </div>
      <UsersList
        isLoading={loading}
        list={data?.getUsers?.users}
        onChangeSort={handleChangeSort}
        onChangeUserForBan={handleChangeUserForBan}
        onChangeUserForDelete={handleChangeUserForDelete}
        pageSize={pageSize}
        sort={sort}
      />
      <Pagination
        currentPage={pageNumber}
        onChangePage={handleChangePage}
        onValueChange={handleChangePageSize}
        options={paginationOptions}
        pageSize={pageSize}
        totalCount={totalCount}
        translates={{ onPage: t.label.onPage, show: t.label.show }}
        value={String(pageSize)}
      />
      <ConfirmDeleteDialog
        disabled={loadingDelete}
        name={userForDelete?.name || 'Not specified'}
        onDelete={handleDeleteUser}
        onOpenChange={confirm.handleChangeOpenDelete}
        open={confirm.open}
      />
      <ConfirmBanDialog
        disabled={loadingBan}
        name={userForBan?.name || 'Not specified'}
        onBan={handleBanUser}
        onOpenChange={banConfirm.handleChangeOpenBan}
        open={banConfirm.open}
        reason={reason ?? ''}
        setReason={setReason}
      />
    </div>
  )
}

UsersListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(UsersListPage)
