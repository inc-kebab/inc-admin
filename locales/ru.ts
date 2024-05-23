import { LocaleType } from './en'

/* eslint-disable max-lines */
export const ru: LocaleType = {
  title: {
    signIn: 'Войти',
  },
  button: {
    signIn: 'Войти',
    yes: 'Да',
    no: 'Нет',
  },
  label: {
    login: 'Логин',
    password: 'Пароль',
    show: 'Показать',
    onPage: 'на странице',
  },
  lang: {
    en: 'Английский',
    ru: 'Русский',
  },
  sideBar: {
    paymentsList: 'Платежи',
    postsList: 'Посты',
    statistics: 'Статистика',
    usersList: 'Пользователи',
  },
  table: {
    userID: 'Идентификатор',
    username: 'Имя пользователя',
    profileLink: 'Ссылка на профиль',
    date: 'Дата добавления',
  },
  dialog: {
    deleteUser: {
      title: 'Удалить пользователя',
      description: 'Вы уверены, что хотите удалить пользователя ',
    },
  },
  validation: {
    maxLength: (len: number) => `Максимальное количество символов ${len}`,
    minLength: (len: number) => `Минимальное количество символов ${len}`,
    passwordVerification: 'Пароль должен состоять из латинских букв и содержать хотя бы одну цифру',
    loginVerification: 'Логин должен состоять из латинских букв и цифр',
  },
  placeholder: {
    login: 'Введите логин',
    password: 'Введите пароль',
  },
  page: {
    usersList: {
      banUser: 'Запрет на использование',
      blocked: 'Заблокирован',
      moreInformation: 'Дополнительная информация',
      notBlocked: 'Не заблокирован',
      notSelected: 'Не выбрано',
      search: 'Поиск',
      notSpecified: 'Не указан',
    },
  },
}
