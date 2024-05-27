import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'

export enum SidebarRoutes {
  PAYMENTS_LIST = '/payments-list',
  POSTS_LIST = '/posts-list',
  STATISTICS = '/statistics',
  USERS_LIST = '/',
}

export type Page<P = {}, IP = P> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P, IP>
