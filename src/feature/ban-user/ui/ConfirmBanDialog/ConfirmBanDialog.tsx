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
}

export const ConfirmBanDialog = ({ name, onBan, onDelete, onOpenChange, ...rest }: Props) => {
  const { t } = useTranslation()
  const [reason, setReason] = useState('')

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

  const handleOnBan = (status: BanStatus) => {
    onBan?.({ reason, status })
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
      content={textContent}
      onOpenChange={handleOpenChange}
      title={t.dialog.banUser.title}
      {...rest}
      confirmCallback={handleOnBan}
    />
  )
}
