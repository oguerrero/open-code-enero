import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useResolution } from '../context/ResolutionContext'
import { supabase } from '../supabase/client'
import NavComponent from './NavComponent'

export default function ResolutionForm() {
  const navigate = useNavigate()
  const [resolutionName, setResolutionName] = useState('')
  const { addResolution, adding } = useResolution()

  useEffect(() => {
    getUser()
  }, [navigate])

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (!user) navigate('/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (resolutionName) addResolution(resolutionName)
    setResolutionName('')
    navigate('/')
  }

  return (
    <div className='px-8 py-8'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 sm:flex-row'>
        <input
          type='text'
          name='resolutionName'
          placeholder='Escribe tu proposito'
          className='px-4 py-2 bg-zinc-200'
          onChange={(e) => setResolutionName(e.target.value)}
          value={resolutionName}
          required
          maxLength='50'
        />
        <button
          disabled={adding}
          className='px-4 py-2 font-bold text-white bg-red-600 sm:absolute sm:right-8'>
          {adding ? 'Añadiendo...' : 'Añadir'}
        </button>
      </form>
      <NavComponent />

    </div>
  )
}
