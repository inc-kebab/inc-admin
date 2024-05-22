import { Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import { UseFormRef } from '@/shared/types/form'
import { ControlledTextField } from '@/shared/ui_controlled/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, Typography } from '@tazalov/kebab-ui-kit'

import s from './SignInForm.module.scss'

import { SignInFormValues, signInValidationSchema } from '../model/utils/ValidationSchema'

type Props = {
  disabled?: boolean
  onSubmit: (data: SignInFormValues) => void
}

export const SignInForm = forwardRef(
  ({ disabled, onSubmit }: Props, ref: Ref<UseFormRef<SignInFormValues>>) => {
    const {
      control,
      formState: { errors, isValid },
      handleSubmit,
      reset,
      setError,
    } = useForm<SignInFormValues>({
      defaultValues: {
        login: '',
        password: '',
      },
      mode: 'onTouched',
      resolver: zodResolver(signInValidationSchema),
    })

    useImperativeHandle(ref, () => ({ reset, setError }))

    return (
      <Card asComponent="form" className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography asComponent="h1" className={s.title} textAlign="center" variant="h1">
          Sign In
        </Typography>
        <ControlledTextField
          autoComplete="login"
          className={s.input}
          control={control}
          disabled={disabled}
          error={errors.login?.message}
          label="Login"
          name="login"
          placeholder="Login"
          rules={{ required: true }}
        />
        <ControlledTextField
          autoComplete="password"
          className={s.input}
          control={control}
          disabled={disabled}
          error={errors.password?.message}
          label="Password"
          name="password"
          placeholder="Password"
          rules={{ required: true }}
          type="password"
        />
        <Button className={s.button} disabled={disabled || !isValid} fullWidth>
          Sign In
        </Button>
      </Card>
    )
  }
)
