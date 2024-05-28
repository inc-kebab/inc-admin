import { useMemo } from 'react'

import { useTranslation } from '@/shared/hooks'
import { ConfirmDialog } from '@/shared/ui/ConfirmDialog'
import { Select } from '@tazalov/kebab-ui/components'

import s from './ConfirmBanDialog.module.scss'

type Props = {
  disabled?: boolean
  name: null | string
  onDelete: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const ConfirmBanDialog = ({ name, onDelete, ...rest }: Props) => {
  const { t } = useTranslation()

  const SELECT_OPTIONS = useMemo(
    () => [
      {
        name: t.dialog.banUser.badBehavior,
        value: 'a',
      },
      {
        name: t.dialog.banUser.advertising,
        value: 'b',
      },
      {
        name: t.dialog.banUser.anotherReason,
        value: 'c',
      },
    ],
    [t]
  )

  const textContent = (
    <>
      <p>
        {t.dialog.banUser.description}
        <b>{name}</b>?
      </p>

      <Select
        className={s.select}
        classNames={{ trigger: s.trigger, viewport: s.viewport }}
        onValueChange={() => {}}
        options={SELECT_OPTIONS}
        placeholder={t.dialog.banUser.reasonForBan}
        portal={false}
      />
    </>
  )

  return (
    <ConfirmDialog
      confirmCallback={onDelete}
      content={textContent}
      title={t.dialog.banUser.title}
      {...rest}
    />
  )
}
