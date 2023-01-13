import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../components/TaskForm'
import { supabase } from '../supabase/client'

export default function Home () {
  const navigate = useNavigate()

  useEffect(() => {
    const session = getSession()
    if (!session) navigate('/login')
    console.log(session)
  }, [navigate])

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    return data.session.access_token
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => supabase.auth.signOut() }>Sign Out</button>

      <TaskForm />
    </div>
  )
}
