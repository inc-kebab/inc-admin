import type { AppProps } from 'next/app'

import { useLoader } from '@/shared/hooks/useLoader'

import 'react-toastify/dist/ReactToastify.css'
import '@/app/styles/nprogress.scss'
import '@/app/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  useLoader()

  return <Component {...pageProps} />
}
