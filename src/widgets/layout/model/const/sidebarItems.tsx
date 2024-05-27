import { UrlObject } from 'url'

import { LocaleType } from '@/../locales'
import { SidebarRoutes } from '@/shared/types/layout'
import {
  CreditCardFill,
  CreditCardOutline,
  ImageFill,
  ImageOutline,
  PersonFill,
  PersonOutline,
  Trending,
} from '@tazalov/kebab-ui/icons'
import { SidebarEl } from '@tazalov/kebab-ui/layout'

type CustomSidebarElement = {
  href: UrlObject | string
} & SidebarEl

export const sidebarItems = (t: LocaleType): CustomSidebarElement[] => {
  return [
    {
      activeIcon: <PersonFill />,
      href: SidebarRoutes.USERS_LIST,
      icon: <PersonOutline />,
      title: t.sideBar.usersList,
    },
    { href: SidebarRoutes.STATISTICS, icon: <Trending />, title: t.sideBar.statistics },
    {
      activeIcon: <CreditCardFill />,
      href: SidebarRoutes.PAYMENTS_LIST,
      icon: <CreditCardOutline />,
      title: t.sideBar.paymentsList,
    },
    {
      activeIcon: <ImageFill />,
      href: SidebarRoutes.POSTS_LIST,
      icon: <ImageOutline />,
      title: t.sideBar.postsList,
    },
  ]
}
