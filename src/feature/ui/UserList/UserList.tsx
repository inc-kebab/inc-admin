import { ChangeEvent, useState } from 'react'

import { useGetUserByNameQuery } from '@/shared/api/queries/searchUsers/searchUsers.generated'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { TextField } from '@tazalov/kebab-ui-kit'

import s from './UserList.module.scss'

export const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const debounceValue = useDebounce({ delay: 500, value: searchTerm })

  const { data } = useGetUserByNameQuery({
    variables: {
      searchTerm: debounceValue,
    },
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className={s.container}>
      <TextField onChange={handleSearch} placeholder="Search" type="search" value={searchTerm} />
      <ul>
        {data?.getUsers?.users &&
          data?.getUsers.users.map((i: any) => <li key={i.id}>{i.username || i.email}</li>)}
      </ul>
    </div>
  )
}
