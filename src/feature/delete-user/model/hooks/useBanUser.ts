import { useState } from 'react'
import { toast } from 'react-toastify'

import { useDeleteMutation } from '@/shared/api/queries/delete-user/deleteUser.generated'

import { DeletedUserData } from '../types'

export const useBanUser = () => {
  const [open, setOpen] = useState(false)
  const [userForBan, setUserForDelete] = useState<DeletedUserData | null>(null)

  const [deleteUser, { loading: loadingBan }] = useDeleteMutation({
    refetchQueries: ['GetUsers'],
    variables: { userId: userForBan?.id ?? 0 },
  })

  const handleChangeOpenBan = (open: boolean) => {
    if (!open) {
      setUserForDelete(null)
    }
    setOpen(open)
  }

  const handleChangeUserForBan = (data: DeletedUserData) => {
    setUserForDelete(data)
    setOpen(true)
  }

  const handleBanUser = () => {
    if (userForBan) {
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
    banConfirm: { handleChangeOpenBan, open },
    handleBanUser,
    handleChangeUserForBan,
    loadingBan,
    userForBan,
  }
}
