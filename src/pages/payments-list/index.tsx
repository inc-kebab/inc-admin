import { usePaginationUsersList } from '@/entities/user'
import { useSearchUsers } from '@/feature/search-users'
import { useSortUsers } from '@/feature/sort-users'
import { getUserPaymentsColumns } from '@/feature/sort-users/model/utils/getColumnsForSort'
import { SortableHead } from '@/feature/sort-users/ui/SortableHead/SortableHead'
import { UsersListSkeleton } from '@/feature/sort-users/ui/UsersList/UsersListSkeleton'
import { useGetAllPaymentsQuery } from '@/shared/api/queries/get-all-payments/get-all-payments.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useTranslation } from '@/shared/hooks'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { clsx } from '@tazalov/kebab-ui'
import { Checkbox, Pagination, Table, TextField } from '@tazalov/kebab-ui/components'
import { format } from 'date-fns'

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
      isAutoUpdate,
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
      <Table.Root className={s.table}>
        <Table.Head className={s.tableHead}>
          <SortableHead
            columns={getUserPaymentsColumns(t)}
            onChangeSort={handleChangeSort}
            sort={sort}
          />
        </Table.Head>
        <Table.Body className={s.body}>
          {isLoading ? (
            <UsersListSkeleton countCell={data?.getAllPayments.items.length || 10} />
          ) : (
            data?.getAllPayments.items?.map(payment => (
              <Table.Row className={s.row} key={payment.userId}>
                <Table.Cell className={clsx(s.cell, s.idCell)} data-label={t.table.username}>
                  {payment.username}
                </Table.Cell>
                <Table.Cell
                  className={clsx(s.cell, s.idCell)}
                  data-label={t.table.endDateOfSubscription}
                >
                  {format(new Date(payment.dateOfPayments), 'dd.mm.yyyy')}
                </Table.Cell>
                <Table.Cell className={clsx(s.cell, s.idCell)} data-label={t.table.date}>
                  ${payment.price}
                </Table.Cell>
                <Table.Cell
                  className={clsx(s.cell, s.idCell)}
                  data-label={t.table.subscriptionType}
                >
                  {payment.subscriptionType}
                </Table.Cell>
                <Table.Cell className={clsx(s.cell, s.idCell)} data-label={t.table.paymentType}>
                  {payment.paymentType}
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table.Root>
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
