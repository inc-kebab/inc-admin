import { useTranslation } from '@/shared/hooks'
import { ConfirmDialog } from '@/shared/ui/ConfirmDialog'

type Props = {
  disabled?: boolean
  name: null | string
  onOpenChange: (open: boolean) => void
  onUnban: () => void
  open: boolean
}

export const ConfirmUnbanDialog = ({ name, onUnban, ...rest }: Props) => {
  const { t } = useTranslation()

  const textContent = (
    <>
      {t.dialog.deleteUser.description}
      <b>{name}</b>?
    </>
  )

  return (
    <ConfirmDialog
      confirmCallback={onUnban}
      content={textContent}
      title={t.dialog.deleteUser.title}
      {...rest}
    />
  )
}
