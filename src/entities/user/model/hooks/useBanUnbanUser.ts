import { useState } from 'react'
import { toast } from 'react-toastify'

import { useBanMutation } from '@/shared/api/queries/ban-user/banUser.generated'
import {
  UnbanUserMutation,
  useUnbanUserMutation,
} from '@/shared/api/queries/unban-user/unban-user.generated'
import { useTranslation } from '@/shared/hooks'
import { BanStatus } from '@/shared/types/apollo'
import { FetchResult } from '@apollo/client'

import { BanUserParams, DialogUserData, Reason } from '../types/index'

export const useBanUnbanUser = () => {
  const { t } = useTranslation()
  const [openUnbanDialog, setOpenUnbanDialog] = useState(false)
  const [openBanDialog, setOpenBanDialog] = useState(false)
  const [reason, setReason] = useState<Reason>('')
  const [customReason, setCustomReason] = useState('')
  const [userToModify, setUserToModify] = useState<DialogUserData | null>()

  const [banUser, { loading: loadingBan }] = useBanMutation()
  const [unban, { loading: loadingUnban }] = useUnbanUserMutation()

  const isBanned = Boolean(userToModify?.status === 'BANNED')

  const handleChangeOpen = (open: boolean) => {
    if (!open) {
      setUserToModify(null)
    }
    isBanned ? setOpenUnbanDialog(open) : setOpenBanDialog(open)
  }

  const handleChangeUserStatus = (data: DialogUserData) => {
    setUserToModify(data)
    data.status === 'BANNED' ? setOpenUnbanDialog(true) : setOpenBanDialog(true)
  }

  const handleUserBanUnbanResponse = (res: FetchResult<UnbanUserMutation>) => {
    if (res.data?.banUser === 'changed') {
      setOpenBanDialog(false)
      setOpenUnbanDialog(false)
    } else {
      toast.error(t.dialog.banUser.pleaseTryLater)
    }
  }

  const handleUnbanUser = () => {
    if (userToModify) {
      unban({
        refetchQueries: ['GetUsers'],
        variables: {
          reason: '',
          status: BanStatus.Unbanned,
          userId: userToModify?.id ?? 0,
        },
      }).then(handleUserBanUnbanResponse)
    }
  }

  const handleBanUser = ({ reason, status }: BanUserParams) => {
    if (userToModify && reason && status) {
      banUser({
        refetchQueries: ['GetUsers'],
        variables: {
          reason: reason === 'anotherReason' ? customReason : reason,
          status: status,
          userId: userToModify?.id ?? 0,
        },
      }).then(res => {
        handleUserBanUnbanResponse(res)
        setReason('')
        setCustomReason('')
      })
    } else {
      toast.error(t.dialog.banUser.pleaseSelectTheReason)
    }
  }

  return {
    customReason,
    handleBanUser,
    handleChangeOpen,
    handleChangeUserStatus,
    handleUnbanUser,
    isBanned,
    loadingChangeStatus: loadingBan || loadingUnban,
    openBanDialog,
    openUnbanDialog,
    reason,
    setCustomReason,
    setReason,
    userToModify,
  }
}
