import type { AppProps } from 'next/app'

import { useLoader } from '@/shared/hooks/useLoader'
import { ApolloClientProvider } from '@/shared/providers/apollo'

import 'react-toastify/dist/ReactToastify.css'
import '@/app/styles/nprogress.scss'
import '@/app/styles/index.scss'
import '@tazalov/kebab-ui-kit/dist/style.css'

export default function App({ Component, pageProps }: AppProps) {
  useLoader()

  return (
    <ApolloClientProvider>
      <Component {...pageProps} />
    </ApolloClientProvider>
  )
}
