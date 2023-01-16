import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ResolutionForm from '../components/ResolutionForm'
import { supabase } from '../supabase/client'
import { useResolution } from '../context/ResolutionContext'
import ResolutionList from '../components/ResolutionList'

export default function Home () {
  const obj = useResolution()
  console.log(obj)

  const navigate = useNavigate()

  useEffect(() => {
    getUser()
  }, [navigate])

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (!user) navigate('/login')
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => supabase.auth.signOut() }>Sign Out</button>
      <ResolutionForm />
      <ResolutionList />
    </div>
  )
}
