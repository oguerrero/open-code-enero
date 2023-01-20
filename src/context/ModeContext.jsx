import { createContext, useContext, useState } from 'react'

export const ModeContext = createContext()

export const useMode = () => {
  const context = useContext(ModeContext)
  if (!context)
    throw new Error('useResolution must be used within a ModeContextProvider')

  return context
}

export const ModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode'))

  const getMode = (mode) => {
    setDarkMode(mode)
  }

  const toogleMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', darkMode)
  }
  
  return (
    <ModeContext.Provider value={{ darkMode, toogleMode, getMode }}>
      {children}
    </ModeContext.Provider>
  )
}
