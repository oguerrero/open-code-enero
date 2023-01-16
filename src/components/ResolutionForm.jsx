import { useState } from 'react'
import { supabase } from '../supabase/client'

export default function ResolutionForm () {
  const [resolutionName, setResolutionName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data: { user } } = await supabase.auth.getUser()

    const { error } = await supabase
      .from('resolutions')
      .insert({ name: resolutionName, userId: user.id })

    console.log(error)
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type='text'
          name='resolutionName'
          placeholder='Escribe tu proposito'
          onChange={ (e) => setResolutionName(e.target.value) }
        />
        <button>Añadir</button>
      </form>
    </div>
  )
}
