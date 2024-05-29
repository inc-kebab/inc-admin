import { useState } from 'react'

export const useUnbanUser = () => {
  const [open, setOpen] = useState(false)

  return {
    confirm: { handleChangeOpen: setOpen, open },
  }
}
