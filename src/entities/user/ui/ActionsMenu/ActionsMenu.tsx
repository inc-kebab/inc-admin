import { Menu, PersonRemoveOutline } from '@/shared/assets/icons'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Button, Dropdown } from '@tazalov/kebab-ui/components'
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
        {t.deleteUser}
      </Dropdown.Item>
      <Dropdown.Item>
        <Link className={s.link} href={`/${id}`}>
          <Menu />
          {t.moreInformation}
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  )
}
