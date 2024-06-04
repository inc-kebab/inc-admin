import { useState } from 'react'

import { useRouter } from 'next/router'

export const usePaginationUsersList = () => {
  const router = useRouter()
  const { page, size } = router.query
  const [pageNumber, setPageNumber] = useState(Number(page) || 1)
  const [pageSize, setPageSize] = useState(Number(size) || 8)

  const handleChangePageSize = (size: string) => {
    setPageSize(Number(size))
    setPageNumber(1)
    router.push({
      query: { ...router.query, page: 1, size: size },
    })
  }

  const handleChangePage = (page: number) => {
    setPageNumber(page)
    router.push({
      query: { ...router.query, page: page },
    })
  }

  return {
    handleChangePage,
    handleChangePageSize,
    pageNumber,
    pageSize,
  }
}
