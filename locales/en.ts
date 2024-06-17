/* eslint-disable max-lines */
export const en = {
  button: {
    back: 'Back to Users List',
    no: 'No',
    signIn: 'Sign In',
    yes: 'Yes',
  },
  dialog: {
    banUser: {
      advertising: 'Advertising placement',
      anotherReason: 'Another reason',
      badBehavior: 'Bad behavior',
      description: 'Are you sure to ban user ',
      pleaseSelectTheReason: 'Please select the reason',
      pleaseTryLater: 'Please try later',
      reasonForBan: 'Reason for ban',
      title: 'Ban user',
    },
    deleteUser: {
      description: 'Are you sure to delete user ',
      title: 'Delete user',
    },
    unbanUser: {
      description: 'Are you sure to unban user ',
      title: 'Unban user',
    },
  },
  label: {
    creationDate: 'Profile creation date',
    login: 'Login',
    nameNotSpecified: 'Name is not specified',
    notFound: 'Not found',
    onPage: 'on page',
    password: 'Password',
    show: 'Show',
  },
  lang: {
    en: 'English',
    ru: 'Russian',
  },
  page: {
    user: {
      payments: {
        amount: 'Amount, $',
        date: 'Date of Payment',
        endDate: 'End date of subscription',
        paytype: 'Payment Type',
        subtype: 'Subscription type',
      },
    },
    usersList: {
      banUser: 'Ban in the system',
      blocked: 'Blocked',
      moreInformation: 'More information',
      notBlocked: 'Not blocked',
      notSelected: 'Not selected',
      notSpecified: 'Not specified',
      search: 'Search',
      unbanUser: 'Unban in the system',
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
    amount: 'Amount, $',
    autoubdate: 'Auto update',
    dateAdded: 'Date added',
    endDateOfSubscription: 'End date of subscription',
    paymentType: 'Payment Type',
    profileLink: 'Profile link',
    subscriptionType: 'Subscription Type',
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
