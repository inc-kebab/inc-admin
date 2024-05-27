import { useContext, useEffect } from 'react'

import { AuthContext } from '@/shared/providers/auth'
import { Page } from '@/shared/types/layout'
import { Loader } from '@tazalov/kebab-ui/components'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const WithAuth = (WrappedComponent: Page) => {
  function Component({ pageProps }: AppProps) {
    const router = useRouter()

    const { isAuth } = useContext(AuthContext)

    const getLayout = WrappedComponent.getLayout ?? (page => page)

    useEffect(() => {
      if (isAuth && router.pathname === '/sign-in') {
        router.push('/')
      } else if (!isAuth && router.pathname !== '/sign-in') {
        router.push('/sign-in')
      }
    }, [isAuth, router])

    if (!isAuth && router.pathname !== '/sign-in') {
      return <Loader fullHeight />
    }

    return getLayout(<WrappedComponent {...pageProps} />)
  }

  return Component
}

export default WithAuth
