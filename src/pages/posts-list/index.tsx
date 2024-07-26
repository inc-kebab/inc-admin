import { useEffect, useRef, useState } from 'react'

import { useBanUnbanUser } from '@/entities/user'
import { ConfirmBanDialog } from '@/feature/ban-user'
import { PostType } from '@/feature/posts-list'
import { PostsList } from '@/feature/posts-list/ui/PostList/PostList'
import { ConfirmUnbanDialog } from '@/feature/unban-user'
import { client } from '@/shared/api/apolloClient'
import { GET_ALL_POSTS } from '@/shared/api/queries/get-all-posts/get-all-posts'
import {
  GetAllPostsQuery,
  GetAllPostsQueryVariables,
} from '@/shared/api/queries/get-all-posts/get-all-posts.generated'
import {
  PostAddedSubscription,
  usePostAddedSubscription,
} from '@/shared/api/queries/post-subscription/post-subscription.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useDebounce } from '@/shared/hooks'
import { useInfinityScroll } from '@/shared/hooks/useInfinityScroll'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { OnDataOptions, useLazyQuery } from '@apollo/client'
import { TextField } from '@tazalov/kebab-ui/components'

const PostsListPage: Page = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [posts, setPosts] = useState<PostType[]>([])
  const [currentCursor, setCurrentCursor] = useState<string>('')
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const debounceValue = useDebounce({ delay: 500, value: searchTerm })
  const pageSize = 12
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

  const [loadPosts, { data, loading }] = useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GET_ALL_POSTS
  )

  useInfinityScroll({
    callback: () => {
      loadPosts({ variables: { cursor: currentCursor, pageSize } }).then(res => {
        const postsData = res.data?.getAllPosts

        if (postsData) {
          setPosts(prev => [...prev, ...postsData.items])
          setCurrentCursor(String(postsData.cursor))
        }
      })
    },
    hasMore: data?.getAllPosts.hasMore,
    triggerRef,
  })

  usePostAddedSubscription({
    onData: ({ data }: OnDataOptions<PostAddedSubscription>) => {
      if (data) {
        const previousData = client.readQuery({
          query: GET_ALL_POSTS,
          variables: { pageSize: pageSize },
        }) as GetAllPostsQuery

        client.writeQuery({
          data: {
            ...previousData,
            getAllPosts: {
              ...previousData.getAllPosts,
              items: [data.data?.postAdded, ...previousData.getAllPosts.items],
            },
          },
          query: GET_ALL_POSTS,
          variables: { pageSize: pageSize },
        })
        setPosts(prev => [data.data?.postAdded as PostType, ...prev])
      }
    },
  })

  useEffect(() => {
    if (debounceValue) {
      setPosts([])
    }
    loadPosts({
      variables: { pageSize, ...(debounceValue ? { searchTerm: debounceValue } : {}) },
    }).then(res => {
      if (res.data) {
        setPosts(res.data.getAllPosts.items)
        setCurrentCursor(String(res.data.getAllPosts.cursor))
      }
    })
  }, [debounceValue])

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
        cursor={data?.getAllPosts?.cursor}
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
