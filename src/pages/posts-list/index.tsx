import { useEffect, useRef, useState } from 'react'

import { useBanUnbanUser } from '@/entities/user'
import { ConfirmBanDialog } from '@/feature/ban-user'
import { PostType } from '@/feature/posts-list'
import { PostsList } from '@/feature/posts-list/ui/PostList/PostList'
import { ConfirmUnbanDialog } from '@/feature/unban-user'
import { useGetAllPostsQuery } from '@/shared/api/queries/get-all-posts/get-all-posts.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useDebounce } from '@/shared/hooks'
import { useInfinityScroll } from '@/shared/hooks/useInfinityScroll'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { TextField } from '@tazalov/kebab-ui/components'

const PostsListPage: Page = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [posts, setPosts] = useState<PostType[]>([])
  const [currentCursor, setCurrentCursor] = useState<string>('')
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const debounceValue = useDebounce({ delay: 500, value: searchTerm })

  const pageSize = 12

  const { data, loading } = useGetAllPostsQuery({
    variables: {
      cursor: currentCursor,
      pageSize: pageSize,
      searchTerm: debounceValue,
      sortBy: 'DESC',
    },
  })

  const {
    customReason,
    handleBanUser,
    handleChangeOpen,
    handleChangeUserStatus,
    handleUnbanUser,
    loadingChangeStatus,
    openBanDialog,
    openUnbanDialog,
    reason,
    setCustomReason,
    setReason,
    userToModify,
  } = useBanUnbanUser()

  useInfinityScroll({
    callback: () => setCurrentCursor(String(data?.getAllPosts.cursor)),
    hasMore: data?.getAllPosts.hasMore,
    triggerRef,
  })

  useEffect(() => {
    if (data && data.getAllPosts) {
      setPosts(prev => prev.concat(data.getAllPosts.items))
    }
  }, [data])

  return (
    <div>
      <TextField
        name="search"
        onValueChange={setSearchTerm}
        placeholder="Search"
        type="search"
        value={searchTerm}
      />
      <PostsList
        cursor={data?.getAllPosts.cursor}
        handleChangeUserStatus={handleChangeUserStatus}
        hasMore={data?.getAllPosts.hasMore}
        isFetching={loading}
        pageSize={pageSize}
        posts={posts}
        ref={triggerRef}
      />
      <ConfirmUnbanDialog
        disabled={loadingChangeStatus}
        name={userToModify?.name || 'Not specified'}
        onOpenChange={handleChangeOpen}
        onUnban={handleUnbanUser}
        open={openUnbanDialog}
      />
      <ConfirmBanDialog
        customReason={customReason}
        disabled={loadingChangeStatus}
        name={userToModify?.name || 'Not specified'}
        onBan={handleBanUser}
        onOpenChange={handleChangeOpen}
        open={openBanDialog}
        reason={reason}
        setCustomReason={setCustomReason}
        setReason={setReason}
      />
    </div>
  )
}

PostsListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(PostsListPage)
