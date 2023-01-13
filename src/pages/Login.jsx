import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'

export default function Login () {
  const navigate = useNavigate()

  useEffect(() => {
    const session = getSession()
    if (session) navigate('/')
    console.log(session)
  }, [navigate])

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    return data.session.access_token
  }

  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'http://localhost:5173/'
      }
    })
    console.log(data, error)
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type='email'
          name='email'
          placeholder='youremail@site.com'
          onChange={ (e) => setEmail(e.target.value) }
        />
        <button>Send</button>
      </form>
    </div>
  )
}
