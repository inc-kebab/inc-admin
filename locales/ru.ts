import { LocaleType } from './en'

/* eslint-disable max-lines */
export const ru: LocaleType = {
  button: {
    back: 'Назад к списку пользователей',
    no: 'Нет',
    signIn: 'Войти',
    yes: 'Да',
  },
  dialog: {
    deleteUser: {
      description: 'Вы уверены, что хотите удалить пользователя ',
      title: 'Удалить пользователя',
    },
  },
  label: {
    creationDate: 'Дата создания профиля',
    login: 'Логин',
    onPage: 'на странице',
    password: 'Пароль',
    show: 'Показать',
  },
  lang: {
    en: 'Английский',
    ru: 'Русский',
  },
  page: {
    usersList: {
      banUser: 'Запрет на использование',
      blocked: 'Заблокирован',
      moreInformation: 'Дополнительная информация',
      notBlocked: 'Не заблокирован',
      notSelected: 'Не выбрано',
      notSpecified: 'Не указан',
      search: 'Поиск',
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
    date: 'Дата добавления',
    profileLink: 'Ссылка на профиль',
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
