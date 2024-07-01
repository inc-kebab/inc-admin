import { gql } from '@apollo/client'

export const GET_PHOTOS = gql`
  query getPhotos($id: Int!) {
    getPhotosOfUser(id: $id) {
      url
      type
    }
  }
`
