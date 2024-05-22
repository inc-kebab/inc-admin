import { ReactNode, createContext, useState } from 'react'

export const AuthContext = createContext({
  isAuth: false,
  setIsAuth: (isAuth: boolean) => {},
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false)

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
}

export default AuthProvider
