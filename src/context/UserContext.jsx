import { createContext, useContext, useMemo, useState } from 'react'
import { getUser } from '../services/users';

const UserContext = createContext({})

export function UserProvider({children}) {
  const currentUser = getUser()
  const [user, setUser] = useState(currentUser ?? {})
  let memo = useMemo(() => ({user, setUser}), [user])
  return (
    <UserContext.Provider value={memo}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};