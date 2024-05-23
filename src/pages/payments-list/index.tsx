import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'

const PaymentsListPage: Page = () => {
  return <div>PaymentsListPage</div>
}

PaymentsListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(PaymentsListPage)
