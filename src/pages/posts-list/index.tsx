import { useEffect, useRef, useState } from 'react'

import { useGetAllPostsQuery } from '@/shared/api/queries/get-all-posts/get-all-posts.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useDebounce } from '@/shared/hooks'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { TextField } from '@tazalov/kebab-ui/components'
import Image from 'next/image'

import s from './post-list.module.scss'

const PostsListPage: Page = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [posts, setPosts] = useState<any[]>([])
  const [pageSize, setPageSize] = useState(10)
  const ref = useRef<HTMLDivElement>(null)
  const debounceValue = useDebounce({ delay: 500, value: searchTerm })

  const { data, fetchMore, loading } = useGetAllPostsQuery({
    variables: {
      pageSize,
      searchTerm: debounceValue,
      sortBy: 'DESC',
    },
  })

  useEffect(() => {
    if (data && data.getAllPosts) {
      setPosts(data.getAllPosts.items)
    }
  }, [data])

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          fetchMore({
            variables: {
              pageSize: pageSize + 10,
              searchTerm: debounceValue,
              sortBy: 'DESC',
            },
          }).then(fetchMoreResult => {
            setPageSize(prevSize => prevSize + 10)
            if (fetchMoreResult.data) {
              setPosts(prevPosts => [...prevPosts, ...fetchMoreResult.data.getAllPosts.items])
            }
          })
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, loading, pageSize, debounceValue, fetchMore])

  if (loading && posts.length === 0) {
    return 'Loading...'
  }

  return (
    <div>
      <TextField
        name="search"
        onValueChange={setSearchTerm}
        placeholder="Search"
        type="search"
        value={searchTerm}
      />
      <div className={s.posts}>
        {posts.map((post: any, index) => (
          <div className={s.post} key={`${post.id}-${index}`}>
            {post?.images[0]?.url && (
              <Image alt="post image" height={282} src={post?.images[0].url} width={234} />
            )}
            <div>
              {/* <Image alt="user avatar" height={40} src={post?.avatarOwner} width={40} /> */}
              <div>{post.username}</div>
              <div className={s.postDesc}>{post.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div ref={ref} style={{ height: 20, width: '100%' }}></div>
    </div>
  )
}

PostsListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(PostsListPage)
