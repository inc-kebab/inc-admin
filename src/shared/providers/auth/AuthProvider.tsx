import { PropsWithChildren, createContext, useState } from 'react'

export const AuthContext = createContext({
  isAuth: true,
  setIsAuth: (isAuth: boolean) => {},
})

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuth, setIsAuth] = useState(false)

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
}
