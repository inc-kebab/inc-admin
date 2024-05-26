import { ImagePreview } from '@/entities/image'
import { useGetPhotosQuery } from '@/shared/api/queries/get-user-photos/get-user-photos.generated'
import { Loader } from '@tazalov/kebab-ui/components'

import s from './UploadedPhotos.module.scss'

type Props = {
  id: string
}

export const UploadedPhotos = ({ id }: Props) => {
  const { data, loading } = useGetPhotosQuery({ variables: { id: Number(id) } })

  if (loading) {
    return <Loader containerHeight />
  }

  return (
    <div className={s.list}>
      {data?.getPhotosOfUser?.map(el => {
        return el && <ImagePreview description={el.type + el.id} imageSrc={el.url} key={el.id} />
      })}
    </div>
  )
}