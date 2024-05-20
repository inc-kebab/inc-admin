import { z } from 'zod'

export const signInValidationSchema = z.object({
  login: z
    .string()
    .trim()
    .min(4, 'Minimum 4 characters')
    .max(20, 'Maximum 20 characters')
    .regex(/^[A-Za-z0-9]+$/, '')
    .default(''),
  password: z
    .string()
    .trim()
    .min(6, 'Minimum 6 characters')
    .max(20, 'Maximum 20 characters')
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      'Password must consist of Latin letters and contain at least one number'
    )
    .default(''),
})

export type SignInFormValues = z.infer<typeof signInValidationSchema>
