import { createContext, useContext } from 'react'

export const ResolutionContext = createContext()

export const useResolution = () => {
  const context = useContext(ResolutionContext)
  if (!context)
    throw new Error(
      'useResolution must be used within a ResolutionContextProvider'
    )

  return context
}

export const ResolutionContextProvider = ({ children }) => {
  return (
    <ResolutionContext.Provider value={{ name: 'a' }}>
      {children}
    </ResolutionContext.Provider>
  )
}
