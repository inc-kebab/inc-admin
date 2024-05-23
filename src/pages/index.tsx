import { useState } from 'react'

import { UsersList } from '@/entities/user'
import { useGetUsersQuery } from '@/shared/api/queries/get-users/get-users.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { Pagination } from '@tazalov/kebab-ui/components'

const paginationOptions = [
  { name: '3', value: '3' },
  { name: '5', value: '5' },
  { name: '8', value: '8' },
]

const UsersListPage: Page = () => {
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

  const { data, loading } = useGetUsersQuery({
    variables: { pageNumber, pageSize },
  })

  return (
    <>
      <UsersList isLoading={loading} list={data?.getUsers?.users} pageSize={pageSize} />
      <Pagination
        currentPage={pageNumber}
        onChangePage={handleChangePageNumber}
        onValueChange={handleChangePageSize}
        options={paginationOptions}
        pageSize={pageSize}
        totalCount={data?.getUsers?.pagination?.totalCount ?? 0}
        value={String(pageSize)}
      />
    </>
  )
}

UsersListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(UsersListPage)
