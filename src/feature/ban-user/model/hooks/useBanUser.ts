import { useState } from 'react'
import { toast } from 'react-toastify'

import { BanUserData } from '@/feature/ban-user'
import { useBanMutation } from '@/shared/api/queries/ban-user/banUser.generated'
import { useTranslation } from '@/shared/hooks'
import { BanStatus } from '@/shared/types/apollo'

export const useBanUser = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [userForBan, setUserForBan] = useState<BanUserData | null>(null)
  const [reason, setReason] = useState<string>('')

  const [banUser, { loading: loadingBan }] = useBanMutation()

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

  const handleBanUser = (status: BanStatus) => {
    if (userForBan && reason && status) {
      banUser({
        refetchQueries: ['GetUsers'],
        variables: {
          reason: reason,
          status: status,
          userId: userForBan?.id ?? 0,
        },
      }).then(res => {
        if (res.data?.banUser === 'changed') {
          setOpen(false)
        } else {
          toast.error(t.dialog.banUser.pleaseTryLater)
        }
      })
    } else {
      toast.error(t.dialog.banUser.pleaseSelectTheReason)
    }
  }

  return {
    banConfirm: { handleChangeOpenBan, open },
    handleBanUser,
    handleChangeUserForBan,
    loadingBan,
    reason,
    setReason,
    userForBan,
  }
}
