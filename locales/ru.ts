import { LocaleType } from './en'

/* eslint-disable max-lines */
export const ru: LocaleType = {
  button: {
    back: 'Назад к списку пользователей',
    no: 'Нет',
    showLess: 'Показать меньше',
    showMore: 'Показать больше',
    signIn: 'Войти',
    yes: 'Да',
  },
  dialog: {
    banUser: {
      advertising: 'Размещение рекламы',
      anotherReason: 'Другая причина',
      badBehavior: 'Неприемлемое поведение',
      description: 'Вы уверены, что хотите запретить доступ пользователю',
      pleaseSelectTheReason: 'Пожалуйста, выберите причину',
      pleaseTryLater: 'Пожалуйста, попробуйте позже',
      reasonForBan: 'Причина запрета',
      title: 'Запретить доступ пользователю',
    },
    deleteUser: {
      description: 'Вы уверены, что хотите удалить пользователя ',
      title: 'Удалить пользователя',
    },
    unbanUser: {
      description: 'Вы уверены, что хотите разбанить пользователя ',
      title: 'Разбанить пользователя',
    },
  },
  label: {
    creationDate: 'Дата создания профиля',
    login: 'Логин',
    nameNotSpecified: 'Имя не указано',
    notFound: 'Не найдено',
    onPage: 'на странице',
    password: 'Пароль',
    show: 'Показать',
  },
  lang: {
    en: 'Английский',
    ru: 'Русский',
  },
  page: {
    postsList: {
      notFoundPosts: 'Посты не найдены',
    },
    user: {
      payments: {
        amount: 'Сумма, $',
        date: 'Дата платежна',
        endDate: 'Дата окончания подписки',
        paytype: 'Тип платежа',
        subtype: 'Тип подписки',
      },
    },
    usersList: {
      banUser: 'Забанить в системе',
      blocked: 'Заблокирован',
      moreInformation: 'Дополнительная информация',
      notBlocked: 'Не заблокирован',
      notSelected: 'Не выбрано',
      notSpecified: 'Не указан',
      search: 'Поиск',
      unbanUser: 'Разбанить в системе',
    },
  },
  placeholder: {
    login: 'Введите логин',
    password: 'Введите пароль',
  },
  sideBar: {
    paymentsList: 'Платежи',
    postsList: 'Посты',
    statistics: 'Статистика',
    usersList: 'Пользователи',
  },
  table: {
    amount: 'Стоимость, $',
    autoubdate: 'Автопродление',
    dateAdded: 'Дата добавления',
    endDateOfSubscription: 'Дата окончания подписки',
    paymentType: 'Способ оплаты',
    profileLink: 'Ссылка на профиль',
    subscriptionType: 'Тип подписки',
    userID: 'Идентификатор',
    username: 'Имя пользователя',
  },
  tabs: {
    followers: 'Подписчики',
    following: 'Подписки',
    payments: 'Платежи',
    photos: 'Фотографии',
  },
  title: {
    signIn: 'Войти',
  },
  validation: {
    loginVerification: 'Логин должен состоять из латинских букв и цифр',
    maxLength: (len: number) => `Максимальное количество символов ${len}`,
    minLength: (len: number) => `Минимальное количество символов ${len}`,
    passwordVerification: 'Пароль должен состоять из латинских букв и содержать хотя бы одну цифру',
  },
}
