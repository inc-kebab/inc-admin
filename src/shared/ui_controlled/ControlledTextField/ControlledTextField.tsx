import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@tazalov/kebab-ui/components'

type Props<T extends FieldValues> = Omit<TextFieldProps, 'id' | 'onChange' | 'value'> &
  UseControllerProps<T>

export const ControlledTextField = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <TextField id={name} onChange={onChange} value={value} {...rest} {...field} />
}
