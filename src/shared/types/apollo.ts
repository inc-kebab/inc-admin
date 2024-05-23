export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AvatarModel = {
  __typename?: 'AvatarModel';
  /** file fileSize */
  fileSize: Scalars['Int']['output'];
  /** file height */
  height: Scalars['Int']['output'];
  /** file url */
  url: Scalars['String']['output'];
  /** file width */
  width: Scalars['Int']['output'];
};

export type AvatarsModel = {
  __typename?: 'AvatarsModel';
  /** file url */
  medium?: Maybe<AvatarModel>;
  /** file url */
  thumbnail?: Maybe<AvatarModel>;
};

export type ImageModel = {
  __typename?: 'ImageModel';
  /** file createdAt */
  createdAt: Scalars['String']['output'];
  /** file id */
  id: Scalars['String']['output'];
  /** file type */
  type: Scalars['String']['output'];
  /** file url */
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkAdmin: Scalars['Boolean']['output'];
  deleteUser: Scalars['String']['output'];
};


export type MutationCheckAdminArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['Int']['input'];
};

export type PaginationModel = {
  __typename?: 'PaginationModel';
  pageNumber: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};

export type PaymentModel = {
  __typename?: 'PaymentModel';
  /** payment dateOfPayments */
  dateOfPayments: Scalars['String']['output'];
  /** payment endDateOfSubscription */
  endDateOfSubscription: Scalars['String']['output'];
  /** payment id */
  id: Scalars['Int']['output'];
  /** Payment Types */
  paymentType: Scalars['String']['output'];
  /** payment price */
  price: Scalars['Int']['output'];
  /** subscription Type */
  subscriptionType: Scalars['String']['output'];
  /** payment userId */
  userId: Scalars['Int']['output'];
};

export type ProfileModel = {
  __typename?: 'ProfileModel';
  /** about user */
  aboutMe?: Maybe<Scalars['String']['output']>;
  /** accountType user */
  accountType: Scalars['String']['output'];
  /** user avatar */
  avatars?: Maybe<AvatarsModel>;
  /** birthDate */
  birthDate?: Maybe<Scalars['String']['output']>;
  /** user city */
  city?: Maybe<Scalars['String']['output']>;
  /** user createdAt */
  createdAt: Scalars['String']['output'];
  /** user firstname */
  firstname?: Maybe<Scalars['String']['output']>;
  /** user id */
  id: Scalars['Int']['output'];
  /** user firstname */
  lastname?: Maybe<Scalars['String']['output']>;
  /** username */
  username: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPaymentsOfUser: UserPaymentsPaginationModel;
  getPhotosOfUser?: Maybe<Array<Maybe<ImageModel>>>;
  getUser: ProfileModel;
  getUsers?: Maybe<UserPaginationModel>;
};


export type QueryGetPaymentsOfUserArgs = {
  id: Scalars['Int']['input'];
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPhotosOfUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUsersArgs = {
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UserModel = {
  __typename?: 'UserModel';
  /** user createdAt */
  createdAt: Scalars['String']['output'];
  /** user email */
  email: Scalars['String']['output'];
  /** user full name */
  fullName: Scalars['String']['output'];
  /** user id */
  id: Scalars['Int']['output'];
  /** user profile */
  profile?: Maybe<ProfileModel>;
  /** username */
  username: Scalars['String']['output'];
};

export type UserPaginationModel = {
  __typename?: 'UserPaginationModel';
  /** users */
  pagination?: Maybe<PaginationModel>;
  /** users */
  users?: Maybe<Array<UserModel>>;
};

export type UserPaymentsPaginationModel = {
  __typename?: 'UserPaymentsPaginationModel';
  /** user payments */
  items: Array<PaymentModel>;
  pageNumber: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  pagesCount: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
};
