import { BanIcon, Menu, PersonRemoveOutline } from '@/shared/assets/icons'
import { useTranslation } from '@/shared/hooks'
import { Button, Dropdown } from '@tazalov/kebab-ui/components'

import s from './ActionsMenu.module.scss'

type Props = {
  onDelete: () => void
}

export const ActionsMenu = ({ onDelete }: Props) => {
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
        <BanIcon />
        {t.page.usersList.banUser}
      </Dropdown.Item>
      <Dropdown.Item className={s.item} onClick={() => {}}>
        <Menu />
        {t.page.usersList.moreInformation}
      </Dropdown.Item>
    </Dropdown.Menu>
  )
}
