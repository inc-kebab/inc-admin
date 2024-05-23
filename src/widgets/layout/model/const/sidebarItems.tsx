import { UrlObject } from 'url'

import {
  CreditCard,
  CreditCardOutline,
  ImageFill,
  ImageOutline,
  Person,
  PersonOutline,
  Trending,
} from '@/shared/assets/icons'
import { SidebarRoutes } from '@/shared/types/layout'
import { SidebarEl } from '@tazalov/kebab-ui/layout'

type CustomSidebarElement = {
  href: UrlObject | string
} & SidebarEl

export const sidebarItems: CustomSidebarElement[] = [
  {
    activeIcon: <Person />,
    href: SidebarRoutes.USERS_LIST,
    icon: <PersonOutline />,
    title: 'Users list',
  },
  { href: SidebarRoutes.STATISTICS, icon: <Trending />, title: 'Statistics' },
  {
    activeIcon: <CreditCard />,
    href: SidebarRoutes.PAYMENTS_LIST,
    icon: <CreditCardOutline />,
    title: 'Payments list',
  },
  {
    activeIcon: <ImageFill />,
    href: SidebarRoutes.POSTS_LIST,
    icon: <ImageOutline />,
    title: 'Posts list',
  },
]
