import { useState } from 'react'
import { useResolution } from '../context/ResolutionContext'

export default function ResolutionForm () {
  const [resolutionName, setResolutionName] = useState('')
  const { addResolution, adding } = useResolution()

  const handleSubmit = async (e) => {
    e.preventDefault()

    addResolution(resolutionName)
    setResolutionName('')
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type='text'
          name='resolutionName'
          placeholder='Escribe tu proposito'
          onChange={ (e) => setResolutionName(e.target.value) }
          value={ resolutionName }
        />
        <button disabled={ adding }>{ adding ? 'Añadiendo...' : 'Añadir' }</button>
      </form>
    </div>
  )
}
