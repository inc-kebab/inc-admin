import { LangSwitcher } from '@/widgets/lang-switcher'
import { Button, Typography } from '@tazalov/kebab-ui/components'
import { Header as KebabHeader } from '@tazalov/kebab-ui/layout'
import Link from 'next/link'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <KebabHeader className={s.header}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography asComponent={Link} href="/">
          <Typography asComponent="span" variant="large">
            Inctagram
          </Typography>
          <Typography asComponent="span" variant="small">
            Super
          </Typography>
          <Typography asComponent="span" variant="smallSemiBold">
            Admin
          </Typography>
        </Typography>
        <LangSwitcher />
      </div>
    </KebabHeader>
  )
}
