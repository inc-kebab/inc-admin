import { useState } from 'react'

import { PersonRemoveIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Button, Dialog, DialogClose } from '@tazalov/kebab-ui-kit'

import s from './DeleteUserDialog.module.scss'

export const DeleteUserDialog = () => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  return (
    <Dialog
      onOpenChange={setOpen}
      open={open}
      title="Delete user"
      trigger={
        <Button className={s.trigger} startIcon={<PersonRemoveIcon />} variant="text">
          {t.deleteUser}
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
