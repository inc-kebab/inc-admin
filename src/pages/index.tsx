import { useGetUserQuery } from '@/shared/api/queries/users/users.generated'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data } = useGetUserQuery({ variables: { id: 4 } })

  console.log(data)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={inter.className}>ADMIN PANEL</main>
    </>
  )
}
