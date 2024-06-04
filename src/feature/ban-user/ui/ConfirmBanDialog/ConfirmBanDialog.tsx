import { useMemo } from 'react'

import { useTranslation } from '@/shared/hooks'
import { BanStatus } from '@/shared/types/apollo'
import { ConfirmDialog } from '@/shared/ui/ConfirmDialog'
import { Select } from '@tazalov/kebab-ui/components'

import s from './ConfirmBanDialog.module.scss'

type Props = {
  disabled?: boolean
  name: null | string
  onBan?: (status: BanStatus) => void
  onDelete?: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
  reason: string
  setReason: (reason: string) => void
}

export const ConfirmBanDialog = ({ name, onBan, onDelete, reason, setReason, ...rest }: Props) => {
  const { t } = useTranslation()

  const SELECT_OPTIONS = useMemo(
    () => [
      {
        name: t.dialog.banUser.badBehavior,
        value: 'badBehavior',
      },
      {
        name: t.dialog.banUser.advertising,
        value: 'advertising',
      },
      {
        name: t.dialog.banUser.anotherReason,
        value: 'anotherReason',
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
        onValueChange={value => setReason(value)}
        options={SELECT_OPTIONS}
        placeholder={t.dialog.banUser.reasonForBan}
        portal={false}
        value={reason}
      />
    </>
  )

  return (
    <ConfirmDialog
      content={textContent}
      title={t.dialog.banUser.title}
      {...rest}
      confirmCallback={onBan}
    />
  )
}
