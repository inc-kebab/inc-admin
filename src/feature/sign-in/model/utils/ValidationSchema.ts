import { LocaleType } from '@/../locales'
import { z } from 'zod'

export const signInValidationSchema = (t: LocaleType) =>
  z.object({
    login: z
      .string()
      .trim()
      .min(4, t.validation.minLength(4))
      .max(20, t.validation.maxLength(20))
      .regex(/^[A-Za-z0-9]+$/, t.validation.loginVerification)
      .default(''),
    password: z
      .string()
      .trim()
      .min(6, t.validation.minLength(6))
      .max(20, t.validation.maxLength(20))
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, t.validation.passwordVerification)
      .default(''),
  })

export type SignInFormValues = z.infer<ReturnType<typeof signInValidationSchema>>
