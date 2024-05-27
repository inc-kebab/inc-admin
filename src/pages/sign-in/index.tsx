import { useContext } from 'react'
import { toast } from 'react-toastify'

import { SignInForm, SignInFormValues } from '@/feature/sign-in'
import { useSignInMutation } from '@/shared/api/queries/sign-in/signIn.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { AuthContext } from '@/shared/providers/auth'
import { Page } from '@/shared/types/layout'
import { AuthLayout } from '@/widgets/layout'

const SignIn: Page = () => {
  const { setIsAuth } = useContext(AuthContext)

  const [signIn, { loading }] = useSignInMutation()

  const handleSubmit = (form: SignInFormValues) => {
    signIn({ variables: form }).then(res => {
      if (res.data) {
        setIsAuth(res.data.checkAdmin)

        !res.data.checkAdmin && toast.error('Invalid login or password')
      }
    })
  }

  return <SignInForm disabled={loading} onSubmit={handleSubmit} />
}

SignIn.getLayout = page => {
  return <AuthLayout>{page}</AuthLayout>
}

export default WithAuth(SignIn)
