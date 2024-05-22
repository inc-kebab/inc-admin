import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useState } from 'react'

import { UsersList } from '@/entities/user'
import { useGetUsersQuery } from '@/shared/api/queries/get-users/get-users.generated'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { Pagination } from '@tazalov/kebab-ui-kit'

import s from './index.module.scss'

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
    fetchPolicy: 'no-cache',
    variables: { pageNumber, pageSize },
  })

  return (
    <div className={s.container}>
      {loading && <div className={s.loading}>Loading...</div>}
      {data?.getUsers?.users && (
        <>
          <UsersList list={data.getUsers.users} />
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
      )}
    </div>
  )
}

UsersListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(UsersListPage)
