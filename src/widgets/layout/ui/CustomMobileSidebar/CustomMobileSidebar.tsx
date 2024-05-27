import { useTranslation } from '@/shared/hooks'
import { clsx } from '@tazalov/kebab-ui'
import { MobileSidebar } from '@tazalov/kebab-ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from './CustomMobileSidebar.module.scss'

import { sidebarItems } from '../../model/const/sidebarItems'

type Props = {
  className?: string
}

export const CustomMobileSidebar = ({ className }: Props) => {
  const { t } = useTranslation()
  const pathname = usePathname()

  return (
    <MobileSidebar.Root className={clsx(s.sidebar, className)}>
      <MobileSidebar.List>
        {sidebarItems(t).map((el, i) => {
          const itemPath = typeof el.href === 'string' ? el.href : el.href.pathname

          const isActive = pathname === itemPath

          return (
            <MobileSidebar.Item key={`sidebar-item-${i}`}>
              <MobileSidebar.ItemContent
                asComponent={Link}
                href={el.href}
                isActive={isActive}
                item={el}
              />
            </MobileSidebar.Item>
          )
        })}
      </MobileSidebar.List>
    </MobileSidebar.Root>
  )
}
