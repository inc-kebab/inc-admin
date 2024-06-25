import { useMemo, useState } from 'react'

import { BanUserParams } from '@/entities/user'
import { useTranslation } from '@/shared/hooks'
import { BanStatus } from '@/shared/types/apollo'
import { ConfirmDialog } from '@/shared/ui/ConfirmDialog'
import { Select, TextArea } from '@tazalov/kebab-ui/components'

import s from './ConfirmBanDialog.module.scss'

type Props = {
  disabled?: boolean
  name: null | string
  onBan?: (value: BanUserParams) => void
  onDelete?: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
  reason: string
  setReason: (reason: string) => void
}

export const ConfirmBanDialog = ({
  name,
  onBan,
  onDelete,
  onOpenChange,
  reason,
  setReason,
  ...rest
}: Props) => {
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

  const handleBan = () => {
    onBan?.({ reason, status: BanStatus.Banned })
  }

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open)
    !open && setReason('')
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
        onValueChange={value => setReason(value)}
        options={SELECT_OPTIONS}
        placeholder={t.dialog.banUser.reasonForBan}
        portal={false}
        value={reason}
      />
      {reason === 'anotherReason' && (
        <TextArea
          className={s.textArea}
          label={t.dialog.banUser.reasonForBan}
          onChange={e => setReason(e.currentTarget.value)}
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
