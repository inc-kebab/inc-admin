import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'

export const PaymentsListPage: Page = () => {
  return <div>PaymentsListPage</div>
}

PaymentsListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default PaymentsListPage
