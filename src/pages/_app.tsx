import type { AppProps } from 'next/app'

import { useLoader } from '@/shared/hooks'
import { ApolloClientProvider } from '@/shared/providers/apollo'
import { AuthProvider } from '@/shared/providers/auth'
import { ToastProvider } from '@/widgets/toast'
import { Inter } from 'next/font/google'

import '@/app/styles/index.scss'
import '@/app/styles/nprogress.scss'
import '@tazalov/kebab-ui/dist/style.css'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  useLoader()

  return (
    <ApolloClientProvider>
      <AuthProvider>
        <Component className={inter.className} {...pageProps} />
        <ToastProvider />
      </AuthProvider>
    </ApolloClientProvider>
  )
}

export default App

/*
* To fix
 import 'react-toastify/dist/ReactToastify.css'
 import '@tazalov/kebab-ui/dist/style.css'
 import '@/app/styles/nprogress.scss'
 import '@/app/styles/index.scss'
 */
