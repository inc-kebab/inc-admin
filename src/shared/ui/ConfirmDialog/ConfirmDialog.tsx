import { ReactNode } from 'react'

import { useTranslation } from '@/shared/hooks'
import { BanStatus } from '@/shared/types/apollo'
import { clsx } from '@tazalov/kebab-ui'
import { Button, Dialog, DialogClose } from '@tazalov/kebab-ui/components'

import s from './ConfirmDialog.module.scss'

type Props = {
  className?: string
  confirmCallback?: () => void
  content: ReactNode
  customActions?: ReactNode
  disabled?: boolean
  onOpenChange: (open: boolean) => void
  open: boolean
  title?: string
  trigger?: ReactNode
}

export const ConfirmDialog = ({
  className,
  confirmCallback,
  content,
  customActions,
  disabled,
  onOpenChange,
  open,
  title,
  trigger,
}: Props) => {
  const { t } = useTranslation()

  return (
    <Dialog
      className={clsx(s.root, className)}
      onOpenChange={onOpenChange}
      open={open}
      title={title}
      trigger={trigger}
    >
      <div className={s.wrapper}>
        <div className={s.content}>{content}</div>
        {customActions || (
          <div className={s.actions}>
            <Button
              className={s.btn}
              disabled={disabled}
              onClick={confirmCallback}
              variant="outline"
            >
              {t.button.yes}
            </Button>
            <DialogClose>
              <Button className={s.btn} disabled={disabled}>
                {t.button.no}
              </Button>
            </DialogClose>
          </div>
        )}
      </div>
    </Dialog>
  )
}
