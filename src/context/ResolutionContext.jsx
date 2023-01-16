import { createContext, useContext, useState } from 'react'
import { supabase } from '../supabase/client'

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
  const [resolutions, setResolutions] = useState([])

  const getResolutions = async (done = false) => {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    const { data, error } = await supabase
      .from('resolutions')
      .select()
      .eq('userId', user.id)
      .eq('done', done)
      .order('id', { ascending: true })

    if (error) throw error

    setResolutions(data)
  }

  return (
    <ResolutionContext.Provider value={{ resolutions, getResolutions }}>
      {children}
    </ResolutionContext.Provider>
  )
}
