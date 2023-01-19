import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'
import ResolutionList from '../components/ResolutionList'
import MobileNavComponent from '../components/MobileNavComponent'
import NavComponent from '../components/NavComponent'
import { useMode } from '../context/ModeContext'

export default function Home() {
  const { darkMode, getMode } = useMode()
  const navigate = useNavigate()

  useEffect(() => {
    getUser()
    getMode()
  }, [navigate])

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (!user) navigate('/login')
  }

  return (
    <div
      className={`flex flex-col min-h-screen gap-4 py-4 overflow-hidden  ${
        darkMode ? 'dark bg-zinc-800 text-white' : ''
      }`}>
      <NavComponent />
      <h1 className='text-center text-2xl font-semibold'>
        Lista de Propositos
      </h1>
      <ResolutionList />
      <MobileNavComponent location='home' />
    </div>
  )
}
