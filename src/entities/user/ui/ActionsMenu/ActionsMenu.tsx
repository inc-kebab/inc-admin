import { useTranslation } from '@/shared/hooks'
import { Button, Dropdown } from '@tazalov/kebab-ui/components'
import { Block, Menu, PersonRemoveOutline } from '@tazalov/kebab-ui/icons'
import Link from 'next/link'

import s from './ActionsMenu.module.scss'

type Props = {
  id: number
  onDelete: () => void
}

export const ActionsMenu = ({ id, onDelete }: Props) => {
  const { t } = useTranslation()

  return (
    <Dropdown.Menu
      align="end"
      modal={false}
      trigger={<Button className={s.trigger} startIcon={<Menu />} variant="text" />}
    >
      <Dropdown.Item className={s.item} onSelect={onDelete}>
        <PersonRemoveOutline />
        {t.dialog.deleteUser.title}
      </Dropdown.Item>
      <Dropdown.Item className={s.item} onClick={() => {}}>
        <Block />
        {t.page.usersList.banUser}
      </Dropdown.Item>
      <Dropdown.Item className={s.item} onClick={() => {}}>
        <Link className={s.link} href={`/${id}`}>
          <Menu />
          {t.page.usersList.moreInformation}
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  )
}
