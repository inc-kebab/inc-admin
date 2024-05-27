import { PaymentsList } from '@/entities/payment'
import { useGetPaymentsQuery } from '@/shared/api/queries/get-user-payments/get-user-payments.generated'
import { useTranslation } from '@/shared/hooks'
import { Pagination } from '@tazalov/kebab-ui/components'

import s from './Payments.module.scss'

import { usePaginationPayments } from '../../model/hooks/usePaginationPayments'

const paginationOptions = [
  { name: '3', value: '3' },
  { name: '5', value: '5' },
  { name: '8', value: '8' },
]

type Props = {
  id: string
}

export const Payments = ({ id }: Props) => {
  const { t } = useTranslation()

  const { handleChangePage, handleChangePageSize, pageNumber, pageSize } = usePaginationPayments()

  const { data, loading, previousData } = useGetPaymentsQuery({
    variables: { id: Number(id), pageNumber, pageSize },
  })

  const totalCount =
    (data?.getPaymentsOfUser?.totalCount || previousData?.getPaymentsOfUser?.totalCount) ?? 0

  return (
    <div className={s.list}>
      <PaymentsList isLoading={loading} list={data?.getPaymentsOfUser.items} pageSize={pageSize} />
      <Pagination
        currentPage={pageNumber}
        disabled={loading || data?.getPaymentsOfUser.items.length === 0}
        onChangePage={handleChangePage}
        onValueChange={handleChangePageSize}
        options={paginationOptions}
        pageSize={pageSize}
        totalCount={totalCount}
        translates={{ onPage: t.label.onPage, show: t.label.show }}
        value={String(pageSize)}
      />
    </div>
  )
}
