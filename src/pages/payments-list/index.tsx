import { usePaginationUsersList } from '@/entities/user'
import { AllPaymentsList } from '@/feature/payments/ui/AllPaymentsList'
import { useSearchUsers } from '@/feature/search-users'
import { useSortUsers } from '@/feature/sort-users'
import { useGetAllPaymentsQuery } from '@/shared/api/queries/get-all-payments/get-all-payments.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useTranslation } from '@/shared/hooks'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { Checkbox, Pagination, TextField } from '@tazalov/kebab-ui/components'

import s from './Payments.module.scss'

const paginationOptions = [
  { name: '3', value: '3' },
  { name: '5', value: '5' },
  { name: '8', value: '8' },
]
const PaymentsListPage: Page = () => {
  const { t } = useTranslation()
  const { handleChangePage, handleChangePageSize, pageNumber, pageSize } = usePaginationUsersList()
  const { handleChangeIsAutoUpdate, handleChangeSort, isAutoUpdate, sort } =
    useSortUsers(handleChangePage)
  const { debouncedSearchTerm, handleSearch, searchTerm } = useSearchUsers(handleChangePage)

  const {
    data,
    loading: isLoading,
    previousData,
  } = useGetAllPaymentsQuery({
    variables: {
      // isAutoUpdate,
      pageNumber,
      pageSize,
      searchTerm: debouncedSearchTerm,
      sortBy: sort ? sort.key : undefined,
      sortDirection: sort ? sort.direction : undefined,
    },
  })
  const totalCount =
    (data?.getAllPayments?.totalCount || previousData?.getAllPayments?.totalCount) ?? 0

  return (
    <>
      <div className={s.position}>
        <div>
          <Checkbox
            checked={isAutoUpdate}
            label={t.table.autoubdate}
            onCheckedChange={handleChangeIsAutoUpdate}
          />
        </div>
      </div>
      <TextField
        className={s.search}
        onValueChange={handleSearch}
        placeholder="Search"
        type="search"
        value={searchTerm}
      />
      <AllPaymentsList
        isLoading={isLoading}
        list={data?.getAllPayments.items}
        onChangeSort={handleChangeSort}
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
    </>
  )
}

PaymentsListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(PaymentsListPage)
