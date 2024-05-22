import type { AppProps } from 'next/app'

import { useLoader } from '@/shared/hooks/useLoader'
import AuthProvider from '@/shared/providers/Auth'
import { ApolloClientProvider } from '@/shared/providers/apollo'
import { Page } from '@/shared/types/layout'
import { Inter } from 'next/font/google'

import '@/app/styles/index.scss'
import '@/app/styles/nprogress.scss'
import '@tazalov/kebab-ui-kit/dist/style.css'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  useLoader()

  const Page = Component as Page

  const getLayout = Page.getLayout ?? (page => page)

  return (
    <ApolloClientProvider>
      <AuthProvider>
        {getLayout(<Component className={inter.className} {...pageProps} />)}
      </AuthProvider>
    </ApolloClientProvider>
  )
}

export default App

/*
* To fix
 import 'react-toastify/dist/ReactToastify.css'
 import '@tazalov/kebab-ui-kit/dist/style.css'
 import '@/app/styles/nprogress.scss'
 import '@/app/styles/index.scss'
 */
