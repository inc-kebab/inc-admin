import { useTranslation } from '@/shared/hooks'
import { Select } from '@tazalov/kebab-ui/components'
import { RuFlag, UkFlag } from '@tazalov/kebab-ui/icons'
import clsx from 'clsx'

import s from './LangSwitcher.module.scss'

import { useLangSwitcher } from '../../model/hooks/useLangSwitcher'

interface Props {
  className?: string
}

export const LangSwitcher = ({ className }: Props) => {
  const { changeLocale, defaultLocale, locale } = useLangSwitcher()

  const { t } = useTranslation()

  const SELECT_OPTIONS = [
    {
      icon: <RuFlag id="ru-flag" />,
      name: <span className={s.text}>{t.lang.ru}</span>,
      value: 'ru',
    },
    {
      icon: <UkFlag id="uk-flag" />,
      name: <span className={s.text}>{t.lang.en}</span>,
      value: 'en',
    },
  ]

  return (
    <Select
      className={clsx(s.root, className)}
      classNames={{ icon: s.icon, trigger: s.trigger }}
      onValueChange={changeLocale}
      options={SELECT_OPTIONS}
      portal={false}
      value={locale || defaultLocale}
    />
  )
}
