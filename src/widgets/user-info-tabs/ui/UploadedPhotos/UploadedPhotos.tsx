import { ImagePreview } from '@/entities/image'
import { useGetPhotosQuery } from '@/shared/api/queries/get-user-photos/get-user-photos.generated'
import { useTranslation } from '@/shared/hooks'
import { Loader, Typography } from '@tazalov/kebab-ui/components'

import s from './UploadedPhotos.module.scss'

type Props = {
  id: string
}

export const UploadedPhotos = ({ id }: Props) => {
  const { t } = useTranslation()

  const { data, loading } = useGetPhotosQuery({ variables: { id: Number(id) } })

  if (loading) {
    return <Loader containerHeight />
  }

  return (
    <div className={s.list}>
      {data?.getPhotosOfUser && data?.getPhotosOfUser.length ? (
        data?.getPhotosOfUser.map((el, index) => {
          return (
            el && <ImagePreview description={el.type + id} imageSrc={el.url} key={index + el.url} />
          )
        })
      ) : (
        <Typography asComponent="div" className={s.msg} textAlign="center" variant="large">
          {t.label.notFound}
        </Typography>
      )}
    </div>
  )
}
