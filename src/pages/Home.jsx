import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ResolutionForm from '../components/ResolutionForm'
import { supabase } from '../supabase/client'
import ResolutionList from '../components/ResolutionList'

export default function Home () {
  const [showDoneResolutions, setShowDoneResolutions] = useState(false)
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

      <header>
        <span>
          { showDoneResolutions
            ? 'Propositos Completados'
            : 'Propositos pendientes' }
        </span>
        <button onClick={ () => setShowDoneResolutions(!showDoneResolutions) }>
          { showDoneResolutions
            ? 'Mostrar Propositos Pendientes'
            : 'Mostrar Propositos Completados' }
        </button>
      </header>

      <ResolutionList doneRender={ showDoneResolutions } />
    </div>
  )
}
