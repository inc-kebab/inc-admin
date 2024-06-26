/* eslint-disable max-lines */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = { [SubKey in K]?: Maybe<T[SubKey]> } & Omit<T, K>
export type MakeMaybe<T, K extends keyof T> = { [SubKey in K]: Maybe<T[SubKey]> } & Omit<T, K>
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
  | T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: { input: boolean; output: boolean }
  DateTime: { input: any; output: any }
  Float: { input: number; output: number }
  ID: { input: string; output: string }
  Int: { input: number; output: number }
  String: { input: string; output: string }
}

export type AvatarModel = {
  __typename?: 'AvatarModel'
  /** file fileSize */
  fileSize: Scalars['Int']['output']
  /** file height */
  height: Scalars['Int']['output']
  /** file url */
  url: Scalars['String']['output']
  /** file width */
  width: Scalars['Int']['output']
}

export type AvatarsModel = {
  __typename?: 'AvatarsModel'
  /** file url */
  medium?: Maybe<AvatarModel>
  /** file url */
  thumbnail?: Maybe<AvatarModel>
}

export enum BanStatus {
  Banned = 'BANNED',
  Unbanned = 'UNBANNED',
}

export type ImageModel = {
  __typename?: 'ImageModel'
  /** file type */
  type?: Maybe<Scalars['String']['output']>
  /** file id */
  uploadId?: Maybe<Scalars['String']['output']>
  /** file url */
  url: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  banUser: Scalars['String']['output']
  checkAdmin: Scalars['Boolean']['output']
  deleteUser: Scalars['String']['output']
}

export type MutationBanUserArgs = {
  reason: Scalars['String']['input']
  status: BanStatus
  userId: Scalars['Int']['input']
}

