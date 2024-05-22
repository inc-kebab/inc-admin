import type { AppProps } from 'next/app'

import { useLoader } from '@/shared/hooks/useLoader'
import { ApolloClientProvider } from '@/shared/providers/apollo'
import { AuthProvider } from '@/shared/providers/auth'
import { Inter } from 'next/font/google'

import 'react-toastify/dist/ReactToastify.css'
import '@tazalov/kebab-ui-kit/dist/style.css'
import '@/app/styles/nprogress.scss'
import '@/app/styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  useLoader()

  return (
    <ApolloClientProvider>
      <AuthProvider>
        <Component className={inter.className} {...pageProps} />
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
