import type { AppProps } from 'next/app'

import { useLoader } from '@/shared/hooks/useLoader'
import { ApolloClientProvider } from '@/shared/providers/apollo'
import { Page } from '@/shared/types/layout'
import { Inter } from 'next/font/google'

import 'react-toastify/dist/ReactToastify.css'
import '@tazalov/kebab-ui-kit/dist/style.css'
import '@/app/styles/nprogress.scss'
import '@/app/styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  useLoader()

  const Page = Component as Page

  const getLayout = Page.getLayout ?? (page => page)

  return (
    <ApolloClientProvider>
      {getLayout(<Component className={inter.className} {...pageProps} />)}
    </ApolloClientProvider>
  )
}

/*
* To fix
 import 'react-toastify/dist/ReactToastify.css'
 import '@tazalov/kebab-ui-kit/dist/style.css'
 import '@/app/styles/nprogress.scss'
 import '@/app/styles/index.scss'
 */
