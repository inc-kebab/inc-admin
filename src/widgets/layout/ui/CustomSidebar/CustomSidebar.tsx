import { useTranslation } from '@/shared/hooks'
import { clsx } from '@tazalov/kebab-ui'
import { Sidebar } from '@tazalov/kebab-ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from './CustomSidebar.module.scss'

import { sidebarItems } from '../../model/const/sidebarItems'

type Props = {
  className?: string
}

export const CustomSidebar = ({ className }: Props) => {
  const { t } = useTranslation()
  const pathname = usePathname()

  return (
    <Sidebar.Root className={clsx(s.sidebar, className)}>
      <Sidebar.List>
        {sidebarItems(t).map((el, i) => {
          const itemPath = typeof el.href === 'string' ? el.href : el.href.pathname

          const isActive = pathname === itemPath

          return (
            <Sidebar.Item key={`sidebar-item-${i}`}>
              <Sidebar.ItemContent
                asComponent={Link}
                href={el.href}
                isActive={isActive}
                item={el}
              />
            </Sidebar.Item>
          )
        })}
      </Sidebar.List>
    </Sidebar.Root>
  )
}
