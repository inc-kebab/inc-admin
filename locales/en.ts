/* eslint-disable max-lines */
export const en = {
  title: {
    signIn: 'Sign In',
  },
  button: {
    signIn: 'Sign In',
    yes: 'Yes',
    no: 'No',
  },
  label: {
    login: 'Login',
    password: 'Password',
    show: 'Show',
    onPage: 'on page',
  },
  lang: {
    en: 'English',
    ru: 'Russian',
  },
  sideBar: {
    usersList: 'Users list',
    statistics: 'Statistics',
    paymentsList: 'Payments list',
    postsList: 'Posts list',
  },
  table: {
    userID: 'User ID',
    username: 'Username',
    profileLink: 'Profile link',
    date: 'Date added',
  },
  dialog: {
    deleteUser: {
      title: 'Delete user',
      description: 'Are you sure to delete user ',
    },
  },
  validation: {
    maxLength: (len: number) => `Maximum ${len} characters`,
    minLength: (len: number) => `Minimum ${len} characters`,
    passwordVerification: 'Password must consist of Latin letters and contain at least one number',
    loginVerification: 'Login must consist of Latin letters and numbers',
  },
  placeholder: {
    login: 'Enter login',
    password: 'Enter password',
  },
  page: {
    usersList: {
      banUser: 'Ban in the system',
      blocked: 'Blocked',
      moreInformation: 'More information',
      notBlocked: 'Not blocked',
      notSelected: 'Not selected',
      search: 'Search',
      notSpecified: 'Not specified',
    },
  },
}

export type LocaleType = typeof en
