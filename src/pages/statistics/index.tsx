import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'

const StatisticsPage: Page = () => {
  return <div>StatisticsPage</div>
}

StatisticsPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(StatisticsPage)
