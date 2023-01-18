import { createContext, useContext, useState } from 'react'

export const ModeContext = createContext()

export const useMode = () => {
  const context = useContext(ModeContext)
  if (!context)
    throw new Error('useResolution must be used within a ModeContextProvider')

  return context
}

export const ModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toogleMode = () => setDarkMode(!darkMode)

  return (
    <ModeContext.Provider value={{ darkMode, toogleMode }}>
      {children}
    </ModeContext.Provider>
  )
}
