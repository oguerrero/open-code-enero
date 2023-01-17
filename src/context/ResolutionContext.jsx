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

  const getResolutions = async () => {
    setLoading(true)
    const {
      data: { user }
    } = await supabase.auth.getUser()

    const { data, error } = await supabase
      .from('resolutions')
      .select()
      .eq('user_id', user.id)
      .order('id', { ascending: false })

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
      .insert({ name: resolutionName, user_id: user.id })

    if (error) throw error

    getResolutions()
    setAdding(false)
  }

  const deleteResolution = async (id) => {
    setLoading(true)
    const {
      data: { user }
    } = await supabase.auth.getUser()

    const { error } = await supabase
      .from('resolutions')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id)

    if (error) throw error

    getResolutions()
  }

  const updateResolution = async (id, done) => {
    const { error } = await supabase
      .from('resolutions')
      .update({ done: done })
      .eq('id', id)

    if (error) throw error

    getResolutions()
  }

  return (
    <ResolutionContext.Provider
      value={ {
        resolutions,
        getResolutions,
        addResolution,
        deleteResolution,
        updateResolution,
        adding,
        loading
      } }>
      { children }
    </ResolutionContext.Provider>
  )
}
