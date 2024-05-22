import { useContext } from 'react'

import { SignInForm, SignInFormValues } from '@/feature/SignIn'
import { useSignInMutation } from '@/shared/api/queries/sign-in/signIn.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { AuthContext } from '@/shared/providers/auth'

import s from './index.module.scss'

const SignIn = () => {
  const { setIsAuth } = useContext(AuthContext)

  const [signIn, { loading }] = useSignInMutation()

  const handleSubmit = (form: SignInFormValues) => {
    signIn({ variables: form }).then(res => {
      if (res.data) {
        setIsAuth(res.data.checkAdmin)
      }
    })
  }

  return (
    <div className={s.form}>
      <SignInForm disabled={loading} onSubmit={handleSubmit} />
    </div>
  )
}

export default WithAuth(SignIn)
