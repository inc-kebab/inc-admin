import { forwardRef } from 'react'

import { DialogUserData } from '@/entities/user'
import { Post, PostType } from '@/feature/posts-list'
import { useTranslation } from '@/shared/hooks'
import { Skeleton, Typography } from '@tazalov/kebab-ui/components'
import clsx from 'clsx'

import s from './PostList.module.scss'

type Props = {
  cursor?: number
  handleChangeUserStatus: (data: DialogUserData) => void
  hasMore?: boolean
  isFetching: boolean
  pageSize?: number
  posts: PostType[]
}

export const PostsList = forwardRef<HTMLDivElement, Props>(
  ({ cursor, handleChangeUserStatus, hasMore, isFetching, pageSize, posts }: Props, ref) => {
    const { t } = useTranslation()
    const Skeletons = new Array(pageSize)
      .fill(null)
      .map((_, i) => (
        <Skeleton
          className={clsx(
            s.skeleton,
            isFetching || !posts.length ? '' : s.hide,
            hasMore === false && s.delete
          )}
          key={i}
        />
      ))

    return (
      <>
        <div className={s.container}>
          {posts.map(post => (
            <Post
              key={post.id}
              onChangeUserStatus={handleChangeUserStatus}
              post={post}
              ref={post.id === cursor ? ref : undefined}
            />
          ))}
          {Skeletons}
        </div>
        {!posts.length && !isFetching && (
          <Typography asComponent="h1" className={s.notFound} textAlign="center" variant="h1">
            {t.page.postsList.notFoundPosts}
          </Typography>
        )}
      </>
    )
  }
)
