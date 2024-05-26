import { useState } from 'react'

export const usePaginationPayments = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(8)

  const handleChangePageSize = (size: string) => {
    setPageSize(Number(size))
    setPageNumber(1)
  }

  return {
    handleChangePage: setPageNumber,
    handleChangePageSize,
    pageNumber,
    pageSize,
  }
}
