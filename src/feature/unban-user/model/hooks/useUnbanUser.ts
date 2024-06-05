import { useState } from 'react'
import { toast } from 'react-toastify'

import { DialogUserData } from '@/entities/user'
import { useUnbanUserMutation } from '@/shared/api/queries/unban-user/unban-user.generated'
import { BanStatus } from '@/shared/types/apollo'

export const useUnbanUser = () => {
  const [open, setOpen] = useState(false)
  const [userUnban, setUserUnban] = useState<DialogUserData | null>(null)

  const [unban, { loading: loadingUnban }] = useUnbanUserMutation({
    refetchQueries: ['GetUsers'],
    variables: {
      reason: '',
      status: BanStatus.Unbanned,
      userId: userUnban?.id ?? 0,
    },
  })

  const handleChangeOpen = (open: boolean) => {
    if (!open) {
      setUserUnban(null)
    }
    setOpen(open)
  }

  const handleChangeUserUnban = (data: DialogUserData) => {
    setUserUnban(data)
    setOpen(true)
  }

  const handleUnbanUser = () => {
    if (userUnban) {
      unban().then(res => {
        if (res.data?.banUser === 'changed') {
          setOpen(false)
        } else {
          toast.error('Please try later')
        }
      })
    }
  }

  return {
    confirm: { handleChangeOpen, open },
    handleChangeUserUnban,
    handleUnbanUser,
    loadingUnban,
    userUnban,
  }
}
