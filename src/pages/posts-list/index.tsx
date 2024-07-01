import { useBanUnbanUser } from '@/entities/user'
import { ConfirmBanDialog } from '@/feature/ban-user'
import { Post } from '@/feature/posts-list'
import { ConfirmUnbanDialog } from '@/feature/unban-user'
import { useGetAllPostsQuery } from '@/shared/api/queries/get-all-posts/get-all-posts.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'

import s from './PostsList.module.scss'

const PostsListPage: Page = () => {
  const { data, loading } = useGetAllPostsQuery({
    variables: {
      pageSize: 8,
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

  return (
    <>
      <div className={s.container}>
        {loading ? (
          <div>LOADING...</div>
        ) : (
          data?.getAllPosts.items.map(post => (
            <Post key={post.id} onChangeUserStatus={handleChangeUserStatus} post={post} />
          ))
        )}
      </div>
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
    </>
  )
}

PostsListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(PostsListPage)
