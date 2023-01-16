import { useState } from 'react'
import { useResolution } from '../context/ResolutionContext'

export default function ResolutionForm() {
  const [resolutionName, setResolutionName] = useState('')
  const { addResolution, adding } = useResolution()

  const handleSubmit = async (e) => {
    e.preventDefault()

    addResolution(resolutionName)
    setResolutionName('')
  }

  return (
    <div>
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
        />
        <button
          disabled={adding}
          className='px-4 py-2 font-bold text-white bg-red-600 sm:absolute sm:right-8'>
          {adding ? 'Añadiendo...' : 'Añadir'}
        </button>
      </form>
    </div>
  )
}
