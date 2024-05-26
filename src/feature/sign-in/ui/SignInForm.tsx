import { Ref, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'

import { useFormRevalidateWithLocale, useTranslation } from '@/shared/hooks'
import { UseFormRef } from '@/shared/types/form'
import { ControlledTextField } from '@/shared/ui_controlled/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, Typography } from '@tazalov/kebab-ui/components'

import s from './SignInForm.module.scss'

import { SignInFormValues, signInValidationSchema } from '../model/utils/ValidationSchema'

type Props = {
  disabled?: boolean
  onSubmit: (data: SignInFormValues) => void
}

export const SignInForm = forwardRef(
  ({ disabled, onSubmit }: Props, ref: Ref<UseFormRef<SignInFormValues>>) => {
    const { locale, t } = useTranslation()

    const {
      control,
      formState: { errors, isValid },
      getValues,
      handleSubmit,
      reset,
      setError,
      setValue,
    } = useForm<SignInFormValues>({
      defaultValues: {
        login: '',
        password: '',
      },
      mode: 'onTouched',
      resolver: zodResolver(signInValidationSchema(t)),
    })

    useImperativeHandle(ref, () => ({ reset, setError }))

    useFormRevalidateWithLocale({ errors, locale, setValue, values: getValues() })

    return (
      <Card asComponent="form" className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography asComponent="h1" className={s.title} textAlign="center" variant="h1">
          {t.title.signIn}
        </Typography>
        <ControlledTextField
          autoComplete="login"
          className={s.input}
          control={control}
          disabled={disabled}
          error={errors.login?.message}
          label={t.label.login}
          name="login"
          placeholder={t.placeholder.login}
          rules={{ required: true }}
        />
        <ControlledTextField
          autoComplete="password"
          className={s.input}
          control={control}
          disabled={disabled}
          error={errors.password?.message}
          label={t.label.password}
          name="password"
          placeholder={t.placeholder.password}
          rules={{ required: true }}
          type="password"
        />
        <Button className={s.button} disabled={disabled || !isValid} fullWidth>
          {t.button.signIn}
        </Button>
      </Card>
    )
  }
)
