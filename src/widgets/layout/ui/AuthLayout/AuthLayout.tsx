import { PropsWithChildren } from 'react'

import { clsx } from '@tazalov/kebab-ui'
import Head from 'next/head'

import s from './AuthLayout.module.scss'

import { Header } from '../Header/Header'

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />
      <div className={clsx(s.wrapper)}>
        <main className={s.main}>{children}</main>
      </div>
    </>
  )
}
