import { SignInFormValues } from '@/feature/SignIn/model/utils/ValidationSchema'
import { SignInForm } from '@/feature/SignIn/ui/SignInForm'
import { useAuthMutation } from '@/shared/api/queries/auth.generated'
import { Header, Typography } from '@tazalov/kebab-ui-kit'
import Head from 'next/head'
import Link from 'next/link'

const SignIn = () => {
  const [signIn, { data, loading }] = useAuthMutation()

  const onSubmitHandler = (form: SignInFormValues) => {
    signIn({ variables: form })
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header>
        <Typography asComponent={Link} href="/">
          <Typography asComponent="span" variant="large">
            Inctagram
          </Typography>
          <Typography asComponent="span" variant="small">
            Super
          </Typography>
          <Typography asComponent="span" variant="smallSemiBold">
            Admin
          </Typography>
        </Typography>
      </Header>
      <div
        style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center' }}
      >
        <SignInForm onSubmit={onSubmitHandler} />
      </div>
    </>
  )
}

export default SignIn