export type MutationCheckAdminArgs = {
  login: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type MutationDeleteUserArgs = {
  userId: Scalars['Int']['input']
}

export type OwnerModel = {
  __typename?: 'OwnerModel'
  /** user firstname */
  firstname?: Maybe<Scalars['String']['output']>
  /** user id */
  id: Scalars['Int']['output']
  /** user firstname */
  lastname?: Maybe<Scalars['String']['output']>
}

export type PaginationModel = {
  __typename?: 'PaginationModel'
  pageNumber: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type PaymentModel = {
  __typename?: 'PaymentModel'
  /** payment dateOfPayments */
  dateOfPayments: Scalars['String']['output']
  /** payment endDateOfSubscription */
  endDateOfSubscription: Scalars['String']['output']
  /** payment id */
  id: Scalars['Int']['output']
  /** Payment Types */
  paymentType: Scalars['String']['output']
  /** payment price */
  price: Scalars['Int']['output']
  /** subscription Type */
  subscriptionType: Scalars['String']['output']
  /** payment userId */
  userId: Scalars['Int']['output']
}

export type PostModel = {
  __typename?: 'PostModel'
  /** user avatar */
  avatarOwner?: Maybe<Scalars['String']['output']>
  /** post createdAt */
  createdAt: Scalars['DateTime']['output']
  /** post description */
  description?: Maybe<Scalars['String']['output']>
  /** user id */
  id: Scalars['Int']['output']
  /** post images */
  images?: Maybe<Array<ImageModel>>
  /** post owner */
  owner: OwnerModel
  /** post ownerId */
  ownerId: Scalars['Int']['output']
  /** user ban status */
  status: BanStatus
  /** post createdAt */
  updatedAt: Scalars['DateTime']['output']
  /** username */
  username: Scalars['String']['output']
}

export type PostsPaginationModel = {
  __typename?: 'PostsPaginationModel'
  cursor: Scalars['Int']['output']
  hasMore: Scalars['Boolean']['output']
  /** posts */
  items: Array<PostModel>
  pageSize: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type ProfileModel = {
  __typename?: 'ProfileModel'
  /** about user */
  aboutMe?: Maybe<Scalars['String']['output']>
  /** accountType user */
  accountType: Scalars['String']['output']
  /** user avatar */
  avatars?: Maybe<AvatarsModel>
  /** birthDate */
  birthDate?: Maybe<Scalars['String']['output']>
  /** user city */
  city?: Maybe<Scalars['String']['output']>
  /** user createdAt */
  createdAt: Scalars['String']['output']
  /** user firstname */
  firstname?: Maybe<Scalars['String']['output']>
  /** user id */
  id: Scalars['Int']['output']
  /** user firstname */
  lastname?: Maybe<Scalars['String']['output']>
  /** username */
  username: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  getAllPayments: UsersPaymentsPaginationModel
  getAllPosts: PostsPaginationModel
  getPaymentsOfUser: UserPaymentsPaginationModel
  getPhotosOfUser?: Maybe<Array<Maybe<ImageModel>>>
  getUser: ProfileModel
  getUsers?: Maybe<UserPaginationModel>
}

export type QueryGetAllPaymentsArgs = {
  isAutoUpdate?: InputMaybe<Scalars['Boolean']['input']>
  pageNumber?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  searchTerm?: InputMaybe<Scalars['String']['input']>
  sortBy?: InputMaybe<Scalars['String']['input']>
  sortDirection?: InputMaybe<SortDirection>
}

export type QueryGetAllPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  searchTerm?: InputMaybe<Scalars['String']['input']>
  sortBy?: InputMaybe<Scalars['String']['input']>
  sortDirection?: InputMaybe<SortDirection>
}

export type QueryGetPaymentsOfUserArgs = {
  id: Scalars['Int']['input']
  pageNumber?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

export type QueryGetPhotosOfUserArgs = {
  id: Scalars['Int']['input']
}

export type QueryGetUserArgs = {
  id: Scalars['Int']['input']
}

export type QueryGetUsersArgs = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  searchTerm?: InputMaybe<Scalars['String']['input']>
  sortBy?: InputMaybe<Scalars['String']['input']>
  sortDirection?: InputMaybe<SortDirection>
  statusFilter?: InputMaybe<BanStatus>
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Subscription = {
  __typename?: 'Subscription'
  postAdded: PostModel
}

export type UserModel = {
  __typename?: 'UserModel'
  /** user createdAt */
  createdAt: Scalars['String']['output']
  /** user email */
  email: Scalars['String']['output']
  /** user full name */
  fullName?: Maybe<Scalars['String']['output']>
  /** user id */
  id: Scalars['Int']['output']
  /** user profile */
  profile?: Maybe<ProfileModel>
  /** user ban reason */
  reason: Scalars['String']['output']
  /** user ban status */
  status: BanStatus
  /** username */
  username: Scalars['String']['output']
}

export type UserPaginationModel = {
  __typename?: 'UserPaginationModel'
  /** users */
  pagination?: Maybe<PaginationModel>
  /** users */
  users?: Maybe<Array<UserModel>>
}

export type UserPaymentsPaginationModel = {
  __typename?: 'UserPaymentsPaginationModel'
  /** user payments */
  items: Array<PaymentModel>
  pageNumber: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type UsersPaymentsModel = {
  __typename?: 'UsersPaymentsModel'
  /** user avatar */
  avatar?: Maybe<Scalars['String']['output']>
  /** payment dateOfPayments */
  dateOfPayments: Scalars['String']['output']
  /** payment endDateOfSubscription */
  endDateOfSubscription: Scalars['String']['output']
  /** payment id */
  id: Scalars['Int']['output']
  /** Payment Types */
  paymentType: Scalars['String']['output']
  /** payment price */
  price: Scalars['Int']['output']
  /** subscription Type */
  subscriptionType: Scalars['String']['output']
  /** payment userId */
  userId: Scalars['Int']['output']
  /** username */
  username: Scalars['String']['output']
}

export type UsersPaymentsPaginationModel = {
  __typename?: 'UsersPaymentsPaginationModel'
  /** users payments */
  items: Array<UsersPaymentsModel>
  pageNumber: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}
