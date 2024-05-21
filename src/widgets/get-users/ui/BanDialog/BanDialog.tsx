import { useState } from 'react'

import { BanIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Button, Dialog, DialogClose } from '@tazalov/kebab-ui-kit'

import s from './BanDialog.module.scss'

export const BanDialog = () => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  return (
    <Dialog
      onOpenChange={setOpen}
      open={open}
      title="Delete user"
      trigger={
        <Button className={s.trigger} startIcon={<BanIcon />} variant="text">
          {t.banUser}
        </Button>
      }
    >
      <div className={s.wrapper}>
        <div className={s.content}>Are you sure to delete user Ivan Ivanov?</div>
        <div className={s.actions}>
          <DialogClose>
            <Button className={s.btn}>No</Button>
          </DialogClose>
          <Button className={s.btn} variant="outline">
            Yes
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
