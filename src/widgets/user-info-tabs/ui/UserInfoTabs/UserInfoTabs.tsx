import { useMemo, useState } from 'react'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { Tabs } from '@tazalov/kebab-ui/components'
import { useRouter } from 'next/router'

export const UserInfoTabs = () => {
  const { t } = useTranslation()

  const { push, query } = useRouter()

  const [activeTab, setActiveTab] = useState((query.tab as string) || 'photos')

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
    void push({ query: { tab: value, userID: query.userID } })
  }

  return (
    <Tabs.Root defaultValue={tabs[0].value} onValueChange={handleChangeTabValue} value={activeTab}>
      <Tabs.List>
        {tabs.map(tab => (
          <Tabs.Item key={tab.value} value={tab.value}>
            {tab.children}
          </Tabs.Item>
        ))}
      </Tabs.List>
      <Tabs.Content value={tabs[0].value}>
        <div>Uploaded photos</div>
      </Tabs.Content>
      <Tabs.Content value={tabs[1].value}>
        <div>Payments</div>
      </Tabs.Content>
      <Tabs.Content value={tabs[2].value}>
        <div>Followers</div>
      </Tabs.Content>
      <Tabs.Content value={tabs[3].value}>
        <div>Following</div>
      </Tabs.Content>
    </Tabs.Root>
  )
}
