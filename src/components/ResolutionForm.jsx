import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useResolution } from '../context/ResolutionContext'
import { supabase } from '../supabase/client'

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
    <div className='w-full sm:max-w-xl transition-all duration-500 ease-in-out px-4 sm:px-0 pb-2'>
      <div className='flex flex-row justify-between'>
        <div className='flex items-center w-full'>
          <input
            type='text'
            name='resolutionName'
            placeholder='Escribe tu proposito'
            className='px-4 py-2 bg-zinc-200 w-11/12 dark:text-black rounded placeholder:italic '
            onChange={(e) => setResolutionName(e.target.value)}
            value={resolutionName}
            required
            maxLength='25'
          />
        </div>
        <div className='flex justify-center items-center my-2'>
          <button
            disabled={adding}
            onClick={(e) => handleSubmit(e)}
            className='px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-indigo-700 rounded text-lg hover:shadow-purple-600 hover:shadow-lg hover:bg-purple-500'>
            {adding ? 'Añadiendo...' : 'Añadir'}
          </button>
        </div>
      </div>
    </div>
  )
}
