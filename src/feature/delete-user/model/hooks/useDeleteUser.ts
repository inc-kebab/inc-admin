import { useState } from 'react'
import { toast } from 'react-toastify'

import { DialogUserData } from '@/entities/user'
import { useDeleteMutation } from '@/shared/api/queries/delete-user/deleteUser.generated'

export const useDeleteUser = () => {
  const [open, setOpen] = useState(false)
  const [userForDelete, setUserForDelete] = useState<DialogUserData | null>(null)

  const [deleteUser, { loading: loadingDelete }] = useDeleteMutation({
    refetchQueries: ['GetUsers'],
    variables: { userId: userForDelete?.id ?? 0 },
  })

  const handleChangeOpen = (open: boolean) => {
    if (!open) {
      setUserForDelete(null)
    }
    setOpen(open)
  }

  const handleChangeUserForDelete = (data: DialogUserData) => {
    setUserForDelete(data)
    setOpen(true)
  }

  const handleDeleteUser = () => {
    if (userForDelete) {
      deleteUser().then(res => {
        if (res.data?.deleteUser === 'deleted') {
          setOpen(false)
        } else {
          toast.error('Please try later')
        }
      })
    }
  }

  return {
    confirm: { handleChangeOpen, open },
    handleChangeUserForDelete,
    handleDeleteUser,
    loadingDelete,
    userForDelete,
  }
}
