import { Menu, PersonRemoveOutline } from '@/shared/assets/icons'
import { Button, Dropdown } from '@tazalov/kebab-ui/components'

import s from './ActionsMenu.module.scss'

type Props = {
  onDelete: () => void
}

export const ActionsMenu = ({ onDelete }: Props) => {
  return (
    <Dropdown.Menu
      align="end"
      modal={false}
      trigger={<Button className={s.trigger} startIcon={<Menu />} variant="text" />}
    >
      <Dropdown.Item className={s.item} onSelect={onDelete}>
        <PersonRemoveOutline />
        Delete user
      </Dropdown.Item>
    </Dropdown.Menu>
  )
}
