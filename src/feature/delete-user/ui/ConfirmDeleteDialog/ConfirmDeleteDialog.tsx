import { useTranslation } from '@/shared/hooks'
import { ConfirmDialog } from '@/shared/ui/ConfirmDialog'

type Props = {
  disabled?: boolean
  name: null | string
  onDelete: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const ConfirmDeleteDialog = ({ name, onDelete, ...rest }: Props) => {
  const { t } = useTranslation()

  const textContent = (
    <>
      {t.dialog.deleteUser.description}
      <b>{name}</b>?
    </>
  )

  return (
    <ConfirmDialog
      confirmCallback={onDelete}
      content={textContent}
      title={t.dialog.deleteUser.title}
      {...rest}
    />
  )
}
