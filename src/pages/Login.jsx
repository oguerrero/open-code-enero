import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'

export default function Login () {
  const navigate = useNavigate()

  useEffect(() => {
    getUser()
  }, [navigate])

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)
    if (user) navigate('/')
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
