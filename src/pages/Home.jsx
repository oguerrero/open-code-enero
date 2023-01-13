import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../components/TaskForm'
import { supabase } from '../supabase/client'

export default function Home () {
  const navigate = useNavigate()

  useEffect(() => {
    getUser()
  }, [navigate])

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) navigate('/login')
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => supabase.auth.signOut() }>Sign Out</button>

      <TaskForm />
    </div>
  )
}
