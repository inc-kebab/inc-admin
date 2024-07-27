import { useMemo } from 'react'

import { BanUserParams } from '@/entities/user'
import { OptionsReason, Reason } from '@/entities/user/model/types'
import { useTranslation } from '@/shared/hooks'
import { BanStatus } from '@/shared/types/apollo'
import { ConfirmDialog } from '@/shared/ui/ConfirmDialog'
import { Select, TextArea } from '@tazalov/kebab-ui/components'

import s from './ConfirmBanDialog.module.scss'

type Props = {
  customReason: string
  disabled?: boolean
  name: null | string
  onBan?: (value: BanUserParams) => void
  onDelete?: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
  reason: Reason
  setCustomReason: (customReason: string) => void
  setReason: (reason: Reason) => void
}

export const ConfirmBanDialog = ({
  customReason,
  name,
  onBan,
  onDelete,
  onOpenChange,
  reason,
  setCustomReason,
  setReason,
  ...rest
}: Props) => {
  const { t } = useTranslation()

  const SELECT_OPTIONS: OptionsReason = useMemo(
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

  const handleBan = () => {
    onBan?.({ reason, status: BanStatus.Banned })
  }

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open)
    !open && setReason('')
    setCustomReason('')
  }

  const textContent = (
    <>
      <p>
        {t.dialog.banUser.description}
        <b>{name}</b>?
      </p>

      <Select
        className={s.select}
        classNames={{ trigger: s.trigger, viewport: s.viewport }}
        onValueChange={value => setReason(value as Reason)}
        options={SELECT_OPTIONS}
        placeholder={t.dialog.banUser.reasonForBan}
        portal={false}
        value={reason}
      />
      {reason === 'anotherReason' && (
        <TextArea
          className={s.textArea}
          label={t.dialog.banUser.reasonForBan}
          onChange={e => setCustomReason(e.currentTarget.value)}
          resize="none"
          value={customReason}
        />
      )}
    </>
  )

  return (
    <ConfirmDialog
      confirmCallback={handleBan}
      content={textContent}
      onOpenChange={handleOpenChange}
      title={t.dialog.banUser.title}
      {...rest}
    />
  )
}
