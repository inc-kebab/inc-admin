/* eslint-disable max-lines */
export const en = {
  button: {
    back: 'Back to Users List',
    no: 'No',
    signIn: 'Sign In',
    yes: 'Yes',
  },
  dialog: {
    deleteUser: {
      description: 'Are you sure to delete user ',
      title: 'Delete user',
    },
  },
  label: {
    creationDate: 'Profile creation date',
    login: 'Login',
    nameNotSpecified: 'Name is not specified',
    onPage: 'on page',
    password: 'Password',
    show: 'Show',
  },
  lang: {
    en: 'English',
    ru: 'Russian',
  },
  page: {
    usersList: {
      banUser: 'Ban in the system',
      blocked: 'Blocked',
      moreInformation: 'More information',
      notBlocked: 'Not blocked',
      notSelected: 'Not selected',
      notSpecified: 'Not specified',
      search: 'Search',
    },
  },
  placeholder: {
    login: 'Enter login',
    password: 'Enter password',
  },
  sideBar: {
    paymentsList: 'Payments list',
    postsList: 'Posts list',
    statistics: 'Statistics',
    usersList: 'Users list',
  },
  table: {
    date: 'Date added',
    profileLink: 'Profile link',
    userID: 'User ID',
    username: 'Username',
  },
  tabs: {
    followers: 'Followers',
    following: 'Following',
    payments: 'Payments',
    photos: 'Uploaded photos',
  },
  title: {
    signIn: 'Sign In',
  },
  validation: {
    loginVerification: 'Login must consist of Latin letters and numbers',
    maxLength: (len: number) => `Maximum ${len} characters`,
    minLength: (len: number) => `Minimum ${len} characters`,
    passwordVerification: 'Password must consist of Latin letters and contain at least one number',
  },
}

export type LocaleType = typeof en
