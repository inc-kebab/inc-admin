import { BackIcon } from '@/shared/assets'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Page } from '@/shared/types/layout'
import { AuthLayout } from '@/widgets/layout'
import { Button, Typography } from '@tazalov/kebab-ui/components'
import Image from 'next/image'
import Link from 'next/link'

import s from './UsersInfoPage.module.scss'

const UsersInfoPage: Page = () => {
  const { t } = useTranslation()

  return (
    <div className={s.container}>
      <Link className={s.link} href="/">
        <BackIcon />
        {t.back}
      </Link>
      <div>
        <Image alt="avatar" src="" />
        <div>
          <Typography variant="h1">sfsdf</Typography>
          <Typography>sfsdf</Typography>
        </div>
      </div>
    </div>
  )
}

UsersInfoPage.getLayout = page => {
  return <AuthLayout>{page}</AuthLayout>
}
export default WithAuth(UsersInfoPage)
