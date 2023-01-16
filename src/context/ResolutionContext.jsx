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
  const [adding, setAdding] = useState(false)
  const [loading, setLoading] = useState(false)

  const getResolutions = async (done = false) => {
    setLoading(true)
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
    setLoading(false)
  }

  const addResolution = async (resolutionName) => {
    setAdding(true)
    const {
      data: { user }
    } = await supabase.auth.getUser()

    const { error } = await supabase
      .from('resolutions')
      .insert({ name: resolutionName, userId: user.id })

    if (error) throw error

    getResolutions()
    setAdding(false)
  }

  return (
    <ResolutionContext.Provider
      value={ { resolutions, getResolutions, addResolution, adding, loading } }>
      { children }
    </ResolutionContext.Provider>
  )
}
