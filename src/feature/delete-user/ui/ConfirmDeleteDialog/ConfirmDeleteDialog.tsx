import { ConfirmDialog } from '@/shared/ui/ConfirmDialog'

type Props = {
  disabled?: boolean
  name: null | string
  onDelete: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const ConfirmDeleteDialog = ({ name, onDelete, ...rest }: Props) => {
  const textContent = (
    <>
      Are you sure to delete user <b>{name}</b>?
    </>
  )

  return (
    <ConfirmDialog confirmCallback={onDelete} content={textContent} title="Delete user" {...rest} />
  )
}
