import { useTranslation } from '@/shared/hooks'
import { clsx } from '@tazalov/kebab-ui'
import { Button, Dropdown } from '@tazalov/kebab-ui/components'
import { Block, Menu, PersonRemoveOutline } from '@tazalov/kebab-ui/icons'
import Link from 'next/link'

import s from './ActionsMenu.module.scss'

type Props = {
  id: number
  onBan?: () => void
  isBlocked?: boolean
  onDelete?: () => void
  onUnblock?: () => void
}

export const ActionsMenu = ({ id, isBlocked, onDelete, onUnblock, onBan }: Props) => {

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
      {isBlocked ? (
        <Dropdown.Item className={s.item} onSelect={onUnblock}>
          <Block />
          {t.page.usersList.unbanUser}
        </Dropdown.Item>
      ) : (
        <Dropdown.Item className={s.item} onSelect={onBan}>
          <Block />
          {t.page.usersList.banUser}
        </Dropdown.Item>
      )}
      <Dropdown.Item className={clsx(s.item, s.more)} onSelect={() => {}}>
        <Link className={s.link} href={`/user/${id}`}>
          <Menu />
          {t.page.usersList.moreInformation}
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  )
}
