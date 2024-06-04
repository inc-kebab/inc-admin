import { useState } from 'react'
import { toast } from 'react-toastify'

import { BanUserData } from '@/feature/ban-user'
import { useBanMutation } from '@/shared/api/queries/ban-user/banUser.generated'

export const useBanUser = () => {
  const [open, setOpen] = useState(false)
  const [userForBan, setUserForBan] = useState<BanUserData | null>(null)

  console.log(userForBan)

  const [banUser, { loading: loadingBan }] = useBanMutation({
    refetchQueries: ['GetUsers'],
    variables: {
      reason: userForBan?.reason ?? '',
      status: userForBan?.status,
      userId: userForBan?.id ?? 0,
    },
  })

  const handleChangeOpenBan = (open: boolean) => {
    if (!open) {
      setUserForBan(null)
    }
    setOpen(open)
  }

  const handleChangeUserForBan = (data: BanUserData) => {
    setUserForBan(data)
    setOpen(true)
  }

  const handleBanUser = () => {
    if (userForBan) {
      banUser().then(res => {
        if (res.data?.banUser === 'changed') {
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
