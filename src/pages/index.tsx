import { useState } from 'react'

import { UsersList } from '@/entities/user'
import { useSearchUsers } from '@/feature/search-users'
import { useGetUsersQuery } from '@/shared/api/queries/get-users/get-users.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
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
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(8)

  const { handleSearch, searchTerm } = useSearchUsers(setPageNumber)

  const handleChangePageNumber = (page: number) => {
    setPageNumber(page)
  }

  const handleChangePageSize = (size: string) => {
    setPageSize(Number(size))
    setPageNumber(1)
  }

  const { data, loading, previousData } = useGetUsersQuery({
    variables: { pageNumber, pageSize, searchTerm },
  })

  const totalCount =
    (data?.getUsers?.pagination?.totalCount || previousData?.getUsers?.pagination?.totalCount) ?? 0

  return (
    <div className={s.container}>
      <div className={s.filters}>
        <TextField
          className={s.search}
          onChange={handleSearch}
          placeholder="Search"
          type="search"
          value={searchTerm}
        />
      </div>
      <UsersList isLoading={loading} list={data?.getUsers?.users} pageSize={pageSize} />
      <Pagination
        currentPage={pageNumber}
        onChangePage={handleChangePageNumber}
        onValueChange={handleChangePageSize}
        options={paginationOptions}
        pageSize={pageSize}
        totalCount={totalCount}
        value={String(pageSize)}
      />
    </div>
  )
}

UsersListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(UsersListPage)
