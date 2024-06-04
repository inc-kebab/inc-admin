import { useEffect, useMemo, useState } from 'react'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { UploadedPhotos } from '@/widgets/user-info-tabs/ui/UploadedPhotos/UploadedPhotos'
import { Tabs } from '@tazalov/kebab-ui/components'
import { useRouter } from 'next/router'

import s from './UserInfoTabs.module.scss'

import { Payments } from '../Payments/Payments'

const valuesTabs = ['photos', 'payments', 'followers', 'following']

export const UserInfoTabs = () => {
  const { t } = useTranslation()

  const { query, replace } = useRouter()

  const [activeTab, setActiveTab] = useState('photos')

  const tabs = useMemo(() => {
    return [
      { children: t.tabs.photos, value: 'photos' },
      { children: t.tabs.payments, value: 'payments' },
      { children: t.tabs.followers, value: 'followers' },
      { children: t.tabs.following, value: 'following' },
    ]
  }, [t])

  const handleChangeTabValue = (value: string) => {
    setActiveTab(value)
    void replace({ query: { tab: value, userID: query.userID } })
  }

  useEffect(() => {
    if (query.tab) {
      if (valuesTabs.includes(query.tab as string)) {
        setActiveTab(query.tab as string)
      } else {
        setActiveTab('photos')
        void replace({ query: { tab: 'photos', userID: query.userID } })
      }
    }
  }, [query.tab, replace, query.userID])

  return (
    <Tabs.Root
      className={s.root}
      defaultValue={tabs[0].value}
      onValueChange={handleChangeTabValue}
      value={activeTab}
    >
      <Tabs.List className={s.tabs}>
        {tabs.map(tab => (
          <Tabs.Item className={s.item} key={tab.value} value={tab.value}>
            {tab.children}
          </Tabs.Item>
        ))}
      </Tabs.List>
      <Tabs.Content className={s.content} value={tabs[0].value}>
        <UploadedPhotos id={query.userID as string} />
      </Tabs.Content>
      <Tabs.Content className={s.content} value={tabs[1].value}>
        <Payments id={query.userID as string} />
      </Tabs.Content>
      <Tabs.Content className={s.content} value={tabs[2].value}>
        <div>Followers</div>
      </Tabs.Content>
      <Tabs.Content className={s.content} value={tabs[3].value}>
        <div>Following</div>
      </Tabs.Content>
    </Tabs.Root>
  )
}
