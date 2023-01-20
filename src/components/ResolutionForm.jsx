import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
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
    toast.success('Proposito Agregado 🥳')
  }

  return (
    <div className='w-full px-4 pb-2 transition-all duration-500 ease-in-out sm:max-w-xl sm:px-0'>
      <div className='flex flex-row justify-between'>
        <div className='flex items-center w-full'>
          <input
            type='text'
            name='resolutionName'
            placeholder='Escribe tu proposito'
            className='w-11/12 px-4 py-2 rounded bg-zinc-200 dark:text-black placeholder:italic '
            onChange={(e) => setResolutionName(e.target.value)}
            value={resolutionName}
            required
            maxLength='25'
          />
        </div>
        <div className='flex items-center justify-center my-2'>
          <button
            disabled={adding}
            onClick={(e) => handleSubmit(e)}
            className='px-4 py-2 text-lg font-bold text-white transition-all duration-500 ease-in-out bg-indigo-700 rounded shadow-lg hover:shadow-purple-600 hover:shadow-lg hover:bg-purple-500 shadow-purple-500/50'>
            {adding ? 'Añadiendo...' : 'Añadir'}
          </button>
        </div>
      </div>
    </div>
  )
}
